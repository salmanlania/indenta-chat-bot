const loginPage = ()=>{
    Swal.fire({
        title: 'Logout Successful!',
        text: 'You have been successfully logged out.',
        icon: 'success',
        confirmButtonText: 'OK'
    }).then(()=>{

        window.location.href = './login/login.html';
    })
}

let sectionPage = document.getElementById('sectionPage');
let indexPage = document.getElementById('indexPage');


sectionPage.innerHTML = '';

const generateEntries = (numberOfEntries) => {
    let entriesHTML = `
    <div class="container max-w-screen-md mx-auto grid gap-3"
    style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); background-color: #f9fafb; border-radius: 10px; overflow: hidden; position: relative; ">

   <div class="entry rounded-lg grid grid-cols-3 p-4 text-center"
        style="width: 18em; border-bottom: 2px solid #4a5568; background: linear-gradient(to right, #2a4365, #4a5568); color: #ffffff;    border-radius: 10px 10px 0 0;">
       <div style="font-size: 18px; border-right: 1px solid #4a5568;">S.N.O</div>
       <div style="font-size: 18px; border-right: 1px solid #4a5568;">Title</div>
       <div style="font-size: 18px;">Page #</div>
   </div>

    `;

    for (let i = 1; i <= numberOfEntries; i++) {
        entriesHTML += `
        <div class="entry  rounded-lg grid grid-cols-3 p-4 text-center"
        style="width: 18em; border-bottom: 2px solid #4a5568; border-radius: 0 0 10px 10px;">
       <div style="font-size: 17px; border-right: 1px solid #4a5568;">${i}</div>
       <div style="font-size: 17px; border-right: 1px solid #4a5568;">Chapter ${i}</div>
       <div style="font-size: 17px;">${i * 10}</div>
   </div>
        `;
    }

    entriesHTML += `</div>`;
    return entriesHTML;
};

const index = (numberOfEntries) => {
    console.log('numberOfEntries -->', numberOfEntries);
    sectionPage.innerHTML = '';
    indexPage.innerHTML = generateEntries(numberOfEntries);
};
index(20);

const secEntries = (numberOfEntries) => {
    let entriesHTML = `
    <div class="container max-w-screen-md mx-auto grid gap-3"
    style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); background-color: #f9fafb; border-radius: 10px; overflow: hidden; position: relative; ">

   <div class="entry rounded-lg grid grid-cols-3 p-4 text-center"
        style="width: 18em; border-bottom: 2px solid #4a5568; background: linear-gradient(to right, #2a4365, #4a5568); color: #ffffff;  border-radius: 10px 10px 0 0;">
       <div style="font-size: 18px; border-right: 1px solid #4a5568;">Section</div>
       <div style="font-size: 18px; border-right: 1px solid #4a5568;">Title</div>
       <div style="font-size: 18px;">Page #</div>
   </div>
    `;

    for (let i = 1; i <= numberOfEntries; i++) {
        entriesHTML += `
        <div class="entry  rounded-lg grid grid-cols-3 p-4 text-center"
        style="width: 18em; border-bottom: 2px solid #4a5568; border-radius: 0 0 10px 10px;">
       <div style="font-size: 17px; border-right: 1px solid #4a5568;">${i}.1.1</div>
       <div style="font-size: 17px; border-right: 1px solid #4a5568;">Chapter ${i}</div>
       <div style="font-size: 17px;">${i * 10}</div>
   </div>
        `;
    }

    entriesHTML += `</div>`;
    return entriesHTML;
};

const section = (numberOfEntries) => {
    console.log('numberOfEntries -->', numberOfEntries);
    // alert('sucess')
    indexPage.innerHTML = '';
    sectionPage.innerHTML = secEntries(numberOfEntries);
};




const chatContainer = document.getElementById('chatContainer');
const userInput = document.getElementById('userInput');

function openChat() {
    // Open the off-canvas chat by translating it into view
    chatContainer.style.transform = 'translateX(0)';
}

function closeChat() {
    // Close the off-canvas chat by translating it out of view
    chatContainer.style.transform = 'translateX(100%)';
}

function sendMessage() {
    const userMessage = userInput.value.trim();

    if (userMessage !== '') {
        // Display user message
        appendMessage('You', userMessage);

        // Generate a random response (you can replace this with your own logic)
        const botResponse = generateRandomResponse();

        // Display bot response after a short delay
        setTimeout(() => {
            appendMessage('ChatBot', botResponse);
        }, 500);

        // Clear user input
        userInput.value = '';
    }
}

// function appendMessage(sender, message) {
//     const messageElement = document.createElement('div');
//     messageElement.classList.add('mb-2');

//     const senderElement = document.createElement('strong');
//     senderElement.textContent = `${sender}: `;

//     const textElement = document.createElement('span');
//     textElement.textContent = message;

//     messageElement.appendChild(senderElement);
//     messageElement.appendChild(textElement);

//     document.getElementById('chatMessages').appendChild(messageElement);

//     // Scroll to the bottom of the chat container
//     chatContainer.scrollTop = chatContainer.scrollHeight;
// }
function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('mb-2');

    const textElement = document.createElement('span');
    textElement.textContent = message;

    // Apply max-width style
    textElement.style.maxWidth = '100px';

    messageElement.appendChild(textElement);

    // Apply different styles for chatbot and user messages
    if (sender === 'ChatBot') {
        messageElement.classList.add('chatbot-message');
    } else if (sender === 'You') {
        messageElement.classList.add('user-message');
    }

    document.getElementById('chatMessages').appendChild(messageElement);

    // Scroll to the bottom of the chat container
    chatContainer.scrollTop = chatContainer.scrollHeight;
}


function generateRandomResponse() {
    const responses = [
        'Interesting!',
        'Tell me more.',
        'I see.',
        'That\'s cool!',
        'What do you think about that?',
        'I am not sure. What are your thoughts?',
        'Fascinating!',
        'Please elaborate.',
    ];

    // Choose a random response from the array
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}




