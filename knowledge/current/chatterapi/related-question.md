---
title: "Related Question"
domain: chatterapi
topic: related-question
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.918Z
estimatedTokens: 348
keywords: [Question]
---

# Related Question

> A related question

# Related Question

A related question

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| hasBestAnswer | Boolean | Indicates whether the question has a best answer. | Small, 37.0 | 37.0 |
| id | String | 18-character ID of the related question. | Small, 37.0 | 37.0 |
| interactions | Interactions Capability | The number of individual views, likes, and comments on a question. | Small, 38.0 | 38.0 |
| motif | Motif | Icon that identifies the related question. The motif can also contain the object’s base color. | Small, 37.0 | 37.0 |
| mySubscriptions | Reference | If the context user is following the item, it contains information about the subscription. Otherwise, it returns null. | Medium, 37.0 | 37.0 |
| name | String | Name of the related question. | Small, 37.0 | 37.0 |
| score | Double | Score of the related feed post that indicates how closely related it is to the context feed post. | Small, 37.0 | 37.0 |
| title | String | Title of the related feed post. | Small, 37.0 | 37.0 |
| type | String | Value is RelatedQuestion. | Small, 37.0 | 37.0 |
| url | String | URL to the related question. | Small, 37.0 | 37.0 |

#### See Also

-   [Related Feed Post Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_abstract_related_feed_post_collection.htm "A collection of related feed posts.")

## Related Topics

- Interactions Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_interactions_capability.htm)
- Motif (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_motif.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- Related Feed Post Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_abstract_related_feed_post_collection.htm)
