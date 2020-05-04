document.getElementById('review_tags').addEventListener('keydown',prevent_submit)
document.getElementById('review_tags').addEventListener('keyup', tag_make)

let CHECK_LIST = []

function prevent_submit(e){
    if (e.key === 'Enter'){
        e.preventDefault()
    }
}

function tag_make(e) {
    // console.log(this.value)
    text_len = document.getElementById('text_width_cal')
    text_len.innerHTML = e.target.value
    console.log(text_len.offsetWidth)
    // this.style.width = 13.3 *(e.target.value.length+3)+'px'
    this.style.width = (text_len.offsetWidth+30)+'px'
    if (e.key === 'Enter' || e.key === ' ' ) {
        
        if (e.target.value !== "" && (CHECK_LIST.indexOf(e.target.value) === -1  ) ){
            CHECK_LIST.push(e.target.value)
            
            document.getElementById('tags_area').innerHTML += 
            '<div onclick="del_item()" class="tags_item">'+ e.target.value + 
                '<input type="hidden" name="' + e.target.value + '" value="' + e.target.value+'"> ✖'
            '</div>'
        }
        e.target.value=""
        e.preventDefault()
        document.getElementById('review_tags').addEventListener('keydown', tag_make)
    }
    if (e.key ==='Backspace'){
        if (e.target.value===""){
            let del_node = e.target.previousSibling.previousSibling.lastChild
           
            if (del_node) {
                if (del_node.childNodes.length !== 0 ) {
                    let del_text = (del_node.childNodes[1].value)
                    let index = CHECK_LIST.indexOf(del_text);
                    if (index !== -1) CHECK_LIST.splice(index, 1);
                }

                del_node.remove()
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