---
title: "User Mission Activity"
domain: chatterapi
topic: user-mission-activity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.459Z
estimatedTokens: 285
keywords: [User, Mission, Activity, associated, missions]
---

# User Mission Activity

> User activity associated with missions.

# User Mission Activity

User activity associated with missions.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| activityCount | Integer | Number of mission activities of the specified type for the user. | Small, 45.0 | 45.0 |
| activityType | String | Type of mission activity for a user. Values are:FeedItemAnswerAQuestion—User answered a question.FeedItemLikeSomething—User liked a post or comment.FeedItemMarkAnswerAsBest—User marked an answer as the best answer.FeedItemPostQuestion—User posted a question.FeedItemReceiveAComment—User received a comment on a post.FeedItemReceiveALike—User received a like on a post or comment.FeedItemReceiveAnAnswer—User received an answer to a question.FeedItemWriteAComment—User commented on a post.FeedItemWriteAPost—User made a post.FeedItemYourAnswerMarkedBest—​User’s answer was marked as the best answer. | Small, 45.0 | 45.0 |

#### See Also

-   [User Mission Activity Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_mission_activity_collection.htm "List of mission activities for a user.")

## Related Topics

- User Mission Activity Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_mission_activity_collection.htm)
