
//check if user was regestred

function regFor(){
    var Name=register.name.value;
    var Age=parseInt(register.age.value);
    var Gender=register.gender.value;
    var Color=register.color.value;
    var Span=document.getElementById("spn");
    // console.log(Gender.value);

    if(Name.trim().length==0 || isNaN(Age) ||Gender.trim().length==0 ||Color.trim().length==0  ){
        console.log(Span);
        Span.innerText="Enter valid Data";
    }else{

        localStorage.setItem("registrationInfo",JSON.stringify({
            "name":Name,
            "age":Age,
            "gender":Gender,
            "color":Color
        }));
        window.location.href="home.html";
    }
}




// console.log(localStorage.getItem("registrationInfo"));
