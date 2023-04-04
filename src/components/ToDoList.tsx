import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  atom,
  DefaultValue,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

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

const toDoState = atom<IToDo[]>({
  // unique keyk
  key: "toDo",
  default: [],
});

interface IForm {
  toDo: string;
}

interface IToDo {
  id: number;
  text: string;
  // 선택지 제한
  status: "To_DO" | "DOING" | "DONE";
}

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, status: "To_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  // console.log(toDos);
  return (
    <>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "please write a To Do  ",
          })}
          placeholder="todo"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
