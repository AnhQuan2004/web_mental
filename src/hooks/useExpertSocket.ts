import { useEffect, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";

interface SocketMessage {
  role: "user" | "expert";
  msg: string;
  timestamp?: Date;
  sessionId: string;
}

interface UseExpertSocketProps {
  onMessageReceived?: (message: SocketMessage) => void;
}

export const useExpertSocket = ({
  onMessageReceived,
}: UseExpertSocketProps) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);

  useEffect(() => {
    const role = localStorage.getItem("role") || "user";
    // Create socket connection
    const socketUrl =
      import.meta.env.VITE_SOCKET_URL || "http://localhost:5000";
    const newSocket = io(socketUrl, {
      query: { role },
      forceNew: true,
      reconnection: true,
      timeout: 5000,
      transports: ["websocket"],
    });

    // Connection event handlers
    newSocket.on("connect", () => {
      console.log(`✅ ${role} connected to server`);
      setIsConnected(true);
      setConnectionError(null);
    });

    newSocket.on("disconnect", () => {
      console.log(`❌ ${role} disconnected from server`);
      setIsConnected(false);
    });

    newSocket.on("connect_error", (error) => {
      console.error("Connection error:", error);
      setConnectionError(error.message);
      setIsConnected(false);
    });

    // Listen for chat messages
    newSocket.on("chat message", (data: SocketMessage) => {
      console.log("Received message:", data);
      const role = localStorage.getItem("role") || "user";
      if (role === "expert" && data.role === "expert") {
        return;
      }
      if (onMessageReceived) {
        onMessageReceived({
          ...data,
          timestamp: new Date(),
        });
      }
    });

    setSocket(newSocket);

    // Cleanup on unmount
    return () => {
      newSocket.close();
    };
  }, []);

  const sendMessage = useCallback(
    (message: string, sessionId?: string) => {
      if (socket && isConnected && message.trim()) {
        const role = localStorage.getItem("role") || "user";
        const messageData = {
          role,
          msg: message.trim(),
          sessionId: role === "user" ? socket.id : sessionId,
        };

        socket.emit("chat message", messageData);
        console.log("Sent message:", messageData);
        return true;
      }
      return false;
    },
    [socket, isConnected]
  );

  const disconnect = useCallback(() => {
    if (socket) {
      socket.disconnect();
    }
  }, [socket]);

  return {
    socket,
    isConnected,
    connectionError,
    sendMessage,
    disconnect,
  };
};
