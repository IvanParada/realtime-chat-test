import { useChatStore } from "../store/chatStore";
import { useRef, useEffect } from "react";

function MessageList() {

    const messages = useChatStore((state) => state.messages);
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="h-96 rounded-lg p-4 overflow-y-auto bg-gray-200">
            {messages.length === 0 ? (
                <p className="text-gray-400 text-center mt-10">No hay mensajes</p>
            ) : (
                <div className="space-y-2">
                    {messages.map((data, i) => (
                        <div key={i} className="bg-white p-2 rounded shadow-sm text-sm text-gray-900 font-medium">
                            <span className="font-bold text-indigo-600 mr-2">
                                {typeof data === 'object' ? data.user : 'Anon'}:
                            </span>
                            <span>
                                {typeof data === 'object' ? data.msg : data}
                            </span>
                        </div>
                    ))}
                </div>
            )}
            <div ref={bottomRef} />
        </div>
    )
}

export default MessageList;