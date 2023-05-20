// complete the given function
 let isPalindrome = true;
 let start = 0;
let end  = str.length-1;
function palindrome(str){
	str=str.toLowerCase();
	while(start<=end && isPalindrome){
		if(str[start] != str[end]){
			isPalindrome = false;
		}
		start++;
		end--;
	}
	return (isPalindrome ? true:false);

}
console.log(palindrome(str));
module.exports = palindrome
