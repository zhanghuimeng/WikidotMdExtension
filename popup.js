if (!chrome.cookies) {
    chrome.cookies = chrome.experimental.cookies;
}

function getCookies(domain, name)
{
    chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
        if (cookie != null) {
            // console.log("get cookies: " + cookie.value);
            document.getElementById("unlogged_info").style.display = "none";
        }
        else {
            document.getElementById("logged_info").style.display = "none";
        }
    });

    return cookie.value;
}

window.onload = function () {
    getCookies("http://wikidot.com", "WIKIDOT_SESSION_ID");
};
