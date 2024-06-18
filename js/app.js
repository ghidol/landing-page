// Grab all the sections and the navbar
const sections = document.querySelectorAll('section');
const navbar = document.querySelector('.navbar');
// Create a new unordered list
const ul = document.createElement('ul');

// Build the navigation menu
sections.forEach(section => {
    // Create a list item for each section
    const li = document.createElement('li');
    // Set the text to the section's data-nav attribute
    li.textContent = section.getAttribute('data-nav');
    li.addEventListener('click', (e) => {
        // Prevent the default link behavior
        e.preventDefault();
        // Smoothly scroll to the section
        section.scrollIntoView({ behavior: 'smooth' });
    });
    // Add the list item to the unordered list
    ul.appendChild(li);
});

// Add the unordered list to the navbar
navbar.appendChild(ul);

// Function to highlight the active section
const makeActive = () => {
    sections.forEach((section, index) => {
        // Get the section's position relative to the viewport
        const box = section.getBoundingClientRect();
        // Grab all the nav items
        const navItems = navbar.querySelectorAll('li');
        if (box.top <= 150 && box.bottom >= 150) {
            // Add active class to the section in the viewport
            section.classList.add('active');
            // Add active class to the corresponding nav item
            navItems[index].classList.add('active');
        } else {
            // Remove active class from sections not in the viewport
            section.classList.remove('active');
            // Remove active class from corresponding nav items
            navItems[index].classList.remove('active');
        }
    });
};

// Listen for scroll events to update the active section
document.addEventListener('scroll', makeActive);

// Initial call to set the active section when the page loads
makeActive();

