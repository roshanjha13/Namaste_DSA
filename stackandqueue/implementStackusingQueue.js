var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.s2.length === 0) {
        while (this.s1.length) {
            let popElem = this.s1.pop();
            this.s2.push(popElem);
        }
    }
    return this.s2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.s2.length === 0) {
        while (this.s1.length) {
            let popElem = this.s1.pop();
            this.s2.push(popElem);
        }
    }
    return this.s2[this.s2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length === 0 && this.s2.length === 0;
};

// ----------- Test code -----------
var obj = new MyQueue();

obj.push(10);
obj.push(12);
obj.push(15);

console.log("Pop:", obj.pop());   // 10
console.log("Peek:", obj.peek()); // 12
console.log("Empty?", obj.empty()); // false

obj.pop(); // removes 12
obj.pop(); // removes 15
console.log("Empty after removing all:", obj.empty()); // true
