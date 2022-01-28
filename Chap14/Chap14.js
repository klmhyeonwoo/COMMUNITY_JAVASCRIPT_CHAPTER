
var input = document.getElementsByClassName("input")[0];
var check = document.getElementsByClassName("check")[0];
const statement = document.getElementsByClassName("result")[0];
var check_box = document.getElementsByClassName("section1")[0];
var city_name;
let count = 0;
let weather = 0;
let city_value;
let weather_value;
// CDN 코드 Typewriter 코드
var typewriter = new Typewriter(statement, {
    loop: false
});
var hello = ["안녕하세요! 반가워요 ;-)", "오늘도 좋은 하루예요! 반가워요 ;-)", "안녕하세요! 무엇을 드와드릴까요? ;-)"];

// 날씨 데이터 정렬 코드
//var w_id_arr = [201,200,202,210,211,212,221,230,231,232,
//300,301,302,310,311,312,313,314,321,500,
//501,502,503,504,511,520,521,522,531,600,
//601,602,611,612,615,616,620,621,622,701,
//711,721,731,741,751,761,762,771,781,800,
//801,802,803,804,900,901,902,903,904,905,
//906,951,952,953,954,955,956,957,958,959,
//960,961,962];

//var w_kor_arr = ["가벼운 비를 동반한 천둥구름","비를 동반한 천둥구름","폭우를 동반한 천둥구름","약한 천둥구름",
//"천둥구름","강한 천둥구름","불규칙적 천둥구름","약한 연무를 동반한 천둥구름","연무를 동반한 천둥구름",
//"강한 안개비를 동반한 천둥구름","가벼운 안개비","안개비","강한 안개비","가벼운 적은비","적은비",
//"강한 적은비","소나기와 안개비","강한 소나기와 안개비","소나기","악한 비","중간 비","강한 비",
//"매우 강한 비","극심한 비","우박","약한 소나기 비","소나기 비","강한 소나기 비","불규칙적 소나기 비",
//"가벼운 눈","눈","강한 눈","진눈깨비","소나기 진눈깨비","약한 비와 눈","비와 눈","약한 소나기 눈",
//"소나기 눈","강한 소나기 눈","박무","연기","연무","모래 먼지","안개","모래","먼지","화산재","돌풍",
//"토네이도","구름 한 점 없는 맑은 하늘","약간의 구름이 낀 하늘","드문드문 구름이 낀 하늘","구름이 거의 없는 하늘",
//"구름으로 뒤덮인 흐린 하늘","토네이도","태풍","허리케인","한랭","고온","바람부는","우박","바람이 거의 없는",
//"약한 바람","부드러운 바람","중간 세기 바람","신선한 바람","센 바람","돌풍에 가까운 센 바람","돌풍",
//"심각한 돌풍","폭풍","강한 폭풍","허리케인"];

//var apiURI = "http://api.openweathermap.org/data/2.5/weather?q="+"jeju"+"&appid="+"9c1f751188f8e6b495ec3ec109d1c600";
//        $.ajax({
//            url: apiURI,
//            dataType: "json",
//            type: "GET",
//            async: "false",
//            success: function(resp) {
//                console.log(resp);
                // console.log("현재온도 : "+ (resp.main.temp- 273.15) );
                // console.log("현재습도 : "+ resp.main.humidity);
//                console.log("날씨 : "+ resp.weather[0].main );
//                console.log("상세날씨설명 : "+ resp.weather[0].id);
//                resp.weather[0].description
                // console.log("바람   : "+ resp.wind.speed );
                // console.log("나라   : "+ resp.sys.country );
//                console.log("도시이름  : "+ resp.name );
                // console.log("구름  : "+ (resp.clouds.all) +"%" );
//            }
//        })



// 초기 상단 메세지
typewriter.typeString('챗봇이 이곳으로 대답을 할거예요 ;-)')
    .pauseFor(500)
    .start();

// 날씨 코드 값 한글화 코드
function wDescEngToKor(w_id) {

  var w_id_arr = [201,200,202,210,211,212,221,230,231,232,
  300,301,302,310,311,312,313,314,321,500,
  501,502,503,504,511,520,521,522,531,600,
  601,602,611,612,615,616,620,621,622,701,
  711,721,731,741,751,761,762,771,781,800,
  801,802,803,804,900,901,902,903,904,905,
  906,951,952,953,954,955,956,957,958,959,
  960,961,962];

  var w_kor_arr = ["가벼운 비를 동반한 천둥구름","비를 동반한 천둥구름","폭우를 동반한 천둥구름","약한 천둥구름",
  "천둥구름","강한 천둥구름","불규칙적 천둥구름","약한 연무를 동반한 천둥구름","연무를 동반한 천둥구름",
  "강한 안개비를 동반한 천둥구름","가벼운 안개비","안개비","강한 안개비","가벼운 적은비","적은비",
  "강한 적은비","소나기와 안개비","강한 소나기와 안개비","소나기","악한 비","중간 비","강한 비",
  "매우 강한 비","극심한 비","우박","약한 소나기 비","소나기 비","강한 소나기 비","불규칙적 소나기 비",
  "가벼운 눈","눈","강한 눈","진눈깨비","소나기 진눈깨비","약한 비와 눈","비와 눈","약한 소나기 눈",
  "소나기 눈","강한 소나기 눈","박무","연기","연무","모래 먼지","안개","모래","먼지","화산재","돌풍",
  "토네이도","구름 한 점 없는 맑은 하늘","약간의 구름이 낀 하늘","드문드문 구름이 낀 하늘","구름이 거의 없는 하늘",
  "구름으로 뒤덮인 흐린 하늘","토네이도","태풍","허리케인","한랭","고온","바람부는","우박","바람이 거의 없는",
  "약한 바람","부드러운 바람","중간 세기 바람","신선한 바람","센 바람","돌풍에 가까운 센 바람","돌풍",
  "심각한 돌풍","폭풍","강한 폭풍","허리케인"];


    for(var i=0; i<w_id_arr.length; i++) {
      if(w_id_arr[i] == w_id) {
          return w_kor_arr[i];
        break;
      }
    }
    return "none";
  }
