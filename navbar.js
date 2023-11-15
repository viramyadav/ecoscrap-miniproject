// Function to load navbar content
function loadNavbarContent() {
  const shortnav = document.querySelector('.navbar');
  if (shortnav) {
    fetch('navbar.html')
      .then(res => res.text())
      .then(data => {
        shortnav.innerHTML = data;
        const LightImage = document.getElementById("Lightbulb");
        const DarkImage = document.getElementById("Darkbulb");

        // Check if the user preference is already stored in localStorage
        const isDarkMode = localStorage.getItem('darkMode') === 'true';

        // Apply the user's preference
        if (isDarkMode) {
          document.body.classList.add('dark-mode');
          LightImage.classList.add("hide");
          DarkImage.classList.remove("hide");
        }

        if (LightImage) {
          // Add event listener to the bulb image
          LightImage.addEventListener('click', () => {
            document.body.classList.add('dark-mode');
            LightImage.classList.add("hide");
            DarkImage.classList.remove("hide");

            // Store user preference in localStorage
            localStorage.setItem('darkMode', 'true');
          });
        }
        if (DarkImage) {
          // Add event listener to the bulb image
          DarkImage.addEventListener('click', () => {
            document.body.classList.remove('dark-mode');
            LightImage.classList.remove("hide");
            DarkImage.classList.add("hide");

            // Store user preference in localStorage
            localStorage.setItem('darkMode', 'false');
          });
        }
      });
  }
}

document.addEventListener('DOMContentLoaded', loadNavbarContent);
