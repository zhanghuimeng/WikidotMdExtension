window.onload = function () {
    chrome.storage.sync.get({auto_completion: "no"}, function (items) {
        var checkboxAutoCompletion = document.getElementById("setAutoCompletion");
        if (items.auto_completion === "yes") {
            checkboxAutoCompletion.checked = true;
        }
        else {
            checkboxAutoCompletion.checked = false;
        }
    });

    var checkboxAutoCompletion = document.getElementById("setAutoCompletion");
    checkboxAutoCompletion.onclick = function () {
        if (checkboxAutoCompletion.checked) {
            console.log("Toggle is Checked");
            chrome.storage.sync.set({auto_completion: "yes"});
        }
        else {
            console.log("Toggle is Unchecked");
            chrome.storage.sync.set({auto_completion: "no"});
        }
    }
};