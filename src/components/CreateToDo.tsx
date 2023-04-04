import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "./atom";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  //   const [toDos, setToDos] = useRecoilState(toDoState);
  const setToDos = useSetRecoilState(toDoState);
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, status: "To_Do" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  // console.log(toDos);

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "please write a To Do  ",
        })}
        placeholder="todo"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
