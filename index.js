import { SimpleLinkedList } from "./SimpleList.js";

const simpleLinkedList = new SimpleLinkedList();

simpleLinkedList.insertNode("value 1");
simpleLinkedList.insertNode("value 2");

// simpleLinkedList.deleteNode("value 1");
// simpleLinkedList.displayList();
console.log(simpleLinkedList.findNode("value 2"));
