# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.
![image](https://github.com/user-attachments/assets/f088c295-ebf7-47a1-92f7-cd45eb25c4da)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked.
- Navigate the questions and hide/show answers using keyboard navigation alone.
- View the optimal layout for the interface depending on their device's screen size.
- See hover and focus states for all interactive elements on the page.
- 
## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (CSS Variables)
- Flexbox
- Mobile-first design approach
- JavaScript for dynamic interactions
- [Google Fonts](https://fonts.google.com/) for typography

### What I learned

In this project, I learned how to:

- Use JavaScript for handling user interactions, specifically toggling visibility of elements.
- Implementing responsive design using media queries to adapt the layout for various screen sizes.
- Working with CSS custom properties to easily manage colors and spacing for a cleaner, maintainable style.
  
For example, here’s how I used JavaScript to toggle the display of answers:

```javascript
question.addEventListener("click", () => {
    const isOpen = answer.style.display === "block";

    // Hide all answers first
    document.querySelectorAll(".answer").forEach(ans => ans.style.display = "none");

    // Toggle current answer and icon
    if (!isOpen) {
        answer.style.display = "block";
        icon.src = "./assets/images/icon-minus.svg";
    }
});
```

### Continued development

For future projects, I want to explore:

- Enhancing accessibility by ensuring that interactive elements are focusable and keyboard navigable.
- Improving performance by utilizing more advanced JavaScript techniques like event delegation.
- Creating more interactive and dynamic user interfaces using vanilla JavaScript before jumping into frameworks like React.

### Useful resources

- [Frontend Mentor](https://www.frontendmentor.io/) - This platform provided the challenge that I worked on.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) - For learning JavaScript and web standards.
- [CSS-Tricks](https://css-tricks.com/) - For great CSS tutorials and tricks.

## Author

- Website - [Chandu Pichika]((https://pichikachandu.netlify.app/))
- Frontend Mentor - [@ChanduPichika](https://www.frontendmentor.io/profile/Pichikachandu)

## Acknowledgments

Thanks to Frontend Mentor for providing such an engaging challenge, and to the developer community for always being so helpful and supportive. This project was a great opportunity to enhance my frontend skills, and I look forward to applying what I learned to future projects!
