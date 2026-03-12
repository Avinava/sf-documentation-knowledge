---
title: "Reserved Characters"
domain: soql-sosl
topic: reserved-characters
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.791Z
estimatedTokens: 146
keywords: [Reserved, Characters, quote, backslash, SOQL, queries, preceded, properly, interpreted]
---

# Reserved Characters

> The single quote (’) and backslash (\) characters are reserved in SOQL queries and must
    be preceded by a backslash to be properly interpreted.

# Reserved Characters

The single quote (’) and backslash (\\) characters are reserved in SOQL queries and must be preceded by a backslash to be properly interpreted.

Reserved characters, if specified in a SELECT clause as a literal string (between single quotes), must be escaped (preceded by the backslash \\ character) to be properly interpreted. An error occurs if you do not precede reserved characters with a backslash.

The following characters are reserved:

```

```

For example, use the following SELECT statement to query the Account.Name field for “Bob's BBQ”:

```

```

## Code Examples

```
' (single quote)
\ (backslash)
```

```
SELECT Id
FROM Account
WHERE Name = 'Bob\'s BBQ'
```
