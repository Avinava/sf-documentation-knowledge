---
title: "Salesforce Knowledge"
domain: apex-guide
topic: salesforce-knowledge
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:47.170Z
keywords: [Salesforce, Knowledge]
---

# Salesforce Knowledge

# Salesforce Knowledge

Salesforce Knowledge is a knowledge base where users can easily create and manage content, known as articles, and quickly find and view the articles they need.

Use Apex to access these Salesforce Knowledge features:

-   **[Knowledge Management](atlas.en-us.apexcode.meta/apexcode/apex_forcecom_kbmanagement.htm)**  
    Users can write, publish, archive, and manage articles using Apex in addition to the Salesforce user interface.
-   **[Promoted Search Terms](atlas.en-us.apexcode.meta/apexcode/apex_forcecom_promoted_search_terms.htm)**  
    Promoted search terms are useful for promoting a Salesforce Knowledge article that you know is commonly used to resolve a support issue when an end user’s search contains certain keywords. Users can promote an article in search results by associating keywords with the article in Apex (by using the SearchPromotionRule sObject) in addition to the Salesforce user interface.
-   **[Suggest Salesforce Knowledge Articles](atlas.en-us.apexcode.meta/apexcode/apex_forcecom_kb_suggestions.htm)**  
    Provide users with shortcuts to navigate to relevant articles before they perform a search. Call Search.suggest(searchText, objectType, options) to return a list of Salesforce Knowledge articles whose titles match a user’s search query string.