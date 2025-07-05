function Node(val){
    this.val = val;
    this.next = null
}

var myLinkedList = function () {
    this.head = null ;
    this.size = 0
}

function addAtHead(val) {
    let newNode = new Node(val);
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode
    }

    newNode.next = this.head
    this.head = newNode
    this.size++
}


function addToTail(val) {
    let newNode = new Node(val);
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode
    } else {
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = newNode;
    }
    this.size++;
    
}

function addAtParticularIndex(val,index) {
    let newNode = new Node(val);
    
    if (index == 0) {
        this.addAtHead(val);
        return;
    }

    else if (index == this.size) {
        this.addToTail(val);
        return;
    }

    else{
        let curr = this.head;
    
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;   
        }

        newNode.next = curr.next;
        curr.next = newNode;
    }

    this.size++;
}
