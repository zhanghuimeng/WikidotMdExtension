// add listeners
window.onload = function () {
    console.log("Hello extension!");

    var editOptions = document.getElementById("page-options-bottom");
    console.log("Not editing: " + editOptions.style.display);
    var observer = new MutationObserver(function() {
        if (editOptions.style.display === 'none'){
            console.log("Editing");
            startEditing();
        }
        else if (editOptions.style.display !== 'none') {
            console.log("Not Editing");
            stopEditing();
        }
    });
    observer.observe(editOptions,  { attributes: true, childList: true });
};

function startEditing() {

}

function stopEditing() {

}