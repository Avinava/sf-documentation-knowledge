---
title: "chatteranswers:feeds"
domain: pages
topic: chatteranswersfeeds
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.259Z
estimatedTokens: 297
keywords: [chatteranswers, feeds, Chatter, Answers, feed, let, users, browse, questions, articles, post, replies, zone, components, customized]
---

# chatteranswers:feeds

> Chatter Answers feed, which let users browse questions and articles and post replies to questions within a zone. Use with other Chatter Answers components to create a customized experience for your Chatter Answers users.

# chatteranswers:feeds

Chatter Answers feed, which let users browse questions and articles and post replies to questions within a zone. Use with other Chatter Answers components to create a customized experience for your Chatter Answers users.

## This example displays the Chatter Answers feeds component.

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| articleLanguage | String | The language in which the articles must be retrieved. |  | 29.0 |  |
| communityId | String | Zone in which to display the feed. | Yes | 29.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| jsApiVersion | Double | JavaScript API version |  | 29.0 |  |
| noSignIn | Boolean | A flag that disables the sign-on option for the feed. |  | 29.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| useUrlRewriter | Boolean | A flag that rewrites urls based on the Sites URL Rewriter. |  | 29.0 |  |

## Code Examples

```
<apex:page showHeader="true">
                <chatteranswers:feeds communityId="09axx00000000HK"/>               
            </apex:page>
```
