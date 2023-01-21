/**
 * Check if a LinkedList is a Palindrome
 *
 * Singly-linked lists are already defined with this interface:
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 *
 * @param		linkedList A linked list.
 * @returns	A boolean checking if the linked list is a palindrome.
 */
const isLinkedListAPalindrome = (linkedList) => {
    let normal = ""
    let reversed = ""
    
    while(!!linkedList){
        normal = normal + linkedList.value
        reversed = linkedList.value + reversed
        
        linkedList = linkedList.next
    }
    
    return normal == reversed
}

/**
 * Check if a String is a Palindrome
 *
 * @param		string An input string.
 * @returns	A boolean checking if the string is a palindrom.
 */
const isStringAPalindrome = (string) => [...string].reverse().join('') === string

module.exports = {isLinkedListAPalindrome, isStringAPalindrome}