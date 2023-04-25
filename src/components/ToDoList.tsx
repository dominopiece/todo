import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { statusState, testSelector, toDoSelector, toDoState } from "./atom";
import ToDo from "./ToDo";
import styled from "styled-components";

// function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDoError("")
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     // console.log(toDo);
//     if (toDo.length < 10) {
//       return setToDoError("To do should be logner ");
//     }
//     console.log("submit")
//   };

//   return (
//     <>
//       <div>
//         todo list
//         <form onSubmit={onSubmit}>
//           <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//           <button>Add</button>
//           {toDoError !== "" ? toDoError : null}
//         </form>
//       </div>
//     </>
//   );

function ToDoList() {
  // const toDos = useRecoilValue(toDoState);
  // console.log(toDos)
  // const selectorOutput = useRecoilValue(toDoSelector);
  // console.log(selectorOutput); 
  // const [toDo, doing, done] = useRecoilValue(toDoSelector);
  const [toDos] = useRecoilValue(toDoSelector);
  const [status, setStatus] = useRecoilState(statusState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setStatus(event.currentTarget.value as any);
  };
  // console.log(status);

  const outputSlectorTest = useRecoilValue(testSelector)
  console.log(outputSlectorTest)
  return (
    <>
      <h1>To Dos</h1>
      <hr />
      <select value={status} onInput={onInput}>
      {/* <select> */}
        <option value="To_Do">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreateToDo />
      <hr />
      {/* {status === "To_Do" &&
        toDo.map((aToDo) => <ToDo key={aToDo.id} {...aToDo} />)}
      {status === "DOING" &&
        doing.map((aToDo) => <ToDo key={aToDo.id} {...aToDo} />)}
      {status === "DONE" &&
        done.map((aToDo) => <ToDo key={aToDo.id} {...aToDo} />)} */}
        {toDos?.map(aToDo => (
          <ToDo key={aToDo.id}{...aToDo} />
        ))}
    </>
  );
}

export default ToDoList;
