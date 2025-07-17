var oddEvenLL = function(head) {
    if (!head || !head.next) return head

    if (head.length == 1 || head.length == 2) return head 
    let odd = head;
    let even = head.next;
    let evenStart = even;

    while (odd.next && even.next) {
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }

    odd.next = evenStart;
    return head;
}
