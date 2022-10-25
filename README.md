
# Landing page project
This project has one page of content consists of four sections and navbar, and the navbar contains 
anchor links that can smoothly jump to each section of the page. By using javascript as sections are 
added to the page the navbar will be able to populate itself with anchors that can jump to those new sections.
The section which on selection has css style applied to it which implies that it is active.


# Table of contents


- [Project Title](#Landing page project)
- [Development](#Development)
- [Features](#Features)

#Features
<ol>
<li>The Navigation bar will be populated according to the number of the section.</li>
<li>By clicking the on the navbar buttons it will directly jump to the corresponding section.</li>
<li>The active CSS style is added to the current section which is in the viewport when scrolling.</li>
</ol>


# Development
[(Back to top)](#table-of-contents)
<p>The page initially consists of four sections and if a new section is added the buildNavBar() function in the js/app.js
will automatically add [ li ] elements which include [ a ] elements with destination matching with the 
corresponding section.</p><p>SetActive() function is used to get the section's dimensions and checks if it's in the 
viewport and if it's in the viewport it's class is set to active which applies css style to the active section.
</p><p>ScrollTo() function compares the anchor class number with the section id number and if a match was found the section 
will be jumped to if the corresponding button is pressed.</p> 
.











