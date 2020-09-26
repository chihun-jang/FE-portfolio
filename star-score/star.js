const STAR_ITEMS = document.querySelectorAll(".star-box > img");
const SET_SCORE = document.querySelector("#star-score");

// 클릭이벤트
Array.from(STAR_ITEMS).map((item) =>
  item.addEventListener("click", markingStar)
);

// drag이벤트
Array.from(STAR_ITEMS).map((item) =>
  item.addEventListener("dragend", dragingStar)
);

// touch이벤트
Array.from(STAR_ITEMS).map((item) =>
  item.addEventListener("touchend", touchStar)
);

function markingStar(e) {
  const click_star = parseInt(this.id.substring(4));

  let idx = 1;
  let remain_idx;
  while (idx <= click_star) {
    if (idx === click_star) {
      if (e.offsetX <= e.target.width / 2) {
        document.querySelector(`#star${idx}`).src = "half.png";
      } else {
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
  checkScore();
}

function dragingStar(e) {
  const cursor_end = e.pageX - e.target.parentNode.offsetLeft;
  const half = Math.ceil(cursor_end / (e.target.width / 2)) % 2 === 1;
  const drag_star = parseInt(Math.ceil(cursor_end / (e.target.width / 2)) / 2);
  let idx = 1;
  let remain_idx;
  while (idx <= drag_star) {
    if (idx === drag_star) {
      if (half) {
        document.querySelector(`#star${idx}`).src = "full.png";
        document.querySelector(`#star${idx + 1}`).src = "half.png";
      } else {
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
  while (remain_idx <= 5) {
    document.querySelector(`#star${remain_idx}`).src = "empty.png";
    remain_idx++;
  }
  checkScore();
}

function touchStar(e) {
  const cursor_end =
    e["changedTouches"][0]["pageX"] - e.target.parentNode.offsetLeft;
  const half = Math.ceil(cursor_end / (e.target.width / 2)) % 2 === 1;
  const drag_star = parseInt(Math.ceil(cursor_end / (e.target.width / 2)) / 2);
  let idx = 1;
  let remain_idx;
  while (idx <= drag_star) {
    if (idx === drag_star) {
      if (half) {
        document.querySelector(`#star${idx}`).src = "full.png";
        document.querySelector(`#star${idx + 1}`).src = "half.png";
      } else {
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
  while (remain_idx <= 5) {
    document.querySelector(`#star${remain_idx}`).src = "empty.png";
    remain_idx++;
  }

  checkScore();
}
//optional
function checkScore() {
  let score = 0;
  Array.from(STAR_ITEMS).map((item) => {
    const ImageSrcIndex = item.src.indexOf(".png");
    const checkScoreFlag = item.src.substring(ImageSrcIndex - 1, ImageSrcIndex);

    switch (checkScoreFlag) {
      case "y":
        score = score + 0;
        break;
      case "f":
        score = score + 0.5;
        break;

      case "l":
        score = score + 1;
        break;

      default:
    }
  });

  SET_SCORE.value = score;
}
