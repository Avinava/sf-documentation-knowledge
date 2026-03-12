---
title: "ConnectApi.AbstractUserMissionActivity"
domain: apex-reference
topic: connectapiabstractusermissionactivity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:25.934Z
estimatedTokens: 360
keywords: [ConnectApi.AbstractUserMissionActivity, User, activity, associated, missions.]
---

# ConnectApi.AbstractUserMissionActivity

> User activity associated with missions.

# ConnectApi.AbstractUserMissionActivity

User activity associated with missions.

This class is abstract.

Superclass of:

-   [ConnectApi.UserMission](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_mission.htm "Mission details for a user.")
-   [ConnectApi.UserMissionActivity](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_mission_activity.htm "User activity associated with missions.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| activityCount | Integer | Number of mission activities of the specified type for the user. | 45.0 |
| activityType | String | Type of mission activity for a user. Values are:FeedItemAnswerAQuestion—User answered a question.FeedItemLikeSomething—User liked a post or comment.FeedItemMarkAnswerAsBest—User marked an answer as the best answer.FeedItemPostQuestion—User posted a question.FeedItemReceiveAComment—User received a comment on a post.FeedItemReceiveALike—User received a like on a post or comment.FeedItemReceiveAnAnswer—User received an answer to a question.FeedItemWriteAComment—User commented on a post.FeedItemWriteAPost—User made a post.FeedItemYourAnswerMarkedBest—​User’s answer was marked as the best answer. | 45.0 |

#### See Also

-   [ConnectApi.UserMissionActivityCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_mission_activity_collection.htm "List of mission activities for a user.")

## Related Topics

- ConnectApi.UserMission (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_mission.htm)
- ConnectApi.UserMissionActivity (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_mission_activity.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.UserMissionActivityCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_mission_activity_collection.htm)
