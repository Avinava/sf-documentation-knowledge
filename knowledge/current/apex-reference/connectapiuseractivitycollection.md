---
title: "ConnectApi.UserActivityCollection"
domain: apex-reference
topic: connectapiuseractivitycollection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.155Z
keywords: [ConnectApi.UserActivityCollection, See]
---

# ConnectApi.UserActivityCollection

# ConnectApi.UserActivityCollection

User activity collection.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| activityType | String | Type of user activity. Values are:Bookmark—User bookmarked a post.ChatterActivity—Total counts of posts and comments made and likes and comments received for a user.ChatterLike—User liked a post or comment.Comment—User commented on a post.CompanyVerify—User verified comment.DownVote—User downvoted a post or comment.FeedEntityRead—User read a post.FeedRead—User read a feed.Mute—User muted a post.Post—User made a post.TopicEndorsement—User endorsed another user on a topic or received endorsement on a topic.UpVote—User upvoted a post or comment. | 42.0 |
| userActivities | List<ConnectApi.​UserActivity​Summary> | Collection of user activities. | 42.0 |

#### See Also

-   [ConnectApi.UserActivitiesJob](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_activities_job.htm "User activities job.")