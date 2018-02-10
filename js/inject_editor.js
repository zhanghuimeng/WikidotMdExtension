isEditing = false;
isWikidot = false;
var intFetchPreview;

// add listeners
window.onload = function () {
    console.log("Hello extension!");

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
    registerTextChangeListener();
    intFetchPreview = setInterval(fetchPreview, 100);
    document.getElementById("wme-live-editor").style.display = "block";
    document.getElementById("action-area").style.display = "none";
    var text = document.getElementById("edit-page-textarea").value;
    console.log("get original text");
    document.getElementById("wme-text-input").value = text;
}

function stopEditing() {
    document.getElementById("wme-live-editor").style.display = "none";
    window.clearInterval(intFetchPreview);
}

function fetchPreview() {
    console.log("Fetching preview");
    var innerHTML = document.getElementById("page-content").innerHTML;
    document.getElementById("wme-display-panel").innerHTML = innerHTML;
}