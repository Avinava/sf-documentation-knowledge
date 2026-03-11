---
title: "ConnectApi.ModerationCapability"
domain: apex-reference
topic: connectapimoderationcapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.277Z
keywords: [ConnectApi.ModerationCapability, See]
---

# ConnectApi.ModerationCapability

# ConnectApi.ModerationCapability

If a feed element has this capability, users in an Experience Cloud site can flag it for moderation.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| moderationFlags | ConnectApi.​ModerationFlags | The moderation flags for this feed element. Moderators can view and take action on flagged items. | 31.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")