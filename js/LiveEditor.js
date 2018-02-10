var lastUpdatedPreviewTime = 0;
var hasUpdated = false;

// Add text change listener
function registerTextChangeListener() {
    console.log("register textchange listener");
    var textarea = document.getElementById("wme-text-input");
    textarea.addEventListener("keyup", onTextChange);
    // textarea.onkeyup = onTextChange();
}

function onTextChange() {
    var input = document.getElementById("wme-text-input");
    var text = input.value;
    // console.log("Input changed");

    var time = (new Date()).getTime();
    if (time - lastUpdatedPreviewTime > 1000) {
        if (!hasUpdated) {
            hasUpdated = true;
        } else {
            console.log("Update original window and preview");
            if (text !== document.getElementById("edit-page-textarea").value) {
                document.getElementById("edit-page-textarea").innerHTML = text;
                document.getElementById("edit-preview-button").click();
            }
        }
        lastUpdatedPreviewTime = time;
    }
    else {
        setTimeout(onTextChange, 1005);
    }
}