---
title: "dataCategorySelection"
domain: knowledge-dev
topic: datacategoryselection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:41.791Z
estimatedTokens: 1044
keywords: [dataCategorySelection, data, category, selection, clause, SOQL, query, includes, group, filter, selector, filtering, Selectors]
---

# dataCategorySelection

> The syntax of the data category selection in a WITH DATA
   CATEGORY clause in a SOQL query includes a category group name to use as a filter, the
  filter selector, and the name of the category to use for filtering.

# dataCategorySelection

The syntax of the data category selection in a WITH DATA CATEGORY clause in a SOQL query includes a category group name to use as a filter, the filter selector, and the name of the category to use for filtering.

The dataCategorySelection uses the following syntax:

```

```

| Syntax | Description |
| --- | --- |
| dataCategoryGroupName | The name of the data category group to use as a filter. Geography__c is the data category group in the following example.You cannot use the same data category group more than once in a query. As an example, the following command is incorrect: WITH DATA CATEGORY Geography__c ABOVE usa__c AND Geography__c BELOW europe__c |
| filteringSelector | The selector used to filter the data in the specified data category. See Filtering Selectors for a list of valid selectors. |
| dataCategoryName | The name of the data category for filtering. You must have visibility on the category you specify.You can use parentheses to apply the filtering operator to more than one data category. Each data category must be separated by a comma.Example: WITH DATA CATEGORY Geography__c AT (usa__c,france__c,uk__c)You can't use the AND operator instead of parentheses to list multiple data categories. The following syntax does not work WITH DATA CATEGORY Geography__c AT usa__c AND france__c |

## Filtering Selectors

When specifying filters for a WITH DATA CATEGORY clause of a SOQL query, you can use AT to select the specified category, ABOVE to select the category and all its parent categories, BELOW to select the category and all its subcategories, and ABOVE\_OR\_BELOW to select the category, its parent categories, and its subcategories.

The examples in this section are based on the following data category group:

```

```

This table lists the filteringSelector values that are used in the [dataCategorySelection](#sforce_api_calls_soql_select_with_datacategory_catselection "The syntax of the data category selection in a WITH DATA CATEGORY clause in a SOQL query includes a category group name to use as a filter, the filter selector, and the name of the category to use for filtering.") syntax.

| Selector | Description |
| --- | --- |
| AT | Select the specified data category.For example, the following syntax selects asia__c.WITH DATA CATEGORY Geography__c AT asia__c |
| ABOVE | Select the specified data category and all its parent categories.For example, the following syntax selects usa__c, northAmerica__c, and ww__c.WITH DATA CATEGORY Geography__c ABOVE usa__c |
| BELOW | Select the specified data category and all its subcategories.For example, the following selects northAmerica__c, usa__c, canada__c, and mexico__c.WITH DATA CATEGORY Geography__c BELOW northAmerica__c |
| ABOVE_OR_BELOW | Select the specified data category andall its parent categoriesall its subcategoriesFor example, the following selects ww__c, europe__c, france__c, and uk__c.WITH DATA CATEGORY Geography__c ABOVE_OR_BELOW europe__c |

Here are some more examples of WITH DATA CATEGORY clauses in a SELECT statement in a SOQL query.

| Type of Search | Examples |
| --- | --- |
| Select the title from all questions classified with the mobile_phones__c data category in the Product__c data category group | SELECT Title FROM Question WHERE LastReplyDate < 2005-10-08T01:02:03Z WITH DATA CATEGORY Product__c AT mobile_phones__c |
| Select the title and summary from all published Knowledge articles classified:above or below europe__c in the Geography__c data category groupbelow allProducts__c in the Product__c data category group | SELECT Title, Summary FROM KnowledgeArticleVersion WHERE PublishStatus='Online' AND Language = 'en_US' WITH DATA CATEGORY Geography__c ABOVE_OR_BELOW europe__c AND Product__c BELOW All__c |
| Select the ID and title from draft articles of type “Offer__kav” classified :with the france__c or usa__c data category in the Geography__c data category groupabove the dsl__c data category in the Product__ data category group | SELECT Id, Title FROM Offer__kav WHERE PublishStatus='Draft' AND Language = 'en_US' WITH DATA CATEGORY Geography__c AT (france__c,usa__c) AND Product__c ABOVE dsl__c |

## Code Examples

```
dataCategoryGroupName filteringSelector dataCategoryName
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
