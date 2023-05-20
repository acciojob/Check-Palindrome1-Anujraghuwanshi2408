	function palindrome(str){
	
	let strJoin = str.split(' ').join('').toLowerCase();
	let isPalindrome = true;
	let i = 0, j = strJoin.length-1;
	while (i <= j && isPalindrome) {
	if(strJoin[i] !== strJoin[j]){
	isPalindrome = false;
	}
	i++;
	j--;
	}
	
	return isPalindrome;
		
	}
// console.log(palindrome(str));
module.exports = palindrome
