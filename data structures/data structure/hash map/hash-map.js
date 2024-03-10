import { LinkedList } from "../linked-list/linked-list.js";

class HashMap {
    constructor (name) {
        this.name = name; //?????????
        this.buckets = [];
        this.capacity = 16;
        this.loadFactor = 0.75;
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i=0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value) {

        if (this.length() > (this.capacity*this.loadFactor)) {
            this.rehash();
        }

        let hash = this.hash(key) % this.capacity;

        // Check if there is a linked list in the bucket already.
        // If not, create one and append the new node element.
        // If there is and it contains the key, find the node and modify its second value.

        if (this.buckets[hash]) {
            if (this.buckets[hash].contains(key)){
                this.buckets[hash].at(this.buckets[hash].find(key)).value2 = value;
            } else {
                this.buckets[hash].append(new Node(key, value));
            }
        } else {
            let linked = new LinkedList(new Node(key, value));
            this.buckets[hash] = linked;
        }

    }

    get (key) {
        let hash = this.hash(key) % this.capacity;

        if (this.buckets[hash] && this.buckets[hash].contains(key)) {
            return this.buckets[hash].at(this.buckets[hash].find(key)).value2;
        } 
        
        return null;
    }

    has (key) {
        let hash = this.hash(key) % this.capacity;

        if (this.buckets[hash] && this.buckets[hash].contains(key)) {
            return true;
        } 
        
        return false;
    }

    remove (key) { 
        let hash = this.hash(key) % this.capacity;
        let link = this.buckets[hash];

        // Find out if the key is either the head, tail, or a middle node
        // of a linked list, then remove it without disrupting the other
        // nodes of the linked list.
        if (this.has(key)) {
            if (link.find(key) == link.head) {
                if (link.at(link.find(key)+1) != undefined) {
                    link.head = link.at(link.find(key)+1)
                } else {
                    link.head = null;
                }
            } else if (link.find(key) == link.tail()) {
                link.at(link.find(key)-1).next = null;
            } else {
                let previousNode = link.at(link.find(key)-1);
                let nextNode = link.at(link.find(key)+1);

                previousNode.next = nextNode;
            }
            return true; 
        }

        return false;
    }

    length () {
        let count = 0;
        for (let element of this.buckets) {
            if (element != undefined) {
                count += element.size();
            }
        }
        return count;
    }

    clear () {
        this.buckets = [];
    }

    keys () {
        let keys = [];
        for (let element of this.buckets) {
            if (element != undefined) {
                for (let i=0; i < element.size(); i++) {
                    keys.push(element.at(i).value);
                }
            }
        }
        return keys;
    }

    values () {
        let values = [];
        for (let element of this.buckets) {
            if (element != undefined) {
                for (let i=0; i < element.size(); i++) {
                    values.push(element.at(i).value2);
                }
            }
        }
        return values;
    }

    entries () {
        let entries = [];
        for (let element of this.buckets) {
            if (element != undefined) {
                for (let i=0; i < element.size(); i++) {
                    let entry = [];

                    entry.push(element.at(i).value)

                    entry.push(element.at(i).value2)

                    entries.push(entry);
                }
            }
        }
        return entries;
    }

    rehash () {
        this.capacity *= 2;
        let tempBucket = this.buckets;
        this.clear();

        for (let element of tempBucket) {
            if (element !== undefined) {
                for (let i=0; i < element.size(); i++){
                    this.set(element.at(i).value, element.at(i).value2); 
                }
            }
        }
    }
}

class Node {
    constructor (value, value2) {
        this.value = value;
        this.value2 = value2;
        this.next = null;
    }
}