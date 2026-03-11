---
title: "exportUserMissionsActivities(communityId,
    userId)"
domain: apex-reference
topic: exportusermissionsactivitiescommunityid-userid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.362Z
keywords: [exportUserMissionsActivities, communityId, userId, Export, mission, activity, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# exportUserMissionsActivities(communityId,
    userId)

> Export mission activity for a user.

### exportUserMissionsActivities(communityId, userId)

Export mission activity for a user.

#### API Version

45.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UserMissionActivitiesJob exportUserMissionsActivities(String communityId, String userId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the user.

#### Return Value

Type: [ConnectApi.UserMissionActivitiesJob](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_mission_activities_job.htm "User mission activities job.")

#### Usage

You can export these activities with this method.

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