import { useChatStore } from "../store/chatStore";

function StatusIndicator() {
    const connected = useChatStore((state) => state.connected);
    return (
        <div className="flex items-center gap-2">
            <span className={`badge ${connected ? 'badge-success' : 'badge-error'} badge-sm`}></span>
            <span className="text-xs font-medium uppercase tracking-wider opacity-70">
                {connected ? 'En línea' : 'Desconectado'}
            </span>
        </div>
    )
}

export default StatusIndicator;
