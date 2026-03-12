---
title: "Record Pinned Feed Elements"
domain: chatterapi
topic: record-pinned-feed-elements
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.414Z
estimatedTokens: 394
keywords: [Record, Pinned, Feed, Elements, group, Pin, unpin, element]
---

# Record Pinned Feed Elements

> Get pinned feed elements from a group feed. Pin or unpin a feed
      element to a group feed.

# Record Pinned Feed Elements

Get pinned feed elements from a group feed. Pin or unpin a feed element to a group feed.

Resource

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The recordId must be a group ID.

Available version

41.0

Requires Chatter

Yes

HTTP methods

GET, PATCH

Response body for GET

[Pinned Feed Element Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pinned_feed_element_collection.htm "Collection of pinned feed elements.")

In the UI, pinned feed elements don’t show all auxiliary information, such as comments, likes, interaction counts, or read by information. As a result, the Pinned Feed Element Collection doesn’t include all the information for these capabilities.

Request body for PATCH

Root XML tag

<pinCapability>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| entityId | String | ID of the entity to pin or unpin. In version 41.0 and later, entityId must be a feed item ID. In version 41.0–42.0, only one feed item can be pinned per feed. In version 43.0 and later, three feed items can be pinned per feed. | Required | 41.0 |
| isPinned | Boolean | Specifies whether to pin (true) or unpin (false) the entity. | Required | 41.0 |

Response body for PATCH

[Pin Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pin_capability.htm "If a feed element has this capability, users who have permission can pin it to a feed.")

## Code Examples

```
/chatter/feeds/record/recordId/pinned-feed-elements
```

```
/connect/communities/communityId/chatter/feeds/record/recordId/pinned-feed-elements
```

```
{
   "entityId":"0D5B000000TW7uh",
   "isPinned": "true"
}
```

## Related Topics

- Pinned Feed Element Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pinned_feed_element_collection.htm)
- Pin Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pin_capability.htm)
