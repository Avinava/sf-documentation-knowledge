---
title: "Knowledge Articles and Data Categories in the API"
domain: knowledge-dev
topic: knowledge-articles-and-data-categories-in-the-api
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:41.509Z
estimatedTokens: 2299
keywords: [Knowledge, Articles, Data, Categories, API, working, basics]
---

# Knowledge Articles and Data Categories in the API

> Before working with the Knowledge API, learn the basics about knowledge articles and
  data categories.

# Knowledge Articles and Data Categories in the API

Before working with the Knowledge API, learn the basics about knowledge articles and data categories.

## Articles Overview

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=knowledge_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Articles capture information about your company's products and services that you want to make available in your knowledge base. Articles in the knowledge base can be classified using data categories to make it easy for users to find the articles they need. Administrators can use data categories to control access to articles.

Knowledge Articles vs. Knowledge Article Versions

When working with articles, keep in mind that the [KnowledgeArticle](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_knowledgearticle.htm "HTML (New Window)") represents the parent record of all article versions. [KnowledgeArticleVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleversion.htm "HTML (New Window)") records represent each version of a given article.

Record Types vs. Article Types

The article structure is represented differently between Lightning Experience and Salesforce Classic. In Lightning Knowledge, you use the same record types available in other custom objects (see the RecordTypeId field on [Knowledge\_\_kav](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_knowledge__kav.htm "HTML (New Window)")) to structure different types of articles. For example, you can use different layouts for different record types. In Salesforce Classic, you get this functionality through article types (see the ArticleType field on [KnowledgeArticleVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleversion.htm "HTML (New Window)")). Each unique type of article has a unique object in Salesforce Classic (for example, FAQ\_\_kav for FAQ article types). Lightning Knowledge does not have a unique object for each type because it is handled using the record type.

Audience Channel

An audience, sometimes called a channel, refers to the types of users who can access an article. Salesforce Knowledge offers four channels where you can make articles available.

-   Internal App: Salesforce users can access articles depending on their role visibility.
-   Customer: Customers can access articles in a community, site, or customer portal. Customer users inherit the role visibility of the manager on the account. In a community, the article is only available to users with Customer Community or Customer Community Plus licenses.
-   Partner: Partners can access articles in a community, site, or partner portal. Partner users inherit the role visibility of the manager on the account. In a community, the article is only available to users with Partner Community licenses.
-   Public Knowledge Base: Articles can be made available to anonymous users by creating a public knowledge base. With Lightning Knowledge, most Salesforce orgs use Communities to create a knowledge base. Creating a public knowledge base for Salesforce Knowledge in Salesforce Classic requires Sites and Visualforce.

Publishing Cycle

Salesforce Knowledge Articles move through a publishing cycle from their creation to their deletion. The publishing cycle includes three different statuses: Draft is the stage when a new article is being created or an existing one is being updated. Articles with the Online status are draft articles that have been published and are now available to their different channels. Eventually, when a published article is at the end of its life, it can be moved to the Archived status or sent back to Draft to be updated in a subsequent version.

## Working with Articles in the API

Articles are available through the [KnowledgeArticleVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleversion.htm "HTML (New Window)") and [KnowledgeArticle](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_knowledgearticle.htm "HTML (New Window)") objects in the API. They both represent an article but provide different capabilities.

KnowledgeArticleVersion

Every new draft article in Salesforce Knowledge has a version number. When an article is published and you want to update it, you can create a new Draft with a distinct version number. Each version has its own ID. Once the updated version is ready to be published, it replaces the former one and updates the version number. You can access the content of an article version using the KnowledgeArticleVersion object and filter on its Draft or Online status. For example, the following query returns the title of the Draft version of all the articles across all article types in United States English:

```

```

Articles are also auto-assigned an Article Number, which is not a unique identifier to an individual article, but an identifier to a primary article and all of its available translations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=knowledge_dev)

#### Note

Both the primary version (the knowledge article with IsMasterLanguage = 1) and the translations are KnowledgeArticleVersion objects.

KnowledgeArticle

Unlike KnowledgeArticleVersion, the ID of a KnowledgeArticle record is identical irrespective of the article's version (status). Where the KnowledgeArticleVersion object provides API access to an article's custom field values, the KnowledgeArticle object provides API access to an article's metadata fields.

The article record is the parent container of all versions of an article, whatever the publishing status (draft, published, archived) and the language. While KnowledgeArticle and KnowledgeArticleVersion represent any article in the knowledge base, use the concrete representation of these objects for the specific articles. In Lightning Knowledge, these concrete representations default to Knowledge\_\_ka (for the Knowledge article) and Knowledge\_\_kav (for the Knowledge article version). In Salesforce Classic, use <Article Type>\_\_ka and <Article Type>\_\_kav.

The following Lightning Knowledge query returns the title for all the published FAQ articles in United States English:

```

```

The following Lightning Knowledge query returns the ID, title, URL, and content of articles stored in their rich text area fields:

```

```

The following Salesforce Classic query returns the title for all the published offers in United States English:

```

```

## Data Categories Overview

Data categories are organized by category group and let:

-   Users classify and find records.
-   Administrators control access to records.

Salesforce Knowledge uses data categories to classify articles and make them easier to find. For example, to classify articles by sales regions and products, create two category groups: Sales Regions, Products. The Sales Regions category group could consist of a geographical hierarchy, such as All Sales Regions as the top level and North America, Europe, and Asia at the second level. The Products group could have All Products as the top level and Phones, Computers, and Printers at the second.

## Working with Data Categories in the API

The following table lists API resources for working with data categories.

| Name | Type | Description |
| --- | --- | --- |
| Knowledge__DataCategorySelection | Object | Gives access to article categorization in Lightning Knowledge. |
| Article Type__DataCategorySelection | Object | Gives access to article categorization in Knowledge for Salesforce Classic. |
| QuestionDataCategorySelection | Object | Gives access to question categorization. |
| WITH DATA CATEGORY filteringExpression | SOQL clause | Filters articles depending on their status in the publishing cycle and their data categories. For more information, see the Salesforce SOQL and SOSL Reference Guide. |
| WITH DATA CATEGORY DataCategorySpec | SOSL clause | Finds articles based on their categorization. For more information, see the Salesforce SOQL and SOSL Reference Guide. |
| describeDataCategoryGroups() | Call | Retrieves available category groups for objects specified in the request. |
| describeDataCategoryGroupStructures() | Call | Retrieves available category groups along with their data category structure for objects specified in the request. |
| describeDataCategoryGroups | Apex method | Returns a list of the category groups associated with the specified objects. See the Apex Developer Guide. |
| describeDataCategoryGroupStructures | Apex method | Returns available category groups along with their data category structure for objects specified in the request. See the Apex Developer Guide. |

## Code Examples

```
SELECT Title 
FROM KnowledgeArticleVersion 
WHERE PublishStatus='Draft'
AND language ='en_US'
```

```
SELECT Title
FROM Knowledge__kav
WHERE PublishStatus='online'
AND Language = 'en_US'
AND RecordTypeId = '<specify RecordTypeId for FAQ here>'
```

```
SELECT ID, Title, UrlName, RTA2__c 
FROM Knowledge_kav
```

```
SELECT Title 
FROM FAQ__kav 
WHERE PublishStatus='online'
AND language ='en_US'
```

## Related Topics

- describeDataCategoryGroups() (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_calls_describedatacategorygroups.htm)
- describeDataCategoryGroupStructures() (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_calls_describedatacategorygroupstructures.htm)
