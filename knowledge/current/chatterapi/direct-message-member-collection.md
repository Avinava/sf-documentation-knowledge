---
title: "Direct Message Member Collection"
domain: chatterapi
topic: direct-message-member-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.276Z
estimatedTokens: 272
keywords: [Direct, Message, Member, Collection, members]
---

# Direct Message Member Collection

> A collection of direct message members.

# Direct Message Member Collection

A collection of direct message members.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentPageToken | String | Page token to access the current page of direct message members. | Small, 39.0 | 39.0 |
| currentPageUrl | String | URL to the current page of direct message members. | Small, 39.0 | 39.0 |
| nextPageToken | String | Page token to access the next page of direct message members. | Small, 39.0 | 39.0 |
| nextPageUrl | String | URL to the next page of direct message members. | Small, 39.0 | 39.0 |
| users | User Summary[] | Collection of direct message members. | Small, 39.0 | 39.0 |

#### See Also

-   [Direct Message Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_direct_message_capability.htm "If a feed element has this capability, it’s a direct message.")

-   [Direct Message Membership Activity](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_direct_message_membership_activity.htm "Direct message membership activity.")

## Related Topics

- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Direct Message Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_direct_message_capability.htm)
- Direct Message Membership Activity (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_direct_message_membership_activity.htm)
