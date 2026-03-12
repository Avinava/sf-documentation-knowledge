---
title: "Group Members—Private"
domain: chatterapi
topic: group-membersprivate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.556Z
estimatedTokens: 626
keywords: [Group, Members—Private, membership, status, requests, join]
---

# Group Members—Private

> Request membership in a private group or get the
         status of requests to a join a private group.

# Group Members—Private

Request membership in a private group or get the status of requests to a join a private group.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

To request membership in a public group, use the [Group Members](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups_GroupMembers.htm#connect_resources_groups_GroupMembers "Members of a specified group. Get the members and add a member to a group. To add a member, the context user must be the group owner or moderator.") resource.

Resource

```

```

```

```

Available since version

27.0

Requires Chatter

Yes

HTTP methods

GET, HEAD, and POST

Request parameter for GET

| Parameter Name | Type | Description | Available Since |
| --- | --- | --- | --- |
| status | String | Optional. If you include this parameter, results are filtered to include those that match the specified status. Valid values:AcceptedDeclinedPending | 27.0 |

Response body for GET or HEAD

[Group Membership Request Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_membership_request_collection.htm "Group membership request collection.")

Example for getting the requests to join that have been accepted

```

```

Response body for POST

[Group Membership Request](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_membership_request.htm "Group membership request.")

This table lists HTTP response code descriptions that are unique to this resource. For descriptions of other HTTP response codes, see [Status Codes and Error Responses](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

| HTTP Response Code | Description |
| --- | --- |
| 201 | One of the following:SuccessUser already has a membership request for this group |
| 204 | User is already a member of this group. |
| 403 | One of the following:Group is private: INSUFFICIENT_ACCESS_OR_READONLYUser is an external user: INSUFFICIENT_ACCESS |

Example for requesting membership in a private group

Specify the ID (0F9D00000000lpK) of the group.

```

```

#### See Also

-   [Request to Join a Private Group](atlas.en-us.chatterapi.meta/chatterapi/quickreference_request_to_join_private_group.htm "Make a request to join a private Chatter group.")

## Code Examples

```
/chatter/groups/groupId/members/requests
```

```
/connect/communities/communityId/chatter/groups/groupId/members/requests
```

```
/chatter/groups/0F9D00000000izfKAA/members/requests?status=Accepted
```

```
/chatter/groups/0F9D00000000lpK/members/requests
```

## Related Topics

- Group Members (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups_GroupMembers.htm)
- Group Membership Request
                     Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_membership_request_collection.htm)
- Group Membership
                     Request (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_membership_request.htm)
- Status Codes and Error Responses (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Request to Join a Private Group (atlas.en-us.chatterapi.meta/chatterapi/quickreference_request_to_join_private_group.htm)
