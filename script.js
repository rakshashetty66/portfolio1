const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

// Handling resume list switching
resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active');
        resumeBoxs[idx].classList.add('active');
    });
});

// Handling general tabs
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to the clicked tab and target content
        tab.classList.add('active');
        document.querySelector(`.${tab.dataset.target}`).classList.add('active');
    });
});

// Initialize EmailJS with your Public Key
emailjs.init("jlvEzVNADOpknLS1D");

document.querySelector('.contact form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = {
        from_name: document.querySelector('input[name="name"]').value,
        from_email: document.querySelector('input[name="email"]').value,
        message: document.querySelector('textarea[name="message"]').value,
    };

    emailjs.send("service_7u4oo5r", "template_jowei18", formData)
        .then(function(response) {
            alert('Message sent successfully!');
            console.log('Success:', response.status, response.text);
        }, function(error) {
            alert('Message failed to send.');
            console.log('Error:', error);
        });
});

