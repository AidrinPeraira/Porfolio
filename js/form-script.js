function validateForm() {
    
    const name = $("input[name='name']").val();
    const email = $("input[name='email']").val();
    const subject = $("input[name='subject']").val();
    const message = $("textarea[name='message']").val();

    // Validate the constants
    if (!name) {
        alert("Name is required.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!subject) {
        alert("Subject is required.");
        return false;
    }

    if (!message) {
        alert("Message is required.");
        return false;
    }
    
    return true;
}

$("#submit-form").submit((e) => {
    e.preventDefault(); // Prevent default form submission

    // Validate the form
    if (validateForm()) {
        // Proceed with the AJAX Code
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxSjZHJ3s0OwzfmFZODSScwQ1c1oV9BPoUP-vqJt868KFhc3ew9qyfHAkDtxZuXfS9dsw/exec",
            data: $("#submit-form").serialize(), // Serialize form data
            method: "POST", // Use POST method
            success: function (response) {
                alert("Form submitted successfully!");
                window.location.reload(); // reload the page on the same spot
            },
            error: function (err) {                
                alert("Try Again Later. Some Error Occurred. ");
            }
        });
    }
});