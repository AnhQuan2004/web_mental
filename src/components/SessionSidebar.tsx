import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { MessageSquarePlus } from "lucide-react";

interface Session {
  id: string;
  title: string;
  lastMessage: string;
  updatedAt: Date;
}

interface SessionSidebarProps {
  sessions: Session[];
  currentSession: Session | null;
  onNewChat: () => void;
  onSelectSession: (sessionId: string) => void;
  onAcceptSession: (sessionId: string) => void;
  onRejectSession: (sessionId: string) => void;
}

const SessionSidebar: React.FC<SessionSidebarProps> = ({
  sessions,
  currentSession,
  onNewChat,
  onSelectSession,
  onAcceptSession,
  onRejectSession,
}) => {
  return (
    <div className="w-80 border-r border-gray-200 bg-gray-50 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <Button onClick={onNewChat} className="w-full">
          <MessageSquarePlus className="mr-2 h-4 w-4" />
          New Chat
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {sessions.map((session) => (
            <div
              key={session.id}
              onClick={() => onSelectSession(session.id)}
              className={`w-full text-left p-3 rounded-lg transition-colors cursor-pointer ${
                currentSession?.id === session.id
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-200"
              }`}
            >
              <div className="font-semibold truncate">{session.title}</div>
              <div className="text-sm text-gray-500 truncate">
                {session.lastMessage}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                {new Date(session.updatedAt).toLocaleString()}
              </div>
              <div className="flex justify-end space-x-2 mt-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    onAcceptSession(session.id);
                  }}
                  className="text-xs"
                >
                  Accept
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRejectSession(session.id);
                  }}
                  className="text-xs"
                >
                  Reject
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default SessionSidebar;
