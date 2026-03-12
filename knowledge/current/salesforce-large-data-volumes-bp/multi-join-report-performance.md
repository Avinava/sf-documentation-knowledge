---
title: "Multi-Join Report Performance"
domain: salesforce-large-data-volumes-bp
topic: multi-join-report-performance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.986Z
estimatedTokens: 189
keywords: [Multi-Join, Report, Performance, customer, created, four, objects, Accounts, Sales, Orders, 2.3, million, Account, Ownership, 1.2]
---

# Multi-Join Report Performance

> The customer created a report
that used four related objects: Accounts (314,000), Sales Orders (769,000),
Sales Details (2.3 million), and Account Ownership (1.2 million).
The report had very little filtering and needed to be optimized.

# Multi-Join Report Performance

## Situation

The customer created a report that used four related objects: Accounts (314,000), Sales Orders (769,000), Sales Details (2.3 million), and Account Ownership (1.2 million). The report had very little filtering and needed to be optimized.

## Solution

To optimize the report, the customer:

-   Added additional filters to make the query more selective and ensured that as many filters as possible were indexable
-   Reduced the amount of data in each object, whenever possible
-   Kept the Recycle Bin empty. Data in the Recycle Bin affects query performance.
-   Ensured that no complex sharing rules existed for the four related objects. Complex sharing rules can have a noticeable impact on performance.
