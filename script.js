// Submit Feedback
let feedbackForm = document.getElementById("feedbackForm");

if (feedbackForm) {

    feedbackForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let course = document.getElementById("course").value;
        let rating = document.getElementById("rating").value;
        let comments = document.getElementById("comments").value;

        let feedback = {
            name: name,
            course: course,
            rating: rating,
            comments: comments
        };

        let feedbackList = JSON.parse(localStorage.getItem("feedbackList")) || [];

        feedbackList.push(feedback);

        localStorage.setItem("feedbackList", JSON.stringify(feedbackList));

        alert("Feedback submitted successfully!");

        feedbackForm.reset();

    });

}


// Display Feedback
let feedbackContainer = document.getElementById("feedbackList");

if (feedbackContainer) {

    let feedbackList = JSON.parse(localStorage.getItem("feedbackList")) || [];

    if (feedbackList.length === 0) {

        feedbackContainer.innerHTML = "<p>No feedback available.</p>";

    } else {

        feedbackContainer.innerHTML = "";

        feedbackList.forEach(function(feedback, index) {

            let feedbackBox = document.createElement("div");

            feedbackBox.innerHTML = `
                <h3>Feedback ${index + 1}</h3>
                <p><strong>Student Name:</strong> ${feedback.name}</p>
                <p><strong>Course:</strong> ${feedback.course}</p>
                <p><strong>Rating:</strong> ${feedback.rating}</p>
                <p><strong>Comments:</strong> ${feedback.comments}</p>
                <hr>
            `;

            feedbackContainer.appendChild(feedbackBox);

        });

    }

}
