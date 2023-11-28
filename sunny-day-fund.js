function sanitizeConsecutiveChars(inputString, maxConsecutive) {
  let consecutiveCount = 0;

  const filteredChars = Array.from(inputString).filter((char, index, array) => {
      // Condition to check if either it is the first character or the current
      // character is not same as of the previous one then make the count to 1
      if (index === 0 || char !== array[index - 1]) {
          consecutiveCount = 1;
      } else {                  // else if it is same then increment count
          consecutiveCount++;
      }

      return consecutiveCount <= maxConsecutive; // return the filtered array and then join it
  });

  return filteredChars.join('');
}

// Testing the function with the mentioned test cases

// 1. Empty String
console.log(sanitizeConsecutiveChars('', 2)); // Output: ''

// 2. String with No Consecutive Characters
console.log(sanitizeConsecutiveChars('abcdef', 2)); // Output: 'abcdef'

// 3. Consecutive Characters Exceeding maxConsecutive
console.log(sanitizeConsecutiveChars('aaabbbccc', 3)); // Output: 'aaabbbccc'

// 4. Consecutive Characters to Remove
console.log(sanitizeConsecutiveChars('aaaaabbbefff', 2)); // Output: 'aabbeff'

// 5. Consecutive Characters at the Beginning
console.log(sanitizeConsecutiveChars('112233445566', 1)); // Output: '123456'

// 6. Consecutive Characters at the End
console.log(sanitizeConsecutiveChars('zazzaaz', 1)); // Output: 'zazaz'

// 7. All Characters Consecutive
console.log(sanitizeConsecutiveChars('bbbbbb', 2)); // Output: ''

// 8. Maximum Consecutive Set to 0
console.log(sanitizeConsecutiveChars('aaabbaaabbaa', 0)); // Output: ''

// 9. Single Character
console.log(sanitizeConsecutiveChars('a', 1)); // Output: 'a'
