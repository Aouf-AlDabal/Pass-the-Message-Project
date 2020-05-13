
const form = document.querySelector('#message-form');


form.addEventListener('submit', e  => {


    // Get user in put 
        e.preventDefault()
    const message = document.querySelector('#message');
    const feedback = document.querySelector('.feedback');
    const messageContent = document.querySelector('.message-content');

    if (message.value === '') {
        
        feedback.classList.add('show')
        setInterval(() => {
        feedback.classList.remove('show');
        }, 2000)
    } else {
        messageContent.textContent = message.value
        message.value = ''
        
    }


});