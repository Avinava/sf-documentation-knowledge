---
title: "Origin Capability"
domain: chatterapi
topic: origin-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.190Z
estimatedTokens: 156
keywords: [Origin, Capability, feed, element, created, action]
---

# Origin Capability

> If a feed element has this capability, it was created by a feed
      action.

# Origin Capability

If a feed element has this capability, it was created by a feed action.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actor | User Summary | The user who executed the feed action. | Small, 33.0 | 33.0 |
| originRecord | Reference | A reference to the feed element containing the feed action. | Small, 33.0 | 33.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
