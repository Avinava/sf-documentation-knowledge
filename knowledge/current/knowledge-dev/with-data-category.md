---
title: "WITH DATA CATEGORY"
domain: knowledge-dev
topic: with-data-category
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.783Z
estimatedTokens: 851
keywords: [DATA, CATEGORY, search, Salesforce, Knowledge, articles, questions, their, SOQL, query, clause, SELECT, statement, that’s, filter]
---

# WITH DATA CATEGORY

> You can search for Salesforce Knowledge
        articles and questions by their data category in a SOQL query. WITH DATA CATEGORY is an optional clause in a SELECT statement that’s used to filter records that are associated with one or
        more data categories and are visible to users.

# WITH DATA CATEGORY

You can search for Salesforce Knowledge articles and questions by their data category in a SOQL query. WITH DATA CATEGORY is an optional clause in a SELECT statement that’s used to filter records that are associated with one or more data categories and are visible to users.

```

```

If WITH DATA CATEGORY is specified, the query() returns only matching records that are associated with the specified data categories and are visible to the user. If unspecified, the query() only returns the matching records that are visible to the user.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=knowledge_dev)

#### Important

CategoryData is an object and DATA CATEGORY is syntax in a SOQL WITH clause. WITH DATA CATEGORY is valid syntax, but WITH CategoryData is not supported.

A SOQL statement using a WITH DATA CATEGORY clause must also include a FROM ObjectTypeName clause where ObjectTypeName equals:

-   KnowledgeArticleVersion to query all article types
-   an article type API Name to query a specific article type
-   Question to query questions

When ObjectTypeName equals to [KnowledgeArticleVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleversion.htm "HTML (New Window)") or any article type API Name in the FROM clause, a WHERE clause must be specified with one of the following parameters:

-   PublishStatus to query articles depending on their status in the publishing cycle:
    -   WHERE PublishStatus='online' for published articles
    -   WHERE PublishStatus='archived' for archived articles
    -   WHERE PublishStatus='draft' for draft articles
-   Id to query an article based on its id

For information on article types or questions, see “Knowledge Article Types” in Salesforce Help.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=knowledge_dev)

#### Note

The WITH DATA CATEGORY clause does not support [bind variables](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_SOQL_variables.htm). The clause can have no more than three data category conditions.

## filteringExpression

The filteringExpression in the WITH DATA CATEGORY clause uses the following syntax:

```

```

The examples in this section are based on the following data category group:

```

```

The category filtering in the statements below is highlighted in bold.

-   SELECT Title FROM KnowledgeArticleVersion WHERE PublishStatus='online' **WITH DATA CATEGORY Geography\_\_c ABOVE usa\_\_c**
-   SELECT Title FROM Question WHERE LastReplyDate > 2005-10-08T01:02:03Z **WITH DATA CATEGORY Geography\_\_c AT (usa\_\_c, uk\_\_c)**
-   SELECT UrlName FROM KnowledgeArticleVersion WHERE PublishStatus='draft' **WITH DATA CATEGORY Geography\_\_c AT usa\_\_c AND Product\_\_c ABOVE\_OR\_BELOW mobile\_phones\_\_c**

You can only use the AND logical operator. The following syntax is incorrect as OR is not supported:

```

```

-   **[dataCategorySelection](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_calls_soql_select_with_datacategory_catselection.htm)**
    The syntax of the data category selection in a WITH DATA CATEGORY clause in a SOQL query includes a category group name to use as a filter, the filter selector, and the name of the category to use for filtering.

## Code Examples

```
[WITH [DATA CATEGORY] filteringExpression]
```

```
dataCategorySelection [AND [dataCategorySelection][...]
```

```
Geography__c
    ww__c
        northAmerica__c
            usa__c
            canada__c
            mexico__c
        europe__c
            france__c
            uk__c
        asia__c
```

```
WITH DATA CATEGORY Geography__c ABOVE usa__c OR Product__c AT mobile_phones__c
```

## Related Topics

- dataCategorySelection (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_calls_soql_select_with_datacategory_catselection.htm)
