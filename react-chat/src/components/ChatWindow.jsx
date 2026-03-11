import { useChatStore } from "../store/chatStore";
import StatusIndicator from "./StatusIndicator";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

function ChatWindow() {
  const { username, setUsername } = useChatStore();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center bg-gray-800 p-3 rounded-lg text-white">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">React Chat</h1>
            <div className="flex items-center gap-1">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="text-xs border-none bg-transparent focus:ring-0 p-0 text-indigo-400 font-bold w-20"
                placeholder="Nombre de Usuario"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fffdfd"
                  d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-1 2q-.425 0-.712-.288T3 20v-2.425q0-.4.15-.763t.425-.637L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.437.65T21 6.4q0 .4-.138.763t-.437.662l-12.6 12.6q-.275.275-.638.425t-.762.15z"
                />
              </svg>
            </div>
          </div>
        </div>
        <StatusIndicator />
      </div>
      <MessageList />
      <MessageInput />
    </div>
  );
}

export default ChatWindow;
