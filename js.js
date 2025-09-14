// Select nav links
const homeLink = document.querySelector('a[href="#home"]');
const projectsLink = document.querySelector('a[href="#projects"]');
const aboutLink = document.querySelector('a[href="#about-me"]');

// Select sections
const homeSection = document.getElementById('home');
const projectsSection = document.getElementById('projects');
const aboutSection = document.getElementById('about');

// Function to show only the clicked section
function showSection(section) {
  homeSection.classList.add('hidden');
  projectsSection.classList.add('hidden');
  aboutSection.classList.add('hidden');

  section.classList.remove('hidden');
}

// Add event listeners
homeLink.addEventListener('click', (e) => {
  e.preventDefault();
  showSection(homeSection);
});

projectsLink.addEventListener('click', (e) => {
  e.preventDefault();
  showSection(projectsSection);
});

aboutLink.addEventListener('click', (e) => {
  e.preventDefault();
  showSection(aboutSection);
});
