---
title: "Data Category Groups"
domain: knowledge-dev
topic: data-category-groups
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.693Z
estimatedTokens: 819
keywords: [Data, Category, Groups, visible, current, user, resource, REST, API, version, 38.0, later]
---

# Data Category Groups

> Get data category groups that are visible to the current user. This resource is
  available in REST API version 38.0 and later.

# Data Category Groups

Get data category groups that are visible to the current user. This resource is available in REST API version 38.0 and later.

Salesforce Knowledge must be enabled in your organization. This resource can be used in API version 38.0 and later. Use the language code format used in [Which Languages Does Salesforce Support?](https://help.salesforce.com/apex/HTViewHelpDoc?id=faq_getstart_what_languages_does.htm&language=en_US).

Only the user’s visible data categories are returned. A user might be able to see several sub trees in the category group, therefore, the top categories that are visible to the user in each group are returned.

## Syntax

URI

/services/data/vXX.X/support/dataCategoryGroups

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

boolean topCategoriesOnly: Optional. Defaults to true

-   True returns only the top level categories.
-   False returns the entire tree.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=knowledge_dev)

#### Note

All the input parameters are case-sensitive.

Output:

A list of the active data category groups that are visible to the current user in the site context. Returns id, name, label, and their top level categories or the entire data category group tree that are visible to the current user. The labels must be translated to the given language if they are available.

-   **Data Category Group List**

    This payload lists the active root Data Category Groups that can be used in other requests to return the data categories and articles related to it.

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=knowledge_dev)

    #### Note

    Returns only the active groups that are associated to the given entity (by sObjectName). Only KnowledgeArticleVersion is supported.

-   **Data Category Group**

    This represents an individual data category group, and its root category.

    ```

    ```

-   **Data Category Summary**

    This provides a summary of data category information. The Summary and Detail responses share common properties, with the goal of providing only as much information as is necessary from associated resources.

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=knowledge_dev)

    #### Note

    The URL property is a pre-calculated path to the unique resource representing this data category, in this case it is a [Data Category Detail](atlas.en-us.knowledge_dev.meta/knowledge_dev/resources_knowledge_support_dcdetail.htm#resources_knowledge_support_dcdetail "Gets data category details and the child categories by a given category. This resource can be used in API version 38.0 and later.") API.


## Example

Example Request

```

```

Example Response Body

```

```

## Code Examples

```
{
    "categoryGroups": [ Data Category Group, ....],
}
```

```
{
    "name": String,  // the unique name of the category group
    "label": String,  // returns the translated version if it is available
    "objectUsage" : String, // currently only "KnowledgeArticleVersion" is available.
    "topCategories": [ Data Category Summary, ....]
}
```

```
{
    "name": String, // the unique name of the category
    "label":  String,  // returns the translated version if it is available
    "url":  URL,    // the url points to the data category detail API
	"childCategories": [ Data Category Summary, ....] // null if topCategoriesOnly is true
}
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/support/dataCategoryGroups?sObjectName=KnowledgeArticleVersion -H "Authorization: Bearer token"
```

```
{
  "categoryGroups" : [ {
	"label" : "Doc",
	"name" : "Doc",
	"objectUsage" : "KnowledgeArticleVersion",
	"topCategories" : [ {
  	"childCategories" : null,
  	"label" : "All",
  	"name" : "All",
  	"url" : "/services/data/v66.0/support/dataCategoryGroups/Doc/dataCategories/All?sObjectName=KnowledgeArticleVersion"
	} ]
  }, {
	"label" : "Manual",
	"name" : "Manual",
	"objectUsage" : "KnowledgeArticleVersion",
	"topCategories" : [ {
  	"childCategories" : null,
  	"label" : "All",
  	"name" : "All",
  	"url" : "/services/data/v66.0/support/dataCategoryGroups/Manual/dataCategories/All?sObjectName=KnowledgeArticleVersion"
	} ]
  } ]
}
```

## Related Topics

- Data Category Detail (atlas.en-us.knowledge_dev.meta/knowledge_dev/resources_knowledge_support_dcdetail.htm)
