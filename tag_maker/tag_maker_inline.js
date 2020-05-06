document.getElementById('review_tags').addEventListener('keydown',prevent_submit)
document.getElementById('review_tags').addEventListener('keyup', tag_make)

let CHECK_LIST = []

function prevent_submit(e){
    if (e.key === 'Enter'){
        e.preventDefault()
    }
}

function tag_make(e) {
    text_len = document.getElementById('text_width_cal')
    text_len.innerHTML = e.target.value
    
    this.style.width = (text_len.offsetWidth+30)+'px'
    if (e.key === 'Enter' || e.key === ' ' ) {
        
        if (e.target.value !== "" && (CHECK_LIST.indexOf(e.target.value) === -1  ) ){
            CHECK_LIST.push(e.target.value)
            
            document.getElementById('tags_area').innerHTML +=
            '<div onclick="del_item()" class="tags_item"># ' + e.target.value +
                '<input type="hidden" name="' + e.target.value + '" value="' + e.target.value + '"> &nbsp&nbsp&nbspX '
            '</div>'
        }
        e.target.value=""
        e.preventDefault()
        document.getElementById('review_tags').addEventListener('keydown', tag_make)
        this.style.width = 90 + 'px'
    }
    if (e.key ==='Backspace'){
        if (e.target.value===""){
            let del_node = e.target.parentNode.previousSibling.previousSibling.lastChild
           
                if (del_node.childNodes.length !== 0 ) {
                    let del_text = (del_node.childNodes[1].value)
                    let index = CHECK_LIST.indexOf(del_text);
                    if (index !== -1) CHECK_LIST.splice(index, 1);
                    del_node.remove()
                    this.style.width = 90 + 'px'
                }
  
            }
        }
}

function del_item(){
    let del_text = this.event.target.childNodes[1].value
    let index = CHECK_LIST.indexOf(del_text);
    if (index !== -1) CHECK_LIST.splice(index, 1)
    this.event.target.remove()
}