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
  };
  return (
    <li>
      <span>{text}</span>
      {/* {status !== "To_Do" && <Button onClick={() => onClick("To_Do")}>To Do</Button>}
      {status !== "DOING" && <Button onClick={() => onClick("DOING")}>Doing</Button>}
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
