---
title: "Promoted Search Terms"
domain: apex-guide
topic: promoted-search-terms
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:43:47.174Z
keywords: [Promoted, Search, Terms, Example]
---

# Promoted Search Terms

# Promoted Search Terms

Promoted search terms are useful for promoting a Salesforce Knowledge article that you know is commonly used to resolve a support issue when an end user’s search contains certain keywords. Users can promote an article in search results by associating keywords with the article in Apex (by using the SearchPromotionRule sObject) in addition to the Salesforce user interface.

Articles must be in published status (with a PublishSatus field value of Online) for you to manage their promoted terms.

## Example

This code sample shows how to add a search promotion rule. This sample performs a query to get published articles of type MyArticle\_\_kav. Next, the sample creates a SearchPromotionRule sObject to promote articles that contain the word “Salesforce” and assigns the first returned article to it. Finally, the sample inserts this new sObject.

```

```

To perform DML operations on the SearchPromotionRule sObject, you must enable Salesforce Knowledge.