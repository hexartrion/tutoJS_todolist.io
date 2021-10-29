const toDoForm = document.querySelector("#todo-form");
// form 요소 지정

const toDoList = document.querySelector("#todo-list");
// todolist 요소 지정

const toDoInput = toDoForm.querySelector("#todo-input");
// todo-input 요소 지정


const TODOS_KEY = "todos";

let todos = [];

const savedToDos = localStorage.getItem(TODOS_KEY);
// 로컬 스토리지에서 TODOS_KEY와 일치하는 아이템 요소를 얻는다.

const TODO_MAX = 10;
// 최대로 넣을 수 있는 리스트 개수


if(savedToDos !== null)
{
    const parsedTodos = JSON.parse(savedToDos);
    todos = parsedTodos;
    // savedTodos가 비어 있지 않으면 JSON.stringify로 보존된 savedTodos를 다시 배열로 파싱 받은 뒤
    // toDos에 보존함

    parsedTodos.forEach(element => {
        paintTodo(element);
    });
    // pasredToDos에 들어 있는 값을 돌 때 동안
    // 해당 요소를 그리는 메서드 수행
}


toDoForm.addEventListener("submit", handleToDoSubmit)
// form에 이벤트 넣기
// submit 시 -> handleToDoSubmit 수행


function paintTodo(newTodoObj)
// todo를 만들때 수행하는 동작
{  
        const todoLi = document.createElement("li");
        // li 생성
    
        todoLi.id = newTodoObj.id;
        // todoObj에 있는 id를 li의 id에 넣기
    
    
        const todoSpan = document.createElement("span");
        // span 생성
    
        todoSpan.innerText = newTodoObj.text + " ";
        // span 안에 newTodo text로 넣기
    
        const deleteButton = document.createElement("button");
        // 버튼 만들기
        deleteButton.innerText = "❌"
        // 버튼에 X 넣기
    
        deleteButton.addEventListener("click", deleteTodo);
        // 삭제 버튼에 이벤트 넣기
        // 클릭 시, deleteToto 수행
    
        todoLi.appendChild(todoSpan);
        // li 자식으로 span 넣기
        todoLi.appendChild(deleteButton);
        // li 자식으로 버튼 넣기
        toDoList.appendChild(todoLi);
        // todoList 자식으로 todoLi 넣기

}


function handleToDoSubmit(event)
// submit 버튼을 누를때 수행하는 동작
{
    event.preventDefault(); // redirect 막기
    if(todos.length > TODO_MAX)
    // 최대치(10개) 넘기면 추가 못하게 함
    {
        alert(`To do List는 ${TODO_MAX}게를 넘길 수 없습니다`);
        return;
    }
    else
    {
        const newTodo = toDoInput.value;
        // input에 들어 있는 값을 todo에 넣는다
    
        toDoInput.value = "";
    
        const newTodoObj = 
        {
            text : newTodo,
            id : Date.now(),
        }
        // 새로운 todoObj 생성
        // text : 입력 받은 값
        // id : 현재 시간을 long으로 받은것
    
        todos.push(newTodoObj);
        // toDos에 newTodo 넣기
        paintTodo(newTodoObj);
        // 화면에 Todo 만드는 메서드
        saveTodos();
        // 로컬스토리지에 toDos넣는 메서드 호출
    }

}

function deleteTodo(event)
{
    const li = event.target.parentElement;
    // 현재 클릭한 객체의 부모 요소 찾기 -> buttond의 부모 li
    li.remove();
    // li 지우기
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    // 현재 클릭한 li의 id만 제외하고 다시 toDos에 넣기
    
    saveTodos();
    // 로컬 스토리지에 저장
}



function saveTodos()
{
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
    // JSON.stringify(object)
    // 모든 속성을 String형태로 저장하게 만듬
}