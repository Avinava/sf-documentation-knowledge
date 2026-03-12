---
title: "string Functions"
domain: bi-dev-guide-wave-templates
topic: string-functions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.568Z
estimatedTokens: 607
keywords: [Functions, rules, manipulate, text, strings, asset, JSON, runtime, toUpperCase, toLowerCase, replace, replaceAll, replaceFirst, split, match]
---

# string Functions

> Use string functions in rules to manipulate text
    strings in asset JSON at runtime.

# string Functions

Use string functions in rules to manipulate text strings in asset JSON at runtime.

For instance, a string function can replace all occurrences of one string with another or convert strings from uppercase to lowercase. If a user enters a dashboard title in the wizard using all lowercase letters, the string function changes the text to sentence case at runtime.

## toUpperCase

Parameters: Object

Returns: Object

Recursive: Supported

Description: Converts all characters in an object to uppercase. The object can be a single string or a JSON object with multiple strings

## Example

This JSON

```

```

And the rule:

```

```

Returns:

```

```

## toLowerCase

Parameters: Object

Returns: Object

Recursive: Supported

Description: Converts all characters in a string to lowercase.

## replace

Parameters: Object obj, String oldStr, String newStr

Returns: Object

Recursive: Supported

Description: Returns a new object with all occurrences of oldStr replaced with newStr.

## replaceAll

Parameters: Object obj, String regex, String newStr

Returns: Object

Recursive: Supported

Description: Replaces all substrings of this string that match the given [regular expression](https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html#sum).

## replaceFirst

Parameters: Object obj, String regex, String newStr

Returns: Object

Recursive: Supported

Description: Replaces the first substring of this string that matches the given [regular expression](https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html#sum).

## split

Parameters: Object obj, String regex

Returns: Object

Recursive: Supported

Description: Parses a string and splits it into an array defined by the specified delimiter. For example:

```

```

Results in array of strings:

```

```

If more complex regular expression matching is required, use match (next).

## match

Parameters: Object obj, String regex

Returns: Object

Recursive: Supported

**Description:**

Performs complex regular expression matching and returns an array of matching results. For example, to capture items surrounded by square single quote and square brackets:

```

```

Returns the following array:

```

```

## join

Parameters: Object obj, String delimiter

Returns: Object

Recursive: Supported

Description: Creates a string from an array of strings and separates each item by the specified delimiter.

```

```

## Code Examples

```
"objecttest" : {
        "obj" : {
            "greeting1" : "hello world",
            "greeting2" : "salut world",
            "greeting3" : "hallo world"
        },
        "list" : ["hello world", "salut world", "hallo world"]
    },
```

```
{
    "action": "set",
    "description": "Convert all strings to upper case",
    "path": "$.objecttest",
    "value" : "${string:toUpperCase(Rules.CurrentNode)}"
}
```

```
"objecttest" : {
        "obj" : {
            "greeting1" : "HELLO WORLD",
            "greeting2" : "SALUT WORLD",
            "greeting3" : "HALLO WORLD"
        },
        "list" : ["HELLO WORLD", "SALUT WORLD", "HALLO WORLD"]
    },
```

```
${string:split('one:two:three', ':')}
```

```
['one','two','three']
```
