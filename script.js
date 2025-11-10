let boxes = document.querySelectorAll(".box");
let counter = true;

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(counter == true)
        {
        box.innerText = ("X");
    counter = false
    box.disabled = true;
        }
    else
    {
    box.innerText = ("O");
    counter = true;
    box.disabled = true;
    }
    })
})

