import { useEffect, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";

interface SocketMessage {
  role: "user" | "expert";
  msg: string;
  timestamp?: Date;
}

interface UseExpertSocketProps {
  role: "user" | "expert";
  onMessageReceived?: (message: SocketMessage) => void;
}

export const useExpertSocket = ({
  role,
  onMessageReceived,
}: UseExpertSocketProps) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);

  useEffect(() => {
    // Create socket connection
    const socketUrl = import.meta.env.VITE_SOCKET_URL || "http://localhost:5000";
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
    (message: string) => {
      if (socket && isConnected && message.trim()) {
        const messageData = {
          role,
          msg: message.trim(),
        };

        socket.emit("chat message", messageData);
        console.log("Sent message:", messageData);
        return true;
      }
      return false;
    },
    [socket, isConnected, role]
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
