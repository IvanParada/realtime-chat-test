import { useChatStore } from "../store/chatStore";
import { useRef, useEffect } from "react";

function MessageList() {
  const messages = useChatStore((state) => state.messages);
  const username = useChatStore((state) => state.username);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="h-[70vh] rounded-lg p-4 overflow-y-auto bg-gray-200">
      {messages.length === 0 ? (
        <p className="text-gray-400 text-center mt-10">No hay mensajes</p>
      ) : (
        <div className="space-y-2">
          {messages.map((data, i) => (
            <div
              key={i}
              className={`chat w-full ${
                data.user === username ? "chat-end" : "chat-start"
              }`}
            >
              {data.user !== username && (
                <div className="chat-image avatar avatar-placeholder">
                  <div className="bg-neutral text-neutral-content w-8 rounded-full">
                    <span className="text-xs">
                      {data.user.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                </div>
              )}

              <div
                className={`chat-bubble text-gray-900 shadow flex flex-col  ${
                  data.user === username
                    ? "bg-blue-200 text-gray-900"
                    : "bg-white text-gray-900"
                }`}
              >
                <span className="text-xs font-semibold text-indigo-600 mb-1">
                  {data.user}
                </span>

                <span className="text-sm">{data.msg}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}

export default MessageList;
