---
title: "Approve or Reject a Request to Join a Private Group"
domain: chatterapi
topic: approve-or-reject-a-request-to-join-a-private-group
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:24.123Z
estimatedTokens: 235
keywords: [Approve, Reject, Join, Group, Chatter]
---

> Approve or reject a request to join a private group in Chatter.

# Approve or Reject a Request to Join a Private Group

Approve or reject a request to join a private group in Chatter.

Resource

[/chatter/group-memberships-requests/requestId](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_group_membership_requests.htm "Update the status of a request by a user to join a private group or get information about a request to join a private group.")

HTTP method

PATCH

Request body

[Group Membership Request Update](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_update_group_mem_request.htm "Group membership request update input.")

Request body example

```

```

Request parameters

status and responseMessage

The responseMessage parameter is used only if the value of status is Declined.

Request parameter example

```

```

Returns

[Group Membership Request](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_membership_request.htm "Group membership request.")

## Code Examples

```
{ "status " : "Accepted" }
```

```
/services/data/v66.0/chatter/group-membership-requests/0I5D000000002fwKAA?status=Accepted
```

## Related Topics

- /chatter/group-memberships-requests/requestId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_group_membership_requests.htm)
- Group Membership Request
              Update (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_update_group_mem_request.htm)
- Group Membership
            Request (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_membership_request.htm)
