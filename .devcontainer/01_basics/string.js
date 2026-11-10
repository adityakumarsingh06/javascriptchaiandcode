let name = "aditya";
console.log(name);
console.log(name.substr(0,3));
let a = "pallavi";
console.log(a.concat(" ",name));
//split changes string to array
let str = "'apple','banana',mango";
let ans = str.split(",");
console.log(ans);
console.log(a.repeat(3));
let b = "10";
let c = '15';
console.log(`my number is ${b} and his number is ${c}`);
let d = "aditya";
let e = d.split("").reverse().join("");
console.log(e);
//arr to str
let arr =['apple','banana'];
console.log(arr.join(" "));


# JavaScript Strings – Complete Cheatsheet

A complete collection of important JavaScript String concepts, methods, and examples.

## 1. String Declaration

```javascript
let str1 = "Hello";
let str2 = 'Hello';
let str3 = `Hello`;

console.log(str1);
console.log(str2);
console.log(str3);
```

## 2. String Length

```javascript
let str = "JavaScript";

console.log(str.length); // 10
```

## 3. Access Characters

```javascript
let str = "Hello";

console.log(str[0]);       // H
console.log(str[1]);       // e
console.log(str.charAt(2));// l
console.log(str.at(-1));   // o
console.log(str.at(-2));   // l
```

## 4. String Immutability

Strings cannot be changed directly.

```javascript
let str = "Hello";

str[0] = "Y";

console.log(str); // Hello

// Create a new string
str = "Y" + str.slice(1);

console.log(str); // Yello
```

## 5. Template Literals (Backticks)

Use backticks to insert variables and expressions inside strings.

```javascript
let name = "Aditya";
let age = 22;

console.log(`My name is ${name}`);
console.log(`My age is ${age}`);

let a = 10;
let b = 20;

console.log(`Sum = ${a + b}`);
```

### Multiline Strings

```javascript
let str = `Hello
Welcome to JavaScript
Learning Strings`;

console.log(str);
```

## 6. Case Conversion

```javascript
let str = "Hello JavaScript";

console.log(str.toUpperCase()); // HELLO JAVASCRIPT
console.log(str.toLowerCase()); // hello javascript
```

## 7. Remove Spaces

```javascript
let str = "   Hello World   ";

console.log(str.trim());      // Hello World
console.log(str.trimStart()); // Hello World   
console.log(str.trimEnd());   //    Hello World
```

## 8. Search Methods

### includes()

```javascript
let str = "Hello JavaScript";

console.log(str.includes("Java")); // true
console.log(str.includes("Python")); // false
```

### indexOf()

```javascript
let str = "Hello World";

console.log(str.indexOf("o")); // 4
console.log(str.indexOf("World")); // 6
console.log(str.indexOf("xyz")); // -1
```

### lastIndexOf()

```javascript
let str = "hello world";

console.log(str.lastIndexOf("l")); // 9
```

### startsWith()

```javascript
let str = "JavaScript";

console.log(str.startsWith("Java")); // true
```

### endsWith()

```javascript
let str = "JavaScript";

console.log(str.endsWith("Script")); // true
```

## 9. Extract String Parts

### slice(start, end)

End index is excluded.

```javascript
let str = "JavaScript";

console.log(str.slice(0, 4));  // Java
console.log(str.slice(4, 10)); // Script
console.log(str.slice(-6));    // Script
console.log(str.slice(4));     // Script
```

### substring(start, end)

```javascript
let str = "JavaScript";

console.log(str.substring(0, 4)); // Java
console.log(str.substring(4, 10)); // Script
console.log(str.substring(-2, 4)); // Java
```

Note: `substr()` is deprecated. Prefer `slice()` or `substring()`.

## 10. Replace Characters or Words

### replace()

Replaces the first matching occurrence.

```javascript
let str = "Hello Hello";

console.log(str.replace("Hello", "Hi"));
// Hi Hello
```

### replaceAll()

Replaces all matching occurrences.

```javascript
let str = "Hello Hello";

console.log(str.replaceAll("Hello", "Hi"));
// Hi Hi
```

## 11. Concatenation

```javascript
let first = "Hello";
let second = "World";

console.log(first + " " + second);
console.log(first.concat(" ", second));
```

## 12. split()

Converts a string into an array.

```javascript
let str = "apple,banana,mango";

console.log(str.split(","));
// ["apple", "banana", "mango"]

let name = "Hello World";

console.log(name.split(" "));
// ["Hello", "World"]

console.log(name.split(""));
// Individual characters
```

## 13. repeat()

```javascript
let str = "Hello ";

console.log(str.repeat(3));
// Hello Hello Hello
```

