import { SimpleLinkedList } from "./SimpleList.js";

const simpleLinkedList = new SimpleLinkedList();

// BASIC OPERATIONS
simpleLinkedList.addBeginning("value 2");
simpleLinkedList.addBeginning("value 1");
simpleLinkedList.addLast("value 3");
//simpleLinkedList.displayList();
//console.log(simpleLinkedList.findNode("value 2"));
//simpleLinkedList.deleteFirst();
//simpleLinkedList.deleteLast();
//simpleLinkedList.deleteNode("value 2");
//console.log(simpleLinkedList.isEmpty());
//console.log(simpleLinkedList.getHead());
//console.log(simpleLinkedList.getTail());
// simpleLinkedList.displayList();
// simpleLinkedList.clearList();

//INTERMEDIATE OPERATIONS

// simpleLinkedList.insertBefore("value 1", "value 0");
// simpleLinkedList.insertAfter("value 3", "value 4");
// simpleLinkedList.insertAt(1, "value 1");
// simpleLinkedList.deleteNode("value 1");
// simpleLinkedList.deleteAt(0);
// simpleLinkedList.getAt(3);
// simpleLinkedList.setAt(0, "Lamar");

// simpleLinkedList.reverse();
// console.log(simpleLinkedList.size());
// console.log(simpleLinkedList.findMiddle());
//simpleLinkedList.displayList();
console.log(simpleLinkedList.getNthFromEnd(2));
