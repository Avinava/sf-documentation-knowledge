---
title: "Status Capability"
domain: chatterapi
topic: status-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.210Z
estimatedTokens: 314
keywords: [Status, Capability, feed, post, comment, determines, visibility]
---

# Status Capability

> If a feed post or comment has this capability, it has a status that determines its
    visibility.

# Status Capability

If a feed post or comment has this capability, it has a status that determines its visibility.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| feedEntityStatus | String | Status of the feed post or comment. Values are:Draft—The feed post isn’t published but is visible to the author and users with Modify All Data or View All Data permission. Comments can’t be drafts.Isolated—The feed post or comment is isolated, and only admins can see it.PendingReview—The feed post or comment isn’t approved yet and therefore isn’t published or visible.Published—The feed post or comment is approved and visible. | Small, 37.0 | 37.0 |
| isApprovable​ByMe | Boolean | Specifies whether the context user can change the status of the feed post or comment. | Small, 37.0 | 37.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

-   [Comment Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment_capabilities.htm "A container for all capabilities that can be included with a comment.")

## Related Topics

- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
- Comment Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment_capabilities.htm)
