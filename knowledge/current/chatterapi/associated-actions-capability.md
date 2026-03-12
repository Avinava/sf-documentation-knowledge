---
title: "Associated Actions Capability"
domain: chatterapi
topic: associated-actions-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.255Z
estimatedTokens: 175
keywords: [Associated, Actions, Capability, feed, element, platform]
---

# Associated Actions Capability

> If a feed element has this capability, it has platform actions
   associated with it.

# Associated Actions Capability

If a feed element has this capability, it has platform actions associated with it.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| platformAction​Groups | Platform Action Group[] | The platform action groups associated with a feed element. Platform action groups are returned in the order specified in the Associated Actions Capability Input request body. | Medium, 33.0 | 33.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- Platform Action Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_link_group.htm)
- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
