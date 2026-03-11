---
title: "Data Category Detail"
domain: rest-api
topic: data-category-detail
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.387Z
keywords: [Data, Category, Detail, Syntax, Note, Example]
---

# Data Category Detail

# Data Category Detail

Gets data category details and the child categories by a given category. This resource can be used in API version 38.0 and later.

Salesforce Knowledge must be enabled in your organization. Use the language code format used in [Which Languages Does Salesforce Support?](https://help.salesforce.com/apex/HTViewHelpDoc?id=faq_getstart_what_languages_does.htm&language=en_US).

## Syntax

URI

/services/data/vXX.X/support/dataCategoryGroups/group/dataCategories/category

Method

GET

Formats

JSON, XML

Authentication

Authorization: Bearer token

HTTP headers

**Accept:** Optional. Can be either application/json or application/xml.

**Accept-language:** Optional. Language to translate the categories. Any ISO-639 language abbreviation, and an ISO-3166 country code subtag in the HTTP Accept-Language header. Only one language accepted. If no language specified, the non-translated labels are returned.

Input:

string sObjectName: Required. KnowledgeArticleVersion only.

Output:

Details of the category and a list of child categories (name, label, etc.).

-   **Data Category Detail**
    
    Used for situations where the hierarchical representation of data categories is important. The child property contains a list of child data categories.
    
    ```
    
    ```
    

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

If the category isn’t visible to the current user the return is empty.

## Example

Example Request

```

```

Example Response Body

```

```