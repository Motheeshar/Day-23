// Progression 1: Names and Input
// 1.1
let driverName = "Kalvian-1";
// 1.2
console.log("The driver's name is " + driverName);
// 1.3
let navigatorName = "Kalvian-2";
// 1.4
console.log("The navigator's name is " + navigatorName);

// Progression 2: Control Statements - 1
// 2.1
let longestName;
if (driverName.length > navigatorName.length) {
  longestName = "driver";
} else if (navigatorName.length > driverName.length) {
  longestName = "navigator";
} else {
  longestName = "both";
}
console.log("The " + longestName + " has the longest name, it has " + (longestName === "both" ? "equally long names" : driverName.length) + " characters.");

// 2.2
function containsVowels(name) {
  let vowels = "";
  for (let i = 0; i < name.length; i++) {
    if ("aeiouAEIOU".includes(name[i])) {
      vowels += name[i] + " " + (i + 1) + " ";
    }
  }
  return vowels || "no vowels";
}
console.log(containsVowels(driverName));
console.log(containsVowels(navigatorName));

// 2.3
function countUpperCaseLowercase(name) {
  let upperCount = 0;
  let lowerCount = 0;
  for (let i = 0; i < name.length; i++) {
    if (name[i] >= 'A' && name[i] <= 'Z') {
      upperCount++;
    } else if (name[i] >= 'a' && name[i] <= 'z') {
      lowerCount++;
    }
  }
  console.log("Number of uppercase characters: " + upperCount);
  console.log("Number of lowercase characters: " + lowerCount);
}
countUpperCaseLowercase(driverName);
countUpperCaseLowercase(navigatorName);

// Progression 3: Control Statements - 2
// 3.1
function printDriverNameInCaps(name) {
  let result = "";
  for (let i = 0; i < name.length; i++) {
    result += name[i].toUpperCase() + " ";
  }
  console.log(result.trim());
}
printDriverNameInCaps(driverName);

// 3.2
function printNavigatorNameReverse(name) {
  let result = "";
  for (let i = name.length - 1; i >= 0; i--) {
    result += name[i];
  }
  console.log(result);
}
printNavigatorNameReverse(navigatorName);

// 3.3
let mergedNames = navigatorName + " " + driverName;
console.log("Merged Names: " + mergedNames);
console.log("Reversed Merged Names: " + mergedNames.split(' ').reverse().join(' '));

// 3.4
if (driverName.localeCompare(navigatorName) < 0) {
  console.log("The driver's name goes first.");
} else if (driverName.localeCompare(navigatorName) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1
let loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
// Counting words
let wordCount = 0;
for (let i = 0; i < loremIpsumText.length; i++) {
  if (loremIpsumText[i] === ' ' || loremIpsumText[i] === '\n') {
    wordCount++;
  }
}
console.log("Word count in lorem ipsum text: " + (wordCount + 1));

// Counting occurrences of the Latin word 'et'
let etCount = 0;
for (let i = 0; i < loremIpsumText.length; i++) {
  if (loremIpsumText.slice(i, i + 2) === 'et') {
    etCount++;
  }
}
console.log("Occurrences of the Latin word 'et' in lorem ipsum text: " + etCount);

// Bonus 2
function isPalindrome(phraseToCheck) {
  const cleanedPhrase = phraseToCheck.replace(/[^a-zA-Z]/g, '').toLowerCase();
  for (let i = 0; i < cleanedPhrase.length / 2; i++) {
    if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

const palindromeExamples = [
  "A man, a plan, a canal, Panama!",
  "Amor, Roma",
  "race car",
  "stack cats",
  "step on no pets",
  "taco cat",
  "put it up",
  "Was it a car or a cat I saw?",
  "No 'x' in Nixon"
];

for (let example of palindromeExamples) {
  console.log(`Is "${example}" a palindrome? ${isPalindrome(example)}`);
}
