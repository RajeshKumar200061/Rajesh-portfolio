let changeNav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    changeNav.classList.add("navbar_scroll");
    changeNav.classList.add("navbar_scroll a");
    changeNav.classList.add("navbar_scroll ..icon-bar");


  } else if (window.scrollY < 56) {
    changeNav.classList.remove("navbar_scroll");
    changeNav.classList.remove("navbar_scroll a");
    changeNav.classList.remove("navbar_scroll ..icon-bar");
   

  }
});


// typewritter
// const text = "Hello";  
// let index = 0;  

// function type() {  
//     if (index < text.length) {  
//         document.getElementById("typewriter").innerHTML += text.charAt(index);  
//         index++;  
      
//         setTimeout(type, 1000); // Adjust speed by changing the timeout (milliseconds)  
//     } else {  
//         // Wait for a moment, then restart typing  
//         setTimeout(restartTyping, 1000); // Pause before restarting (1 second)  
//     }  
// }  

// function restartTyping() {  
//     index = 0;  
//     document.getElementById("typewriter-text").innerHTML = ""; // Clear previous text  
//     type(); // Start typing again  
// }  

// window.onload = type;

const textArray = [  
  "Web Designer" ,
  "Front-end Developer" 
];  

let index = 0;  
let charIndex = 0;  
const typewriterElement = document.getElementById("typewriter");  

function type() {  
  if (charIndex < textArray[index].length) {  
      typewriterElement.textContent += textArray[index].charAt(charIndex);  
      charIndex++;  
      setTimeout(type, 100); // Adjust typing speed here  
  } else {  
      setTimeout(erase, 1000); // Wait before erasing  
  }  
}  

function erase() {  
  if (charIndex > 0) {  
      typewriterElement.textContent = textArray[index].substring(0, charIndex - 1);  
      charIndex--;  
      setTimeout(erase, 50); // Adjust erasing speed here  
  } else {  
      index = (index + 1) % textArray.length; // Move to the next text  
      setTimeout(type, 500); // Wait before starting to type again  
  }  
}  

// Start the typing effect  
type();