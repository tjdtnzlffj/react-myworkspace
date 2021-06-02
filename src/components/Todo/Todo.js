

import todoList from "./TodoList"

const TodoMaterial = () => {
  

  const [todoList, setTodoList] = useState([
    { memo: "React 공부하기" },
    { memo: "Javascript 연습하기" },
  ]);
  const input = useRef();
  const ul = useRef();

  const change = (event) => {
    // console.log(event);
    if (event.charCode === 13) {
      add();
    }
  };

  const add = () => {
    console.log(input.current);
    setTodoList([{ memo: input.current.value }, ...todoList]);
    input.current.value = "";
  };

  const remove = (index) => {
    const arr = todoList;
    const newArr = todoList.filter((todo, idx) => idx !== index);

    console.log(arr[0] === newArr[0]);

    setTodoList(todoList.filter((todo, idx) => idx !== index));
  };

  const edit = (index) => {
    setTodoList(
      todoList.map((todo, idx) => {
        if (idx === index) {
          todo.isEdit = true;
        }

        return todo;
      })
    );
  };

  const cancel = (index) => {
    setTodoList(
      todoList.map((todo, idx) => {
        if (idx === index) {
          delete todo.isEdit;
        }

        return todo;
      })
    );
  };

  const save = (index) => {
    setTodoList(
      todoList.map((todo, idx) => {
        if (idx === index) {
          const li = ul.current.children[index];
          const editInput = li.querySelector("input");
          todo.memo = editInput.value;
          delete todo.isEdit;
        }

        return <todoList inputRef={input} />;
      })
    );
  };

 

export default TodoMaterial;

