import styled from "styled-components";
import { IToDo, toDoState } from "./atom";
import { useSetRecoilState } from "recoil";

const Button = styled.button`
  background-color: black;
  color: white;
  border-radius: 15px;
  margin-left: 2px;
`;

function ToDo({ text, status, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  // const onClick = (changeStatus:IToDo["status"]) => {
  //   console.log("show", changeStatus  )
  // }
  const onNewClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // e.currentTarget.name
    console.log("newClick", e.currentTarget.name);
    const {
      currentTarget: { name },
    } = e;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      console.log(targetIndex);
      const oldToDo = oldToDos[targetIndex];
      // const newToDo = { text, id, status: name as any }; 
      const newToDo = { text, id, status: name as IToDo["status"]}; 
      console.log(oldToDo, newToDo);
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {/* {status !== "To_Do" && <Button onClick={() => onClick("To_Do")}>To Do</Button>}
      {status !== "DOING" && <Button onClick={() => onClick(" DOING")}>Doing</Button>}
      {status !== "DONE" && <Button onClick={() => onClick("DONE")}>Done</Button>} */}
      {status !== "To_Do" && (
        <Button name="To_Do" onClick={onNewClick}>
          To Do
        </Button>
      )}
      {status !== "DOING" && (
        <Button name="DOING" onClick={onNewClick}>
          Doing
        </Button>
      )}
      {status !== "DONE" && (
        <Button name="DONE" onClick={onNewClick}>
          Done
        </Button>
      )}
    </li>
  );
}

export default ToDo;
