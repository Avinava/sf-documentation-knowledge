---
title: "index_of()"
domain: bi-dev-guide-saql
topic: indexof
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:06.486Z
estimatedTokens: 255
keywords: [index_of, location, index, characters, _of, Usage]
---

# index_of()

> Returns the location (index) of the specified characters.

# index\_of()

Returns the location (index) of the specified characters.

## Syntax

index\_of(string, searchStr \[,position \[, occurence\]\])

## Usage

This function returns the index of searchStr in string, beginning at the specified position. The function returns 0 if searchStr is not found. This function is case-sensitive. If any of the parameters are null, then the function returns null.

The default value of position is 1, which means that the function begins searching at the first character of string. An error results if position is negative or zero.

occurrence is an optional integer, with a default value of 1 . You can use this parameter to specify which occurrence of searchStr to search for. For example, if there is more than one occurrence of searchStr, and occurence is 2, the index of the second occurrence is returned.

Constant values are supported for position and occurrence, not arbitrary expressions.

If searchStr is an empty string, then the function returns null.

## Example

```

```

## Code Examples

```
q = load "Opportunity Details";
q = group q by all;
-- return the first occurrence of "a", starting at the beginning.
-- The result is 2.
q = foreach q generate index_of("Hawaii", "a") as 'Index';

-- return the second occurrence of "a", starting at the beginning
-- the result is 4
q = foreach q generate index_of("Hawaii", "a",1, 2) as 'Index';


-- return the first occurrence of "a", starting at the third position
-- the result is 4
q = foreach q generate index_of("Hawaii", "a",3) as 'Index';
```
