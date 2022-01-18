
// 초, 분, 값의 초기값 설정 (다음 값을 조정하여 타이머 값 임의 변경 가능)
var s = 0;
var m = 0;
var h = 0;

var m_count = 0;
var h_count = 0;
var timer;
var btn_count = 0;

var subscription = document.getElementsByClassName("subscription")[0];
var time = document.getElementsByClassName("timer")[0];
var start_btn = document.getElementsByClassName("start_btn")[0];

// 타이머 스타트 함수


function StartTimer() {
  start_btn.innerHTML = "STARTING";
  subscription.innerHTML = "타이머가 작동중입니다!";
  Timer();
  // setTimeout 함수, 1초 간격으로 StartTimer 함수 실행 [재귀함수]
  timer = setTimeout(StartTimer, 1000);
  btn_count = 1;

  if (btn_count == 1) {
    start_btn.disabled = true;
  }
}

// 타이머 스탑 내부 함수
function StopTimer() {
  clearTimeout(timer);
  start_btn.innerHTML = "RESTART";
  subscription.innerHTML = "타이머가 정지되었습니다!";
  btn_count = 0;

  // 스타트 버튼 다중 클릭 방지
  if (btn_count == 0) {
  start_btn.disabled = false;
  }

}

// 타이머 초기화 내부 함수
function ClearTimer() {
  s = 0;
  m = 0;
  h = 0;
  m_count = 0;
  h_count = 0;

  btn_count = 0;
  if (btn_count == 0) {
  start_btn.disabled = false;
  }

  subscription.innerHTML = "타이머가 리셋 완료되었습니다!";
  start_btn.innerHTML = "시작";
  time.innerHTML = "00:00:00";
  clearTimeout(timer);
}

// 타이머 동작 내부 함수
function Timer() {
  s++;

  // 초가 60초 이상일 경우, 60초를 1분으로 변환
  // 초를 0으로 변환해주면서, 동시에 분의 자리 수 확인 카운트 값도 0으로 변환
  if (s >= 60) {
    s = 0;
    m_count = 0;
    m++;
  }

  // 분이 60분 이상일 경우, 60분을 1시간으로 변환
  // 분를 0으로 변환해주면서, 동시에 시간 자리 수 확인 카운트 값도 0으로 변환
  if (m >= 60) {
    m = 0;
    h_count = 0;
    h++;

  }

  // 값이 한 자리 일 경우, 0을 붙여준다.
  // Timer 함수를 작동하면서 계속해서 초기화 해주기 때문에 자리 수 카운트 값은 필요 없음
  if (s < 10) {
    s = '0' + s;
  }

  // 값이 한 자리 일 경우, 0을 붙여준다.
  // 카운트값을 별도로 지정하여, 10 아래 일 경우 카운트 값을 1로 설정
  if (h < 10) {
    if (h_count == 0) {
    h = '0' + h;
    h_count = 1;
    }
  }

  // 값이 한 자리 일 경우, 0을 붙여준다.
  // 카운트값을 별도로 지정하여, 10 아래 일 경우 카운트 값을 1로 설정
  if (m < 10) {
    if (m_count == 0) {
    m = '0' + m;
    m_count = 1;
    }
  }

  time.innerHTML = h + ":" + m + ":" + s;
}
