---
title: "Missions User Activity, Export"
domain: chatterapi
topic: missions-user-activity-export
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.809Z
estimatedTokens: 247
keywords: [Missions, User, Activity, Export, mission]
---

# Missions User Activity, Export

> Export mission activity for a user.

# Missions User Activity, Export

Export mission activity for a user.

You can export these activities with this resource.

-   FeedItemAnswerAQuestion—User answered a question.
-   FeedItemLikeSomething—User liked a post or comment.
-   FeedItemMarkAnswerAsBest—User marked an answer as the best answer.
-   FeedItemPostQuestion—User posted a question.
-   FeedItemReceiveAComment—User received a comment on a post.
-   FeedItemReceiveALike—User received a like on a post or comment.
-   FeedItemReceiveAnAnswer—User received an answer to a question.
-   FeedItemWriteAComment—User commented on a post.
-   FeedItemWriteAPost—User made a post.
-   FeedItemYourAnswerMarkedBest—​User’s answer was marked as the best answer.

Resource

```

```

Available version

45.0

Requires Chatter

Yes

HTTP methods

GET

Response body for GET

[User Mission Activities Job](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_mission_activities_job.htm "User mission activities job.")

## Code Examples

```
/connect/communities/communityId/missions/users/userId/activities/export-job
```

## Related Topics

- User Mission Activities Job (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_mission_activities_job.htm)
