---
title: "chatteranswers:datacategoryfilter"
domain: pages
topic: chatteranswersdatacategoryfilter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.251Z
estimatedTokens: 207
keywords: [chatteranswers, datacategoryfilter, Chatter, Answers, data, category, filter, let, users, feeds, components, customized, experience, displays, component]
---

# chatteranswers:datacategoryfilter

> Chatter Answers data category filter, which let users filter feeds by data category. Use with other Chatter Answers components to create a customized experience for your Chatter Answers users.

# chatteranswers:datacategoryfilter

Chatter Answers data category filter, which let users filter feeds by data category. Use with other Chatter Answers components to create a customized experience for your Chatter Answers users.

## This example displays the Chatter Answers datacategoryfilter component.

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| communityId | string | Zone in which to display the feed. | Yes | 29.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

## Code Examples

```
<apex:page showHeader="true">
                <chatteranswers:datacategoryfilter communityId="09axx00000000HK"/>               
            </apex:page>
```
