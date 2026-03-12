---
title: "sObjects Suggested Articles"
domain: rest-api
topic: sobjects-suggested-articles
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.971Z
estimatedTokens: 742
keywords: [sObjects, Suggested, Articles, results, Case, Work, Order, Line, suggestions, common, keywords, title, that’s, entered, record]
---

# sObjects Suggested Articles

> Returns results on suggested articles for a Case, Work Order, or Work Order Line. These
    suggestions are based on common keywords in the title, description, and other information that’s
    entered before the record has been saved and assigned an ID. This resource is available in REST
    API version 30.0 and later.

# sObjects Suggested Articles

Returns results on suggested articles for a Case, Work Order, or Work Order Line. These suggestions are based on common keywords in the title, description, and other information that’s entered before the record has been saved and assigned an ID. This resource is available in REST API version 30.0 and later.

Salesforce Knowledge must be enabled in your organization. The user must have the “View Articles” permission enabled. The articles suggested include only the articles the user can access, based on the data categories and article types the user has permissions to view.

Articles are suggested based on a relevance algorithm. The suggestedArticles resource is designed to get the IDs of articles relevant to a case, work order, or work order line item. It’s intended to be used with other services that than use the IDs to get article data for display.

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/suggestedArticles​?language=articleLanguage&subject=subject&description=description.

Formats

JSON, XML

HTTP methods

GET

Authentication

Authorization: Bearer token

Request body

None required

Request parameters

| Parameter | Description |
| --- | --- |
| articleTypes | Optional. Three-character ID prefixes indicating the desired article types. You can specify multiple values for this parameter in a single REST call, by repeating the parameter name for each value. For example, articleTypes=ka0&articleTypes=ka1. |
| categories | Optional. The name of the data category group and the data category API name (not category title) for desired articles. The syntax is categories={"Group":"Category"}. Characters in the URL might need to be encoded. For example:categories=%7B%22Regions%22%3A%22Asia%22%2C%22 Products%22%3A%22Laptops%22%7DThe same data category group can’t be specified more than once. However, you can specify multiple data category group and data category pairs. For example, categories={"Regions":"Asia","Products":"Laptops"}. |
| description | Text of the description. Valid only for new records without an existing ID and required if subject is null. Article suggestions are based on common keywords in the subject, description, or both. |
| language | Required. Language that the article is written in. |
| limit | Optional. Specifies the maximum number of suggested articles to return. |
| publishStatus | Optional. The article’s publication status. Valid values:Draft–Not publishedOnline–Published in Salesforce KnowledgeArchived |
| subject | Text of the subject. Valid only for new records without an existing ID and required if description is null. Article suggestions are based on common keywords in the subject, description, or both. |
| topics | Optional. The topic of returned articles. For example: topics=outlook&topics=email. |
| validationStatus | Optional. The validation status of returned articles. |

## Example

Example Request

```

```

Example Response Body

```

```

## Code Examples

```
categories=%7B%22Regions%22%3A%22Asia%22%2C%22
Products%22%3A%22Laptops%22%7D
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Case/suggestedArticles?
language=en_US&subject=orange+banana&articleTypes=ka0&articleTypes=ka1
 -H "Authorization: Bearer token"
```

```
[ {
  "attributes" : {
    "type" : "KnowledgeArticleVersion",
    "url" : "/services/data/v66.0/sobjects/KnowledgeArticleVersion/ka0D00000004CcQ"
  "Id" : "ka0D00000004CcQ"
}, {
  "attributes" : {
    "type" : "KnowledgeArticleVersion",
    "url" : "/services/data/v66.0/sobjects/KnowledgeArticleVersion/ka0D00000004CXo"
  },
  "Id" : "ka0D00000004CXo"
} ]
```
