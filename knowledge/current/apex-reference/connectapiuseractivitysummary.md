---
title: "ConnectApi.UserActivitySummary"
domain: apex-reference
topic: connectapiuseractivitysummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.825Z
keywords: [ConnectApi.UserActivitySummary, See]
---

# ConnectApi.UserActivitySummary

# ConnectApi.UserActivitySummary

User activity summary.

This class is abstract.

Superclass of:

-   [ConnectApi.CommentSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment_summary.htm "Summary of the comment.")
-   [ConnectApi.FeedPostSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_post_summary.htm "Summary of the post.")
-   [ConnectApi.FeedReadSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_read_summary.htm "Summary of the feed that was read.")
-   [ConnectApi.TopicEndorsementSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topic_endorsement_summary.htm "Topic endorsement summary.")
-   [ConnectApi.UserFeedEntityActivitySummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_feed_entity_activity_summary.htm "User feed entity activity summary.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| activityDate | Datetime | Date of the user activity. | 42.0 |
| activityType | String | Type of user activity. Values are:Bookmark—User bookmarked a post.ChatterActivity—Total counts of posts and comments made and likes and comments received for a user.ChatterLike—User liked a post or comment.Comment—User commented on a post.CompanyVerify—User verified comment.DownVote—User downvoted a post or comment.FeedEntityRead—User read a post.FeedRead—User read a feed.Mute—User muted a post.Post—User made a post.TopicEndorsement—User endorsed another user on a topic or received endorsement on a topic.UpVote—User upvoted a post or comment. | 42.0 |
| activityUrl | String | URL to the user activity. | 42.0 |
| community | ConnectApi.​CommunitySummary | Experience Cloud site in which the user performed the activity. | 42.0 |

#### See Also

-   [ConnectApi.UserActivityCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_activity_collection.htm "User activity collection.")