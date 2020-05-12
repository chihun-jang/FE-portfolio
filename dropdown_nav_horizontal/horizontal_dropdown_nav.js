
myitems = document.querySelectorAll('.nav-item')

mysubitems = document.querySelectorAll('.nav-subitem')

mysubnav = document.querySelectorAll('.nav-subcontainer')

pre_circle = document.querySelectorAll('.nav-subitem-circle')

mymus = window.addEventListener('mousemove', remove_nav)

FLAG = 0

Array.from(myitems).map((item)=>{
    item.addEventListener('mouseover', move_line)

})

Array.from(mysubitems).map((item)=>{
    item.addEventListener('mouseover', move_circle)
})

function move_line(){
    Array.from(mysubnav).map((item) => {
        item.style.opacity = 0
    })
    Array.from(pre_circle).map((item)=>{
        item.style.width = '0px'
        item.style.height = '0px'
    })
    this.nextSibling.nextSibling.style.opacity = 1
    
    this.parentNode.lastChild.previousSibling.style.left = this.offsetLeft + 'px';
    this.parentNode.lastChild.previousSibling.style.width = this.offsetWidth + 'px';
    this.parentNode.lastChild.previousSibling.style.height = this.offsetHeight+18 + 'px';
    document.querySelector('.nav-item-underline-triangle').style.display = "inline-block" ;
    FLAG = 1

}

function move_circle(){

    this.parentNode.lastChild.previousSibling.style.left = this.offsetLeft+ 'px';
    this.parentNode.lastChild.previousSibling.style.width = this.offsetWidth + 'px';
    this.parentNode.lastChild.previousSibling.style.height = this.offsetHeight + 'px';

   
    FLAG = 1

}

function remove_nav(){
    mus_loca = this.event.target.classList
    if ((mus_loca.toString()).indexOf('nav') === -1 && FLAG === 1){
        Array.from(mysubnav).map((item) => {
            item.style.opacity = 0
        })
        Array.from(pre_circle).map((item) => {
            item.style.width = '0px'
            item.style.height = '0px'
        })
        document.querySelector('.nav-item-underline-triangle').style.display = "none";
        document.querySelector('.nav-item-underline').style.width = '0px'
        FLAG = 0
    }
}