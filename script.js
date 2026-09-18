document.getElementById("feedbackForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let feedback = {
        name: document.getElementById("name").value,
        course: document.getElementById("course").value,
        rating: document.getElementById("rating").value,
        feedback: document.getElementById("feedback").value
    };

    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

    feedbacks.push(feedback);

    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

    document.getElementById("message").innerText =
        "Feedback submitted successfully!";

    document.getElementById("feedbackForm").reset();
});
