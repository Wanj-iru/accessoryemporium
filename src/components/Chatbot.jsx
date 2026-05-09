// import React, { useState, useEffect, useRef } from 'react';
// import { MessageCircle, Send, X, Minus } from 'lucide-react';

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([
//     { text: "Hi! I'm your AI assistant. How can I help you today?", sender: "bot" }
//   ]);
  
//   const scrollRef = useRef(null);

//   // Auto-scroll to bottom when messages update
//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
//     }
//   }, [messages]);

//   const handleSend = () => {
//     if (!input.trim()) return;

//     // Add user message
//     const newMessages = [...messages, { text: input, sender: "user" }];
//     setMessages(newMessages);
//     setInput("");

//     // Simulate bot thinking
//     setTimeout(() => {
//       generateResponse(input);
//     }, 800);
//   };

//   const generateResponse = (userInput) => {
//     const msg = userInput.toLowerCase();
//     let botReply = "I'm not sure I understand. Could you try asking about 'custom pieces', 'delivery', or 'prices'?";

//     if (msg.includes("custom") || msg.includes("engrave")) {
//       botReply = "You can customize any metallic piece! Just click 'Find out More' in the 'What's New' section to upload your photo.";
//     } else if (msg.includes("price") || msg.includes("cost") || msg.includes("how much")) {
//       botReply = "Our pieces range from Ksh 500 to Ksh 2500 depending on the material and design.";
//     } else if (msg.includes("delivery") || msg.includes("shipping") || msg.includes("location")) {
//       botReply = "We deliver across the country! Delivery usually takes 24-48 hours once your order is confirmed.";
//     } else if (msg.includes("hello") || msg.includes("hi")) {
//       botReply = "Hello there! Looking for some beautiful jewelry today?";
//     }

//     setMessages(prev => [...prev, { text: botReply, sender: "bot" }]);
//   };

//   return (
//     <div className="fixed-bottom p-4 d-flex flex-column align-items-end" style={{ zIndex: 1050 }}>
//       {/* Chat Window */}
//       {isOpen && (
//         <div className="card shadow-lg border-0 mb-3" style={{ width: "320px", height: "400px", borderRadius: "15px", overflow: "hidden" }}>
//           <div className="card-header bg-teal text-white d-flex justify-content-between align-items-center" style={{backgroundColor: "teal"}}>
//             <span className="fw-bold">Jewelry Assistant</span>
//             <X size={20} style={{ cursor: "pointer" }} onClick={() => setIsOpen(false)} />
//           </div>
          
//           <div className="card-body overflow-auto bg-light" ref={scrollRef} style={{ height: "300px" }}>
//             {messages.map((m, i) => (
//               <div key={i} className={`d-flex mb-3 ${m.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
//                 <div className={`p-2 rounded shadow-sm small ${m.sender === 'user' ? 'bg-info text-white' : 'bg-white text-dark'}`} 
//                      style={{ maxWidth: "80%", borderRadius: m.sender === 'user' ? "15px 15px 0 15px" : "15px 15px 15px 0" }}>
//                   {m.text}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="card-footer bg-white border-0">
//             <div className="input-group">
//               <input 
//                 type="text" 
//                 className="form-control form-control-sm border-0 bg-light" 
//                 placeholder="Type a message..." 
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//               />
//               <button className="btn btn-link text-teal" onClick={handleSend} style={{color: "teal"}}>
//                 <Send size={18} />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Floating Button */}
//       <button 
//         className="btn btn-info shadow-lg rounded-circle d-flex align-items-center justify-content-center" 
//         style={{ width: "60px", height: "60px", backgroundColor: "teal", borderColor: "teal" }}
//         // onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <Minus size={28} color="white" /> : <MessageCircle size={28} color="white" />}
//       </button>
//     </div>
//   );
// };

// export default Chatbot;
import React, { useState } from 'react';
import { MessageCircle, Send, X, Minus } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you with your jewelry search today?", sender: "bot" }
  ]);

  const toggleChat = () => {
    console.log("Chat toggle clicked! Current state:", !isOpen);
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    // Simple bot reply logic
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Thanks for reaching out! A member of the Jour team will get back to you shortly regarding your request.", sender: "bot" }]);
    }, 1000);
  };

  return (
    /* Main wrapper - forced to bottom right with high z-index */
    <div className="fixed-bottom p-4 d-flex flex-column align-items-end" style={{ zIndex: 9999, pointerEvents: 'none' }}>
      
      {/* 1. CHAT WINDOW (Only visible when isOpen is true) */}
      {isOpen && (
        <div 
          className="card shadow-lg border-0 mb-3" 
          style={{ 
            width: "320px", 
            height: "400px", 
            borderRadius: "15px", 
            overflow: "hidden",
            pointerEvents: 'auto' // Re-enable clicks for the window
          }}
        >
          <div className="card-header d-flex justify-content-between align-items-center text-white" style={{ backgroundColor: "teal" }}>
            <span className="fw-bold">AI Assistant</span>
            <X size={20} style={{ cursor: "pointer" }} onClick={() => setIsOpen(false)} />
          </div>
          
          <div className="card-body overflow-auto bg-light" style={{ height: "300px" }}>
            {messages.map((m, i) => (
              <div key={i} className={`d-flex mb-3 ${m.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                <div className={`p-2 rounded small ${m.sender === 'user' ? 'bg-info text-white' : 'bg-white text-dark shadow-sm'}`} 
                     style={{ maxWidth: "85%", borderRadius: "10px" }}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="card-footer bg-white border-0">
            <div className="input-group">
              <input 
                type="text" 
                className="form-control form-control-sm border-0 bg-light" 
                placeholder="Ask something..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button className="btn btn-link text-teal" onClick={handleSend} style={{ color: "teal" }}>
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. FLOATING BUTTON */}
      <button 
        className="btn shadow-lg rounded-circle d-flex align-items-center justify-content-center" 
        style={{ 
          width: "60px", 
          height: "60px", 
          backgroundColor: "teal", 
          color: "white",
          pointerEvents: 'auto', // Ensure button is clickable
          border: "none"
        }}
        onClick={toggleChat}
      >
        {isOpen ? <Minus size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default Chatbot;