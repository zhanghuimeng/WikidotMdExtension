var lastUpdatedPreviewTime = 0;

if (window.onload == null) {
    window.onload = waitForElementToDisplay();
}

function waitForElementToDisplay(selector, time) {
    if (document.querySelector(selector) != null) {
        console.log("The element is displayed, you can put your code instead of this alert.");
        var textarea = document.getElementById("wme-text-input");
        textarea.addEventListener("keyup", onTextChange());
        return;
    }
    else {
        setTimeout(function() {
            waitForElementToDisplay(selector, time);
        }, time);
    }
}

function onTextChange() {
    var input = document.getElementById("wme-text-input");
    if (input.checkValidity())  {
        var text = input.value;
        console.log("Input changed");
        document.getElementById("edit-page-textarea").value = text;

        var time = (new Date()).getTime();
        if (time - lastUpdatedPreviewTime > 2000) {
            document.getElementById("edit-preview-button").click();
            lastUpdatedPreviewTime = time;
        }
    }
}