// document.getElementById('review_tags').addEventListener('keydown',prevent_submit) 
document.getElementById('review_tags').addEventListener('keydown', tag_make)


//아래 코드를 사용하면 tag_make부분은 keyup으로 처리해주어 key에서 손을 뗄때만 이벤트가 발생하므로
//ㅇㅇㅇㅇ 이러한 지속적인 key press의 경우에 좀더 효율적으로 처리할수 있지 않을까 싶다.
// function prevent_submit(e){
//     if (e.key === 'Enter'){
//         e.preventDefault()
//     }
// }

let CHECK_LIST = []

function tag_make(e) {
    // console.log(this.value)
    if (e.key === 'Enter') {

        if (e.target.value !== "" && (CHECK_LIST.indexOf(e.target.value) === -1  ) ){
            CHECK_LIST.push(e.target.value)

            document.getElementById('tags_area').innerHTML += 
            '<div onclick="del_item()" class="tags_item">'+ e.target.value + 
            '<input type="hidden" name="' + e.target.value + '" value="' + e.target.value+'"> ✖'
            '</div>'
        }
        e.target.value=""
        e.preventDefault()
    }
    if (e.key ==='Backspace'){
        if (e.target.value===""){
            let del_node = e.target.previousSibling.previousSibling.lastChild
    
            let del_text = (del_node.childNodes[1].value)

            if (del_node) {
                
                let index = CHECK_LIST.indexOf(del_text);
                if (index !== -1) CHECK_LIST.splice(index, 1);

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