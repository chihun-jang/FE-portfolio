const STAR_ITEMS = document.querySelectorAll(".star-box > img");

Array.from(STAR_ITEMS).map((item) =>
  item.addEventListener("click", markingStar)
);
Array.from(STAR_ITEMS).map((item) =>
  item.addEventListener("dragend", dragingStar)
);
Array.from(STAR_ITEMS).map((item) =>
  item.addEventListener("touchend", touchStar)
);

function markingStar(e) {
  if (e.offsetX <= e.target.width / 2) {
    console.log("왼쪽");
  } else {
    console.log("오른쪽");
  }
  console.log(e, this);

  const click_star = parseInt(this.id.substring(4));
  let idx = 1;
  let remain_idx;
  while (idx <= click_star) {
    if (idx === click_star) {
      if (e.offsetX <= e.target.width / 2) {
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

function dragingStar(e) {
  if (e.offsetX <= e.target.width / 2) {
    console.log("왼쪽");
  } else {
    console.log("오른쪽");
  }
  console.log(
    e.pageX - e.target.parentNode.offsetLeft,
    Math.ceil(e.pageX / (e.target.width / 2)),
    "별 몇개?"
  );
  const cursor_end = e.pageX - e.target.parentNode.offsetLeft;
  console.log(cursor_end, "워우어어어어", e.target.parentNode.offsetLeft);
  const half = Math.ceil(cursor_end / (e.target.width / 2)) % 2 === 1;
  //   const click_star = parseInt(this.id.substring(4));
  const drag_star = parseInt(Math.ceil(cursor_end / (e.target.width / 2)) / 2);
  //   console.log(drag_star, "반 색칠?", half);
  let idx = 1;
  let remain_idx;
  while (idx <= drag_star) {
    if (idx === drag_star) {
      if (half) {
        console.log("반");
        document.querySelector(`#star${idx}`).src = "full.png";
        document.querySelector(`#star${idx + 1}`).src = "half.png";
      } else {
        console.log("풀");
        document.querySelector(`#star${idx}`).src = "full.png";
      }
    } else {
      document.querySelector(`#star${idx}`).src = "full.png";
    }
    idx++;
    if (half) {
      remain_idx = idx + 1;
    } else {
      remain_idx = idx;
    }
  }
  console.log(remain_idx, "남은 애들 얼마나 체크를 해줄까");
  while (remain_idx <= 5) {
    document.querySelector(`#star${remain_idx}`).src = "empty.png";
    remain_idx++;
  }
}

function touchStar(e) {
  if (e.offsetX <= e.target.width / 2) {
    console.log("왼쪽");
  } else {
    console.log("오른쪽");
  }
  //   console.log(e.offsetX, Math.ceil(e.offsetX / (e.target.width/2)), "별 몇개?");
  const cursor_end =
    e["changedTouches"][0]["pageX"] - e.target.parentNode.offsetLeft;

  console.log("짜자자라라란", e["changedTouches"][0]["pageX"]);
  const half = Math.ceil(cursor_end / (e.target.width / 2)) % 2 === 1;
  //   const click_star = parseInt(this.id.substring(4));
  const drag_star = parseInt(Math.ceil(cursor_end / (e.target.width / 2)) / 2);
  console.log(cursor_end, "이거 계산해줘요");
  let idx = 1;
  let remain_idx;
  while (idx <= drag_star) {
    if (idx === drag_star) {
      if (half) {
        console.log("반");
        document.querySelector(`#star${idx}`).src = "full.png";
        document.querySelector(`#star${idx + 1}`).src = "half.png";
      } else {
        console.log("풀");
        document.querySelector(`#star${idx}`).src = "full.png";
      }
    } else {
      document.querySelector(`#star${idx}`).src = "full.png";
    }
    idx++;
    if (half) {
      remain_idx = idx + 1;
    } else {
      remain_idx = idx;
    }
  }
  console.log(remain_idx, "남은 애들 얼마나 체크를 해줄까");
  while (remain_idx <= 5) {
    document.querySelector(`#star${remain_idx}`).src = "empty.png";
    remain_idx++;
  }
}
