import { useState } from "react";
import { useForm } from "react-hook-form";

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
// }

function ToDoList() {
  const { register, watch, handleSubmit, formState } = useForm();
  // console.log(register("toDo"));
  const onDataValid = (data: any) => {
    console.log(data);
  };
  // console.log(watch());
  console.log(formState.errors);
  return (
    <>
      <div>
        todo list
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit(onDataValid)}
        >
          <input
            {...register("email", { required: true })}
            placeholder="Eamil"
          />
          <input
            {...register("firstName", { required: "test", minLength: 2 })}
            placeholder="First Name"
          />
          <input
            {...register("lastName", { required: true })}
            placeholder="Last Name"
          />
          <input
            {...register("userName", { required: true, minLength: 1 })}
            placeholder="User Name"
          />
          <input
            {...register("password", { required: true, minLength: 1 })}
            placeholder="Password"
          />
          <input
            {...register("passwrod1", {
              required: "sdfsdfsjlfjslk",
              minLength: { value: 5, message: "tessldjfldskjfdsklt" },
            })}
            placeholder="Password1"
          />
          <button>Add</button>
        </form>
      </div>
    </>
  );
}

export default ToDoList;
