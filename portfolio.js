let changeNav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    changeNav.classList.add("navbar_scroll");
    changeNav.classList.add("navbar_scroll a");
    changeNav.classList.add("navbar_scroll ..icon-bar");


  } else if (window.scrollY < 56) {
    changeNav.classList.remove("navbar_scroll");
    changeNav.classList.remove("navbar_scroll");
    changeNav.classList.remove("navbar_scroll .icon-bar");
   

  }
});





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



// email



function sendMail(){
    
  var params = {
      from_name : document.getElementById("fullName").value,
      email_id : document.getElementById("email_id").value,
      message : document.getElementById("message").value,
      // contact_no :document.getElementById("tel").value,
  };

  emailjs.send("service_q2z1vtf" , "template_w4plpgk" , params).then(function(res){
      console.log("success", res.status);
      alert("successfully sent the message!" )
  }

)
    };
