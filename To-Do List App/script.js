let input_text = document.getElementById("inp");
let text = document.querySelector(".text");

function Add_task(){
    if (input_text.value==""){
        alert("Please Enter Task");
    }
    else{
        let newtask = document.createElement('ul');
        newtask.innerHTML = `${input_text.value} <i class="fa-sharp fa-solid fa-trash-can"></i>`;
        text.appendChild(newtask);
        input_text.value="";
        newtask.querySelector("i").addEventListener("click",delete_task);
        function delete_task(){
            newtask.remove();
        }

    }
}