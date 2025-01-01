//code for mouse cursor effect--------------------------------------------------------------------------------------------------------------------------
const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    });
    document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 500);
    });
    const hoverTargets = document.querySelectorAll('.hover-target');
    hoverTargets.forEach((target) => {
    target.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
    });
    target.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
    });


//Code for AI chat bot--------------------------------------------------------------------------------------------------------------------------
const chatWindow = document.getElementById('chat-window');
        const userInput = document.getElementById('user-input');
        const sendBtn = document.getElementById('send-btn');        
        const appendMessage = (message, sender) => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('my-2', 'p-2', 'rounded-lg', 'max-w-xs', 'break-words');
            if (sender === 'user') {
                messageElement.classList.add('bg-blue-100', 'self-end');
                messageElement.classList.add('ml-auto');
            } else {
                messageElement.classList.add('bg-gray-200');
                messageElement.classList.add('mr-auto');
            }
            messageElement.textContent = message;
            chatWindow.appendChild(messageElement);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        };

        const getBotResponse = (userMessage) => {
            const responses = {
                'hello': 'Hi there! How can I assist you today?',
                'how are you': 'I am just a bot, but I am here to help you!',
                'what is your name': 'I am an AI chatbot created to assist you.',
                'bye': 'Goodbye! Have a great day!'
            };
            return responses[userMessage.toLowerCase()] || 'I am sorry, I do not understand that.';
        };
        sendBtn.addEventListener('click', () => {
            const userMessage = userInput.value.trim();
            if (userMessage) {
                appendMessage(userMessage, 'user');
                const botResponse = getBotResponse(userMessage);
                setTimeout(() => {
                    appendMessage(botResponse, 'bot');
                }, 500);
                userInput.value = '';
            }
        });
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendBtn.click();
            }
        });
        