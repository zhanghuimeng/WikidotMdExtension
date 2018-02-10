var isWikidot = false;
console.log("Chrome: ");
console.log(window.chrome);

chrome.tabs.onUpdated.addListener(function (tabId , info) {
    if (info.status === 'complete') {
        console.log("Tab updated");
        queryCurrentTab();
    }
});

// Change the icon when the active tab belongs to wikidot
chrome.tabs.onActivated.addListener(function (activeInfo) {
    console.log("Tab changed");
    queryCurrentTab();
});

function queryCurrentTab() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        var tab = tabs[0];
        tabId = tab;
        change_icon(tab.url, tab.id);
    });
}

// change icon
function change_icon(url, tabId) {
    url = url.toLowerCase();
    var domain;
    domain = extractRootDomain(url).toString();

    console.log("current tab url: " + url);
    console.log("domain: " + domain);

    if (domain !== "wikidot.com") {
        chrome.browserAction.setIcon({
            "path": "../picture/default_icon.png",
            "tabId": tabId
        });
        isWikidot = false;
    }
    else {
        chrome.browserAction.setIcon({
            "path": "../picture/activated_icon.png",
            "tabId": tabId
        });
        isWikidot = true;
    }
}
