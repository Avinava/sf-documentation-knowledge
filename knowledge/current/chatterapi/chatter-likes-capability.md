---
title: "Chatter Likes Capability"
domain: chatterapi
topic: chatter-likes-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.652Z
estimatedTokens: 246
keywords: [Chatter, Likes, Capability, feed, element, context, user]
---

# Chatter Likes Capability

> If a feed element has this capability, the context user can like it.
      Exposes information about existing likes.

# Chatter Likes Capability

If a feed element has this capability, the context user can like it. Exposes information about existing likes.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| isLikedBy​CurrentUser | Boolean | Indicates whether the feed element is liked by the context user (true) or not (false). | Small, 32.0 | 32.0 |
| page | Like Page | Likes information for this feed element. | Small, 32.0 | 32.0 |
| likesMessage | Like Message Body | A message body that describes who likes the feed element. | Small, 32.0 | 32.0 |
| myLike | Reference | If the context user has liked the feed element, this property is a reference to the specific like, null otherwise. | Medium, 32.0 | 32.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- Like Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_like_page.htm)
- Like Message Body (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_like_ms_body.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
