let num = 1;

let eiTypeScore = 0;
let snTypeScore = 0;
let tfTypeScore = 0;
let jpTypeScore = 0;

function next() {
    $(".progress-bar").attr("style", "width: calc(100 / 12 *" + num + "%)");
    $("#title").html(q[num]["title"]);
    $("#type").val(q[num]["type"]);
    $("#A").html(q[num]["A"]);
    $("#B").html(q[num]["B"]);
    num++;
}

function start() {
    $("#main").hide();
    $("#qna").show();
    next();
}

$("#A").click(function() {

    if (num === 13) {
      $("#qna").hide();
      $("#result").show();
    
      let mbti = "";
      eiTypeScore < 2 ? (mbti += "I") : (mbti += "E");
      snTypeScore < 2 ? (mbti += "N") : (mbti += "S");
      tfTypeScore < 2 ? (mbti += "F") : (mbti += "T");
      jpTypeScore < 2 ? (mbti += "P") : (mbti += "J");
    
      $(".subtitle").html(result[mbti]["subtitle"]);
      $(".explain").html(result[mbti]["explain"]);
      $("#result_img").attr("src", result[mbti]["img"]);
    } else { 
      next(); 
    }
  });
  
  $("#B").click(function() {
    if (num === 13) {
      $("#qna").hide();
      $("#result").show();
    
      let mbti = "";
      eiTypeScore < 2 ? (mbti += "I") : (mbti += "E");
      snTypeScore < 2 ? (mbti += "N") : (mbti += "S");
      tfTypeScore < 2 ? (mbti += "F") : (mbti += "T");
      jpTypeScore < 2 ? (mbti += "P") : (mbti += "J");
    
      $(".subtitle").html(result[mbti]["subtitle"]);
      $(".explain").html(result[mbti]["explain"]);
      $("#result_img").attr("src", result[mbti]["img"]);
    } else { //버튼 클릭시 점수 계산
      next(); 
    }
  });

  function shareURL() {
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);

    const url = window.document.location.href;
    dummy.value = url;

    navigator.clipboard
      .writeText(dummy.value)
      .then(() => {
        alert("복사가 완료되었습니다");
      })
      .catch((err) => {
        console.log("err", err);
      });
    document.body.removeChild(dummy);
  }