document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileRecipesDropdown = document.querySelector('.mobile-recipes-dropdown');
  const mobileDropdownContent = document.querySelector('.mobile-dropdown-content');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu > a');
  const recipesLink = mobileRecipesDropdown ? mobileRecipesDropdown.querySelector('a') : null;

  // Toggle mobile menu
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });
  }

  // Toggle recipes dropdown in mobile menu
  if (recipesLink) {
    recipesLink.addEventListener('click', function(e) {
      e.preventDefault();
      mobileRecipesDropdown.classList.toggle('active');
      mobileDropdownContent.classList.toggle('active');
    });
  }

  // Close mobile menu when a link is clicked (except recipes dropdown)
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      // Don't close recipes dropdown if it's still open
    });
  });

  // Close mobile menu when a recipe is selected
  const recipeLinks = document.querySelectorAll('.mobile-dropdown-content a');
  recipeLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      mobileRecipesDropdown.classList.remove('active');
      mobileDropdownContent.classList.remove('active');
    });
  });
});