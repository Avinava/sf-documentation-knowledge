---
title: "User Mission Activity Input"
domain: chatterapi
topic: user-mission-activity-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:13.007Z
estimatedTokens: 248
keywords: [User, Mission, Activity, Input]
---

# User Mission Activity Input

> Mission activity for a user.

# User Mission Activity Input

Mission activity for a user.

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

## Code Examples

```
{
   "activityCount": 24,
   "activityType": "FeedItemWriteAPost"
}
```
