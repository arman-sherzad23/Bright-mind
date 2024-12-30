//=============== Home Section Starts  =====================//
var menuBtn = document.querySelector('.main-navbar .menu-btn');
var menuList = document.querySelector('.main-navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menuList.classList.toggle('active');
});

for(var i = 0; i < menuListItems.length; i++){
	menuListItems[i].addEventListener('click', menuItemClicked);
}
function menuItemClicked(){
	menuBtn.classList.remove('active');
	menuList.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 120){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}
//=============== Home Section Ends  =====================//

//=============== Partners Section Starts ===============//
$('.partners-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
        	items:5
        }
    }
})
//============ Partners Section Ends ======================//

//============ Testimonials Section Starts  ================//
$('.testimonials-slider').owlCarousel({

    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        10000:{
            items:2
        }
    }
})

/*=============== Star Rating ===============*/
document.addEventListener('DOMContentLoaded', function() {
    const starContainers = document.querySelectorAll('.star-rating');

    starContainers.forEach(starContainer => {
        const stars = starContainer.querySelectorAll('.fa-star');
        const ratingValue = starContainer.querySelector('.rating-value');
        const popup = document.getElementById('thanks-popup');
        const closePopupButton = document.getElementById('close-popup');

        // Add click event listener for each star
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const rating = star.getAttribute('data-rating');
                ratingValue.value = rating;

                // Update the star colors
                stars.forEach(s => s.classList.remove('checked'));
                for (let i = 0; i < rating; i++) {
                    stars[i].classList.add('checked');
                }

                // Show pop-up if the rating is 5 stars
                if (rating === '5') {
                    popup.style.display = 'flex'; // Show the pop-up
                }
            });
        });

        // Close the pop-up when the close button is clicked
        closePopupButton.addEventListener('click', () => {
            popup.style.display = 'none'; // Hide the pop-up
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const starContainers = document.querySelectorAll('.star-rating');
  
    starContainers.forEach(starContainer => {
      const stars = starContainer.querySelectorAll('.fa-star');
      const ratingValue = starContainer.querySelector('.rating-value');
      const savedRating = localStorage.getItem('starRating-' + starContainer.dataset.id);
  
      // If a rating is saved in localStorage, use it to set the stars
      if (savedRating) {
        ratingValue.value = savedRating;
        stars.forEach((star, index) => {
          if (index < savedRating) {
            star.classList.add('checked');
          }
        });
      }
  
      // Add click event listener for each star
      stars.forEach((star, index) => {
        star.addEventListener('click', () => {
          const rating = star.getAttribute('data-rating');
          ratingValue.value = rating;
  
          // Save the selected rating to localStorage with a unique identifier
          localStorage.setItem('starRating-' + starContainer.dataset.id, rating);
  
          // Update the star colors
          stars.forEach(s => s.classList.remove('checked'));
          for (let i = 0; i < rating; i++) {
            stars[i].classList.add('checked');
          }
        });
      });
    });
  });
  
/*=============== Star Rating end ===============*/


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 100 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== Dark and Light theme ===============*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



const scriptURL = 'https://script.google.com/macros/s/AKfycbxF1OXShp1kNpm79vgag4ETjbD0eIBHnu3M-2Z5OW_ofiPFLjFL96iAIb-dKhgwu4ePRg/exec';
const form = document.forms['submit-to-google-sheet'];
const message = document.getElementById('message'); // Add a message div in your HTML

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                message.textContent = 'Form submitted successfully!';
                message.style.color = 'green';
                form.reset(); // Clear the form
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => {
            message.textContent = 'There was an error: ' + error.message;
            message.style.color = 'red';
        });
});
