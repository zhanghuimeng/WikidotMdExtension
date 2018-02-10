var lastUpdatedPreviewTime = 0;

// Add onload listener
if (window.addEventListener) {
    window.addEventListener('load', registerTextChangeListener, false);
}
else if (window.attachEvent) // Microsoft
{
    window.attachEvent('onload', registerTextChangeListener());
}

// Add text change listener
function registerTextChangeListener() {
    var textarea = document.getElementById("wme-text-input");
    textarea.addEventListener("keyup", onTextChange());
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