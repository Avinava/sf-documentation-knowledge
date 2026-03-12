---
title: "Direct Message Membership Activity"
domain: chatterapi
topic: direct-message-membership-activity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.281Z
estimatedTokens: 225
keywords: [Direct, Message, Membership, Activity]
---

# Direct Message Membership Activity

> Direct message membership activity.

# Direct Message Membership Activity

Direct message membership activity.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| activityDate | String | Direct message member activity date. Format is ISO 8601. | Small, 40.0 | 40.0 |
| actor | User Summary | User who changed the direct message membership. | Small, 40.0 | 40.0 |
| membersAdded | Direct Message Member Collection | Members added to the direct message as part of the activity. | Small, 40.0 | 40.0 |
| membersRemoved | Direct Message Member Collection | Members removed from the direct message as part of the activity. | Small, 40.0 | 40.0 |

#### See Also

-   [Direct Message Membership Activity Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_direct_message_membership_activity_collection.htm "A collection of direct message member activities.")

## Related Topics

- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Direct Message Member Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_direct_message_member_collection.htm)
- Direct Message Membership Activity Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_direct_message_membership_activity_collection.htm)
