
save_btn = document.getElementById('save')

change_btn = document.getElementById('change')


save_btn.addEventListener('click', color_save)
change_btn.addEventListener('click', color_change)


// function color_save(){
//     window.sessionStorage.setItem('bodycolor', 'yellow')
// }

// function color_change() {
//     temp = window.sessionStorage.getItem('bodycolor')

//     document.body.style.backgroundColor  = temp
// }

function color_save() {
    window.localStorage.setItem('bodycolor', 'yellow')
}

function color_change() {
    temp = window.localStorage.getItem('bodycolor')

    document.body.style.backgroundColor = temp
}