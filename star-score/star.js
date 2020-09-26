const STAR_ITEMS = document.querySelectorAll(".star-box > img");

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
  if (e.offsetX <= e.target.width / 2) {
    console.log("왼쪽");
  } else {
    console.log("오른쪽");
  }

  const click_star = parseInt(this.id.substring(4)); //별을 클릭하면 클릭한 별의 index를 반환(0부터 시작)

  let idx = 1;
  let remain_idx; //idx는 우리가 채울 별을 처리하는 var이고, remain_idx는 비워줄 별을 체크하는 idx
  while (idx <= click_star) {
    if (idx === click_star) {
      //마지막 index가 일치하는 것을 기준으로
      if (e.offsetX <= e.target.width / 2) {
        //반만채울것인지 꽉채울것인지 결정
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
    e.pageX - e.target.parentNode.offsetLeft, //드레그 이벤트를 구현하기 위해서 pageX를 들고오고 별을 둘러싼 box의 offsetLEft를 계산해준다.
    Math.ceil(e.pageX / (e.target.width / 2)),
    "별 몇개?"
  );
  const cursor_end = e.pageX - e.target.parentNode.offsetLeft;
  const half = Math.ceil(cursor_end / (e.target.width / 2)) % 2 === 1; //여기서 1단위가 별 반개인데 홀수이면 별 반개로 끝나는것
  //   const click_star = parseInt(this.id.substring(4));
  const drag_star = parseInt(Math.ceil(cursor_end / (e.target.width / 2)) / 2); //따라서 가득찬 별은 2로 나누고 정수화 시켜주면 된다.
  //   console.log(drag_star, "반 색칠?", half);
  let idx = 1;
  let remain_idx;
  while (idx <= drag_star) {
    if (idx === drag_star) {
      if (half) {
        //만약 반개를 채워야한다면 idx까지 하고 idx에서 1개만큼 더 가서 half
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
      //만약 마지막을 반개로 채운 상태라면 다음 별부터 공백별로 만들어줌
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
  //touch이벤트중에서 시작이벤트가 아닌 end이벤트를 추적해서 끝나는 위치와 함께 기본 box의 offsetLeft를 계산
  console.log("짜자자라라란", e["changedTouches"][0]["pageX"]);
  const half = Math.ceil(cursor_end / (e.target.width / 2)) % 2 === 1; //이하 코드는 drag와 유사하다
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
