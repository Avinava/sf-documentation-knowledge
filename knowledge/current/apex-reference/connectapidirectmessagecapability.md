---
title: "ConnectApi.DirectMessageCapability"
domain: apex-reference
topic: connectapidirectmessagecapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:27.033Z
estimatedTokens: 207
keywords: [ConnectApi.DirectMessageCapability, feed, element, capability, it’s, direct, message.]
---

# ConnectApi.DirectMessageCapability

> If a feed element has this capability, it’s a direct
    message.

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

## Related Topics

- ConnectApi.DirectMessageMemberActivityPage (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_direct_message_membership_activity_collection.htm)
- ConnectApi.​DirectMessage​MemberPage (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_direct_message_member_collection.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.FeedElementCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
