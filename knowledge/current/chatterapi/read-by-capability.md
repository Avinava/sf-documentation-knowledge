---
title: "Read By Capability"
domain: chatterapi
topic: read-by-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.769Z
estimatedTokens: 212
keywords: [Capability, feed, element, context, user, mark]
---

# Read By Capability

> If a feed element has this capability, the context user can mark it as
        read.

# Read By Capability

If a feed element has this capability, the context user can mark it as read.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| isReadByMe | Boolean | Specifies whether the feed element has been read (true) or not (false) by the context user. | Small, 40.0 | 40.0 |
| lastReadDateByMe | String | Last date when the feed element was marked read for the context user in ISO 8601 format. Otherwise, null. | Small, 40.0 | 40.0 |
| page | Read By Collection | First page of information about who read the feed element and when. | Big, 40.0 | 40.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- Read By Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_read_by_collection.htm)
- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
