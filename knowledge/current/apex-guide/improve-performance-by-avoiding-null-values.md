---
title: "Improve Performance by Avoiding Null Values"
domain: apex-guide
topic: improve-performance-by-avoiding-null-values
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:47.972Z
keywords: [Improve, Performance, Avoiding, Null, Values]
---

# Improve Performance by Avoiding Null Values

# Improve Performance by Avoiding Null Values

In your SOQL and SOSL queries, explicitly filtering out null values in the WHERE clause allows Salesforce to improve query performance. In the following example, any records where the Thread\_\_c value is null are eliminated from the search.

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_single_row.htm "Using SOQL Queries That Return One Record")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_polymorphic_relationships.htm "Working with Polymorphic Relationships in SOQL Queries")