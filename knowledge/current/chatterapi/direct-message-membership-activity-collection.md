---
title: "Direct Message Membership Activity Collection"
domain: chatterapi
topic: direct-message-membership-activity-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.284Z
estimatedTokens: 247
keywords: [Direct, Message, Membership, Activity, Collection, member, activities]
---

# Direct Message Membership Activity Collection

> A collection of direct message member activities.

# Direct Message Membership Activity Collection

A collection of direct message member activities.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| activities | Direct Message Membership Activity[] | Collection of direct message member activities. | Small, 40.0 | 40.0 |
| currentPageToken | String | Token identifying the current page. | Medium, 40.0 | 40.0 |
| currentPageUrl | String | Connect REST API URL identifying the current page. | Medium, 40.0 | 40.0 |
| nextPageToken | String | Token identifying the next page, or null if there isn’t a next page. | Small, 40.0 | 40.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | Small, 40.0 | 40.0 |

#### See Also

-   [Direct Message Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_direct_message_capability.htm "If a feed element has this capability, it’s a direct message.")

## Related Topics

- Direct Message Membership Activity (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_direct_message_membership_activity.htm)
- Direct Message Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_direct_message_capability.htm)
