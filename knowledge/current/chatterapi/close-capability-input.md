---
title: "Close Capability Input"
domain: chatterapi
topic: close-capability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.297Z
estimatedTokens: 214
keywords: [Close, Capability, Input, feed, element, closed]
---

# Close Capability Input

> Set a feed element to closed.

# Close Capability Input

Set a feed element to closed.

Users can’t edit (specifically the feed item body or title), comment on, or delete a closed feed element. If the closed feed element is a poll, users can’t vote on it. Users can’t edit (specifically the comment body) or delete a comment on a closed feed element or select or remove it as best answer.

Admins and moderators can edit and delete closed feed elements and comments on closed feed elements. Admins and moderators can select or remove the best answer status on comments on closed feed elements.

Root XML tag

<closeCapability>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isClosed | Boolean | Specifies whether to set the feed element to closed (true) or not (false). | Required | 43.0 |

## Code Examples

```
{
   "isClosed": "true"
}
```
