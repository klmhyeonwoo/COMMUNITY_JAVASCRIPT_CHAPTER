function result() {
  // 클릭 이벤트 변수 선언 [변경되는 태그 p]
  var statement = document.getElementsByClassName('input_box')[0].value;
  var result = document.getElementsByClassName('result')[0];

  // number 파싱 실행
  if (parseInt(statement) || parseFloat(statement)) {
    result.innerHTML = "변수의 타입은 'number' 입니다";
    console.log("number");
  }

  // boolean 조건 실행
  else if (statement == "true" || statement == "false") {
    result.innerHTML = "변수의 타입은 'boolean' 입니다";
    console.log("boolean");
  }

  // null 조건 실행
  else if (statement == "null") {
    result.innerHTML = "변수의 타입은 'object' 입니다";
    console.log("object");
  }

  // string 조건 실행
  else {
    if (statement == "") {
      alert("변수 값을 입력해주세요!");
      result.innerHTML = "변수의 타입은 'undefined' 입니다";
      console.log("undefined");
    }

    if (statement != "") {
      result.innerHTML = "변수의 타입은 'string' 입니다";
      console.log("string");
    }
  }

}
