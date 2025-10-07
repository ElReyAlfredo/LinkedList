import { SimpleNode } from "./SimpleNode.js";

export class SimpleLinkedList {
  constructor() {
    this.head = null;
  }

  //Add node at the beginning
  addBeginning(value) {
    const newNode = new SimpleNode(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  //Add node at last.
  addLast(value) {
    const newNode = new SimpleNode(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  displayList() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  findNode(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }

      current = current.next;
    }

    return null;
  }

  //Delete the first node of the list
  deleteFirst() {
    if (this.head === null) {
      return null;
    }

    const deleteNode = this.head;
    this.head = this.head.next;

    return deleteNode;
  }

  //Delete the last node
  deleteLast() {
    if (this.head === null) {
      return null;
    }

    if (this.head.next === null) {
      const deleteNode = this.head;
      this.head = null;
      return deleteNode;
    }

    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    const deleteNode = current.next;
    current.next = null;

    return deleteNode;
  }

  //Delete a specific node
  deleteNode(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        return;
      }

      current = current.next;
    }
  }

  //Check if the list are empty
  isEmpty() {
    if (this.head === null) {
      return true;
    } else {
      return false;
    }
  }

  //Get the firs one
  getHead() {
    if (this.head === null) {
      return null;
    } else {
      return this.head;
    }
  }

  //Get the last one
  getTail() {
    if (this.head === null) {
      return null;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      return current;
    }
  }

  //Clear the entire list
  clearList() {
    this.head = null;
  }
}
