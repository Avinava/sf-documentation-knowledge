---
title: "Full-Text Query Syntax"
domain: mobile-sdk
topic: full-text-query-syntax
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:31.649Z
estimatedTokens: 762
keywords: [Full-Text, Query, Mobile, SDK, queries, SQLite's, enhanced, logical, operators, refine, search]
---

# Full-Text Query Syntax

> Mobile SDK full-text
  queries use SQLite's enhanced query syntax. With this syntax, you can use logical operators to
  refine your search.

# Full-Text Query Syntax

Mobile SDK full-text queries use SQLite's enhanced query syntax. With this syntax, you can use logical operators to refine your search.

The following table shows the syntactical options that Mobile SDK queries support. Following the table are keyed examples of the various query styles and sample output. For more information, see Sections 3.1, “Full-text Index Queries,” and 3.2, “Set Operations Using The Enhanced Query Syntax,” at [sqlite.org](https://sqlite.org/fts3.html).

| Query Option | SmartStore Behavior | Related Examples |
| --- | --- | --- |
| Specify one or more full-text indexed paths | Performs match against values only at the paths you defined. | g, h, i, j, and k |
| Set the path to a null value | Performs match against all full-text indexed pathsNoteIf your path is null, you can still specify a target field in the matchKey argument. Use this format: {soupName:path}:term | a,b,c,d,e, and f |
| Specify more than one term without operators or grouping | Assumes an “AND” between terms | b and h |
| Place a star at the end of a term | Matches rows containing words that start with the query term | d and j |
| Use “OR” between terms | Finds one or both terms | c and i |
| Use the unary “NOT” operator before a term | Ignores rows that contain that term | e, f, and k |
| Specify a phrase search by placing multiple terms within double quotes (“ ”). | Returns soup elements in which the entire phrase occurs in one or more full-text indexed fields |  |

## Example

For these examples, a soup named “animals” contains the following records. The name and color fields are indexed as full\_text.

```

```

| Example | Path | Match Key | Selects... | Records Returned |
| --- | --- | --- | --- | --- |
| a. | null | “black” | Records containing the word “black” in any full-text indexed field | 1, 3 |
| b. | null | “black cat” | Records containing the words “black” and “cat” in any full-text indexed field | 1 |
| c. | null | “black OR cat” | Records containing either the word “black” or the word “cat” in any full-text indexed field | 1, 2, 3 |
| d. | null | “b*” | Records containing a word starting with “b” in any full-text indexed field | 1, 3 |
| e. | null | “black NOT cat” | Records containing the word “black” but not the word “cat” in any full-text indexed field | 3 |
| f. | null | “{animals:color}:black NOT cat” | Records containing the word “black” in the color field and not having the word “cat” in any full-text indexed field | 3 |
| g. | “color” | “black” | Records containing the word “black” in the color field | 1, 3 |
| h. | “color” | “black cat” | Records containing the words “black” and “cat” in the color field | No records |
| i. | “color” | “black OR cat” | Records containing either the word “black” or the word “cat” in the color field | 1, 3 |
| j. | “color” | “b*” | Records containing a word starting with “b” in the color field | 1, 3 |
| k. | “color” | “black NOT cat” | Records containing the word “black” but not the word “cat” in the color field | 1, 3 |

## Code Examples

```
{"id”: 1, "name": "cat", "color": "black"}
{"id”: 2, "name": "cat", "color": "white"}
{"id”: 3, "name": "dog", "color": "black"}
{"id”: 4, "name": "dog", "color": "brown"}
{"id”: 5, "name": "dog", "color": "white"}
```
