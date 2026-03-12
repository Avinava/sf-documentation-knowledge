---
title: "ConnectApi.CommentsCapability"
domain: apex-reference
topic: connectapicommentscapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.794Z
estimatedTokens: 202
keywords: [ConnectApi.CommentsCapability, feed, element, comment, capability, context, user, add]
---

# ConnectApi.CommentsCapability

> If a feed element or comment has this capability, the context user can
   add a comment to it.

# ConnectApi.CommentsCapability

If a feed element or comment has this capability, the context user can add a comment to it.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| page | ConnectApi.CommentPage | The comments information for this feed element or comment.Threaded comments are supported in version 44.0 and later. | 32.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- ConnectApi.FeedElementCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm)
- ConnectApi.CommentPage (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment_page.htm)
- ConnectApi.FeedElementCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
