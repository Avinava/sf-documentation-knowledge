---
title: "Identifiers"
domain: bi-dev-guide-saql
topic: identifiers
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.627Z
estimatedTokens: 86
keywords: [Identifiers, SAQL, case-sensitive, enclosed, quotation, marks]
---

# Identifiers

> SAQL identifiers are case-sensitive
  and must be enclosed in single quotation marks (').

# Identifiers

SAQL identifiers are case-sensitive and must be enclosed in single quotation marks (').

Identifiers that are enclosed in quotation marks can contain any character that a string can contain.

This example uses valid syntax:

```

```

This example is **not** valid because you can't use double quotes for an identifier.

```

```

## Code Examples

```
q = load "Opportunity";

--'Stage' is enclosed in single quotes because it is a field. "08 - Closed Won" is enclosed in double quotes because it is a string.
q = filter q by 'Stage' == "08 - Closed Won";
q = group q by 'Account_Owner';
q = foreach q generate 'Account_Owner' as 'Account_Owner', count() as 'count';
```

```
--this should be 'Account_Owner' in single quotes
q = group q by "Account_Owner";
```
