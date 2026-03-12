---
title: "Related Questions"
domain: chatterapi
topic: related-questions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.296Z
estimatedTokens: 328
keywords: [Questions, context, question]
---

# Related Questions

> Get questions related to the context question.

# Related Questions

Get questions related to the context question.

Resource

```

```

```

```

In version 37.0 and later, feedElementId must be a question ID.

Available version

37.0

Requires Chatter

Yes

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filter | String | Specifies the related question type. Values are:Answered—Related questions that have at least one answer.BestAnswer—Related questions that have a best answer.Generic—All types of related questions, including answered, with a best answer, and unanswered.Unanswered—Related questions that don’t have answers. | OptionalIf not specified, Generic is the default value. | 37.0 |
| maxResults | Integer | The maximum number of results to return. You can return up to 25 results; 5 is the default. | OptionalIf not specified, 5 is the default value. | 37.0 |

Response body for GET

[Related Feed Post Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_abstract_related_feed_post_collection.htm "A collection of related feed posts.")

Each related feed post has a score indicating how closely it’s related to the context feed post. We return related feed posts sorted by score, with the highest score first.

## Code Examples

```
/chatter/feed-elements/feedElementId/related-posts
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/related-posts
```

## Related Topics

- Related Feed Post Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_abstract_related_feed_post_collection.htm)
