---
title: "chatteranswers:feedfilter"
domain: pages
topic: chatteranswersfeedfilter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.254Z
estimatedTokens: 215
keywords: [chatteranswers, feedfilter, feed, filter, lets, users, sort, feeds, appear, Chatter, Answers, displays, component, Attributes]
---

# chatteranswers:feedfilter

> The feed filter lets users sort and filter the feeds that appear in Chatter Answers.

# chatteranswers:feedfilter

The feed filter lets users sort and filter the feeds that appear in Chatter Answers.

## This example displays the Chatter Answers feedfilter component.

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| filterOptions | String | The options show in Chatter Answers Filter, can be 'AllQuestions', 'UnansweredQuestions', 'UnsolvedQuestions', 'SolvedQuestions', 'MyQuestions', 'MostPopular', 'DatePosted', 'RecentActivity'. |  | 29.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

## Code Examples

```
<apex:page showHeader="true">
                <chatteranswers:feedfilter/>               
            </apex:page>
```
