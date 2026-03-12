---
title: "Group Membership Request"
domain: chatterapi
topic: group-membership-request
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.146Z
estimatedTokens: 341
keywords: [Group, Membership]
---

# Group Membership Request

> Group membership request.

# Group Membership Request

Group membership request.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| createdDate | String | ISO 8601 date string specifying the date of the membership request. | Big, 29.0 | 27.0 |
| id | String | ID for the group membership request object. | Small, 29.0 | 27.0 |
| lastUpdateDate | String | ISO 8601 date string specifying the last time the request was updated. | Small, 29.0 | 27.0 |
| requestedGroup | Reference | Information about the group the user is requesting to join. | Big, 29.0 | 27.0 |
| responseMessage | String | Message to display to the user if their membership request is declined. The value of this property is used only when the value of the status property is Declined.The maximum length is 756 characters. | Big, 29.0 | 27.0 |
| status | String | Status of the request to join a private group. Values are:AcceptedDeclinedPending | Small, 29.0 | 27.0 |
| url | String | URL to this group membership request object. | Small, 29.0 | 27.0 |
| user | User Summary | Information about the user requesting membership in a group. | Small, 29.0 | 27.0 |

#### See Also

-   [Group Membership Request Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_membership_request_collection.htm "Group membership request collection.")

## Related Topics

- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Group Membership Request Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_membership_request_collection.htm)
