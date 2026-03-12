---
title: "Chatter Recommendation"
domain: chatterapi
topic: chatter-recommendation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.787Z
estimatedTokens: 550
keywords: [Chatter, Recommendation, custom]
---

# Chatter Recommendation

> A Chatter, custom, or static recommendation.

# Chatter Recommendation

A Chatter, custom, or static recommendation.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actOnUrl | String | For user, file, group, topic, and record entity types, use this Connect REST URL with a POST request to follow the recommended user, file, topic, or record, or join the recommended group. For example:/services/data/v66.0/chatter/users​/005D0000001AzOAIA0/following ​?subjectId=005D0000001B4CvIAKFor recommended object entity types, such as custom recommendations, use the actionUrl property of the Platform Action response body to take action on the recommendation. | Small, 29.0 | 23.0 |
| action | String | Specifies the action to take on the recommendation. Values are:follow (V23.0)join (V23.0)view (V25.0) | Small, 29.0 |  |
| entity | Article Summary (version 37.0 and later)File SummaryGroupRecommended Object (version 34.0 and later)Record SummaryTopic (version 36.0 and later)User Summary | The entity with which the receiver is recommended to take action. | Small, 32.0 | 32.0 |
| explanation | Explanation Summary | The recommendation explanation. | Big, 29.0 | 23.0 |
| object | File SummaryGroupRecord SummaryUser Summary | The object with which the receiver is recommended to take action.ImportantIn version 32.0 and later, use the entity property. | Small, 29.0 | 23.0-31.0 |
| platform​ActionGroup | Platform Action Group | A platform action group instance with state appropriate for the context user. | Small, 34.0 | 34.0 |
| recommendation​Type | String | Specifies the type of record being recommended.appsarticlesfilesgroupsrecordstopicsusers | Small, 32.0 | 32.0 |
| type | String | Not available after version 23.0. |  | 23.0 -23.0 |
| url | String | URL to the recommendation. | Small, 34.0 | 34.0 |

#### See Also

-   [Chatter Recommendations](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendations.htm "A list of Chatter, custom, and static recommendations.")

-   [Recommendations Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendations_capability.htm "If a feed element has this capability, it has a recommendation.")

## Related Topics

- Platform Action (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_link.htm)
- Article Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_article_summary.htm)
- File Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file.htm)
- Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group.htm)
- Recommended Object (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommended_object.htm)
- Record Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_record_summary.htm)
- Topic (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Explanation
              Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_explanation_summary.htm)
- Platform Action Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_link_group.htm)
