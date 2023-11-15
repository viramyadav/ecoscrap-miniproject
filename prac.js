const modeToggleBtn = document.getElementById("modeToggleBtn");
const body = document.body;

modeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

    // Store user preference in local storage
//     const isDarkMode = body.classList.contains("dark-mode");
//     localStorage.setItem("isDarkMode", isDarkMode ? "true" : "false");
// });

// Retrieve user preference from local storage and apply it on page load
// const isDarkMode = localStorage.getItem("isDarkMode") === "true";
// if (isDarkMode) {
//     body.classList.add("dark-mode");
