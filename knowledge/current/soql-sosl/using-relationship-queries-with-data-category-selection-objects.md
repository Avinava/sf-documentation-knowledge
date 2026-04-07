---
title: "Using Relationship Queries with Data Category Selection Objects"
domain: soql-sosl
topic: using-relationship-queries-with-data-category-selection-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:09.859Z
estimatedTokens: 176
keywords: [Relationship, Queries, Category, Selection, categories, classify, records, SOQL, Article__DataCategorySelection, QuestionDataCategorySelection, build, query, DataCategorySelections, clause]
---

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
