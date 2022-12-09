window.onload = init;

function init() {
    
var button = document.getElementById("btnAdd").onclick = addcomment;
}

function addcomment() {

//Name
    var nameInput = document.getElementById("Name");
    var name = nameInput.value;

    var li = document.createElement("li");
    li.innerHTML = ("Name: ") + name;

//Comments
    var comment = document.getElementById("Comment");
    var comments = comment.value;

    var lii = document.createElement("li");
    lii.innerHTML = ("Comments: ") + comments;

//Add them to the list
    var ul = document.getElementById("commentsection")
    ul.appendChild(li);
    ul.appendChild(lii);
}


