export interface INode<T> {
    data: T;
    next: INode<T> | null;
}

export class Node<T> implements INode<T> {
    data: T;
    next: Node<T> | null;
    constructor(data: T, next: INode<T> | null = null) {
        this.data = data;
        this.next = next;
    }
}

export class Queue<T> {
    private front: INode<T> | null;
    private rear: INode<T> | null;
    private size: number;

    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(value: T) {
        const newNode: INode<T> = new Node(value);
        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear!.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue(): T | null {
        if (!this.front) {
            return null;
        }

        const value = this.front.data;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null;
        }
        this.size--;
        return value;
    }

    getSize(): number {
        return this.size;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }
}

export function hotPotato<T>(players: T[]): T | null {
    if (players.length === 0) {
        return null;
    }

    const queue = new Queue<T>();

    for (const player of players) {
        queue.enqueue(player);
    }

    while (queue.getSize() > 1) {
        const passes = Math.floor(Math.random() * (players.length - 1)) + 1;
        for (let i = 0; i < passes; i++) {
            queue.enqueue(queue.dequeue()!);
        }
        const removedPlayer = queue.dequeue();
        console.log(`Player ${removedPlayer} is out!`);
    }

    const winner = queue.dequeue();
    console.log(`The winner is ${winner}`);
    return winner;
}

const players = ["Hernán", "Roberto", "Jesica", "Monica", "Juan", "Nilda"];
const winner = hotPotato(players);
