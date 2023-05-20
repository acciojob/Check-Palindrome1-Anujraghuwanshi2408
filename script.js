// complete the given function
 let isPalindrome = true;
 let start = 0;
let end  = str.length-1;
function palindrome(str){
	while(start<=end && isPalindrome){
		if(str[start] != str[end]){
			isPalindrome = false;
		}
		start++;
		end--;
	}
	return (isPalindrome ? true:false);

}
module.exports = palindrome
