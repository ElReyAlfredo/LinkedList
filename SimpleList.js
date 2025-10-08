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

  //INTERMEDIATE OPERATIONS
  //Insert a node after some value
  insertAfter(targetValue, newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      console.log("There is no value in this list");
      console.log("Adding new value");
      this.head = newNode;
    } else {
      let current = this.head;

      while (current) {
        if (current.value === targetValue) {
          newNode.next = current.next;
          current.next = newNode;
          break;
        }
        current = current.next;
      }
    }
  }

  //Insert a node before some value
  insertBefore(targetValue, newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      console.log("This list is empty, cannot insert before.");
      return false;
    }
    if (this.head.value === targetValue) {
      newNode.next = this.head;
      this.head = newNode;
      return true;
    }

    let current = this.head;
    while (current.next) {
      if (current.next && current.next.value === targetValue) {
        newNode.next = current.next;
        current.next = newNode;
        return true;
      }
      current = current.next;
    }
  }

  //Insert a node in a specific index
  insertAt(index, value) {
    const newNode = new Node(value);

    if (index < 0) {
      return false;
    }

    if (this.head === null) {
      return false;
    }

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return true;
    }

    let i = 0;
    let current = this.head;
    while (current) {
      if (i === index - 1) {
        //This depends if the user input is considering 1 as a first index value
        newNode.next = current.next;
        current.next = newNode;
        return true;
      }
      current = current.next;
      i++;
    }
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

  //Delete a node in a specific index
  deleteAt(index) {
    if (index < 0) {
      return 0;
    }

    if (this.head === null) {
      return false;
    }
    if (index === 0) {
      this.head = this.head.next;
      return true;
    }

    let i = 0;
    let current = this.head;
    while (current.next) {
      if (i === index - 1) {
        current.next = current.next.next;
        return true;
      }
      i++;
      current = current.next;
    }
  }

  //Get a node by index
  getAt(index) {
    if (index < 0) {
      return false;
    }

    if (this.head === null) {
      return null;
    }

    let i = 0;
    let current = this.head;
    while (current) {
      if (i === index - 1) {
        console.log(current);
        return true;
      }
      i++;
      current = current.next;
    }
  }

  //Set a new value in a specific node;
  setAt(index, value) {
    if (index < 0) {
      return false;
    }

    if (this.head === null) {
      return null;
    }

    let i = 0;
    let current = this.head;
    while (current) {
      if (i === index - 1) {
        current.value = value;
        return true;
      }
      current = current.next;
      i++;
    }
  }
}
