---
title: "Read By Capability Input"
domain: chatterapi
topic: read-by-capability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.658Z
estimatedTokens: 213
keywords: [Capability, Input, Mark, feed, elements, context, user]
---

# Read By Capability Input

> Mark feed elements as read by the
      context user.

# Read By Capability Input

Mark feed elements as read by the context user.

Root XML tag

<readByCapability>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isReadByMe | Boolean | Specifies to mark the feed element as read (true) for the context user. | Required | 40.0 |
| lastReadDateByMe | String | Specifies the last date, in ISO 8601 format, when the feed element is marked as read for the context user. If you don’t specify a date or you specify a future date, the current system date is used. | Optional | 40.0 |

#### See Also

-   [Feed Element Capabilities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm "A container for all capabilities that can be included when creating a feed element.")

## Code Examples

```
{
   "isReadByMe": "true"
}
```

## Related Topics

- Feed Element Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
