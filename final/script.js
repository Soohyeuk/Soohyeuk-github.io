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
const scrollThreshold = 600; // Adjust this value as needed

const leftAd = document.getElementById('leftAd');
const rightAd = document.getElementById('rightAd');

function showAdsOnScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > scrollThreshold) {
        leftAd.style.opacity = 1;  
        leftAd.style.visibility = 'visible'; 

        rightAd.style.opacity = 1; 
        rightAd.style.visibility = 'visible'; 
    } else {
        leftAd.style.opacity = 0;
        leftAd.style.visibility = 'hidden';

        rightAd.style.opacity = 0; 
        rightAd.style.visibility = 'hidden'; 
    }
}

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


document.addEventListener('DOMContentLoaded', () => {
    let rellax = new Rellax('.rellax');
});
