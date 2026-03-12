---
title: "Direct Message Capability"
domain: chatterapi
topic: direct-message-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.273Z
estimatedTokens: 222
keywords: [Direct, Message, Capability, feed, element, it’s]
---

# Direct Message Capability

> If a feed element has this capability, it’s a direct
    message.

# Direct Message Capability

If a feed element has this capability, it’s a direct message.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| memberChanges | Direct Message Membership Activity Collection | Member activities of the direct message, with the most recent activity first. | Big, 40.0 | 40.0 |
| members | Direct Message Member Collection | Members included in the direct message. | Small, 39.0 | 39.0 |
| originalMembers | Direct Message Member Collection | Original members of the direct message. | Big, 40.0 | 40.0 |
| subject | String | Subject of the direct message. | Small, 39.0 | 39.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- Direct Message Membership Activity Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_direct_message_membership_activity_collection.htm)
- Direct Message Member Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_direct_message_member_collection.htm)
- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
