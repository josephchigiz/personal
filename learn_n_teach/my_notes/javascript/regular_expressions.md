# [[Regular Expressions]]

Patterns used to match char combinations in strings. In JavaScript, [[regular Expressions]] are also objects.
These patterns are used with the `exec()` and `test()` methods of [[RegExp]], and with the `match()`, `matchAll()`, `replace()`, `replaceAll()`, `search()` and `split()` methods of String.

Here is a brief overview of each syntax element:

## Creating a [[RegExp]]

You create a regular expression in one of two ways:

1. Using a regular expression literal, consisting of a pattern enclosed in slashes:

```js
const re = /ab+c/;
```

Regular expression literals provide with compilation when the script is loaded and if it remains constant, using this can improve on the performance.

2. Calling the constriuctor function of the [[RegExp]] object, as follows:

```js
const re = new RegExp("ab+c");
```

Using the constructor func provides runtime compilation of the [[RegExp]].
We should use this mostly when we know the [[RegExp]] pattern will be changing or we don't know the pattern and are getting it from another source such as user input.

```js
// creating RegExp

// 1.with regExp literal
const re = /pattern goes here/;

// 2. With regExp constructor
const re = new RegExp("pattern goes here");
```

## Writing A [[RegExp]] pattern

A [[RegExp]] pattern is composed of simple chars, such as `/abc/` or a combo of simple and complex chars, such as `/ab*c/` or `/Chapter (\d+)\.d*/`.
The last example includes **parentheses** which are used as a **memory device**. The match made with this part of the pattern is remembered for later use.

### Using Simple Patterns

Simple patterns are constructed of characters for which you want to find an exact match.
For example `/abc/` matches character combos occurring in that **exact order and sequence**, hence it would match with `"She has learnt her abc's well"` or `"What was the name of the game? Was it slabcraft?"`. Both cases have the contain characters following `/abc/` the pattern identically.

### Using Special Chars

When a search for a match requires finding something more than a direct match, such as one or more `b's`, or whitespace, you can include special chars in the pattern.
For example, to match an `"a"` followed by one or more `"b's"` followed by a `"c"`, we'll use the following syntax:

```js
const str = "cbbabbbbcdebc";
const re = /ab*c/;

console.log(str.match(re));
// it fetches the substring 'abbbbc'
```

The \* after the b means: one or more b's.

There are some different special characters that are also used in [[RegExp]]. They include:

1. [Assertions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
2. [Character Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
3. [Groups and BackReferences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
4. [Quantifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)

### Escaping

To use special characters literally, like to search for a match of the character `*`, you need to escape the character, by putting a backslash `\` infront of it.
To search for `"a"`, followed by `"*"` followed by `"b"`, we would do this:

```js
const re = /a\*b/;
```

Hence, the `"*"` becomes literal rather than special.

## Using Regular Expressions in JavaScript

Here are some methods used with [[RegExp]]:

- `exec()` - Executes a search for a match in a string. It returns an array of information or null on a mismatch.
- `test()` - Tests for a match in a string and returns true or false.
- `match()` - Returns an array containing all of the matches, including capturing groups, or `null` if no match is found.
- `matchAll()` - Returns an iterator containing all of the matches.
- `search()` - Tests for a match in a string and returns the index of the match, or `-1` for mismatch/fail.
- `replace()` - Executes a search for a match in a string and replaces the matched substring with a replacement substring.
- `replaceAll()` - Executes a search for all matches in a string and replaces the matched substrings with a replacement substring.
- `split()` - Use a regular expression or a fixed string to break a string into an array of substrings.

To know whether a pattern is found in a string, use `test()` or `search()`. For more info (but slower execution) use `exec()` or `match()`.

Here, for example, we use `exec()` to find a match in a string;

```js
const re = /d(b+)d/g;
const myArray = re.exec("cdbbdbsbz"); // [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz', groups: undefined ]
```

To create it from a string:

```JavaScript
const re = new RegExp("/d(b+)d", "g");
const myArray = re.exec("cdbbdbsbz")
```

Continue here on [webdev-simplified](https://www.youtube.com/watch?v=rhzKDrUiJVk)
