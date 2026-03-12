---
title: "Alias Notation"
domain: soql-sosl
topic: alias-notation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.502Z
estimatedTokens: 125
keywords: [Alias, Notation, SELECT, queries]
---

# Alias Notation

> You can use alias notation in SELECT queries.

# Alias Notation

You can use alias notation in SELECT queries.

```

```

To establish the alias, first identify the object, in this example a contact, and then specify the alias, in this case “c.” For the rest of the SELECT statement, you can use the alias in place of the object or field name.

The following are SOQL keywords that can’t be used as alias names: AND, ASC, DESC, EXCLUDES, FIRST, FROM, GROUP, HAVING, IN, INCLUDES, LAST, LIKE, LIMIT, NOT, NULL, NULLS, OR, SELECT, USING, WHERE, WITH

## Code Examples

```
SELECT count()
FROM Contact c, c.Account a
WHERE a.name = 'MyriadPubs'
```
