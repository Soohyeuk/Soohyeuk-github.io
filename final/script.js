// let hasScrolled = false;
// let isThrottled = false;

// // show cookie thing on a first scroll 
// window.addEventListener('scroll', function () {
//     if (!hasScrolled) {
//         document.querySelector('.header').classList.add('hidden');
//         document.getElementById('cookiePopup').classList.add('show');
//         document.body.style.overflow = 'hidden'; 
//         hasScrolled = true;
//     }
// });

// function setPopupBackground(color) {
//     document.getElementById('cookiePopup').style.backgroundColor = color;
// }

// function resetPopupBackground() {
//     document.getElementById('cookiePopup').style.backgroundColor = 'black';
// }

// function addHoverEffects(button, color) {
//     button.addEventListener('mouseover', () => {
//         setPopupBackground(color);
//     });
//     button.addEventListener('mouseout', resetPopupBackground);
// }


// const allCookiesBtn = document.getElementById('allCookies');
// const allCookiesOnlyBtn = document.getElementById('allCookiesOnly');
// const someCookiesBtn = document.getElementById('someCookies');
// const necessaryOnlyBtn = document.getElementById('necessaryOnly');
// const rejectBtn = document.getElementById('reject');

// addHoverEffects(allCookiesBtn, 'green');
// addHoverEffects(allCookiesOnlyBtn, 'green');
// addHoverEffects(someCookiesBtn, 'green');
// addHoverEffects(necessaryOnlyBtn, 'red');
// addHoverEffects(rejectBtn, 'red');

// document.querySelectorAll('.cookie-options button').forEach(button => {
//     button.addEventListener('click', () => {
//         document.querySelector('.header').classList.remove('hidden');
//         document.getElementById('cookiePopup').classList.remove('show');
//         document.body.style.overflow = ''; 
//     });
// });
const scrollThreshold = 300; // Adjust this value as needed

// Get the ad elements
const leftAd = document.getElementById('leftAd');
const rightAd = document.getElementById('rightAd');

// Function to show the ads when the scroll position is passed
function showAdsOnScroll() {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Check if the scroll position is past the threshold
    if (scrollPosition > scrollThreshold) {
        leftAd.style.opacity = 1;  // Show left ad
        leftAd.style.visibility = 'visible'; // Make it visible

        rightAd.style.opacity = 1; // Show right ad
        rightAd.style.visibility = 'visible'; // Make it visible
    } else {
        leftAd.style.opacity = 0;  // Hide left ad
        leftAd.style.visibility = 'hidden'; // Hide it from the view

        rightAd.style.opacity = 0; // Hide right ad
        rightAd.style.visibility = 'hidden'; // Hide it from the view
    }
}

// Add scroll event listener
window.addEventListener('scroll', showAdsOnScroll);

const yesButton = document.querySelector('.yes-button');
const popupModal = document.getElementById('popupModal');
const closePopup = document.getElementById('closePopup');

yesButton.addEventListener('click', function() {
    popupModal.style.display = 'flex'; 
});

closePopup.addEventListener('click', function() {
    popupModal.style.display = 'none'; 
});

document.addEventListener('DOMContentLoaded', function() {
    const customersSpan = document.querySelector(".span");

    if (customersSpan) {
        gsap.fromTo(customersSpan, 
            {
                opacity: 0,        
                y: -100,            
                rotation: -10,     
            }, 
            {
                opacity: 1,         
                y: 0,               
                rotation: 0,        
                duration: 1.5,     
                ease: "power4.out", 
                onComplete: () => console.log("Animation complete")
            });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.game-image img');

    if (image) {
        gsap.from(image, {
            opacity: 0,          
            x: -200,
            scale: 0.8,          
            duration: 1.5,     
            ease: "bounce.out",  
            delay: 0.7,         
            onComplete: () => console.log("Image animation complete")
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    let rellax = new Rellax('.rellax');
});
