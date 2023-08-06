export interface INodo {
    data: string;
    next: INodo | null;
}

export class Nodo implements INodo {
    data: string;
    next: Nodo | null;
    constructor(data: string, next: INodo | null = null) {
        this.data = data;
        this.next = next;
    }
}

export class LinkedList {
    head: INodo | null;
    last: INodo | null;
    size: number;

    constructor() {
        this.head = null;
        this.last = null;
        this.size = 0;
    }

    add(value: string) {
        const nodo: INodo = new Nodo(value);

        if (!this.head) {
            this.head = nodo;
            this.last = nodo;
        } else {
            this.last!.next = nodo;
            this.last = nodo;
        }

        this.size++;
    }

    find(value: string) {
        let current = this.head;

        while (current && current.data !== value) {
            current = current.next;
        }

        return current;
    }

    remove(value: string) {
        let current: INodo | null = this.head;
        let previous: INodo | null = null;

        while (current && current.data !== value) {
            previous = current;
            current = current.next;
        }

        if (!current) {
            return null;
        }

        if (!previous) {
            this.head = current.next;
        } else {
            previous.next = current.next;
        }

        if (current === this.last) {
            this.last = previous;
        }

        this.size--;

        return current;
    }

    invert() {
        let current: INodo | null = this.head;
        let previous: INodo | null = null;
        let next: INodo | null = null;

        while (current) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        this.head = previous;
    }
}
