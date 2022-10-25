/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
/**
 * @description populates the navbar with <li> elements containing anchors which redirects to sections of the page.
 */
function buildNavBar()
{
    let navBar = document.querySelector("#navbar__list");
    let sectionsNumber = document.getElementsByTagName("section").length;

    // for loop goes through the sections number add <li> element that contains <a> element linked with each section.
    for (let i = 0; i < sectionsNumber; i++) {
        let navListOption = document.createElement("li");
        let anchor = document.createElement('a');
        anchor.className = `a${i + 1}`
        anchor.textContent = `Section ${i + 1}`;
        anchor.setAttribute('href', `#`);
        navListOption.appendChild(anchor);
        navBar.appendChild(navListOption);
    }
}

// Add class 'active' to section when near top of viewport
/**
 * @description it sets the section as active when it's scrolled to.
 */

function setActive()
{
    // used Array.from to get sections as elements from section query selector
    let sections = Array.from(document.querySelectorAll('section'));
    for(let section of sections)
    {
        // by using getBoundingClientRect() we can get the object top and check whether they are
        // in the viewport and if true the section's class (if active class is not present before)
        // becomes active else it's removed from it.
        let sec = section.getBoundingClientRect();
        if (sec.top < 150 && sec.top >=-150)
        {
            if(!section.classList.contains('your-active-class'))
            {
                section.classList.add('your-active-class')
            }
        }
        else
        {
            section.classList.remove('your-active-class')
        }
    }
}

// scrolls to the corresponding section with click event listener
/**
 * @description scrolls to the corresponding section when clicking on the button from the navbar.
 */
function scrollTo()
{
    let navButtons = document.getElementsByTagName('a');
    let sections = document.getElementsByTagName('section');
    // for loop goes through nav buttons and compares the number of it's class with the section's id and if equal
    // it scrolls to the corresponding section.
    for (let i = 0; i < navButtons.length; i++)
    {
        navButtons[i].addEventListener('click', function ()
        {
            if(navButtons[i].className[-1] === sections[i].id[-1])
            {
                event.preventDefault();
                sections[i].scrollIntoView({behavior: "smooth"});
            }
        }, false)

    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavBar();
// Set sections as active
document.addEventListener('scroll', setActive);
// scroll to specific section
scrollTo()