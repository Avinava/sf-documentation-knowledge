---
title: "Related Feed Post"
domain: chatterapi
topic: related-feed-post
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.080Z
estimatedTokens: 291
keywords: [Feed, Post]
---

# Related Feed Post

> A related feed post

# Related Feed Post

A related feed post

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | 18-character ID of the related feed post. | Small, 37.0 | 37.0 |
| motif | Motif | Icon that identifies the related feed post. The motif can also contain the object’s base color. | Small, 37.0 | 37.0 |
| mySubscriptions | Reference | If the context user is following the item, it contains information about the subscription. Otherwise, it returns null. | Medium, 37.0 | 37.0 |
| name | String | Name of the related feed post. | Small, 37.0 | 37.0 |
| score | Double | Score of the related feed post that indicates how closely related it is to the context feed post. | Small, 37.0 | 37.0 |
| title | String | Title of the related feed post. | Small, 37.0 | 37.0 |
| type | String | Value is RelatedQuestion. | Small, 37.0 | 37.0 |
| url | String | URL to the related feed post. | Small, 37.0 | 37.0 |

#### See Also

-   [Related Feed Post Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_abstract_related_feed_post_collection.htm "A collection of related feed posts.")

## Related Topics

- Motif (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_motif.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- Related Feed Post Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_abstract_related_feed_post_collection.htm)
