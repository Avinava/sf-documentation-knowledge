---
title: "User Activity Collection"
domain: chatterapi
topic: user-activity-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.421Z
estimatedTokens: 345
keywords: [User, Activity, Collection]
---

# User Activity Collection

> User activity collection.

# User Activity Collection

User activity collection.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| activityType | String | Type of user activity. Values are:Bookmark—User bookmarked a post.ChatterActivity—Total counts of posts and comments made and likes and comments received for a user.ChatterLike—User liked a post or comment.Comment—User commented on a post.CompanyVerify—User verified comment.DownVote—User downvoted a post or comment.FeedEntityRead—User read a post.FeedRead—User read a feed.Mute—User muted a post.Post—User made a post.TopicEndorsement—User endorsed another user on a topic or received endorsement on a topic.UpVote—User upvoted a post or comment. | Small, 42.0 | 42.0 |
| userActivities | Bookmark Summary[]Chatter Activity Summary[]Comment Summary[]Company Verify Summary[]Downvote Summary[]Feed Entity Read Summary[]Feed Post Summary[]Feed Read Summary[]Like Summary[]Mute Summary[]Topic Endorsement Summary[]Upvote Summary[] | Collection of user activities. | Small, 42.0 | 42.0 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Data from this table is retained for 6 months.

#### See Also

-   [User Activities Job](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_activities_job.htm "User activities job.")

## Related Topics

- Bookmark Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_bookmark_summary.htm)
- Chatter Activity Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_chatter_activity_summary.htm)
- Comment Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment_summary.htm)
- Company Verify Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_company_verify_summary.htm)
- Downvote Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_down_vote_summary.htm)
- Feed Entity Read Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_entity_read_summary.htm)
- Feed Post Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_post_summary.htm)
- Feed Read Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_read_summary.htm)
- Like Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_like_summary.htm)
- Mute Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mute_summary.htm)
