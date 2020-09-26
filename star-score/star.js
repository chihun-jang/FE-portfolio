const STAR_ITEMS = document.querySelectorAll(".star-box > img");

Array.from(STAR_ITEMS).map((item) =>
  item.addEventListener("click", markingStar)
);

function markingStar(e) {
  if (e.offsetX <= 50) {
    console.log("왼쪽");
  } else {
    console.log("오른쪽");
  }
  console.log(e.offsetX, this);

  const click_star = parseInt(this.id.substring(4));
  let idx = 1;
  let remain_idx;
  while (idx <= click_star) {
    if (idx === click_star) {
      if (e.offsetX <= 50) {
        console.log("반");
        document.querySelector(`#star${idx}`).src = "half.png";
      } else {
        console.log("풀");
        document.querySelector(`#star${idx}`).src = "full.png";
      }
    } else {
      document.querySelector(`#star${idx}`).src = "full.png";
    }
    idx++;
    remain_idx = idx;
  }
  while (remain_idx <= 5) {
    document.querySelector(`#star${remain_idx}`).src = "empty.png";
    remain_idx++;
  }
}
