let btn_add=document.getElementById("btn_add");
let name_input=document.getElementById("name_input");
let lastname_input=document.getElementById("lastname_input");
let age_input=document.getElementById("age_input");
let list_stu=document.getElementById("list_stu")
console.log(name_input.value);
console.log(lastname_input.value);
console.log(age_input.value);

btn_add.addEventListener("click" ,function(){
if (name_input.value.trim() == "" || surname_input.value.trim() == "" ||age_input.value.trim() == ""){

    alert("Empthy value")
}
else{
let table_elms=document.querySelectorAll("#list_stu td")
for(let element of table_elms){


    if(element.outerText ==text_input){
        alert("Artiq var")
        return;
    }
}
list_stu.innerHTML+=("<td>"+ text_input.value + "</td")
}

}





)