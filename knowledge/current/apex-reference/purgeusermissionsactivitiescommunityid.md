---
title: "purgeUserMissionsActivities(communityId)"
domain: apex-reference
topic: purgeusermissionsactivitiescommunityid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.362Z
keywords: [purgeUserMissionsActivities, communityId, Start, job, purge, mission, activity, users., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# purgeUserMissionsActivities(communityId)

> Start a job to purge mission activity for all users.

### purgeUserMissionsActivities(communityId)

Start a job to purge mission activity for all users.

#### API Version

49.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UserMissionActivitiesJob purgeUserMissionsActivities(String communityId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

#### Return Value

Type: [ConnectApi.UserMissionActivitiesJob](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_mission_activities_job.htm "User mission activities job.")

#### Usage

This method purges these activities.

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