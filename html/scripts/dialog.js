let elmListDialog = document.querySelectorAll("div.dialog")
let elmListBtnOpenDialog = document.querySelectorAll("button.open-dialog")
let elmListBtnCloseDialog = document.querySelectorAll("button.close-dialog")

const lengthDialog = elmListDialog.length
// listener event click
for(let i = 0; i < lengthDialog; i++){
    elmListBtnOpenDialog[i].addEventListener("click", () =>{
        for(let i = 0; i < lengthDialog; i++){
            elmListDialog[i].style.display = "none"
        }
        elmListDialog[i].style.display = "block"
    })
}

for(let i = 0; i < lengthDialog; i++){
    elmListBtnCloseDialog[i].addEventListener("click", () =>{
        elmListDialog[i].style.display = "none"
    })
}