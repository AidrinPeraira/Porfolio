function validateForm() {
    
    const name = $("input[name='name']").val();
    const email = $("input[name='email']").val();
    const subject = $("input[name='subject']").val();
    const message = $("textarea[name='message']").val();

    // Validate the constants. If not null the check is done. return for each check one by one.
    if (!name) {
        alert("Name is required.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //this is a  regular expression
    // it is used to define the format of strings. Need to study!!

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
    e.preventDefault(); 

    
    if (validateForm()) {
        
        //using ajax code only if th e valiatiion is true for our conditions
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxSjZHJ3s0OwzfmFZODSScwQ1c1oV9BPoUP-vqJt868KFhc3ew9qyfHAkDtxZuXfS9dsw/exec",
            data: $("#submit-form").serialize(), 
            method: "POST", 
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