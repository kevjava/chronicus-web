/*
 * Chronicus server API.
 */


/**
 * checkAuth - Checks authentication with the server.  
 *
 * username - The username for the user to be logged in.
 * password - The password for the user to be logged in.
 * authSuccess - The callback function to be called if login succeeds.
 * authFail - The callback function to be called if login fails.
 */
function checkAuth(username, password, authSuccess, authFail) {
    if ("h4x0r" === username && "l33t" === password) {
        authSuccess();
    } else {
        authFail();
    }
}
