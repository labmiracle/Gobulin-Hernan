export class Stack {
    private items: number[] = [];

    public push(item: number) {
        this.items.push(item);
    }

    public pop() {
        return this.items.pop();
    }

    public isEmpty(): boolean {
        return this.items.length === 0;
    }
}
