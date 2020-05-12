
myitems = document.querySelectorAll('.nav-item')

mysubitems = document.querySelectorAll('.nav-subitem')

mysubnav = document.querySelectorAll('.nav-subcontainer')

pre_circle = document.querySelectorAll('.nav-subitem-circle')

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
}

function move_circle(){

    this.parentNode.lastChild.previousSibling.style.left = this.offsetLeft+ 'px';
    this.parentNode.lastChild.previousSibling.style.width = this.offsetWidth + 'px';
    this.parentNode.lastChild.previousSibling.style.height = this.offsetHeight + 'px';

    console.log(this.parentNode.lastChild.previousSibling)
    console.log(this.offsetLeft )
}