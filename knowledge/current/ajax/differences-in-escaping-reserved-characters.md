---
title: "Differences in Escaping Reserved Characters"
domain: ajax
topic: differences-in-escaping-reserved-characters
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.598Z
estimatedTokens: 91
keywords: [Differences, Escaping, Reserved, Characters, quote, backslash, literal, two, backslashes, instead, escape]
---

# Differences in Escaping Reserved Characters

> If you have a single quote or backslash in a string literal, use two backslashes instead
  of one to escape it.

# Differences in Escaping Reserved Characters

If you have a single quote or backslash in a string literal, use two backslashes instead of one to escape it.

For example, the following statement in a Java client program is valid for finding account names like Bob's B-B-Q.

```

```

For the AJAX Toolkit, escape the single quote literal character twice.

```

```

## Code Examples

```
SELECT ID from ACCOUNT WHERE Name LIKE 'Bob\'s B-B-Q%'
```

```
SELECT ID from ACCOUNT WHERE Name LIKE 'Bob\\'s B-B-Q%'
```
