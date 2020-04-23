document.querySelector('.dropdown').addEventListener('click',()=>{
    document.querySelector('.dropdown_itembox').classList.toggle('show')
})

drop_item = document.querySelectorAll('.dropdown_item')


Array.from(drop_item).forEach(item=>{
    item.addEventListener('click',()=>{
        document.querySelector('.dropdown_display').innerHTML = this.event.target.innerHTML +'<span>▼</span>'
    })
})