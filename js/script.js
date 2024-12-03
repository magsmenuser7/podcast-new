$(function () {
    $('.nav-btn').on('click', function () {
        $(this).toggleClass('open');
    });
});





document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('intalks-form').addEventListener('submit', async function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const contact = document.getElementById('contact').value;
        const city = document.getElementById('city').value;
        const connect = document.getElementById('connect').value;

        try {
            const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.magsmen.in/api/contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, contact, city, connect }),
            });

            const result = await response.json();
            if (response.ok) {
                alert('Form submitted successfully!');
            } else {
                alert('Error: ' + JSON.stringify(result));
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    });
});

// function submitbtn() {
//     let name = document.getElementById('name').value.trim();
//     let email = document.getElementById('email').value.trim();
//     let phone = document.getElementById('contact').value.trim();
//     let city = document.getElementById('city').value.trim();
//     let connectreason = document.getElementById('connect').value.trim();

//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const phoneRegex = /^[0-9]{10}$/; 

//     if (name === "") {
//         alert("Name field is required.");
//         return;
//     }
//     if (email === "") {
//         alert("Email field is required.");
//         return;
//     }
//     if (!emailRegex.test(email)) {
//         alert("Please enter a valid email address.");
//         return;
//     }
//     if (phone === "") {
//         alert("Contact field is required.");
//         return;
//     }
//     if (!phoneRegex.test(phone)) {
//         alert("Please enter a valid 10-digit phone number.");
//         return;
//     }
//     if (city === "") {
//         alert("City field is required.");
//         return;
//     }
//     if (connectreason === "") {
//         alert("Please select a valid reason to connect.");
//         return;
//     }


//     let formdata = {
//         name: name,
//         email: email,
//         phone: phone,
//         city: city,
//         connectreason: connectreason,
//     };
//     console.log(formdata);
//     alert("Form submission successful!");

//     document.getElementById('contact-form').reset();
// }
