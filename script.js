docxument.getElementById("feedbackForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let rating = document.getElementById("rating").value;
    let comments = document.getElementById("comments").value;

    alert(
        "Feedback submitted successfully!\n\n" +
        "Student Name: " + name + "\n" +
        "Course: " + course + "\n" +
        "Rating: " + rating + "\n" +
        "Comments: " + comments
    );

    document.getElementById("feedbackForm").reset();

});
