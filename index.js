function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

window.addEventListener('load', function () {
    this.setTimeout(function() {
        var toastEl = document.getElementById('myToast');
        var toast = new bootstrap.Toast(toastEl);
        toast.show();
    }, 3000);
});

const funFacts = [
    "I love Star Wars!",
    "I can speak three (tres, drei) languages!", 
    "I enjoy hiking and working out at the gym.", 
    "AI will never replace me.",
    "I'm always working on a new project", 
]

let currentFactIndex = 0;
const factDisplay = document.getElementById('nav-fun-fact');

function updateFunFact() {
    factDisplay.textContent = funFacts[currentFactIndex];
}

setInterval(() => {
    currentFactIndex = (currentFactIndex + 1) % funFacts.length;
    updateFunFact();
}, 5000); 

updateFunFact();

document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');

    // Check if the page was loaded before
    const isLoadedBefore = localStorage.getItem('loadedBefore');

    // If it's the first load
    if (!isLoadedBefore) {
        setTimeout(() => {
            // Add the 'loaded' class to fade in the content
            content.classList.add('loaded');
            
            // Remove the loading screen after animation
            loadingScreen.style.display = 'none';

            // Save in localStorage that the page was loaded before
            localStorage.setItem('loadedBefore', true);
        }, 3000); // Simulate loading time
    } else {
        // If the page was already loaded before, immediately show the content
        loadingScreen.style.display = 'none';
        content.classList.add('loaded');
    }
});

