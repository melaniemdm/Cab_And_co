var nodeForm = document.querySelector("#send")
nodeForm.addEventListener("click", disappears)

function disappears(){
    var disappearsForm = document.querySelector("#form")
    disappearsForm.style.visibility="hidden"
}

var nodeForm = document.querySelector("#nousContacter")
nodeForm.addEventListener("click", appears)
function appears(){
    var appearsForm = document.querySelector("#form")
    appearsForm.style.visibility="visible"
}
document.addEventListener("keyup", function (e) {       
    if (e.keyCode === 27) {
        disappears()
     
    }});