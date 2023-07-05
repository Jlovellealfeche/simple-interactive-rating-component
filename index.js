function rate(rating) {
    // Display the selected rating
    document.getElementById('result').textContent = "You rated: " + rating + " stars";
  
    // Update the star colors based on the selected rating
    var stars = document.getElementsByClassName('star');
    for (var i = 0; i < stars.length; i++) {
      if (i < rating) {
        stars[i].style.backgroundColor = 'grey';
      } else {
        stars[i].style.backgroundColor = 'white';
      }
    }
  }
  