---
title: "Topic Endorsement"
domain: chatterapi
topic: topic-endorsement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.367Z
estimatedTokens: 201
keywords: [Topic, Endorsement, user, endorsing, another]
---

# Topic Endorsement

> Represents one user endorsing another user for a single
topic.

# Topic Endorsement

Represents one user endorsing another user for a single topic.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| endorsee | User Summary | User being endorsed | Small, 30.0 | 30.0 |
| endorsementId | String | ID of the endorsement record | Small, 30.0 | 30.0 |
| endorser | User Summary | User performing the endorsement | Small, 30.0 | 30.0 |
| topic | Topic | Topic the user is being endorsed for | Small, 30.0 | 30.0 |
| url | String | Connect REST API resource URL for the endorsement record | Small, 30.0 | 30.0 |

#### See Also

-   [Topic Endorsement Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_endorsement_collection.htm "A collection of topic endorsement response bodies.")

## Related Topics

- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Topic (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics.htm)
- Topic Endorsement Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_endorsement_collection.htm)
