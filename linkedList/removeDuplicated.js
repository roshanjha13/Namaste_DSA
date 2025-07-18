var removeDuplicatedInLL = function(head) {
    if (!head) return 
    let current = head;

    while (current && current.next) {
        if (current.val == current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next
        }
    }

    return head;
}
