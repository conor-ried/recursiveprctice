/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  }


  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0;
  }

  // Recursive case: Compare the length of the first word with the longest word length in the rest of the array.
  const firstWord = words[0].length;
  const longestWord = longest(words.slice(1));
  return Math.max(firstWord, longestWord);

}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) {
    return '';
  }

  return str[0] + everyOther(str.slice(2));

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }


  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  const remainingSubstring = str.slice(1, str.length - 1);
  return isPalindrome(remainingSubstring);

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (index >= arr.length) {
    return -1; 
  }
  if (arr[index] === val) {
    return index; 
  }

  return findIndex(arr, val, index + 1);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
    if (str.length <= 1) {
      return str;
    }

    return str[str.length - 1] + revString(str.slice(0, str.length - 1));

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const result = [];

  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      result.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      result.push(...gatherStrings(obj[key]));
    }
  }

  return result;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === val) {
    return mid; // Value found
  } else if (arr[mid] < val) {
    // If the middle element is less than the value, search the right half of the array.
    return binarySearch(arr, val, mid + 1, end);
  } else {
    // If the middle element is greater than the value, search the left half of the array.
    return binarySearch(arr, val, start, mid - 1);
  }

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
