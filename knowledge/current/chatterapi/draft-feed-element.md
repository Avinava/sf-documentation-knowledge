---
title: "Draft Feed Element"
domain: chatterapi
topic: draft-feed-element
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.291Z
estimatedTokens: 284
keywords: [Draft, Feed, Element, Publish]
---

# Draft Feed Element

> Publish a draft feed element.

# Draft Feed Element

Publish a draft feed element.

Resource

```

```

```

```

Available version

44.0

Requires Chatter

Yes

HTTP methods

POST

Request body for POST

If you want to update your draft prior to publishing, use the [Feed Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm#connect_requests_feed_item_input "Feed item input.") request body.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Use the feedElementId request parameter in addition to the Feed Item Input request body.

Request parameters for POST

If you don’t need to update your draft prior to publishing, use this request parameter.

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| feedElementId | String | ID of the draft feed element to publish. | Required | 44.0 |

Response body for POST

[Feed Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm "A feed is made up of feed elements. A feed item is a type of feed element.")

The published feed item has a new ID.

## Code Examples

```
/chatter/feed-elements/publish-draft
```

```
/connect/communities/communityId/chatter/feed-elements/publish-draft
```

## Related Topics

- Feed Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm)
- Feed Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm)
