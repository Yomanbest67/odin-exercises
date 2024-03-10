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

    at (index) {

        return findNext(this.head, index);

        function findNext (start, index, current = 0) {
            if (current == index) {
                return start;
            } 

            return findNext(start.next, index, current += 1);
        }
    }

    pop () {
        if (this.size() > 0) {
            this.at(this.size()-2).next = null;
        }
    }

    contains (value) {
        return findNext(value, this.head, this.tail())

        function findNext(value, current, tail) {
            if (current && value == current.value) {
                return true;
            } else if (current == tail) { return false }

            return findNext(value, current.next)
        }
    }

    find (value) {
        return findNext(value, this.head, this.tail(), 0)

        function findNext(value, current, tail, index) {
            if (value == current.value) {
                return index;
            } else if (current == tail) { return null }

            index++;
            return findNext(value, current.next, tail, index)
        }
    }

    toString () {
        return stringy(this.head)

        function stringy(first, currentString='') {
            if (first.next == null) {
                return currentString + ` -> ( ${first.value} ) -> null`;
            }

            return stringy(first.next, currentString+` -> ( ${first.value} )`);
        }
    }
}

class Node {
    constructor (value) {
        this.value = value || null;
        this.next = null;
    }
}

export {LinkedList, Node}