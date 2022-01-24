
var list = [];
count = 0;
symbol_count = 0;
var timer;


var number_add = document.getElementsByClassName("number_add")[0];
var number_message = document.getElementsByClassName("number_message")[0];
var caller = document.getElementById("caller");


function check() {

  // 아이폰 번호추가 이벤트 따라하기
  if (count == 1) {
    number_message.style.visibility = "visible";
    number_add.style.visibility = "visible";
    number_add.style.transition = "all 0.4s";
    number_add.style.opacity = "1";
  }

  if (list[0] == '0' && list[1] == '1') {
    if (list[2] == '0') {
      if (count == 3) {
        list[count] = "-";
        number_message.innerHTML += '-';
        count++;

      }

      if (count == 8) {
        list[count] = "-";
        number_message.innerHTML += '-';
        count++;
      }

      if (count == 14) {
        list.splice(3,1);
        list.splice(7,1);
        number_message.innerHTML = list.join('');
      }

        else {
          return 0;
        }
      }
    }
  }

function one() {
  list[count] = "1";
  number_message.innerHTML += '1';
  count++;
  check();
}

function two() {
    list[count] = "2";
    number_message.innerHTML += '2';
    count++;
    check();
}

function three() {
      list[count] = "3";
      number_message.innerHTML += '3';
      count++;
      check();
}

function four() {
      list[count] = "4";
      number_message.innerHTML += '4';
      count++;
      check();
}

function five() {
      list[count] = "5";
      number_message.innerHTML += '5';
      count++;
      check();
}

function six() {
      list[count] = "6";
      number_message.innerHTML += '6';
      count++;
      check();
}

function seven() {
      list[count] = "7";
      number_message.innerHTML += '7';
      count++;
      check();
}


function eight() {
      list[count] = "8";
      number_message.innerHTML += '8';
      count++;
      check();
}

function nine() {
      list[count] = "9";
      number_message.innerHTML += '9';
      count++;
      check();
}


function nine() {
      list[count] = "9";
      number_message.innerHTML += '9';
      count++;
      check();
}


function nine() {
      list[count] = "9";
      number_message.innerHTML += '9';
      count++;
      check();
}

function zero() {
  list[count] = "0";
  number_message.innerHTML += '0';
  count++;
  check();
}

function symbol() {
      list[count] = "*";
      number_message.innerHTML += '*';
      count++;
      check();
}

function symbol_2() {
      list[count] = "#";
      number_message.innerHTML += '#';
      count++;
      check();
}

function call() {
    if (list.length == 14) {
      list.splice(3,1);
      list.splice(7,1);
      setTimeout(function(){ alert(list.join('') + "으로 정상 연결 되었습니다 ;-)"); }, 2000);
      caller.href = url;
    }

    else {
      var url = 'facetime:' + list.join('');
      setTimeout(function(){ alert(list.join('') + "으로 정상 연결 되었습니다 ;-)"); }, 2000);
      caller.href = url;
    }
}
