// Change the icon when the active tab belongs to wikidot
chrome.tabs.onActivated.addListener(function (activeInfo) {
    console.log("Tab changed");
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        var tab = tabs[0];
        change_icon(tab.url, tab.id);
    });
});

// change icon
function change_icon(url, tabId) {
    url = url.toLowerCase();
    var domain;
    domain = extractRootDomain(url).toString();

    // console.log("current tab url: " + url);
    // console.log("domain: " + domain);

    if (domain !== "wikidot.com") {
        chrome.browserAction.setIcon({
            "path": "/picture/default_icon.png",
            "tabId": tabId
        });
    }
    else {
        chrome.browserAction.setIcon({
            "path": "/picture/activated_icon.png",
            "tabId": tabId
        });
    }
}

// https://stackoverflow.com/questions/8498592/extract-hostname-name-from-string
function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}
// https://stackoverflow.com/questions/8498592/extract-hostname-name-from-string
function extractRootDomain(url) {
    var domain = extractHostname(url),
        splitArr = domain.split('.'),
        arrLen = splitArr.length;

    //extracting the root domain here
    //if there is a subdomain
    if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
        //check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
        if (splitArr[arrLen - 1].length === 2 && splitArr[arrLen - 1].length === 2) {
            //this is using a ccTLD
            domain = splitArr[arrLen - 3] + '.' + domain;
        }
    }
    return domain;
}