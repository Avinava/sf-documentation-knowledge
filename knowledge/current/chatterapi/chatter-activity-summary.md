---
title: "Chatter Activity Summary"
domain: chatterapi
topic: chatter-activity-summary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.643Z
estimatedTokens: 368
keywords: [Chatter, Activity, Summary]
---

# Chatter Activity Summary

> Summary of Chatter activity.

# Chatter Activity Summary

Summary of Chatter activity.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| activityDate | String | Date of the user activity. Format is ISO 8601. | Small, 42.0 | 42.0 |
| activityType | String | Type of user activity. Value is ChatterActivity. | Small, 42.0 | 42.0 |
| activityUrl | String | URL to the user activity. | Small, 42.0 | 42.0 |
| commentCount | Integer | Total number of comments in the org or site made by the user. | Small, 42.0 | 42.0 |
| commentReceived​Count | Integer | Total number of comments in the org or site received by the user. | Small, 42.0 | 42.0 |
| community | Community Summary | Experience Cloud site in which the user performed the activity. | Medium, 42.0 | 42.0 |
| feedEntityId | String | ID of the feed entity. | Small, 42.0 | 42.0 |
| likeReceived​Count | Integer | Total number of likes and upvotes (in version 45.0 and later) on posts and comments in the org or site received by the user. | Small, 42.0 | 42.0 |
| postCount | Integer | Total number of posts in the org or site made by the user. | Small, 42.0 | 42.0 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Data from this table is retained for 6 months.

#### See Also

-   [User Activity Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_activity_collection.htm "User activity collection.")

## Related Topics

- Community Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_community_summary.htm)
- User Activity Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_activity_collection.htm)
