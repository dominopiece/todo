import { atom, selector } from "recoil";

type categories = "To_Do" | "DOING" | "DONE"

export interface IToDo {
  id: number;
  text: string;
  // 선택지 제한
  status: categories
}

export const statusState = atom<categories>({
  key: "status",
  default: "To_Do",
});

export const toDoState = atom<IToDo[]>({
  // unique keyk
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    // return toDos.length;
    // return [
    //   toDos.filter((toDo) => toDo.status === "To_Do"),
    //   toDos.filter((toodo) => toodo.status === "DOING"),
    //   toDos.filter((toDo) => toDo.status === "DONE"),
    // ];
    const status = get(statusState);

    //FIXME: TS2339: Property 'map' does not exist on type 'IToDo'.
    // return toDos.filter((toDo) => toDo.status === status)
    return [toDos.filter((toDo) => toDo.status === status)];
  },
});

export const testSelector = selector({
  key: "testSelector",
  get: ({ get }) => {
    return "hello";
  },
});
