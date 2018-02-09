isEditing = false;
isWikidot = false;

// add listeners
window.onload = function () {
    console.log("Hello extension!");

    waitForElementToDisplay("#wme-text-input", 200);

    getIsWikidot();
    console.log("IsWikidot: " + isWikidot);

    if (isWikidot) {
        var editOptions = document.getElementById("page-options-bottom");
        console.log("Not editing: " + editOptions.style.display);
        var observer = new MutationObserver(function() {
            if (editOptions.style.display === 'none'){
                console.log("Editing");
                isEditing = true;
                startEditing();
            }
            else if (editOptions.style.display !== 'none') {
                console.log("Not Editing");
                isEditing = false;
                stopEditing();
            }
        });
        observer.observe(editOptions,  { attributes: true, childList: true });

        insertNewActArea();
    }
};

function getIsWikidot() {
    var url = document.location.href;
    if (extractRootDomain(url) === "wikidot.com") {
        isWikidot = true;
    }
    else {
        isWikidot = false;
    }
}

function insertNewActArea() {
    var actionArea = document.getElementById("action-area");
    var mainContent = document.getElementById("main-content");
    var wmeActionArea = document.createElement("div");
    wmeActionArea.id = "wme-action-area";
    mainContent.insertBefore(wmeActionArea, actionArea);

    wmeActionArea.innerHTML =
        "<div id=\"wme-live-editor\">\n" +
        "    <div id=\"wme-options\"></div>\n" +
        "\n" +
        "    <div id=\"wme-editor\">\n" +
        "        <div id=\"wme-write-panel\" class=\"wme-left\">\n" +
        "            <textarea id=\"wme-text-input\" class=\"wme-text-input\"></textarea>\n" +
        "        </div>\n" +
        "\n" +
        "        <div id=\"wme-display-panel\" class=\"wme-right\"></div>\n" +
        "    </div>\n" +
        "\n" +
        "</div>";
}

/**
 * Document structure:
 * main-content
 * * action-area-top: Editing, etc.
 * * page-title
 * * page-content
 * * page-info-break: Invisible
 * * page-options-container: Revisions, Edit time, etc.
 * * action-area: for editing
 * * * edit-page-textarea: textarea
 */
function startEditing() {
    document.getElementById("wme-live-editor").style.display = "block";
    var text = document.getElementById("edit-page-textarea").value;
    console.log("get original text");
    document.getElementById("wme-text-input").value = text;
}

function stopEditing() {
    document.getElementById("wme-live-editor").style.display = "none";
}