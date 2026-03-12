---
title: "Wildcards"
domain: chatterapi
topic: wildcards
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.858Z
estimatedTokens: 499
keywords: [Wildcards, wildcard, characters, match, text, patterns, Connect, REST, API, Apex, searches]
---

# Wildcards

> Use wildcard characters to match text patterns in Connect REST API and Connect in Apex
    searches.

# Wildcards

Use wildcard characters to match text patterns in Connect REST API and Connect in Apex searches.

A common use for wildcards is searching a feed. Pass a search string and wildcards in the q parameter. This example is a Connect REST API request:

```

```

This example is a Connect in Apex method call:

```

```

You can specify the following wildcard characters to match text patterns in your search:

| Wildcard | Description |
| --- | --- |
| * | Asterisks match zero or more characters at the middle or end of your search term. For example, a search for john* finds items that start with john, such as, john, johnson, or johnny. A search for mi* meyers finds items with mike meyers or michael meyers.If you are searching for a literal asterisk in a word or phrase, then escape the asterisk (precede it with the \ character). |
| ? | Question marks match only one character in the middle or end of your search term. For example, a search for jo?n finds items with the term john or joan but not jon or johan. You can't use a ? in a lookup search. |

When using wildcards, consider the following notes:

-   The more focused your wildcard search, the faster the search results are returned, and the more likely the results will reflect your intention. For example, to search for all occurrences of the word prospect (or prospects, the plural form), it is more efficient to specify prospect\* in the search string than to specify a less restrictive wildcard search (such as prosp\*) that could return extraneous matches (such as prosperity).
-   Tailor your searches to find all variations of a word. For example, to find property and properties, you would specify propert\*.
-   Punctuation is indexed. To find \* or ? inside a phrase, you must enclose your search string in quotation marks and you must escape the special character. For example, "where are you\\?" finds the phrase where are you?. The escape character (\\) is required in order for this search to work correctly.

## Code Examples

```
/chatter/feed-elements?q=chat*
```

```
ConnectApi.ChatterFeeds.searchFeedElements(null, 'chat*');
```
