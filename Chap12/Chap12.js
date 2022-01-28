
var input = document.getElementsByClassName("input")[0];
var check = document.getElementsByClassName("check")[0];
const statement = document.getElementsByClassName("result")[0];
var check_box = document.getElementsByClassName("section1")[0];
let count = 0;

function submit() {


    if (input.value == "") {
      check.style.visibility = "visible";
      check.innerHTML = "메세지를 먼저 입력해주세요!";
      statement.innerHTML = "메세지가 여기에 출력됩니다!";
    }

    else if (input.value != "") {
      check.style.visibility = "visible";
      check.innerHTML = "&quot" + input.value + "&quot" + " 키워드로 검색하신 결과예요 ;-)";

      if (input.value == "홈페이지") {
        statement.innerHTML = "www.h4vebeauty.com";
      }

      else if (input.value == "다크모드" || input.value == "블랙모드") {
        if (count == 0) {
        statement.innerHTML = "메세지가 여기에 출력됩니다!";
          check.innerHTML = "다크모드로 전환을 해드렸어요 ;-)";
          document.body.style.backgroundColor = "#212121";
          check.style.color = "white";
          check_box.style.borderColor = "white";
          statement.style.color = "white";
          input.style.color = "white";
          input.style.background = "transparent";
          input.style.borderColor = "white";
          input.style.transition = "all 0.4s";
          check.style.transition = "all 0.4s";
          check_box.style.transition = "all 0.4s";
          document.body.style.transition = "all 0.4s";
          count = 1;
        }

        else if (count == 1) {
          check.innerHTML = "현재 상태가 다크모드예요 ;-)";
        }
      }

      else if (input.value == "화이트모드") {
        if (count == 1) {
          statement.innerHTML = "메세지가 여기에 출력됩니다!";
          check.innerHTML = "화이트모드로 전환을 해드렸어요 ;-)";
          document.body.style.backgroundColor = "white";
          check.style.color = "#1257BC";
          check_box.style.borderColor = "#1257BC";
          statement.style.color = "#1257BC";
          input.style.color = "#1257BC";
          input.style.background = "transparent";
          input.style.borderColor = "#1257BC";

          input.style.transition = "all 0.4s";
          check.style.transition = "all 0.4s";
          check_box.style.transition = "all 0.4s";
          document.body.style.transition = "all 0.4s";
          count = 0;
        }

        else if (count == 0) {
          check.innerHTML = "현재 상태가 화이트모드예요 ;-)";
        }
      }

      else {
        statement.innerHTML = "😭😭😭";
        check.innerHTML = "해당 서비스는 준비중이예요!";
      }
    }


}
