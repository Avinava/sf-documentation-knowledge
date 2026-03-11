---
title: "ConnectApi.DirectMessageCapability"
domain: apex-reference
topic: connectapidirectmessagecapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.580Z
keywords: [ConnectApi.DirectMessageCapability, See]
---

# ConnectApi.DirectMessageCapability

# ConnectApi.DirectMessageCapability

If a feed element has this capability, it’s a direct message.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| memberChanges | ConnectApi.DirectMessageMemberActivityPage | Member activities of the direct message, with the most recent activity first. | 40.0 |
| members | ConnectApi.​DirectMessage​MemberPage | Members included in the direct message. | 39.0 |
| originalMembers | ConnectApi.​DirectMessage​MemberPage | Original members of the direct message. | 40.0 |
| subject | String | Subject of the direct message. | 39.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")