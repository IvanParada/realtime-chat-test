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
                    <h1 className="text-xl font-bold">React Chat</h1>
                    <input 
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="bg-gray-700 border-none rounded px-2 py-0.5 text-xs focus:ring-1 focus:ring-indigo-400 w-24"
                        placeholder="Tu nombre..."
                    />
                </div>
                <StatusIndicator />
            </div>
            <MessageList />
            <MessageInput />
        </div>
    )
}

export default ChatWindow;