$(function () {
    $('.nav-btn').on('click', function () {
        $(this).toggleClass('open');
    });
});




function submitbtn() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('contact').value.trim();
    let city = document.getElementById('city').value.trim();
    let connectreason = document.getElementById('connect').value.trim();

    // Regular expressions for validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/; // 10-digit phone number

    // Field validations
    if (name === "") {
        alert("Name field is required.");
        return;
    }
    if (email === "") {
        alert("Email field is required.");
        return;
    }
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (phone === "") {
        alert("Contact field is required.");
        return;
    }
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }
    if (city === "") {
        alert("City field is required.");
        return;
    }
    if (connectreason === "") {
        alert("Please select a valid reason to connect.");
        return;
    }

    // Form data
    let formdata = {
        name: name,
        email: email,
        phone: phone,
        city: city,
        connectreason: connectreason,
    };
    console.log(formdata);
    alert("Form submission successful!");

    // Reset form
    document.getElementById('contact-form').reset();
}
