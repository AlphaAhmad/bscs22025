
aboutMe = "As a driven and passionate computer science student, I am deeply committed to understanding and mastering the intricacies of the digital world. My academic journey has provided me with a robust foundation in software development, algorithms, data structures, and a diverse range of programming languages, which I continuously strive to refine. I thrive in problem-solving environments, whether I’m designing efficient algorithms, developing applications, or tackling complex coding challenges.Beyond the classroom, I am fascinated by emerging technologies and trends such as artificial intelligence, machine learning, and cybersecurity, always seeking opportunities to learn and integrate these advancements into my work. My approach to each project is fueled by a desire for innovation, practicality, and creating real-world impact. With a strong work ethic, attention to detail, and a collaborative mindset, I aim to contribute meaningfully to cutting-edge projects that challenge the status quo. Ultimately, I am excited about using my technical skills and creativity to solve problems and create solutions that positively shape the future of technology."

/**
 * Create an element and append it to the parent container.
 * 
 * @param {HTMLElement} container The parent container where the element will be appended
 * @param {string} elementType The type of the HTML element to create (e.g., 'p', 'h1', 'div')
 * @param {string} createdElementContent The content to be placed inside the created element
 * @param {string|null} elementID (Optional) ID for the created element
 * @param {string|null} elementClass (Optional) Class for the created element
 */
function createElement(container, elementType, createdElementContent = null, elementID = null, elementClass = null) {
    const element = document.createElement(elementType);

    if (createdElementContent !== null) {
        element.textContent = createdElementContent;
    }

    if (elementID !== null) {
        element.id = elementID;
    }

    if (elementClass !== null) {
        element.className = elementClass;
    }

    container.appendChild(element);
    return element;
}

function display()
{
    const main = document.getElementsByClassName("detail")[0];
    createElement(main,'p',aboutMe);
}

display();