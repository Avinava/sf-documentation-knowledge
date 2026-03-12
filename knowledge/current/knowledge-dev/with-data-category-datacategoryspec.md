---
title: "WITH DATA CATEGORY  DataCategorySpec"
domain: knowledge-dev
topic: with-data-category-datacategoryspec
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:41.810Z
estimatedTokens: 1045
keywords: [DATA, CATEGORY, DataCategorySpec, clause, added, SOSL, query, filter, search, results, associated, categories, visible, users, searches]
---

# WITH DATA CATEGORY  DataCategorySpec

> WITH DATA
                CATEGORY is an optional clause that can be added to a SOSL query to filter
            all search results that are associated with one or more data categories and are visible
            to users. This clause is used in searches of Salesforce Knowledge articles and
            questions.

# WITH DATA CATEGORY DataCategorySpec

WITH DATA CATEGORY is an optional clause that can be added to a SOSL query to filter all search results that are associated with one or more data categories and are visible to users. This clause is used in searches of Salesforce Knowledge articles and questions.

The WITH DATA CATEGORY clause can be used in API version 18.0 or later.

## Syntax

The WITH DATA CATEGORY syntax is:

```

```

Where DataCategorySpec consists of a groupName, Operator, and category.

| Name | Description |
| --- | --- |
| groupName | The name of the data category group to filter. For information on category groups, see “Create and Modify Category Groups” in the Salesforce Help. |
| Operator | Use one of the following operators:AT—Queries the specified data category.ABOVE—Queries the specified data category and all of its parent categories.BELOW—Queries the specified data category and all of its subcategories.ABOVE_OR_BELOW—Queries the specified data category, all of its parent categories, and all of its subcategories. |
| category | The name of the category to filter. To include multiple data categories, enclose them in parentheses, separated by commas. For information on categories, see “Add Data Categories to Category Groups” in the Salesforce Help. |

You can add multiple data category specifiers by using the logical operator AND. Other operators, such as OR and AND NOT, are not supported.

A SOSL statement using the WITH DATA CATEGORY clause must also include a RETURNING ObjectTypeName clause, with a WHERE clause that filters on the PublishStatus field.

In the RETURNING clause, specify one of the following for ObjectTypeName:

-   To search a specific article type, use the article type name with the suffix *\_\_kav*
-   To search all article types, use [KnowledgeArticleVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleversion.htm "HTML (New Window)")
-   To search questions, use [Question](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_question.htm "HTML (New Window)")

For information on article types, see “Knowledge Article Types” in the Salesforce Help.

The WHERE clause must use one of the following publish statuses:

-   WHERE PublishStatus='online' for published articles
-   WHERE PublishStatus='archived' for archived articles
-   WHERE PublishStatus='draft' for draft articles

## Examples

| Search Type | Example |
| --- | --- |
| Search all published (online)Salesforce Knowledge articles with a category from one category group. | FIND {tourism} RETURNING KnowledgeArticleVersion     (Id, Title WHERE PublishStatus='online')     WITH DATA CATEGORY Location__c AT America__c |
| Search online FAQ articles with categories from two category groups. | FIND {tourism} RETURNING FAQ__kav     (Id, Title WHERE PublishStatus='online')     WITH DATA CATEGORY Geography__c ABOVE France__c     AND Product__c AT mobile_phones__c |
| Search archived FAQ articles from one category group. | FIND {tourism} RETURNING FAQ__kav     (Id, Title WHERE PublishStatus='archived')     WITH DATA CATEGORY Geography__c AT Iceland__c |
| Search all draft Salesforce Knowledge articles from one category group. | FIND {tourism} RETURNING KnowledgeArticleVersion     (Id, Title WHERE PublishStatus='draft')     WITH DATA CATEGORY Geography__c BELOW Europe__c |

For information on the WITH DATA CATEGORY clause, see the [WITH DATA CATEGORY filteringExpression](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_calls_soql_select_with_datacategory.htm "You can search for Salesforce Knowledge articles and questions by their data category in a SOQL query. WITH DATA CATEGORY is an optional clause in a SELECT statement that’s used to filter records that are associated with one or more data categories and are visible to users.").

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=knowledge_dev)

#### Tip

You can also search for articles by ID, without using the WITH DATA CATEGORY clause. For more information, see Example WHERE Clauses.

## Code Examples

```
WITH DATA CATEGORY DataCategorySpec [logicalOperator DataCategorySpec2 ... ]
```

```
FIND {tourism} RETURNING KnowledgeArticleVersion
    (Id, Title WHERE PublishStatus='online')
    WITH DATA CATEGORY Location__c AT America__c
```

```
FIND {tourism} RETURNING FAQ__kav
    (Id, Title WHERE PublishStatus='online')
    WITH DATA CATEGORY Geography__c ABOVE France__c
    AND Product__c AT mobile_phones__c
```

```
FIND {tourism} RETURNING FAQ__kav
    (Id, Title WHERE PublishStatus='archived')
    WITH DATA CATEGORY Geography__c AT Iceland__c
```

```
FIND {tourism} RETURNING KnowledgeArticleVersion
    (Id, Title WHERE PublishStatus='draft')
    WITH DATA CATEGORY Geography__c BELOW Europe__c
```

## Related Topics

- WITH DATA
                            CATEGORY
                        filteringExpression (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_calls_soql_select_with_datacategory.htm)
