---
title: "User Mission"
domain: chatterapi
topic: user-mission
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.451Z
estimatedTokens: 333
keywords: [User, Mission]
---

# User Mission

> Mission details for a user.

# User Mission

Mission details for a user.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| activityCount | Integer | Number of mission activities of the specified type for the user. | Small, 46.0 | 46.0 |
| activityType | String | Type of mission activity for a user. Values are:FeedItemAnswerAQuestion—User answered a question.FeedItemLikeSomething—User liked a post or comment.FeedItemMarkAnswerAsBest—User marked an answer as the best answer.FeedItemPostQuestion—User posted a question.FeedItemReceiveAComment—User received a comment on a post.FeedItemReceiveALike—User received a like on a post or comment.FeedItemReceiveAnAnswer—User received an answer to a question.FeedItemWriteAComment—User commented on a post.FeedItemWriteAPost—User made a post.FeedItemYourAnswerMarkedBest—​User’s answer was marked as the best answer. | Small, 46.0 | 46.0 |
| missionName | String | Name of the mission. | Small, 46.0 | 46.0 |
| missionThreshold | Integer | Threshold of the mission. When a user reaches this activity count, the mission is achieved. | Small, 46.0 | 46.0 |

#### See Also

-   [User Mission Activity Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_mission_activity_collection.htm "List of mission activities for a user.")

## Related Topics

- User Mission Activity Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_mission_activity_collection.htm)
