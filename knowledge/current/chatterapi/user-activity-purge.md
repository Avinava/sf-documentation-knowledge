---
title: "User Activity, Purge"
domain: chatterapi
topic: user-activity-purge
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.837Z
estimatedTokens: 386
keywords: [User, Activity, Purge, Start, job, Chatter-related, bookmarks, topic, endorsements, votes]
---

# User Activity, Purge

> Start a job to purge Chatter-related activity, such as bookmarks,
      topic endorsements, and votes, for a user.

# User Activity, Purge

Start a job to purge Chatter-related activity, such as bookmarks, topic endorsements, and votes, for a user.

The following activities can be purged with this resource.

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

To delete a user’s posts and comments, use these resources, respectively.

-   [Feed Element](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_specific.htm "Access, edit, or delete a feed element. Feed items are the only type of feed element that can be edited.")
-   [Comment](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_comments_specific.htm "Get information about, edit, or delete a comment.")

Resource

```

```

```

```

Available version

42.0

Requires Chatter

Yes

HTTP methods

POST

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

POST doesn’t take request parameters or a request body.

Response body for POST

[User Activities Job](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_activities_job.htm "User activities job.")

## Code Examples

```
/chatter/users/userId/activities/purge-job
```

```
/connect/communities/communityId/chatter/users/userId/activities/purge-job
```

## Related Topics

- Feed Element (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_specific.htm)
- Comment (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_comments_specific.htm)
- User Activities Job (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_activities_job.htm)
