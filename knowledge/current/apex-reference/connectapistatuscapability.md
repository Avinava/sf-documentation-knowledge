---
title: "ConnectApi.StatusCapability"
domain: apex-reference
topic: connectapistatuscapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:29.105Z
estimatedTokens: 356
keywords: [ConnectApi.StatusCapability, feed, post, comment, capability, status, determines, visibility]
---

# ConnectApi.StatusCapability

> If a feed post or comment has this capability, it has a status that
      determines its visibility.

# ConnectApi.StatusCapability

If a feed post or comment has this capability, it has a status that determines its visibility.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| feedEntityStatus | ConnectApi.​FeedEntityStatus | Status of the feed post or comment. Values are:Draft—The feed post isn’t published but is visible to the author and users with Modify All Data or View All Data permission. Comments can’t be drafts.Isolated—The feed post or comment is isolated, and only admins can see it.PendingReview—The feed post or comment isn’t approved yet and therefore isn’t published or visible.Published—The feed post or comment is approved and visible. | 37.0 |
| isApprovable​ByMe | Boolean | Specifies whether the context user can change the status of the feed post or comment. | 37.0 |

#### See Also

-   [ConnectApi.CommentCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment_capabilities.htm "A set of capabilities on a comment.")

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- ConnectApi.FeedElementCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm)
- ConnectApi.​FeedEntityStatus (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.CommentCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment_capabilities.htm)
- ConnectApi.FeedElementCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
