var hashCycle = function (head) {
    let slow  = head;
    let fast =  head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;

        if (fast == slow) {
            return true
        }
    }

    return false
}