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
        let hash = this.hash(key) % this.capacity;

        console.log(hash);

        let node = new Node(key, value);
        let linked = new LinkedList(node);

        this.buckets[hash] = linked;
    }

    get (key) {

    }

    has (key) {

    }

    remove (key) {

    }

    remove (key) {

    }

    length () {

    }

    clear () {

    }

    keys () {

    }

    values () {

    }

    entries () {

    }
}

class Node {
    constructor (value, value2) {
        this.value = value;
        this.value2 = value2;
        this.next = null;
    }
}


let map = new HashMap('Bobi');

map.set('Samael', 'Recarm');

console.log(map.buckets[9].toString());