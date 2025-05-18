import { useState } from "react";

const faqs = {
  "How do I sell my license?": "You upload your license, and we evaluate and pay.",
  "What license types are supported?": "We support Microsoft, Adobe, Autodesk, and more.",
};

export default function ChatWidget() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  const send = () => {
    const response = faqs[msg] || "I'm not sure, but we'll get back to you!";
    setChat([...chat, { user: msg, bot: response }]);
    setMsg("");
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-700 border p-4 rounded-lg shadow-lg w-72">
      <h4 className="font-bold mb-2">Ask SoftBot 🤖</h4>
      <div className="max-h-40 overflow-y-auto mb-2 text-sm">
        {chat.map((c, i) => (
          <div key={i}>
            <p><strong>You:</strong> {c.user}</p>
            <p><strong>Bot:</strong> {c.bot}</p>
          </div>
        ))}
      </div>
      <input className="w-full p-1 border rounded text-sm" value={msg} onChange={e => setMsg(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Ask a question..." />
    </div>
  );
}
