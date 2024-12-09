$(function () {
    $('.nav-btn').on('click', function () {
        $(this).toggleClass('open');
    });
});




async function submitbtn() {
    // Get form input values and trim them
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('contact').value.trim();
    let city = document.getElementById('city').value.trim();
    let connectreason = document.getElementById('connect').value.trim();

    // Validation patterns
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;

    // Validate inputs with user-friendly alerts
    if (!name) return alert("Name field is required.");
    if (!email) return alert("Email field is required.");
    if (!emailRegex.test(email)) return alert("Please enter a valid email address.");
    if (!phone) return alert("Contact field is required.");
    if (!phoneRegex.test(phone)) return alert("Please enter a valid 10-digit phone number.");
    if (!city) return alert("City field is required.");
    if (!connectreason) return alert("Please select a valid reason to connect.");

    // Prepare form data
    let formdata = {
        Name: name,
        Email: email,
        Contact: phone,
        City: city,
        Reason_to_connect: connectreason,
    };

    try {
        // Make the POST request
        const response = await fetch('https://www.magsmen.in/api/contact/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdata),
        });

        // Parse the response
        const data = await response.json();

        // Check response and alert user
        if (response.ok) {
            alert(data.message || "Form submitted successfully!");
            document.getElementById('contactForm').reset(); // Reset the form
        } else {
            alert("Error: " + (data.message || "Something went wrong. Please try again later."));
        }
    } catch (error) {
        // Handle network or other errors
        alert("An error occurred: " + error.message);
    }
}



document.addEventListener('DOMContentLoaded', function () {
    // const apiUrl = 'http://127.0.0.1:8000/api/getcontact'; 

    // Reference the table body
    const tableBody = document.querySelector('table tbody');

    // Fetch data from the API
    // fetch(apiUrl, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // })
    const response = fetch('https://www.magsmen.in/api/getcontact/', {
            
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Clear the table
            tableBody.innerHTML = '';

            // Check if data is available
            if (Array.isArray(data) && data.length > 0) {
                data.forEach((item, index) => {
                    const row = `
                        <tr>
                            <th scope="row">${index + 1}</th>
                            <td>${item.Name || 'N/A'}</td>
                            <td>${item.Email || 'N/A'}</td>
                            <td>${item.Contact || 'N/A'}</td>
                            <td>${item.City || 'N/A'}</td>
                            <td>${item.Reason_to_connect || 'N/A'}</td>
                        </tr>
                    `;
                    tableBody.innerHTML += row;
                });
            } else {
                // No data fallback
                tableBody.innerHTML = `<tr><td colspan="6" class="text-center text-white">No contacts available.</td></tr>`;
            }
        })
        .catch(error => {
            // Handle errors
            console.error('Fetch error:', error);
            tableBody.innerHTML = `<tr><td colspan="6" class="text-center text-danger">Error fetching data: ${error.message}</td></tr>`;
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
//         Name: name,
//         Email: email,
//         Contact: phone,
//         City: city,
//         Reason_to_connect: connectreason,
//     };

//     fetch('https://www.magsmen.in/api/contact/', {
//         method: 'POST',
//         headers: {
//                 'Content-Type': 'application/json',
//             },
//         body: JSON.stringify(formdata)
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.message) {
//             alert(data.message);
//             document.getElementById('contactForm').reset();
//         } else {
//             alert("Error: " + JSON.stringify(data));
//         }
//     })
//     .catch(error => {
//         alert("An error occurred: " + error.message);
        
//     });
// }




// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('contactForm').addEventListener('submit', async (event) => {
//         event.preventDefault();
    
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const contact = document.getElementById('contact').value;
//         const city = document.getElementById('city').value;
//         const connect = document.getElementById('connect').value; // Adjust the field names as needed
    
//         const responseMessage = document.getElementById('responseMessage');
    
//         try {
//             const response = await fetch('https://www.magsmen.in/api/contact/', {  // Use relative URL if running locally
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ 
//                     Name: name, 
//                     Email: email, 
//                     Contact: contact, 
//                     City: city, 
//                     Reason_to_connect: connect 
//                 }),
//             });
    
//             if (response.ok) {
//                 const data = await response.json();
//                 responseMessage.textContent = data.success;
//                 responseMessage.style.color = 'green';
//             } else {
//                 const errorData = await response.json();
//                 responseMessage.textContent = JSON.stringify(errorData);
//                 responseMessage.style.color = 'red';
//             }
//         } catch (error) {
//             responseMessage.textContent = 'An error occurred. Please try again.';
//             responseMessage.style.color = 'red';
//         }
//     });
// });











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
