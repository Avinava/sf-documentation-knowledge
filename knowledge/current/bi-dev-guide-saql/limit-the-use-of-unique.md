---
title: "Limit the Use of unique()"
domain: bi-dev-guide-saql
topic: limit-the-use-of-unique
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.714Z
estimatedTokens: 169
keywords: [Limit, unique, affect, query, performance, large, datasets, over, million, rows, include, faster, measures, dimensions, counting]
---

# Limit the Use of unique()

> unique() can affect query performance for large
      datasets that have over 100 million rows and include more than one million unique values. For
      large datasets, unique() is faster for measures than for
      dimensions. If counting the number of unique string values causes performance issues, convert
      the string to a number. For example, use a hash of the string value or refer to the index of
      the string in a sorted list of string values.

# Limit the Use of unique()

unique() can affect query performance for large datasets that have over 100 million rows and include more than one million unique values. For large datasets, unique() is faster for measures than for dimensions. If counting the number of unique string values causes performance issues, convert the string to a number. For example, use a hash of the string value or refer to the index of the string in a sorted list of string values.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

Counting unique values can impact performance, but counting the total number of rows in a dataset doesn’t.
