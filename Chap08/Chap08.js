var output = "";
var count = 0;
var list = [];
var finish_count = 1;

// 문자열을 슬라이싱하기 위해 만들어놓은 임의의 변수
// substr(from, length)의 양식으로 진행
var n = 0;
var from = 0;
var length = 1;

// 기타 HTML 연결 변수
var result = document.getElementsByClassName("result")[0];
var message = document.getElementsByClassName("message")[0];
var data = document.getElementsByClassName("input")[0];

var start_btn = document.getElementsByClassName("start_btn")[0];
var auto_btn = document.getElementsByClassName("auto_btn")[0];
var finish_btn = document.getElementsByClassName("finish_btn")[0];

var input;

// 초기화 내부 함수, 변수들을 초기화해주면서 초기형태로 만들어준다
function reset() {

  input = data.value;

  // 비활성화된 버튼 모두 활성화
  start_btn.disabled = false;
  auto_btn.disabled = false;

  data.value = "";
  message.innerHTML = "코뮤니티 전광판 시스템이 초기화되었습니다!";
  result.style.visibility = "hidden";

  list = [];
  n = 0;
  from = 0;
  output = "";
  count = 0;
  finish_count = 1;
}

function auto() {
  input = data.value;

  if (input == "") {
    message.innerHTML = "상단에 메세지를 입력해주세요!";
    return 0;
  }

  else {

    if (finish_count == 1) {
    auto_start();
    setTimeout(auto, 1000);
    }
    else {
    // 자동실행 콘솔 완료 테스트 메세지 출력
    console.log("완료");
    }
  }
}

// 자동시작 내부 함수
function auto_start() {

  input = data.value;

  if (input == "") {
    message.innerHTML = "상단에 메세지를 입력해주세요!";
    return 0;
  }

  else {

    // 정상적인 동작을 위해 수동시작 버튼 비활성화
    start_btn.disabled = true;

  // 어떤 문자열의 길이가 올지 모르기 때문에, 슬라이싱을 해주면서 슬라이싱의 값이 비어있을 경우 무한반복문 멈춤
  while(true) {
    if (input.substr(from, length) != "") {
      list[n] = input.substr(from, length);
      from++, n++;
    }
    else {
      break;
    }
  }

  // while 반복문이 끝나면, 정상적으로 문자열을 리스트로 하나하나 정상적으로 분배 완료
  // 사용자가 버튼을 누를 때마다 카운트 값이 1씩 증가하고, 증가 값에 따라 리스트 값을 출력
  // 리스트 값이 undefined이 아닌 경우에만 출력, from 과 count 변수의 차가 0일 경우 출력이 완료되었다는 메세지 출력

  if (typeof(list[count]) != "undefined") {
  output = output + list[count];
  result.style.visibility = "visible";
  result.innerHTML = output;
  count++;
    if (from - count == 0) {
      message.innerHTML = "출력이 완료되었습니다 ;-)";
      finish_count = 0;
    }
    else {
    message.innerHTML = "자동 실행중입니다!";
      }
    }
  }
}

// 수동시작 내부 함수
function start() {

  input = data.value;


  if (input == "") {
    message.innerHTML = "상단에 메세지를 입력해주세요!";
    return 0;
  }

  else {

    // 정상적인 동작을 위해 자동시작 버튼 비활성화
    auto_btn.disabled = true;

  // 어떤 문자열의 길이가 올지 모르기 때문에, 슬라이싱을 해주면서 슬라이싱의 값이 비어있을 경우 무한반복문 멈춤
  while(true) {
    if (input.substr(from, length) != "") {
      list[n] = input.substr(from, length);
      from++, n++;
    }
    else {
      break;
    }
  }

  // while 반복문이 끝나면, 정상적으로 문자열을 리스트로 하나하나 정상적으로 분배 완료
  // 사용자가 버튼을 누를 때마다 카운트 값이 1씩 증가하고, 증가 값에 따라 리스트 값을 출력
  // 리스트 값이 undefined이 아닌 경우에만 출력, from 과 count 변수의 차가 0일 경우 출력이 완료되었다는 메세지 출력

  if (typeof(list[count]) != "undefined") {
  output = output + list[count];
  result.style.visibility = "visible";
  result.innerHTML = output;
  count++;
    if (from - count == 0) {
      message.innerHTML = "출력이 완료되었습니다 ;-)";
    }
    else {
    message.innerHTML = from - count + "번 더 수동시작 버튼을 클릭해주세요!";
      }
    }
  }
}
