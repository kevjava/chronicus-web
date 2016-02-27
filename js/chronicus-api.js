/*
 * Chronicus server API.
 */

function doAlert() {
    alert('Hi.');
}

function checkAuth(username, password) {
    if ("h4x0r" === username && "l33t" === password) {
        alert("Welcome.");
        window.location = 'index.html';
    } else {
        alert("Sorry, try again.");
    }
}
