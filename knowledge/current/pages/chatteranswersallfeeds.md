---
title: "chatteranswers:allfeeds"
domain: pages
topic: chatteranswersallfeeds
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.245Z
estimatedTokens: 375
keywords: [chatteranswers, allfeeds, Displays, Chatter, Answers, application, including, feed, filters, profiles, Sign, buttons, Ext, versions, less]
---

# chatteranswers:allfeeds

> Displays the Chatter Answers application, including the feed, filters, profiles, and the Sign Up and Sign In buttons.  Ext JS versions less than 3 should not be included on pages that use this component.

# chatteranswers:allfeeds

Displays the Chatter Answers application, including the feed, filters, profiles, and the Sign Up and Sign In buttons. Ext JS versions less than 3 should not be included on pages that use this component.

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| articleLanguage | String | The language in which the articles must be retrieved. |  | 24.0 |  |
| communityId | id | Zone in which to display the feed. | Yes | 24.0 |  |
| filterOptions | String | You can select any of the following options as filters in the Q&A feed: 'AllQuestions', 'UnansweredQuestions', 'UnsolvedQuestions', 'SolvedQuestions', 'MyQuestions', 'MostPopular', 'DatePosted', 'RecentActivity'. |  | 24.0 |  |
| forceSecureCustomWebAddress | Boolean | This attribute was deprecated in Salesforce API version 29.0 and has no effect on the page. |  | 24.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| jsApiVersion | Double | JavaScript API version |  | 24.0 |  |
| noSignIn | Boolean | A flag that disables the sign-on option for the feed. |  | 24.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| useUrlRewriter | Boolean | A flag that rewrites URLs based on the Sites URL Rewriter. |  | 24.0 |  |
