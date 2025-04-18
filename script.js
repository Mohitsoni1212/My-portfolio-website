function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
window.addEventListener('load', function() {
  setTimeout(function() {
      const loaderContainer = document.querySelector('.loader-container');
      
      loaderContainer.style.opacity = '0'; // Smooth fade-out

      setTimeout(function() {
          loaderContainer.style.display = 'none'; // Completely hide loader
          document.querySelector('.content').style.display = 'block'; // Show main content
      }, 500); // Wait for the opacity transition to finish (0.5s)
  }, 3500); // 2.5 seconds before starting the fade-out
});
