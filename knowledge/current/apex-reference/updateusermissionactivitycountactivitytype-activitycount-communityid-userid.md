---
title: "updateUserMissionActivityCount(activityType, activityCount,
      communityId, userId)"
domain: apex-reference
topic: updateusermissionactivitycountactivitytype-activitycount-communityid-userid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.362Z
keywords: [updateUserMissionActivityCount, activityType, activityCount, communityId, userId, Update, mission, activity, count, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateUserMissionActivityCount(activityType, activityCount,
      communityId, userId)

> Update the mission activity count for a user.

### updateUserMissionActivityCount(activityType, activityCount, communityId, userId)

Update the mission activity count for a user.

#### API Version

45.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UserMissionActivityStatus updateUserMissionActivityCount(ConnectApi.UserMissionActivityType activityType, Integer activityCount, String communityId, String userId)

#### Parameters

activityType

Type: [ConnectApi.UserMissionActivityType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#userMissionActivityTypeEnum)

Type of mission activity for a user. Values are:

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

activityCount

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of mission activities of the specified type for the user.

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the user.

#### Return Value

Type: [ConnectApi.UserMissionActivityStatus](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_mission_activity_output.htm "Status of mission activity for a user.")