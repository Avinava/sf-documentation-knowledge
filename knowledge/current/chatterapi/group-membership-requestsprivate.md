---
title: "Group Membership Requests—Private"
domain: chatterapi
topic: group-membership-requestsprivate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.490Z
estimatedTokens: 546
keywords: [Group, Membership, Requests—Private, status, user, join]
---

# Group Membership Requests—Private

> Update the status of a request by a user to join a
   private group or get information about a request to join a private group.

# Group Membership Requests—Private

Update the status of a request by a user to join a private group or get information about a request to join a private group.

Resource

```

```

```

```

Get the requestId by making a POST request to [/chatter/groups/groupId/members/requests](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups_GroupMembersRequests.htm#connect_resources_groups_GroupMembersRequests "Request membership in a private group or get the status of requests to a join a private group.").

Available since version

27.0

Requires Chatter

Yes

HTTP methods

GET, HEAD, and PATCH

Request body for PATCH

Root XML tag

<groupMembershipRequestUpdate>

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| responseMessage | String | Use this property to provide a message to the user if their membership request is declined. The value of this property is used only when the value of the status property is Declined.The maximum length is 756 characters. | 27.0 |
| status | String | Valid values:AcceptedDeclined | 27.0 |

Request parameters for PATCH

| Parameter Name | Type | Description | Available Since |
| --- | --- | --- | --- |
| responseMessage | String | Use this property to provide a message to the user if their membership request is declined. The value of this property is used only when the value of the status property is Declined.The maximum length is 756 characters. | 27.0 |
| status | String | Valid values:AcceptedDeclined | 27.0 |

Response body for GET or PATCH

[Group Membership Request](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_membership_request.htm "Group membership request.")

Example for approving a request to join a private group using the request body

```

```

Example for approving a request to join a private group using parameters

This example updates a request to join a private group from Pending to Accepted.

```

```

#### See Also

-   [Approve or Reject a Request to Join a Private Group](atlas.en-us.chatterapi.meta/chatterapi/quickreference_approve_or_reject_private_group_request.htm "Approve or reject a request to join a private group in Chatter.")

## Code Examples

```
/chatter/group-membership-requests/requestId
```

```
/connect/communities/communityId/chatter/group-membership-requests/requestId
```

```
{ "status " : "Accepted" }
```

```
/services/data/v66.0/chatter/group-membership-requests/0I5D000000002fwKAA?status=Accepted
```

## Related Topics

- /chatter/groups/groupId/members/requests (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups_GroupMembersRequests.htm)
- Group Membership Request (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_membership_request.htm)
- Approve or Reject a Request to Join a Private Group (atlas.en-us.chatterapi.meta/chatterapi/quickreference_approve_or_reject_private_group_request.htm)
