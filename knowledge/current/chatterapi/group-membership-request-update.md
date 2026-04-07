---
title: "Group Membership Request Update"
domain: chatterapi
topic: group-membership-request-update
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:10.459Z
estimatedTokens: 191
keywords: [Group, Membership]
---

> Group membership request update input.

# Group Membership Request Update

Group membership request update input.

Root XML tag

<groupMembershipRequestUpdate>

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| responseMessage | String | Use this property to provide a message to the user if their membership request is declined. The value of this property is used only when the value of the status property is Declined.The maximum length is 756 characters. | 27.0 |
| status | String | Valid values:AcceptedDeclined | 27.0 |

#### See Also

-   [Approve or Reject a Request to Join a Private Group](atlas.en-us.chatterapi.meta/chatterapi/quickreference_approve_or_reject_private_group_request.htm "Approve or reject a request to join a private group in Chatter.")

## Related Topics

- Approve or Reject a Request to Join a Private Group (atlas.en-us.chatterapi.meta/chatterapi/quickreference_approve_or_reject_private_group_request.htm)
