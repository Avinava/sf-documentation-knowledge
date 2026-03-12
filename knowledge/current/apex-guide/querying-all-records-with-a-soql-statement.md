---
title: "Querying All Records with a SOQL Statement"
domain: apex-guide
topic: querying-all-records-with-a-soql-statement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:34.484Z
estimatedTokens: 121
keywords: [Querying, Records, SOQL, Statement, ROWS, query, organization's, Recycle, Bin, cannot, keywords]
---

# Querying All Records with a SOQL Statement

> You can use ALL ROWS to query records in your
organization's Recycle Bin. You cannot use the ALL ROWS
keywords with the FOR UPDATE keywords.

# Querying All Records with a SOQL Statement

SOQL statements can use the ALL ROWS keywords to query all records in an organization, including deleted records and archived activities. For example:

```

```

You can use ALL ROWS to query records in your organization's Recycle Bin. You cannot use the ALL ROWS keywords with the FOR UPDATE keywords.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_variables.htm "Using Apex Variables in SOQL and SOSL Queries")

## Code Examples

```apex
System.assertEquals(2, [SELECT COUNT() FROM Contact WHERE AccountId = a.Id ALL ROWS]);
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_variables.htm)
