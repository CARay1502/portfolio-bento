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