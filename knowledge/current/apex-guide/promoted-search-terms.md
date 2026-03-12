---
title: "Promoted Search Terms"
domain: apex-guide
topic: promoted-search-terms
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:33.440Z
estimatedTokens: 247
keywords: [Promoted, Search, Terms, search, terms, useful, promoting, Salesforce, Knowledge, article, know, commonly, used, resolve, support, issue, end, user’s, contains, certain]
---

# Promoted Search Terms

> Promoted search terms are useful for promoting a
      Salesforce Knowledge article that you know is commonly used to resolve a support issue when an
      end user’s search contains certain keywords.
    Users can promote an article in search results by
      associating keywords with the article in Apex (by using the SearchPromotionRule sObject) in
      addition to the Salesforce user interface.

# Promoted Search Terms

Promoted search terms are useful for promoting a Salesforce Knowledge article that you know is commonly used to resolve a support issue when an end user’s search contains certain keywords. Users can promote an article in search results by associating keywords with the article in Apex (by using the SearchPromotionRule sObject) in addition to the Salesforce user interface.

Articles must be in published status (with a PublishSatus field value of Online) for you to manage their promoted terms.

## Example

This code sample shows how to add a search promotion rule. This sample performs a query to get published articles of type MyArticle\_\_kav. Next, the sample creates a SearchPromotionRule sObject to promote articles that contain the word “Salesforce” and assigns the first returned article to it. Finally, the sample inserts this new sObject.

```

```

To perform DML operations on the SearchPromotionRule sObject, you must enable Salesforce Knowledge.

## Code Examples

```apex
// Identify the article to promote in search results
List<MyArticle__kav> articles = [SELECT Id FROM MyArticle__kav WHERE PublishStatus='Online' AND Language='en_US' AND Id='Article Id'];

// Define the promotion rule
SearchPromotionRule s = new SearchPromotionRule(
    Query='Salesforce',
    PromotedEntity=articles[0]);

// Save the new rule
insert s;
```
