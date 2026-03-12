---
title: "apex:vote"
domain: pages
topic: apexvote
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.237Z
estimatedTokens: 178
keywords: [apex, vote, component, displays, control, supports, Attributes]
---

# apex:vote

> A component that displays the vote control for an object that supports it.

# apex:vote

A component that displays the vote control for an object that supports it.

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| objectId | String | An identifier for the object to vote on. | Yes | 26.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| rerender | String | The area(s) of the page that are refreshed when the action is taken. |  | 43.0 |  |
