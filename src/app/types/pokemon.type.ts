import Weakness from "./weakness.type";
import Attack from "./attack.type";
export default class Pokemon {
  id: number = 0;
  name : string = "";
  size : string = "";
  evolution : string = "";
  weakness!: Weakness [];
  attack !: Attack [];

}
