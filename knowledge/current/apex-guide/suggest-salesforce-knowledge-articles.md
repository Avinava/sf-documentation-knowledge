---
title: "Suggest Salesforce Knowledge Articles"
domain: apex-guide
topic: suggest-salesforce-knowledge-articles
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.166Z
keywords: [Suggest, Salesforce, Knowledge, Articles, See]
---

# Suggest Salesforce Knowledge Articles

# Suggest Salesforce Knowledge Articles

Provide users with shortcuts to navigate to relevant articles before they perform a search. Call Search.suggest(searchText, objectType, options) to return a list of Salesforce Knowledge articles whose titles match a user’s search query string.

To return suggestions, enable Salesforce Knowledge. See [Salesforce Knowledge Implementation Guide](https://resources.docs.salesforce.com/260/latest/en-us/sfdc/pdf/salesforce_knowledge_implementation_guide.pdf "Adobe Acrobat PDF (New Window)") for more information on setting up Salesforce Knowledge.

This Visualforce page has an input field for searching articles or accounts. When the user presses the Suggest button, suggested records are displayed. If there are more than five results, the More results button appears. To display more results, click the button.

```

```

This code is the custom Visualforce controller for the page:

```

```

#### See Also

-   [Search.suggest(searchQuery,sObjectType,suggestions)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_search.htm "Search.suggest(searchQuery,sObjectType,suggestions) - HTML (New Window)")