## 14. Character Codes

```javascript
console.log("A".charCodeAt(0)); // 65
console.log("a".charCodeAt(0)); // 97

console.log(String.fromCharCode(65)); // A
console.log(String.fromCharCode(97)); // a
```

## 15. Convert String and Number

```javascript
// Number to String
let num = 123;
let str = String(num);

console.log(typeof str); // string

// String to Number
let value = "123";
let number = Number(value);

console.log(typeof number); // number

console.log(parseInt("123"));    // 123
console.log(parseFloat("12.5")); // 12.5
```

## 16. Reverse a String

```javascript
let str = "hello";

let reverse = str.split("").reverse().join("");

console.log(reverse); // olleh
```

## 17. join()

Converts an array into a string.

```javascript
let arr = ["Hello", "World"];

console.log(arr.join(" ")); // Hello World
console.log(arr.join("-")); // Hello-World
console.log(arr.join(""));  // HelloWorld
```

## 18. String Comparison

```javascript
console.log("apple" === "apple"); // true
console.log("apple" === "Apple"); // false

console.log("apple" == "apple"); // true
```

JavaScript strings are case-sensitive.

## 19. String to Array

```javascript
let str = "Hello";

let arr = Array.from(str);

console.log(arr);
// ["H", "e", "l", "l", "o"]
```

## 20. String Padding

### padStart()

```javascript
let str = "5";

console.log(str.padStart(3, "0"));
// 005
```

### padEnd()

```javascript
let str = "5";

console.log(str.padEnd(3, "0"));
// 500
```

## 21. Regular Expressions

### match()

```javascript
let str = "Hello123";

console.log(str.match(/[0-9]+/));
// Matches 123
```

### search()

```javascript
let str = "Hello123";

console.log(str.search(/[0-9]/));
// 5
```

### test()

```javascript
let regex = /hello/i;

console.log(regex.test("Hello World"));
// true
```

### Common Regex Patterns

| Pattern | Meaning |
|---|---|
| [0-9] | Any digit |
| [a-z] | Lowercase letters |
| [A-Z] | Uppercase letters |
| \d | Digit |
| \w | Word character |
| \s | Whitespace |
| + | One or more |
| * | Zero or more |
| ? | Zero or one |
| ^ | Start of string |
| $ | End of string |

## 22. Check Palindrome

```javascript
function isPalindrome(str) {
    let reverse = str.split("").reverse().join("");

    return str === reverse;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
```

## 23. Count Vowels

```javascript
function countVowels(str) {
    let count = 0;

    for (let ch of str.toLowerCase()) {
        if ("aeiou".includes(ch)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("JavaScript")); // 3
```

## 24. Count Character Frequency

```javascript
function frequency(str) {
    let map = {};

    for (let ch of str) {
        map[ch] = (map[ch] || 0) + 1;
    }

    return map;
}

console.log(frequency("hello"));
// { h: 1, e: 1, l: 2, o: 1 }
```

## 25. Remove Duplicate Characters

```javascript
function removeDuplicates(str) {
    return [...new Set(str)].join("");
}

console.log(removeDuplicates("programming"));
// progamin
```

## 26. Important String Methods Summary

| Method | Purpose |
|---|---|
| length | String length |
| charAt() | Get character |
| at() | Get character using negative index |
| toUpperCase() | Uppercase |
| toLowerCase() | Lowercase |
| trim() | Remove both-side spaces |
| trimStart() | Remove starting spaces |
| trimEnd() | Remove ending spaces |
| includes() | Search value |
| indexOf() | First occurrence |
| lastIndexOf() | Last occurrence |
| startsWith() | Check starting text |
| endsWith() | Check ending text |
| slice() | Extract substring |
| substring() | Extract substring |
| replace() | Replace first match |
| replaceAll() | Replace all matches |
| split() | String to array |
| repeat() | Repeat string |
| concat() | Join strings |
| padStart() | Add padding at start |
| padEnd() | Add padding at end |
| match() | Find regex matches |
| search() | Search regex |
| join() | Array to string |

## 27. Important String DSA Problems

Practice these problems:

1. Reverse String
2. Valid Palindrome
3. Valid Anagram
4. First Unique Character in a String
5. Longest Common Prefix
6. Valid Parentheses
7. Group Anagrams
8. String Compression
9. Longest Substring Without Repeating Characters
10. Minimum Window Substring
11. Find All Anagrams in a String
12. Longest Palindromic Substring

---

**Conclusion:** These are the important JavaScript String concepts and methods for beginners, interviews, and DSA practice.

Keep practicing and refer to this cheatsheet whenever needed.