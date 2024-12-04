// code for index.html
document.getElementById("projectPage-nav").addEventListener("click", function() {
    window.location.href = "project.html"; // Replace with your file name
});

document.getElementById("achievePage-nav").addEventListener("click", function() {
    window.location.href = "achievement.html"; // Replace with your file name
});

// code for introduction text display

const introText={
    name : "Muhammad Ahmad" ,
    title: "Under Graguate in Computer Science",
    description: [
        "As a Computer Science student, I have developed strong skills in programming languages like Python, Java, and C++ along with experience in web development using HTML, CSS, and JavaScript. I am passionate about solving complex problems, with expertise in algorithms, data structures, and software design. I'm continuously expanding my knowledge in emerging technologies like AI and cloud computing to build innovative, real-world solutions."
    ]
};

// defining parameters i am going to use
/**
 * This function creates and appends an HTML element to the container.
 * @param {HTMLElement} container - The parent element to which new elements will be appended.
 * @param {String} elementType - The type of element (e.g., 'h1', 'p') to create.
 * @param {String} createdElementContent - The text content to insert inside the created element.
*/

function createElement (container,elementType,createdElementContent)
{
    const element=document.createElement(elementType);
    element.textContent=createdElementContent;
    container.appendChild(element);
}


// function to display the info
function displayIntroInf()
{
    const container=document.getElementsByClassName("intro")[0];

    // creating and displaying element to display name
    createElement(container,'h1',`Hi, I'm ${introText.name}`)

    // creating and displaying element to display title
    createElement(container,'h2',`${introText.title}`)

    // creating and displaying element to display description
    
    createElement(container,'p',`${introText.description}`)
    // introText.description.forEach(line=>
    //     {
    //         createElement(container,'p',line)
    //     }
    // )
    
}

// Call the displayResume function to populate the resume data on page load
displayIntroInf();