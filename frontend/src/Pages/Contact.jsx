import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // open default email app with prefilled email + message
    window.location.href = `mailto:bellohabeebullah838@gmail.com?subject=Message from Hamatech User&body=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center p-10">
      <div className="w-full max-w-lg bg-gray-100 p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>

        <textarea
          placeholder="Write your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg"
          rows="5"
        ></textarea>

        <button
          onClick={handleSend}
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
