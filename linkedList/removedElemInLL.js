var removeElemLL = function name(head,val) {
    let sentinal = new ListNode();

    sentinal.next = head;

    let prev = sentinal;

    while (prev && prev.next) {
        if (prev.next.val === val) {
            prev.next = prev.next.next
        } else {
            prev = prev.next;
        }
    }

    return sentinal.next;
}