// 날씨 코드 값 한글화 코드 종료

// 날씨 API 연결 내부 함수 구현
function city(city_value) {
  var apiURI = "http://api.openweathermap.org/data/2.5/weather?q="+city_value+"&appid="+"9c1f751188f8e6b495ec3ec109d1c600";

          $.ajax({
              url: apiURI,
              dataType: "json",
              type: "GET",
              async: "false",
              success: function(resp) {
                  //console.log("금일 " + city_name + " 날씨는 " + wDescEngToKor(resp.weather[0].id) + "입니다 ;-)");
                  //statement.innerHTML = "금일 &quot" + city_name + "&quot 날씨는 " + wDescEngToKor(resp.weather[0].id) + "입니다 ;-)";
                  typewriter
                      .deleteAll()
                      .typeString(wDescEngToKor(resp.weather[0].id))
                      .pauseFor(300)
                      .start();
              }
          })
        }
// 날씨 API 연결 내부 함수 종료

// 버튼 이벤트 함수 시작
function submit() {

    if (input.value == "") {
      check.style.visibility = "visible";
      check.innerHTML = "메세지를 먼저 입력해주세요!";
      input.value = "";
    }

    // value 값이 비어있지 않을 경우, 사용자의 검색 내부 과정
    else if (input.value != "") {
      // 기본적으로 값을 입력하면 visibility 활성화
      check.style.visibility = "visible";
      check.innerHTML = "&quot" + input.value + "&quot" + " 키워드로 검색하신 결과예요 ;-)";

      // 홈페이지 입력 시, 결과 값 출력
      if (input.value == "홈페이지") {
        typewriter
            .deleteAll()
            .typeString('www.h4vebeauty.com')
            .pauseFor(500)
            .start();
            input.value = "";
      }

      else if (input.value.replace(/(\s*)/g,"") == "안녕" || input.value.replace(/(\s*)/g,"") == "안녕하세요") {
        check.innerHTML = "반가워요, 저는 현우님의 챗봇이에요 ;-)";
        typewriter
            .deleteAll()
            .typeString(hello[Math.floor(Math.random() * hello.length)])
            .pauseFor(500)
            .start();
            input.value = "";
      }


      // 날씨 관련 입력 시, 결과 값 출력
      else if (input.value.replace(/(\s*)/g,"") == "오늘의날씨" || input.value.replace(/(\s*)/g,"") == "날씨") {
        check.innerHTML = "오늘의 날씨를 챗봇으로 알려드릴게요, &quot서울 날씨, 용인의 날씨&quot 와 같이 원하는 지역을 검색해주세요!";
        weather = 1;
        input.value = "";
      }

      // weater 값이 1로 활성화 되어있을 때, 날씨 정보 제공 조건문

                else if (input.value.replace(/(\s*)/g,"") == "용인의날씨" || input.value.replace(/(\s*)/g,"") == "용인날씨")  {
                      if (weather == 1) {
                      city_value = 'Yongin';
                      city_name = input.value;
                      city(city_value);
                      input.value = "";
                    }
                    else {
                      check.innerHTML = "날씨 기능을 사용하기 전에 챗봇에 &quot오늘의 날씨&quot 라고 입력해보세요 ;-)";
                      input.value = "";
                    }
                  }

                //서울특별시
                else if (input.value.replace(/(\s*)/g,"") == "서울의날씨" || input.value.replace(/(\s*)/g,"") == "서울날씨") {
                    if (weather == 1) {
                      city_value = 'Seoul';
                      city_name = input.value;
                      city(city_value);
                      input.value = "";
                    }
                    else {
                      check.innerHTML = "날씨 기능을 사용하기 전에 챗봇에 &quot오늘의 날씨&quot 라고 입력해보세요 ;-)";
                      input.value = "";
                    }
                  }

                //인천특별시
                else if (input.value.replace(/(\s*)/g,"") == "인천의날씨" || input.value.replace(/(\s*)/g,"") == "인천날씨") {
                    if (weather == 1) {
                      city_value = 'Incheon';
                      city_name = input.value;
                      city(city_value);
                      input.value = "";
                      }
                      else {
                        check.innerHTML = "날씨 기능을 사용하기 전에 챗봇에 &quot오늘의 날씨&quot 라고 입력해보세요 ;-)";
                        input.value = "";
                      }
                  }

                  //대전특별시
                  else if (input.value.replace(/(\s*)/g,"") == "대전의날씨" || input.value.replace(/(\s*)/g,"") == "대전날씨") {
                    if (weather == 1) {
                      city_value = 'Daejeon';
                      city_name = input.value;
                      city(city_value);
                      input.value = "";
                      }
                      else {
                        check.innerHTML = "날씨 기능을 사용하기 전에 챗봇에 &quot오늘의 날씨&quot 라고 입력해보세요 ;-)";
                        input.value = "";
                      }
                    }

                  // 대구광역시
                  else if (input.value.replace(/(\s*)/g,"") == "대구의날씨" || input.value.replace(/(\s*)/g,"") == "대구날씨") {
                    if (weather == 1) {
                      city_value = 'Daegu';
                      city_name = input.value;
                      city(city_value);
                      input.value = "";
                      }
                      else {
                        check.innerHTML = "날씨 기능을 사용하기 전에 챗봇에 &quot오늘의 날씨&quot 라고 입력해보세요 ;-)";
                        input.value = "";
                      }
                    }

                    // 울산광역시
                    else if (input.value.replace(/(\s*)/g,"") == "울산의날씨" || input.value.replace(/(\s*)/g,"") == "울산날씨") {
                      if (weather == 1) {
                        city_value = 'Ulsan';
                        city_name = input.value;
                        city(city_value);
                        input.value = "";
                        }
                        else {
                          check.innerHTML = "날씨 기능을 사용하기 전에 챗봇에 &quot오늘의 날씨&quot 라고 입력해보세요 ;-)";
                          input.value = "";
                        }
                      }

                      // 부산광역시
                      else if (input.value.replace(/(\s*)/g,"") == "부산의날씨" || input.value.replace(/(\s*)/g,"") == "부산날씨") {
                        if (weather == 1) {
                          city_value = 'Busan';
                          city_name = input.value;
                          city(city_value);
                          input.value = "";
                          }
                          else {
                            check.innerHTML = "날씨 기능을 사용하기 전에 챗봇에 &quot오늘의 날씨&quot 라고 입력해보세요 ;-)";
                            input.value = "";
                          }
                        }

                        // 광주광역시
                        else if (input.value.replace(/(\s*)/g,"") == "광주의날씨" || input.value.replace(/(\s*)/g,"") == "광주날씨") {
                          if (weather == 1) {
                            city_value = 'Gwangju';
                            city_name = input.value;
                            city(city_value);
                            input.value = "";
                            }
                            else {
                              check.innerHTML = "날씨 기능을 사용하기 전에 챗봇에 &quot오늘의 날씨&quot 라고 입력해보세요 ;-)";
                              input.value = "";
                            }
                          }

                          // 세종자치특별시
                          else if (input.value.replace(/(\s*)/g,"") == "세종의날씨" || input.value.replace(/(\s*)/g,"") == "세종날씨") {
                            if (weather == 1) {
                              city_value = 'Sejong';
                              city_name = input.value;
                              city(city_value);
                              input.value = "";
                              }
                              else {
                                check.innerHTML = "날씨 기능을 사용하기 전에 챗봇에 &quot오늘의 날씨&quot 라고 입력해보세요 ;-)";
                                input.value = "";
                              }
                            }

                            // 제주특별자치도
                            else if (input.value.replace(/(\s*)/g,"") == "제주의날씨" || input.value.replace(/(\s*)/g,"") == "제주날씨") {
                              if (weather == 1) {
                                city_value = 'Jeju';
                                city_name = input.value;
                                city(city_value);
                                input.value = "";
                                }
                                else {
                                  check.innerHTML = "날씨 기능을 사용하기 전에 챗봇에 &quot오늘의 날씨&quot 라고 입력해보세요 ;-)";
                                  input.value = "";
                                }
                              }

            // 블랙모드
            else if (input.value.replace(/(\s*)/g,"") == "다크모드" || input.value == "눈이 너무 아픈데?") {
              if (count == 0) {
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
                input.value = "";
              }

              else if (count == 1) {
                check.innerHTML = "현재 상태가 다크모드예요 ;-)";
                input.value = "";
              }
            }
            // 블랙모드 종료

            // 화이트모드
            else if (input.value.replace(/(\s*)/g,"") == "화이트모드") {
              if (count == 1) {
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
                input.value = "";
              }

              else if (count == 0) {
                check.innerHTML = "현재 상태가 화이트모드예요 ;-)";
                input.value = "";
              }
            }
            // 화이트모드 종료

            else {
              check.innerHTML = "해당 서비스는 준비중이예요!";
              input.value = "";
            }
      }
      // value 값이 비어있지 않을 경우, 사용자의 검색 내부 과정 종료
  }
  // 버튼 이벤트 함수 종료
