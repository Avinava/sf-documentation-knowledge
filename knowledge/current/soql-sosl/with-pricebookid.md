---
title: "WITH PricebookId"
domain: soql-sosl
topic: with-pricebookid
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.964Z
estimatedTokens: 56
keywords: [PricebookId, Filters, product, search, results, price, book]
---

# WITH PricebookId

> Filters product search results by a single price book ID.

# WITH PricebookId

Filters product search results by a single price book ID.

Only applicable for the Product2 object. The price book ID must be associated with the product that you’re searching for. For example:

```

```

## Code Examples

```
Find {laptop} RETURNING Product2 WITH PricebookId = '01sxx0000002MffAAE'
```
