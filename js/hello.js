const loginForm = document.querySelector("#login-form");
// login-form id요소를 지정
const loginInput = document.querySelector("#login-form input");
// login-form 내에 있는 input 요소를 지정
const loginBtn = document.querySelector("#login-form button");
// login-form 내에 있는 button 요소를 지정

const hello = document.querySelector("#hello");
// hello id요소를 지정

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null)
{
    // show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);

    loginBtn.addEventListener("click",onLoginBtnClick);
    // loginBtn이 클릭 되면 onLoginBtnClick을 수행

}
else
{
    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // loginForm에 class요소 추가
    paintHello(savedUserName);
    // show hello
}

function onLoginBtnClick(event)
{
    event.preventDefault(); // submit의 기본 동작 막기

    loginForm.classList.add(HIDDEN_CLASSNAME);
    // loginForm에 class요소 추가

    const username = loginInput.value; 
    // input에 있는 값 저장

    localStorage.setItem(USERNAME_KEY, username);
    // 로컬스토리지에 username 값 저장

    paintHello(username);

}

function paintHello(username)
{
    hello.innerText = `Hello ${username}`;
    // hello에 내용 저장

    hello.classList.remove(HIDDEN_CLASSNAME);
    // hello에 있는 클래스 요소 제거
}
