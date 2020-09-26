const STAR_ITEMS = document.querySelectorAll(".star-box > img");

Array.from(STAR_ITEMS).map((item) =>
  item.addEventListener("click", markingStar)
);

function markingStar() {
  console.log(this.id);
  const click_star = this.id.substring(4);
  let idx = 1;
  let remain_idx;
  while (idx <= click_star) {
    document.querySelector(`#star${idx}`).src = "full.png";
    idx++;
    remain_idx = idx;
  }
  while (remain_idx <= 5) {
    document.querySelector(`#star${remain_idx}`).src = "empty.png";
    remain_idx++;
  }
}
