// todo 他にどんなクラスが必要？ ファイル操作のclass とか？
import {bootCac} from "./models/Cac";

export const path = "todo.json";

export class App {
  mount = () => {
    bootCac();
  }
}
