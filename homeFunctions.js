
var storedValues = JSON.parse(localStorage.getItem("registrationInfo"));
console.log(storedValues);
console.log();
if (storedValues==null||storedValues.name==''||storedValues.age==''||storedValues.gender==''||storedValues.color=='') {
    window.location.pathname = "JSLab5/task5/register.html";
} else {
    var imageElement = document.getElementById("image");
    var textElement = document.getElementById("text");
    // console.log(imageElement.src);
    if (storedValues.gender== "male") {
        imageElement.src = "images/male.jpg";
    } else if (storedValues.gender == "female") {
        imageElement.src = "images/female.jpg";
    } else {
        imageElement.style.display = "null";
        document.write("not valid data");
    }
   
    textElement.innerHTML = storedValues.name;
    textElement.style.color = storedValues.color;
}
