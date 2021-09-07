let id_anterior = "free";

function hideContent(id){
    var content = document.getElementById(id);
    content.style.display = "none";
}

function showContent(id) {
    var content = document.getElementById(id);
    if (id_anterior != id){
        hideContent(id_anterior);
    }
    id_anterior = id;
    content.style.display = "block";
}