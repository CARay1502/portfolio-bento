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

setInterval(() => {
    let currentFactIndex = 0;
    currentFactIndex = (currentFactIndex + 1) % funFacts.length;
    updateFunFact();

}, 5000); 