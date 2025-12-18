// Prevent the browser from restoring the previous scroll position
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

// Force the page to scroll to the top immediately
window.scrollTo(0, 0);
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // Select the form element
    const enquiryForm = document.getElementById('enquiryForm');

    // Add submit event listener
    enquiryForm.addEventListener('submit', function(event) {
        // Prevent the default form submission (page reload)
        event.preventDefault();

        // Grab the values from the inputs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        // Create an object to store the data (simulating data processing)
        const enquiryData = {
            fullName: name,
            emailAddress: email,
            phoneNumber: phone
        };

        // Log the grabbed data to the console (for developer verification)
        console.log("Enquiry Received:", enquiryData);

        // Alert the user (Interaction feedback)
        alert(`Thank you, ${name}! We have received your enquiry for Madam Ziem's Travel and Tours.\nWe will contact you at ${email} shortly.`);

        // Clear the form
        enquiryForm.reset();
    });
});