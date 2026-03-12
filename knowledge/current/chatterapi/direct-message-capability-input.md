---
title: "Direct Message Capability Input"
domain: chatterapi
topic: direct-message-capability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.511Z
estimatedTokens: 266
keywords: [Direct, Message, Capability, Input, members]
---

# Direct Message Capability Input

> Create or update the members of a direct message.

# Direct Message Capability Input

Create or update the members of a direct message.

Root XML tag

<directMessageCapability>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| membersToAdd | String[] | List of user IDs for members to include in the direct message. | Required when creating a direct message (POST)Optional when updating a direct message (PATCH) | 39.0 |
| membersToRemove | String[] | List of user IDs for members to remove from the direct message. | Optional when updating a direct message (PATCH)Not supported when creating a direct message (POST) | 40.0 |
| subject | String | Subject of the direct message. | Optional when creating a direct message (POST)Not supported when updating a direct message (PATCH) | 39.0 |

#### See Also

-   [Feed Element Capabilities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm "A container for all capabilities that can be included when creating a feed element.")

## Code Examples

```
{
   "membersToAdd": ["005R0000000I2X4","005R0000000I23Y","005R0000000IUV5"]
}
```

## Related Topics

- Feed Element Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
