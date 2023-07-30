


// Create a list of questions and answers

let removePart="px";
const faqs = [
  {
    question: "Why am I not seeing any course material?",
    answer: "Unfortunately, the material for this course has not been created yet. However, we are actively working on enhancing the learning experience for our users to develop strong programming skills, using various coding languages.",
  },
  {
    question: "When will this course be available?",
    answer: "As soon as we start working on this course, material will start to get published. When this will happen is uncertain, but we'll work as quickly as we can to add in material to the course. To request the course, you may contact 2009atharv@gmail.com or oviyamgandhi@gmail.com.",
  },
  {
    question: "What can I do in the meantime?",
    answer: "In the meantime, you can learn the material and languages of this course through books and courses on FreeCodeCamp.org, Udemy, & Code.org, and online coding tutorial websites like W3Schools. You may also check out the available courses we have on CodeNauts Coding.",

  }
  // Add more questions and answers here
];
function createFAQs() {
  const container = document.createElement("div");
  container.style.fontFamily = "Arial, sans-serif";
  container.style.margin = "20px";
  const titleElement = document.createElement("h1");
  titleElement.textContent = "FAQs";
  titleElement.style.fontFamily = "cursive";
  titleElement.style.fontSize = "48px";
  titleElement.style.fontWeight = "bold";
  titleElement.style.textAlign = "center";
  titleElement.style.marginBottom = "0px";
  titleElement.style.marginTop = "-10px";

  container.appendChild(titleElement);
  


// Add event l

  faqs.forEach((faq, index) => {
    const questionButton = document.createElement("button");
    questionButton.textContent = "▼ "+faq.question;
    questionButton.style.border = "none";
    questionButton.style.padding = "10px";
    questionButton.style.fontFamily = "serif"; // Set x value to 100 pixels
    questionButton.style.alignContent="left";
    questionButton.style.textAlign="left";
    questionButton.style.cursor = "pointer";
    questionButton.style.fontSize = "16px";
    questionButton.style.color = "#fff"; // Text color to white for better contrast
    questionButton.style.borderRadius = "8px";
    questionButton.style.transition = "background-color 0.3s ease";
    
    questionButton.style.width = 600+"px"; // Set width to half of the screen width
   // console.log((window.innerWidth-(questionButton.style.width.substring(removePart.length)))+"px")
    console.log((questionButton.style.width.substring(removePart.length))+400+"px")

    questionButton.style.left = "50%";
    questionButton.style.transform = "translate(65%, 50%)";

    questionButton.style.marginBottom = "20px"; // Spacing between buttons
    questionButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.85)';
    questionButton.style.transition = 'background-color 0.3s ease';

    //first and last-lightest
    questionButton.style.backgroundColor = "#D1213D"; // Nice shade of green

    //second-medium
    questionButton.addEventListener('mouseover', () => {
      questionButton.style.backgroundColor = '#f44336';
    });
    //third-darkest
    questionButton.addEventListener('mousedown', () => {
      questionButton.style.backgroundColor = '#8b0000';
    });
//last-lightest
    questionButton.addEventListener('mouseout', () => {
      questionButton.style.backgroundColor = '#D1213D';
    });
    
    container.appendChild(questionButton);

    const answerDiv = document.createElement("div");
    answerDiv.textContent = faq.answer;
    answerDiv.style.marginTop = "10px"; // Spacing between answer and the next question button
    answerDiv.style.marginRight = window.innerWidth-(window.innerWidth-(window.innerWidth/3.7))+"px";//"500px"; // Spacing between answer and the next question button
    answerDiv.style.marginLeft = window.innerWidth-(window.innerWidth-(window.innerWidth/3.7))+"px";// // Spacing between answer and the next question button

    answerDiv.style.marginBottom = "10px"; // Spacing between answer and the next question button
    answerDiv.style.maxHeight = "0";
    answerDiv.style.overflow = "hidden";
    answerDiv.style.textAlign="left";
    answerDiv.style.fontFamily="serif"
    answerDiv.style.transition = "max-height 0.3s ease-out";
    container.appendChild(answerDiv);

    let isOpen = false;
    
    questionButton.addEventListener("click", () => {
      isOpen = !isOpen;
      if (isOpen) {
        const maxHeight = answerDiv.scrollHeight + "px";
        answerDiv.style.maxHeight = maxHeight;
        questionButton.textContent = "▲     " + faq.question; // Change to a different text when expanded


      } else {
        answerDiv.style.maxHeight = "0";
        questionButton.textContent = "▼     " + faq.question; // Change back to original text when collapsed

      }

      
    });
  });

  document.body.appendChild(container);
}

// Call the function to create FAQs when the page loads
window.addEventListener("load", createFAQs);



function logMessage() {
    swal({ 
  showCancelButton: true, cancelButtonColor:'#4CAF50',
    background:'#FF6B6B',    title: `Unavailable Course`, text: "Unfortunately, this course is not available yet. Contact 2009atharv@gmail.com or oviyamgandhi@gmail.com, and once the course material is published, you'll be the first to know!", 
    type: 'info',
     imageSize: "306x220", confirmButtonText: "Home", },    function(isConfirm) {
        if (isConfirm) {
            window.location.href = "index.html";

        }});  }
  
  // Wait for 10 seconds (10000 milliseconds) and then call the logMessage function
  setTimeout(logMessage, 1);

