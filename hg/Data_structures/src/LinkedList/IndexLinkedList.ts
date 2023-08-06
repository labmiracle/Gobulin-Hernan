import { LinkedList } from "./LinkedList";
import { DoubleLinkedList } from "./DoublyLinkedList";

const list = new LinkedList();
const languagesToAdd: string[] = ["C++", "Python", "Java", "Typescript"];

console.log(" ");
console.log("***************************");
console.log("Linked list:");
console.log("***************************");
console.log(" ");
languagesToAdd.forEach(language => {
    list.add(language);
    console.log(`Adding '${language}'`);
});

console.log(" ");
console.log(list);
console.log(" ");

list.find("Python");
console.log("Find 'Python':");
console.log(" ");

console.log("Remove 'Python':");
list.remove("Python");
console.log(" ");

console.log("Linked list after removing 'Python':");
console.log(list);
console.log(" ");

list.invert();
console.log("Inverted linked list:");
console.log(list);
console.log(" ");

const doubleList = new DoubleLinkedList();
const doubleLanguagesToAdd: string[] = ["HTML", "HTML", "CSS", "JS"];

console.log("***************************");
console.log("Doubly Linked list:");
console.log("***************************");
console.log(" ");
doubleLanguagesToAdd.forEach(language => {
    doubleList.add(language);
    console.log(`Adding '${language}'`);
});
console.log(" ");
console.log(doubleList);
console.log(" ");

doubleList.deleteDups();
console.log("Delete Dups:");
console.log(doubleList);
