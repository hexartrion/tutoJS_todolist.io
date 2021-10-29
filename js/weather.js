const WEATHER_API_KEY = "f49aefd573003253706535aeae5c96dc";
// api.openweather.org API

searchPosition();
// 페이지 로드 될 때, 위치찾기를 수행


const reSearchBtn = document.createElement("button");
// 위치를 다시 검색 하는 버튼을 만든다

reSearchBtn.innerText = "위치 찾기";
// 버튼에 문구를 넣는다

reSearchBtn.addEventListener("click", searchPosition);
// 버튼을 누르면 위치 찾기 수행


function searchPosition()
{
    navigator.geolocation.getCurrentPosition(getPositionSuccess, getPositionError);
}
// 현재 위치를 받아옴 (성공 시 수행 함수, 실패 시 수행 함수)

function getPositionSuccess(position)
// 위치 찾기 성공시, 위치 값 받고 아래의 메서드 진행

{
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // position : geolocation obj를 하나 줌(현재 위치)

    console.log(lat + ", " + lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
    // openweathermap을 통해 api 받아서 위치 및 날씨정보를 받아옴


    fetch(url).then(response => response.json().then(data => 
        {
            const city = document.querySelector("#weather span:nth-child(1)");
            // 도시 span 요소 지정

            const weather = document.querySelector("#weather span:nth-child(2)");
            // 날씨 span 요소 지정

            const reSearchSpan = document.querySelector("#weather #reSearch");
            // 재검색 span 요소 지정


            const name = data.name;

            city.innerHTML = `${name}  / `;
            weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}℃ <br>`;

            reSearchSpan.appendChild(reSearchBtn);
            // 재검색 span에 버튼을 넣는다

        }));
    // url 자체를 request(요청)한다.
    // fetch는 promise이다 -> 시간이 걸린뒤에 일어나는 것
    // promise -> 요청이 끝나면 응답객체를 가지고 옴
    // then(할일) 응답이 완료 되면 할일을 작성


}
function getPositionError()
{
    const msgSpan = document.querySelector("#weather span:nth-child(1)");
    // 메시지 span 요소 지정

    const helpSpan = document.querySelector("#weather span:nth-child(2)");
    // 날씨 span 요소 지정

    const reSearchSpan = document.querySelector("#weather #reSearch");
    // 재검색 span 요소 지정

    
    msgSpan.innerHTML = `위치를 찾을 수 없습니다. <br>`;
    helpSpan.innerHTML = `아래의 버튼을 눌러서 다시 시도 하십시오. <br>`;

    reSearchSpan.appendChild(reSearchBtn);
    // 재검색 span에 버튼을 넣는다

}



