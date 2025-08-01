import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { SendHorizonal, XCircle, Loader2 } from "lucide-react";

const MessageForm = () => {
  const [message, setMessage] = useState<string>("");
  const [delay, setDelay] = useState<number>(10);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [timeId, setTimeId] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [sentMessage, setSentMessage] = useState<string>("");

  const handleSend = () => {
    if (!message.trim()) return;

    setIsSending(true);
    const id = setTimeout(() => {
      setSentMessage(message);
      setMessage("");
      setIsSending(false);
    }, delay * 1000);
    setTimeId(id);
  };

  const handleCancel = () => {
    if (timeId) {
      clearTimeout(timeId);
      setTimeId(null);
    }
    setIsSending(false);
  };

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 md:px-8 py-10 mt-10 sm:mt-20 rounded-2xl shadow-xl border border-gray-200 bg-gradient-to-tr from-white via-slate-50 to-slate-100 space-y-6 transition-all duration-300">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 text-center">📨 Delayed Message Sender</h2>
      <p className="text-center text-sm sm:text-base text-gray-600">
        Compose a message and send it with a delay. Cancel if needed before time runs out.
      </p>

      <Textarea
        placeholder="✍️ Type your message..."
        value={message}
        disabled={isSending}
        className="w-full min-h-[120px] rounded-xl border-2 border-gray-300 p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
        onChange={(e) => setMessage(e.target.value)}
      />

      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
        <Input
          type="number"
          min={1}
          placeholder="Delay in seconds"
          value={delay}
          onChange={(e) => setDelay(Number(e.target.value))}
          disabled={isSending}
          className="w-full sm:w-1/3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
        />

        {!isSending ? (
          <Button
            onClick={handleSend}
            disabled={!message.trim()}
            className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md text-base"
          >
            <SendHorizonal className="w-5 h-5 mr-2" />
            Send with Delay
          </Button>
        ) : (
          <Button
            variant="destructive"
            onClick={handleCancel}
            className="w-full sm:flex-1 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-md text-base"
          >
            <XCircle className="w-5 h-5 mr-2" />
            Cancel Sending
          </Button>
        )}
      </div>

      {isSending && (
        <div className="flex items-center gap-2 text-blue-600 animate-pulse justify-center">
          <Loader2 className="animate-spin h-5 w-5" />
          Sending message in {delay} seconds...
        </div>
      )}

      {sentMessage && (
        <div className="bg-green-100 border border-green-300 rounded-xl p-4 mt-4 text-green-800 shadow-md text-sm sm:text-base">
          <p className="font-semibold mb-1">✅ Message Sent:</p>
          <p className="italic">{sentMessage}</p>
        </div>
      )}
    </div>
  );
};

export default MessageForm;
