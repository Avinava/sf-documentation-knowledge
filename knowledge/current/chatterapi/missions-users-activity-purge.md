---
title: "Missions Users Activity, Purge"
domain: chatterapi
topic: missions-users-activity-purge
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.819Z
estimatedTokens: 288
keywords: [Missions, Users, Activity, Purge, Start, job, mission]
---

# Missions Users Activity, Purge

> Start a job to purge mission activity for all
    users.

# Missions Users Activity, Purge

Start a job to purge mission activity for all users.

This resource purges these activities.

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

49.0

Requires Chatter

Yes

HTTP methods

POST

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

POST doesn’t take request parameters or a request body.

Response body for POST

[User Mission Activities Job](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_mission_activities_job.htm "User mission activities job.")

## Code Examples

```
/connect/communities/communityId/missions/activities/purge-job
```

## Related Topics

- User Mission Activities Job (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_mission_activities_job.htm)
