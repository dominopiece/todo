import { useState } from "react";
import { useForm } from "react-hook-form";
import { DefaultValue } from "recoil";

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

interface IForm {
  // required가 없는 경우 ? ex) email?: string;
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  password1: string;
}

function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "@gmail.com",
    },
  });
  // console.log(register("toDo"));
  const onDataValid = (data: any) => {
    // console.log(data);
  };
  // console.log(watch());
  console.log(errors);
  return (
    <>
      <div>
        todo list
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit(onDataValid)}
        >
          <input
            style={{ borderColor: errors?.email?.message ? "red" : "" }}
            {...register("email", {
              required: true,
              pattern: {
                value:
                  // /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
                message: "Only gmail emails allowed",
              },
            })}
            placeholder="Eamil"
          />
          <span>{errors?.email?.message as string}</span>
          <input
            {...register("firstName", { required: "error", minLength: 2 })}
            placeholder="First Name"
          />
          <span>{errors?.firstName?.message as string}</span>
          <input
            {...register("lastName", { required: "error" })}
            placeholder="Last Name"
          />
          <span>{errors?.lastName?.message as string}</span>
          <input
            {...register("userName", { required: "error", minLength: 1 })}
            placeholder="User Name"
          />
          <span>{errors?.userName?.message as string}</span>
          <input
            {...register("password", {
              required: "slkjfskldfjdk",
              minLength: 4,
            })}
            placeholder="Password"
          />
          <span>{errors?.password?.message as string}</span>
          <input
            style={{ borderColor: errors?.email?.message ? "red" : "" }}
            {...register("password1", {
              // required: "aaasdfsdfsjlfjslk",
              required: true,
              minLength: {
                value: 5,
                message: "password1 in minLength",
              },
            })}
            placeholder="Password1"
          />
          <span>{errors?.password1?.message as string}</span>
          <button>Add</button>
        </form>
      </div>
    </>
  );
}

export default ToDoList;
