---
title: "Status Capability Input"
domain: chatterapi
topic: status-capability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.875Z
estimatedTokens: 288
keywords: [Status, Capability, Input, Change, feed, post, comment]
---

# Status Capability Input

> Change the status of a feed post or comment.

# Status Capability Input

Change the status of a feed post or comment.

Root XML tag

statusCapability

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| feedEntityStatus | String | Status of the feed post or comment. Values are:Draft—The feed post isn’t published but is visible to the author and users with Modify All Data or View All Data permission. Comments can’t be drafts.Isolated—The feed post or comment is isolated, and only admins can see it.PendingReview—The feed post or comment isn’t approved yet and therefore isn’t published or visible.Published—The feed post or comment is approved and visible.Posts that have a status of PendingReview or Published can’t be changed to a status of Draft and vice versa. Only admins can change the status of a post or comment to or from Isolated status. | Required | 37.0 |

#### See Also

-   [Feed Element Capabilities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm "A container for all capabilities that can be included when creating a feed element.")

## Code Examples

```
{
   "feedEntityStatus":"Published"
}
```

## Related Topics

- Feed Element Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
