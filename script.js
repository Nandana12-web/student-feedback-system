document.getElementById("feedbackForm").addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("message").innerText =
        "Thank you! Your feedback has been submitted.";

    document.getElementById("feedbackForm").reset();
});
