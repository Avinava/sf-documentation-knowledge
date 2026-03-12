---
title: "Topic Opt Out"
domain: chatterapi
topic: topic-opt-out
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.389Z
estimatedTokens: 219
keywords: [Topic, Opt, “opt, out”, user, doesn’t, want, identified, knowledgeable]
---

# Topic Opt Out

> An “opt out” from a topic. Indicates that
a user doesn’t want to be identified as knowledgeable about
a topic.

# Topic Opt Out

An “opt out” from a topic. Indicates that a user doesn’t want to be identified as knowledgeable about a topic.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the topic opt out record. | Small, 30.0 | 30.0 |
| reason | String | The reason the user is opting out of the topic.The only valid value is topicInfluenceHide. | Small, 30.0 | 30.0 |
| topic | Topic | Topic the user opted out of. | Small, 30.0 | 30.0 |
| url | String | Connect REST API resource URL to the topic opt out. | Small, 30.0 | 30.0 |
| user | User Summary | User that opted out of the topic. | Small, 30.0 | 30.0 |

#### See Also

-   [Topic Opt Out Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_opt_out_collection.htm "A collection of topic opt out response bodies.")

## Related Topics

- Topic (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Topic Opt Out Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_opt_out_collection.htm)
