const chatContainer = document.getElementById('chatContainer');
const openChatBtn = document.getElementById('openChatBtn');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const subscribeBtn = document.getElementById('subscribeBtn');

// Mostrar/ocultar chat
openChatBtn.addEventListener('click', () => {
  chatContainer.classList.toggle('show');
});

// Función para agregar mensajes
function addMessage(text, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('chat-message', sender);
  msgDiv.innerHTML = `<div class="msg">${text}</div>`;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Demo chat
sendBtn.addEventListener('click', () => {
  const text = chatInput.value.trim();
  if (!text) return;
  addMessage(text, 'user');
  chatInput.value = '';
  setTimeout(() => {
    addMessage('Esta es una respuesta de demo de HireLens AI.', 'bot');
  }, 800);
});

chatInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') sendBtn.click();
});

// Suscripción Stripe
subscribeBtn.addEventListener('click', async ()=>{
  const res = await fetch('https://TU_BACKEND.onrender.com/stripe/create-checkout-session', {
    method:'POST',
    headers:{'Content-Type':'application/json'}
  });
  const data = await res.json();
  window.location.href = data.url;
});
