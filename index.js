// Add a click event handler to buttons with class 'rating'
$(".rating").click(function () {
  // Initial Condition
  resetHighlight();
  // Get the text content of the clicked button using $(this).text()
  const clickedRating = $(this).text();

  // Identify which number is selected
  const selectedRating = ".rating" + "-" + clickedRating;

  highlightRating(selectedRating);
  //   console.log($(".rating-container button:has(.active-rating)"));

  const hasActiveRating = $(".rating-container .rating").hasClass(
    "active-rating"
  );

  // To toggle the user input box and the thank you box
  if (hasActiveRating === true) {
    $("button.submit").click(function () {
      $("section.thank-you").fadeIn(1000).removeClass("hidden");
      $("section.user-feedback").fadeOut(500).addClass("hidden");
      $(".user-rating span").text(clickedRating);
    });
  }
});

// Functions
function highlightRating(rating) {
  $(".rating-container " + rating).addClass("active-rating");
}

function resetHighlight() {
  $(".rating-container button").removeClass("active-rating");
}
