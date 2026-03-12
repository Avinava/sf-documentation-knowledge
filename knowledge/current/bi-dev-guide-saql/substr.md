---
title: "substr()"
domain: bi-dev-guide-saql
topic: substr
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:06.513Z
estimatedTokens: 239
keywords: [substr, substring, starts, position, specify, length, Usage]
---

# substr()

> Returns a substring that starts at the specified position. You can also specify the
        length of the substring to return.

# substr()

Returns a substring that starts at the specified position. You can also specify the length of the substring to return.

## Syntax

substr(string,position\[, length\])

## Usage

substr returns the characters in string, starting at position position. If you specify length, this function returns length number of characters. If any of the parameters are null, then the function returns null. length is optional.

The first character in string is at position 1. If position is negative then the position is relative to the end of the string. So a position of -1 denotes the last character.

If length is negative, then the function returns null. If position > len (string) or position < -len(string) or position = 0, then the empty string is returned.

## Example

```

```

## Example

Suppose that you want to display the current time, but not the current date. Use substr() to return the last 11 characters from date\_to\_string() .

```

```

## Code Examples

```
-- we want a substring that is one character long, starting at position 1. 
-- The character "C" is returned.
substr("CRM", 1, 1)

-- we want a substring that is 2 characters long, starting at position 1
-- The string "CR" is returned
substr("CRM", 1, 2) == "CR"

-- we want a substring that is two characters long, starting from the *end* of the string
-- The string "RM" is returned
substr("CRM", -2, 2) == "RM"

-- we want to get the first 10 characters from this string
-- the string "2018-03-16" is returned
substr("2018-03-16T00:00:03.000Z",10)
```

```
q = foreach q generate substr(date_to_string(now(), "yyyy-MM-dd HH:mm:ss"), -11) as 'Time Now';
```
