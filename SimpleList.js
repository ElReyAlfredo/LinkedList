import { SimpleNode } from "./simpleNode.js";

export class SimpleLinkedList {
  constructor() {
    this.head = null;
  }

  insertNode(value) {
    const newNode = new SimpleNode(value);

    if (this.head == null) {
      this.head = newNode;
      return;
    }

    while (this.head.next !== null) {
      this.head = this.head.next;
    }
    this.head.next = newNode;
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

    return "No se enconto el elemento";
  }

  deleteNode(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = value;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        return;
      }

      current = current.next;
    }
  }

  clearList() {
    this.head = null;
  }
}
