const MainHeading = {
    main_text: "CONTACT.",
    subheading: "For Further Details"
};

const PhoneInfo = {
    title: "PHONE NUMBER",
    phoneNumber: ["0342-6000035", "0330-0003565"]
};

const emailInfo = {
    title: "EMAIL ADDRESS",
    email1: "muhammadadhmad8063@gmail.com"
};

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

function DisplayMainHeading() {
    const base_element = document.getElementsByClassName("two")[0];
    if (base_element) {
        const created_h1 = createElement(base_element, "h1", `${MainHeading.main_text}`, null, "head1");
        createElement(created_h1, 'span', `${MainHeading.subheading}`);
    } else {
        console.error("Main Element not created");
    }
}

function DisplayPhoneNumbers() {
    const base_container = document.getElementById("phone");  
    if(base_container!=null)  
    {
        const div_three1 = createElement(base_container, 'div', null, "three");
        createElement(div_three1, "h2", `${PhoneInfo.title}`, null, "secondary");
        const list_of_numbers = createElement(base_container, 'ul', null, null, "PersonalInfo");
        
        PhoneInfo.phoneNumber.forEach(Number => {
            createElement(list_of_numbers, 'li', Number,null,null);
        });
    }
    else {
        console.error("Main Element not created");
    }

    //now making email
    if(base_container!=null)
    {
        const div_three2 = createElement(base_container,'div',null,null,null);
        createElement(div_three2, 'h2', `${emailInfo.title}`,null, "secondary");

        //
        const email_list = createElement(base_container,'ul',null,null,"PersonalInfo");
        createElement(email_list,'li',`${emailInfo.email1}`,null,null);
    }
}

// Display function calls
DisplayMainHeading();
DisplayPhoneNumbers();



