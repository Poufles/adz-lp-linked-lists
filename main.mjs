import LinkedList from "./linked-list.mjs";

const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.toString();
list.removeAt();
list.toString();