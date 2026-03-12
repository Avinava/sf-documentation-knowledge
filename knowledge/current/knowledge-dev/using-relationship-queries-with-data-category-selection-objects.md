---
title: "Using Relationship Queries with Data Category Selection Objects"
domain: knowledge-dev
topic: using-relationship-queries-with-data-category-selection-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:41.772Z
estimatedTokens: 176
keywords: [Relationship, Queries, Data, Category, Selection, Objects, categories, classify, records, SOQL, Article__DataCategorySelection, QuestionDataCategorySelection, build, query, DataCategorySelections]
---

# Using Relationship Queries with Data Category Selection Objects

> Data categories are used to classify records. In SOQL, you can use the
    Article__DataCategorySelection or QuestionDataCategorySelection objects. You can also build
    a relationship query with the DataCategorySelections
    relationship name in a FROM clause.

# Using Relationship Queries with Data Category Selection Objects

Data categories are used to classify records. In SOQL, you can use the *Article*\_\_DataCategorySelection or QuestionDataCategorySelection objects. You can also build a relationship query with the DataCategorySelections relationship name in a FROM clause.

Imagine an Offer article type. The following query returns the ID of any categorization associated with an offer and the ID of the categorized article.

```

```

The following example uses the DataCategorySelections relationship name to build a relationship query that returns the ID of published offers and the ID of all the categorizations associated to these offers.

```

```

## Code Examples

```
SELECT Id,ParentId
FROM Offer__DataCategorySelection
```

```
SELECT Id, Title,
  (
    SELECT Id
    FROM DataCategorySelections
  )
FROM Offer__kav WHERE PublishStatus='online'
```
