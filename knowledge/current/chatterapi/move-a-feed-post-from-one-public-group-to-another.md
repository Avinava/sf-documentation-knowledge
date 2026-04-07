---
title: "Move a Feed Post from one Public Group to Another"
domain: chatterapi
topic: move-a-feed-post-from-one-public-group-to-another
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:37.347Z
estimatedTokens: 186
keywords: [Move, Feed, Post, Group, Another, Chatter]
---

# Move a Feed Post from one Public Group to Another

> Move a Chatter feed post from one public group to another.

# Move a Feed Post from one Public Group to Another

Move a Chatter feed post from one public group to another.

Resource

[/chatter/feed-elements/feedElementId](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_specific.htm#connect_resources_feed_element_specific "Access, edit, or delete a feed element. Feed items are the only type of feed element that can be edited.")

HTTP method

PATCH

Request body

[Feed Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm "Feed item input.")

Request body example

```

```

Returns

[Feed Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm "A feed is made up of feed elements. A feed item is a type of feed element.")

## Code Examples

```
{
   "subjectId": "0F9xx00000000CM"
}
```

## Related Topics

- /chatter/feed-elements/feedElementId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_specific.htm)
- Feed Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm)
- Feed Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm)
