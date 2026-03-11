---
title: "ConnectApi.StatusCapabilityInput"
domain: apex-reference
topic: connectapistatuscapabilityinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.593Z
keywords: [ConnectApi.StatusCapabilityInput, See]
---

# ConnectApi.StatusCapabilityInput

# ConnectApi.StatusCapabilityInput

Change the status of a feed post or comment.

This class is a subclass of [ConnectApi.FeedElementCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capability.htm#apex_connectapi_input_feed_element_capability "A feed element capability.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| feedEntityStatus | ConnectApi.​FeedEntityStatus | Status of the feed post or comment. Values are:Draft—The feed post isn’t published but is visible to the author and users with Modify All Data or View All Data permission. Comments can’t be drafts.Isolated—The feed post or comment is isolated, and only admins can see it.PendingReview—The feed post or comment isn’t approved yet and therefore isn’t published or visible.Published—The feed post or comment is approved and visible.Posts that have a status of PendingReview or Published can’t be changed to a status of Draft and vice versa. Only admins can change the status of a post or comment to or from Isolated status. | Required | 37.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilitiesInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capabilities.htm "A container for all capabilities that can be included when creating a feed element.")