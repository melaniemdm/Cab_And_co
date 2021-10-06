var nodeForm = document.querySelector("#send");
nodeForm.addEventListener("click", disappears);

function disappears(){
    var disappearsForm = document.querySelector("#form");
    disappearsForm.style.visibility="hidden";
}

var nodeContact = document.querySelector("#nousContacter");
nodeContact.addEventListener("click", appears);
function appears(){
    var appearsForm = document.querySelector("#form");
    appearsForm.style.visibility="visible";
}
document.addEventListener("keyup", function (e) {       
    if (e.keyCode === 27) {
        disappears();
     
    }});
var nodeBurger = document.querySelector("#burger");
nodeBurger.addEventListener("click", displaySommaire);    
var nodeSommaire = document.querySelector("#sommaire");
var nodeBurgerClose = document.querySelector("#burgerClose");
nodeBurgerClose.addEventListener("click", closeSommaire);    

function displaySommaire(){
    nodeSommaire.style.display = "flex";
    nodeBurger.style.display="none";
    nodeBurgerClose.style.display = "flex";
}

function closeSommaire(){
    nodeSommaire.style.display = "none";
    nodeBurgerClose.style.display = "none";
    nodeBurger.style.display="block";
}
