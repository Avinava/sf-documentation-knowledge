---
title: "chatteranswers:searchask"
domain: pages
topic: chatteranswerssearchask
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.282Z
estimatedTokens: 281
keywords: [chatteranswers, searchask, Search, bar, button, lets, users, questions, articles, ask, zone, Chatter, Answers, components, customized]
---

# chatteranswers:searchask

> Search bar and button that lets users search for questions and articles and ask questions within a zone. Use with other Chatter Answers components to create a customized experience for your Chatter Answers users.

# chatteranswers:searchask

Search bar and button that lets users search for questions and articles and ask questions within a zone. Use with other Chatter Answers components to create a customized experience for your Chatter Answers users.

## This example displays the Chatter Answers searchask component.

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| communityId | string | Zone in which to display the feed. | Yes | 29.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| noSignIn | Boolean | A flag that disables the sign-on option for the feed. |  | 29.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| searchLanguage | String | The language in which the articles must be retrieved. |  | 29.0 |  |
| useUrlRewriter | Boolean | A flag that rewrites URLs based on the Sites URL Rewriter. |  | 29.0 |  |

## Code Examples

```
<apex:page showHeader="true">
                <chatteranswers:searchask communityId="09axx00000000HK"/>               
            </apex:page>
```
