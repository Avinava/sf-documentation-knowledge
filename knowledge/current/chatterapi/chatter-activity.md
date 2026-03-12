---
title: "Chatter Activity"
domain: chatterapi
topic: chatter-activity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.131Z
estimatedTokens: 249
keywords: [Chatter, Activity, number, posts, comments, made, likes, upvotes, received, user]
---

# Chatter Activity

> Chatter activity, such as the number of posts and comments made, and comments,
                likes, and upvotes received, for a user.

# Chatter Activity

Chatter activity, such as the number of posts and comments made, and comments, likes, and upvotes received, for a user.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| commentCount | Integer | Total number of comments in the org or site made by the user. | Small, 29.0 | 23.0 |
| commentReceived​​Count | Integer | Total number of comments in the org or site received by the user. | Small, 29.0 | 23.0 |
| likeReceived​Count | Integer | Total number of likes and upvotes (in version 45.0 and later) on posts and comments in the org or site received by the user. | Small, 29.0 | 23.0 |
| postCount | Integer | Total number of posts in the org or site made by the user. | Small, 29.0 | 23.0 |

#### See Also

-   [User Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm "User detail. If the context user doesn’t have permission to see a property, the property is set to null.")

## Related Topics

- User Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm)
