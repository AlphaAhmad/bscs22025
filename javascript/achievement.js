

const Academic={
    title: "ACADEMIC RECORD",
    description: [ "Matriculation from The Lahore Garrison School (1007/1100)",
    "Intermediate From Punjab Group Of Colleges (986/1100)",
    "BS Computer Science from ITU (Cgpa: 3.74/4)"
    ]
};


const Certificates={
    title:"CERTIFICATES | AWARDS",
    description: [
        "Spelling Bee Competition Winner, The Lahore Garrison 2014.",
        "Academic Excellence Award, Punjab Group Of Colleges 2021.",
        "Scratch Programming Participation Certificate, MAKEISTAN 2016.",
        "SOFTEC Programming Competition Participation Certificate, FAST NUCES Lahore 2023",
        "CODE RUSH Programming Competition Participation Certificate, ITU 2023"
    ]
}

const Courses={
    title:"SHORT COURSES",
    description: [
        "AWS Cloud Computing, Peak Solutions College",
        "Networking, Peak Solutions College",
    ]
}

const soft_skills={
    title:"SOFT SKILLS",
    description: [
        "Worked with SAFA technologies on a team project of an door automation using linear motors",
        "Active Business on Ecommerce",
        "Done Work on Basic Social Media Marketing",
        "Have real life negotiation and dealing experience by selling and purchasing mobile phones",
        "Arranged a trip of 15 students to NUST for NET",
        "Team Work",
    ]
}

const hard_skills={
    title:"HARD SKILLS",
    description:[
        "Algorithm Design",
        "OOP and DSA",
        "Python /  Numpy / Pandas",
        "C++",
        "Kotlin / Kotlin Compose",
        "MySql"
    ]
}

// defining parameters i am going to use
/**
 * This function creates and appends an HTML element to the container.
 * @param {HTMLElement} container - The parent element to which new elements will be appended.
 * @param {String} elementType - The type of element (e.g., 'h1', 'p') to create.
 * @param {String} createdElementContent - The text content to insert inside the 
 * @param {String} elementID
 * @param {String} elementClass
*/

function createElement(container, elementType, createdElementContent = null, elementID = null, elementClass = null) {
    const element = document.createElement(elementType);
    if (createdElementContent != null) {
        element.textContent = createdElementContent;
    }

    if (elementID != null) {
        element.id = elementID;
    }

    if (elementClass != null) {
        element.className = elementClass;
    }

    container.appendChild(element);
    return element;
}


function component_printer(list)
{
    const main_container= document.getElementsByClassName("bd")[0];
    //creating div.three
    const div_three= createElement(main_container,'div', null,null,"three");

    //creating h2.secondary inside 
    const descrpition_list =  createElement(div_three,'h2',list.title,null,"secondary");
    
    // creating ul in main_container
    createElement(div_three,'ul',null,null,"li2");
    // creating li in ul
    for (const element of list.description) {
        createElement(descrpition_list, 'li', element, null, null);
    }
}

component_printer(Academic);
component_printer(Certificates);
component_printer(Courses);
component_printer(soft_skills);
component_printer(hard_skills);