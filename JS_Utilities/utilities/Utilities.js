//----------------First letter uppercase and the rest lowercase----------------

const properCase = (string) => {
    return `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;
};

//------------------------------easy console.log-------------------------------

const log = (content) => {
    console.log(content);
}

//-----------------------------easy query selector-----------------------------

const select = (selector, scope) => {
    return (scope || document).querySelector(selector);
}

//-----------------------------easy event listener-----------------------------

const listen = (target, event, callback, capture = false ) => {
    target.addEventListener(event, callback, !!capture);
}

//--------------------------easy innerHtml / textContent-----------------------

//the target can be a class/id or html element
const sanitizeInput  = (target ,inputValue) => {
    const div = select(target);
    div.textContent = inputValue;
    return div.innerHTML;
}

//------------------------------create elemet----------------------------------

const createElement = (tag, className) => {
    const el = document.createElement(tag);
    if (className) el.classList.add(className);
    return el;
}

//---------------delete all the child elements of a parent element--------------------

const deleteContent = (parentElement) => {
    let child = parentElement.lastElementChild;
    while (child){
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
}
//example
const container = select('.container')
deleteContent(container)

//-------------------------------------add class--------------------------------

const addClass = (selector, className, scope) => {
    (scope || document).querySelector(selector).classList.add(className)
};
//example
const qq = () => {
    const handleClass = addClass('button', 'btn2');
}
const myBtn = select('button')
listen(myBtn, 'click', qq );

export { log, properCase, select, listen, sanitizeInput, createElement, deleteContent, addClass };

//-----------------------------------how to import------------------------------------------------

//in the file you want to import copy this
//import { log, properCase, select, listen, sanitizeInput, createElement, deleteContent, addClass } from "./main.js"

//make sure both script tags have a type attribute = 'module'

//<script  type="module" src="./main.js"></script>
//<script type="module" src="your file"></script>

