class LinkedList {
    constructor (head) {
        this.head = head;
    }

    append(value) {
        let tail = this.tail();

        if (tail == null){
            this.head = value;
        } else {
            tail.next = value;
        }

    }

    prepend(value) {
        if (this.head == null) {
            this.head = value;
        } else {
            let formerHead = this.head;
            this.head = value;
            this.head.next = formerHead;
        }
        
    }

    size () {
        if (this.head !== null) {
            if (this.head.next == null) { return 1 } 
            else {
                return findNext(this.head);
            }
        } else { return 0 }

        function findNext (value) {
            if (value.next !== null) {
                return 1+ findNext(value.next);
            }
            return 1;
        }
    }

    head () {
        return this.head;
    }

    tail (value) {
        if (this.head == undefined || this.head == null) { return null }
        if (value == null) { value = this.head };


        if (value.next == null) {
            return value;
        }

        return this.tail(value.next);
    }
}

class Node {
    constructor (value) {
        this.value = value || null;
        this.next = null;
    }
}


let link = new LinkedList();

let thisNode = new Node('John');
let secondNode = new Node('Coder');
let thirdNode = new Node('Boi');

link.append(thisNode);
link.append(secondNode);
link.prepend(thirdNode);

console.log(`This linked list's head is: ${link.head.value}`);
console.log(`This linked list's tail is: ${link.tail().value}`);

console.log(thirdNode);

console.log(link.size());