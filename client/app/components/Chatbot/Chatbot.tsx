// components/Chatbot.tsx

import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "AY_oWrBya8CcQTXforfan",
        domain: "www.chatbase.co"
      }
    `;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://www.chatbase.co/embed.min.js";
    script2.setAttribute('chatbotId', 'AY_oWrBya8CcQTXforfan');
    script2.setAttribute('domain', 'www.chatbase.co');
    script2.defer = true;
    document.head.appendChild(script2);

    script2.onload = () => {
      const chatAreaContainer = document.getElementById('chatbase-bubble-window') as HTMLElement;
      if (chatAreaContainer) {
        chatAreaContainer.style.height = '500px'; // Adjust height as needed
        chatAreaContainer.style.width = '400px'; // Adjust width as needed
        // chatAreaContainer.style.borderRadius = '10px';
      }
    };

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return <></>;
};

export default Chatbot;
