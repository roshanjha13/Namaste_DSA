var removeNthFromEnd = function(head, n) {
    
    let sentinel = new ListNode();
    sentinel.next = head;

    let len = 0;
    let current = head;
    while (current) {
        len++;
        current = current.next;
    }

    let prevPos = len - n;
    let prev = sentinel;
    for (let i = 0; i < prevPos; i++) {
        prev = prev.next;
    }

    if (prev.next) {
        prev.next = prev.next.next;
    }

    return sentinel.next;
};