
var input = document.getElementsByClassName("input")[0];
var check = document.getElementsByClassName("check")[0];
const statement = document.getElementsByClassName("result")[0];

function submit() {
    if (input.value == "") {
      check.style.visibility = "visible";
      check.innerHTML = "메세지를 먼저 입력해주세요!";
      statement.innerHTML = "메세지를 입력해주세요 ;-)";
    }

    else if (input.value != "") {
      check.style.visibility = "visible";
      check.innerHTML = "&quot" + input.value + "&quot" + " 키워드로 검색하신 결과예요 ;-)";

      if (input.value == "홈페이지") {
        statement.innerHTML = "www.h4vebeauty.com";
      }

      else {
        statement.innerHTML = "😭😭😭";
        check.innerHTML = "해당 서비스는 준비중이예요!";
      }
    }


}
