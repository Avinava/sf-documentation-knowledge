---
title: "purgeUserActivities(communityId, userId)"
domain: apex-reference
topic: purgeuseractivitiescommunityid-userid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.472Z
keywords: [purgeUserActivities, communityId, userId, Start, job, purge, Chatter-related, user, activity, such, bookmarks, topic, endorsements, votes., API, Version, Requires, Chatter, Signature, Parameters]
---

# purgeUserActivities(communityId, userId)

> Start a job to purge Chatter-related user activity, such as bookmarks,
      topic endorsements, and votes.

### purgeUserActivities(communityId, userId)

Start a job to purge Chatter-related user activity, such as bookmarks, topic endorsements, and votes.

#### API Version

42.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UserActivitiesJob purgeUserActivities(String communityId, String userId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the user.

#### Return Value

Type: [ConnectApi.UserActivitiesJob](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_activities_job.htm#apex_connectapi_output_user_activities_job "User activities job.")

#### Usage

The following activities can be purged with this method.

-   Bookmark—User bookmarked a post.
-   ChatterActivity—Total counts of posts and comments made and likes and comments received for a user.
-   ChatterLike—User liked a post or comment.
-   CompanyVerify—User verified comment.
-   DownVote—User downvoted a post or comment.
-   FeedEntityRead—User read a post.
-   FeedRead—User read a feed.
-   Mute—User muted a post.
-   TopicEndorsement—User endorsed another user on a topic or received endorsement on a topic.
-   UpVote—User upvoted a post or comment.

To delete a user’s posts and comments, use these methods, respectively.

-   [deleteFeedElement(communityId, feedElementId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_deleteFeedElement_1 "Delete a feed element.")
-   [deleteComment(communityId, commentId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_deleteComment "Delete a comment.")