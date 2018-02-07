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
}

window.onload = function () {
    getCookies("http://wikidot.com", "WIKIDOT_SESSION_ID");

    // set onclick
    document.getElementById("mnuSettings").onclick = function () {
        chrome.runtime.openOptionsPage();
    };
    document.getElementById("mnuAbout").onclick = function () {
        chrome.tabs.create({active: true, url: "https://github.com/zhanghuimeng/WikidotMdExtension"});
    };
};
