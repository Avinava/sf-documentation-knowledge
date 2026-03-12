---
title: "Feed Entity Read Summary"
domain: chatterapi
topic: feed-entity-read-summary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.700Z
estimatedTokens: 204
keywords: [Feed, Entity, Summary, post, comment]
---

# Feed Entity Read Summary

> Summary of a post or comment that was read.

# Feed Entity Read Summary

Summary of a post or comment that was read.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| activityString | String | Date of the user activity. Format is ISO 8601. | Small, 42.0 | 42.0 |
| activityType | String | Type of user activity. Value is FeedEntityRead. | Small, 42.0 | 42.0 |
| activityUrl | String | URL to the user activity. | Small, 42.0 | 42.0 |
| community | Community Summary | Experience Cloud site in which the user performed the activity. | Medium, 42.0 | 42.0 |
| feedEntityId | String | ID of the feed entity. | Small, 42.0 | 42.0 |

#### See Also

-   [User Activity Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_activity_collection.htm "User activity collection.")

## Related Topics

- Community Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_community_summary.htm)
- User Activity Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_activity_collection.htm)
