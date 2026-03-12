---
title: "Group Memberships Resources"
domain: chatterapi
topic: group-memberships-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.498Z
estimatedTokens: 884
keywords: [Group, Memberships, Resources, Chatter, groups, Batch]
---

# Group Memberships Resources

> Information about memberships in Chatter
         groups.

# Group Memberships Resources

Information about memberships in Chatter groups.

Available resources are:

| Resource | Description |
| --- | --- |
| /chatter/group-memberships/membershipId | Access information about a member of a group, remove a member from a group, and update a group member’s role. |
| /chatter/group-memberships/batch/membershipIds | Access information about a list of group members. |

## Group Memberships Information

Access information about a member of a group, remove a member from a group, and update a group member’s role.

Membership IDs are returned from the [/chatter/groups/groupId/memberships](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups_GroupMembers.htm "Members of a specified group. Get the members and add a member to a group. To add a member, the context user must be the group owner or moderator.") resource.

Resource

```

```

```

```

Available since version

23.0

Requires Chatter

Yes

HTTP methods

GET, DELETE, HEAD, PATCH

PATCH is supported in version 29.0.

Request body for PATCH

Root XML tag

<member>

JSON example

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| role | String | The role of the member. One of these values:GroupManagerStandardMember | 29.0 |
| userId | String | The user ID of the member to be added to the group. | 23.0 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

To update a group member’s role in a PATCH request, pass only the role property, don’t pass the userId property.

Request parameters for PATCH

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| role | String | The role of the member. One of these values:GroupManagerStandardMember | 29.0 |

Response body for GET or PATCH

[Group Member](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_member.htm "Chatter group member.")

## Batch Group Memberships

Access information about a list of group members. The members don’t have to belong to the same group. Each membership ID is associated with a specific group.

Membership IDs are returned in the response bodies of several [groups resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups.htm "Information about groups, such as the group's members, photo, and the groups in the organization. Create and delete a group, add members to a group, and change the group photo.").

The following groups resource lists every member of a group in its own [Group Member](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_member.htm "Chatter group member.") response body. The id property of every Group Member response body contains a membership Id:

```

```

Resource

```

```

```

```

Where membershipIds is a comma-separated list of up to 500 membership IDs.

Available since version

27.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Response body for GET or HEAD

[Batch Results](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_results.htm "Batch results.")

Example for GET

This request gets the group membership information for two users:

```

```

This is the Batch Results response body, which contains nested [User Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm "The User Summary response body is a subset of the User Detail response body.") response bodies:

```

```

Note that the second group membership wasn’t found. Batch requests return a status code for each subrequest.

## Code Examples

```
/connect/communities/communityId/chatter/group-memberships/membershipId
```

```
{   
    "role" : "GroupManager",
    "userId" : "005B0000000Ge16"
}
```

```
/connect/communities/communityId/chatter/group-memberships/batch/membershipIds
```

```
/chatter/group-memberships/batch/0FBD00000003GAPOA2,0FBD00000003GAKOA
```

```
{
   "hasErrors": true,
   "results": [
      {
         "result": {
            "id": "0FBD00000003GAPOA2",
            "role": "StandardMember",
            "url": "/services/data/v66.0/chatter/group-memberships/0FBD00000003GAPOA2",
            "user": {
               "companyName": "Universal Containers",
               "firstName": "Gordon",
               "id": "005D0000001LLO1IAO",
               "isActive": true,
               "isInThisCommunity": true,
               "lastName": "Johnson",
               "motif": {
                  "color": "1797C0",
                  "largeIconUrl": "/img/icon/profile64.png",
                  "mediumIconUrl": "/img/icon/profile32.png",
                  "smallIconUrl": "/img/icon/profile16.png"
               },
               "mySubscription": {
                  "id": "0E8D0000000T5ZUKA0",
                  "url": "/services/data/v66.0/chatter/subscriptions/0E8D0000000T5ZUKA0"
               },
               "name": "Gordon Johnson",
               "photo": {
                  "fullEmailPhotoUrl": "https://instance_name/ncsphoto/SqRfG_-PUTY6KtfOp_f0cPhKrC7plNhUw5eOz7Aj1u-oFL0K-ff2oe04ZAmT2MqC",
                  "largePhotoUrl": "https:/instance_name/profilephoto/729D00000000LJL/F",
                  "photoVersionId": "729D00000000LJLIA2",
                  "smallPhotoUrl": "https://instance_name/profilephoto/729D00000000LJL/T",
                  "standardEmailPhotoUrl": "https://instance_name/ncsphoto/SqRfG_-PUTY6KtfOp_f0cPhKrC7plNhUw5eOz7Aj1u-6d5rE2mNaMaBZfGnFX65O",
                  "url": "/services/data/v66.0/chatter/users/005D0000001LLO1IAO/photo"
               },
               "title": "VP Sales",
               "type": "User",
               "url": "/services/data/v66.0/chatter/users/005D0000001LLO1IAO",
               "userType": "Internal"
            }
         },
         "statusCode": 200
      },
      {
         "result": [{
            "errorCode": "NOT_FOUND",
            "message": "The requested resource does not exist"
         }],
         "statusCode": 404
      }
   ]
}
```

## Related Topics

- /chatter/groups/groupId/memberships (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups_GroupMembers.htm)
- Group Member (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_member.htm)
- groups resources (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups.htm)
- Batch Results (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_results.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
