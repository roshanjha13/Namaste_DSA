var hashCycle = function (head) {
    let curr = head

    let isNode = new Set()
    while (curr) {
        if (isNode.has(curr)) {
            return true;
        }    
        isNode.add(curr);
        curr = curr.next    
    }

    return false

}