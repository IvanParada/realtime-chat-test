import { useState } from "react";
import { useChatStore } from "../store/chatStore";

function MessageInput() {
    const [message, setMessage] = useState("");
    const sendMessage = useChatStore((state) => state.sendMessage);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            sendMessage(message);
            setMessage("");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                placeholder="Escribe algo..."
                className="input w-full"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button
                type="submit"
                className="btn btn-primary"
                disabled={!message.trim()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none"><path fill="#ffecfd" d="m7.24 4.535l11.944 5.658c1.525.722 1.525 2.892 0 3.614L7.24 19.466c-1.415.67-3.017-.472-2.844-2.028l.58-5.216a2 2 0 0 0 0-.442l-.58-5.216c-.173-1.557 1.429-2.7 2.844-2.029" opacity={0.16}></path><path stroke="#ffecfd" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 12l-.604-5.437C4.223 5.007 5.825 3.864 7.24 4.535l11.944 5.658c1.525.722 1.525 2.892 0 3.614L7.24 19.466c-1.415.67-3.017-.472-2.844-2.028zm0 0h7"></path></g></svg>
            </button>
        </form>
    )
}

export default MessageInput;