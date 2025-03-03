// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Get all .security elements
  const securityElements = document.querySelectorAll('.security');
  
  // Listen for scroll events
  window.addEventListener('scroll', () => {
    securityElements.forEach(element => {
      if (isInViewport(element)) {
        // Add the "animate" class to trigger the animation
        element.classList.add('animate');
      }else{
        element.classList.remove('animate');
      }
    });
  });

function toggleContent(){
  var cardForm = document.getElementById('card');
  var cardBtn = document.getElementsByClassName('.card-btn')
  var paymentBtn = document.getElementsByClassNamer('.payment-btn')

  if(cardForm.style.display === "none"){
    cardForm.style.display = "block";
    paymentBtn.classList.remove('pay');
  }else{
    cardForm.style.display = "none";
    paymentBtn.classList.add('pay');
  }
}
  