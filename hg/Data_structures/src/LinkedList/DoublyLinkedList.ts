import { LinkedList, Nodo, INodo } from "./LinkedList";

interface IDoubleLinkedNode extends INodo {
    prev: IDoubleLinkedNode | null;
}

class DoubleLinkedNode extends Nodo implements IDoubleLinkedNode {
    public prev: IDoubleLinkedNode | null = null;
    constructor(data: string) {
        super(data);
    }
}

export class DoubleLinkedList extends LinkedList {
    last: IDoubleLinkedNode | null;

    constructor() {
        super();
        this.last = null;
    }

    add(value: string) {
        const nodo = new DoubleLinkedNode(value);

        !this.head ? ((this.head = nodo), (this.last = nodo)) : ((this.last!.next = nodo), (nodo.prev = this.last), (this.last = nodo));

        this.size++;
    }

    deleteDups() {
        if (!this.head) {
            return;
        }

        const uniqueValues: Set<string> = new Set();
        let current: INodo | null = this.head;
        let previous: IDoubleLinkedNode | null = null;

        while (current) {
            uniqueValues.has(current.data)
                ? ((previous!.next = current.next), current === this.last && (this.last = previous), this.size--)
                : (uniqueValues.add(current.data), (previous = current as IDoubleLinkedNode));

            current = current.next;
        }
    }
}
