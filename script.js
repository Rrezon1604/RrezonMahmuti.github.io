// ============================ togle icon navbar ==========================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// ============================ scroll section active link ==========================

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // ============================ sticky navbar ==========================
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // ============================ remove togle icon and navbar when click navbar link (scroll) ==========================
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// ============================ scroll reveal ==========================
ScrollReveal({ 
    // reset: true,
    disctance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',
{ origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content',{ origin: 'right' });

// ============================ typed js ==========================
const typed = new Typed('.multiple-text', {
    strings: ['Python Developer', 'Django Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// ============================ Error Text ==========================

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function clearForm() {
    fullName.value = "";
    email.value = "";
    phone.value = "";
    subject.value = "";
    mess.value = "";
}

function validateForm() {
    
    if (
        fullName.value.trim() === "" ||
        email.value.trim() === "" ||
        phone.value.trim() === "" ||
        subject.value.trim() === "" ||
        mess.value.trim() === ""
    ) {
        
        Swal.fire({
            title: "Error!",
            text: "Please fill out all fields.",
            icon: "error"
        });
        return false;
    }
    else {
       return true; 
    }
    
}


function sendEmail() {

    if (!validateForm()) {
        return;
    }

    const bodyMessage = `Full Name: ${fullName.value}<br>
    Email: ${email.value}<br>
    Phone Number: ${phone.value}<br>
    Message: ${mess.value}<br>`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rrezonnm@gmail.com",
        Password : "1455E871CA59AC540DAD75F61DFEA79A940C",
        To : 'rrezonnm@gmail.com',
        From : "rrezonnm@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
            clearForm();
        }
      }
    );
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});

