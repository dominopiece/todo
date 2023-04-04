import { atom } from "recoil";

export interface IToDo {
  id: number;
  text: string;
  // 선택지 제한
  status: "To_Do" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
  // unique keyk
  key: "toDo",
  default: [],
});
