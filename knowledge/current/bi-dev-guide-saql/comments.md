---
title: "Comments"
domain: bi-dev-guide-saql
topic: comments
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.267Z
estimatedTokens: 142
keywords: [Comments, add, single-line, comment, SAQL, preface, two, hyphens, multi-line, start, forward, slash, asterisk, end]
---

# Comments

> To add a single-line comment in SAQL, preface your comment with two hyphens (--). To add a multi-line comment, start your comment with a forward
  slash and asterisk (/*) and end it with an asterisk and
  forward slash (*/).

# Comments

To add a single-line comment in SAQL, preface your comment with two hyphens (\--). To add a multi-line comment, start your comment with a forward slash and asterisk (/\*) and end it with an asterisk and forward slash (\*/).

## Single-Line Comments

Here’s an example of a single-line comment on its own line.

```

```

You can put a comment at the end of a line of SAQL code.

```

```

To comment a line of SAQL code, add two hyphens at the beginning of the line.

```

```

## Multi-Line Comments

Here’s an example of a multi-line comment.

```

```

## Code Examples

```
--Load a data stream.
a = load "myData";
```

```
a = load "myData"; --Load a data stream.
```

```
--The following line is commented out:
--a = load "myData";
```

```
q = load "campaign_data";
q = group q by Owner;
q = foreach q generate count() as 'count';
/*
q = limit q 5;
*/
```
