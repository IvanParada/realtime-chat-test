import { useEffect } from "react";
import { useChatStore } from "./store/chatStore";
import ChatWindow from "./components/ChatWindow";

function App() {

  const initSocket = useChatStore((state) => state.initSocket);
  const cleanupSocket = useChatStore((state) => state.cleanupSocket);

  useEffect(() => {
    initSocket();
    return () => cleanupSocket();
  }, []);

  return (
    <div className="max-w-xl mx-auto p-6 text-base-content">
      <ChatWindow />
    </div>
  )
}

export default App
