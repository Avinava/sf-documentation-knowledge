---
title: "Missions User Activity, Update"
domain: chatterapi
topic: missions-user-activity-update
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.806Z
estimatedTokens: 555
keywords: [Missions, User, Activity, mission, count]
---

# Missions User Activity, Update

> Update the mission activity count for a user.

# Missions User Activity, Update

Update the mission activity count for a user.

Resource

```

```

Available version

45.0

Requires Chatter

Yes

HTTP methods

PATCH

Request body for PATCH

Root XML tag

<missionActivity>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| activityCount | Integer | Number of mission activities of the specified type for the user. | Required | 45.0 |
| activityType | String | Type of mission activity for a user. Values are:FeedItemAnswerAQuestion—User answered a question.FeedItemLikeSomething—User liked a post or comment.FeedItemMarkAnswerAsBest—User marked an answer as the best answer.FeedItemPostQuestion—User posted a question.FeedItemReceiveAComment—User received a comment on a post.FeedItemReceiveALike—User received a like on a post or comment.FeedItemReceiveAnAnswer—User received an answer to a question.FeedItemWriteAComment—User commented on a post.FeedItemWriteAPost—User made a post.FeedItemYourAnswerMarkedBest—​User’s answer was marked as the best answer. | Required | 45.0 |

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| activityCount | Integer | Number of mission activities of the specified type for the user. | Required | 45.0 |
| activityType | String | Type of mission activity for a user. Values are:FeedItemAnswerAQuestion—User answered a question.FeedItemLikeSomething—User liked a post or comment.FeedItemMarkAnswerAsBest—User marked an answer as the best answer.FeedItemPostQuestion—User posted a question.FeedItemReceiveAComment—User received a comment on a post.FeedItemReceiveALike—User received a like on a post or comment.FeedItemReceiveAnAnswer—User received an answer to a question.FeedItemWriteAComment—User commented on a post.FeedItemWriteAPost—User made a post.FeedItemYourAnswerMarkedBest—​User’s answer was marked as the best answer. | Required | 45.0 |

Response body for PATCH

[User Mission Activity Status](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_mission_activity_output.htm "Status of mission activity for a user.")

## Code Examples

```
/connect/communities/communityId/missions/users/userId
```

```
{
   "activityCount": 24,
   "activityType": "FeedItemWriteAPost"
}
```

## Related Topics

- User Mission Activity Status (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_mission_activity_output.htm)
