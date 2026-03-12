---
title: "Following"
domain: chatterapi
topic: following
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.830Z
estimatedTokens: 732
keywords: [people, groups, records, topics, files, user, follow]
---

# Following

> Returns a list of people, groups, records, topics, and
   files that the specified user is following. Also used to follow records.

# Following

Returns a list of people, groups, records, topics, and files that the specified user is following. Also used to follow records.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

You can't use the users resource to add a user to a group. Use the [groups resource](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups.htm "Information about groups, such as the group's members, photo, and the groups in the organization. Create and delete a group, add members to a group, and change the group photo.") instead.

Resource

```

```

```

```

Available since version

23.0

Following topics is available since version 29.0.

Requires Chatter

Yes

HTTP methods

GET, POST, or HEAD

Request parameters for GET

All parameters are optional.

| Parameter Name | Type | Description |
| --- | --- | --- |
| filterType | String | Specifies the key prefix to filter the type of objects returned. The key prefix is the three-character prefix code in the object ID. Object IDs are prefixed with three-character codes that specify the type of the object. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.Use the List of Filter Feed URLs to see the available key prefixes. |
| page | Integer | Specifies the page number to return. The default value is 0, which returns the first page. |
| pageSize | Integer | Specifies the number of items per page. Valid values are between 1 and 1000. If you don't specify a size, the default is 25. |

Response body for GET

[Following Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_following_page.htm "Page of Chatter followers.")

Example for getting a list of records a user follows

```

```

Request body for POST

Root XML tag

<following>

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| subjectId | String | The ID of the record you want to follow, such as a user ID or file ID.NoteUse Group Member Input for adding members to groups. | 23.0Topic IDs are available in 29.0 |

Request parameter for POST

| Parameter Name | Type | Description | Available |
| --- | --- | --- | --- |
| subjectId | String | The ID of the record you want to follow, such as a user ID or file ID. | 23.0Topic IDs are available in 29.0 |

Response body for POST

[Subscription](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_subscription.htm "Chatter subscription, or following, information.")

Example for following a record using the request body

```

```

Example for following a record using parameters

```

```

#### See Also

-   [Follow a Record](atlas.en-us.chatterapi.meta/chatterapi/quickreference_follow_record.htm "Follow a record in Chatter.")

-   [Get a List of Records a User Follows](atlas.en-us.chatterapi.meta/chatterapi/quickreference_get_list_of_records_user_follows.htm "Get a list of records that a user follows.")

## Code Examples

```
/chatter/users/userId/following
```

```
/connect/communities/communityId/chatter/users/userId/following
```

```
/services/data/v66.0/chatter/users/005D0000001GLowIAB/following?page=1
```

```
{ "subjectId" : "001D000000Iyu2p" }
```

```
/services/data/v66.0/chatter/users/me/following?subjectId=001D000000Iyu2p
```

## Related Topics

- groups resource (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups.htm)
- List of Filter Feed URLs (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_filter.htm)
- Following Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_following_page.htm)
- Group Member Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_group_member_input.htm)
- Subscription (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_subscription.htm)
- Follow a Record (atlas.en-us.chatterapi.meta/chatterapi/quickreference_follow_record.htm)
- Get a List of Records a User Follows (atlas.en-us.chatterapi.meta/chatterapi/quickreference_get_list_of_records_user_follows.htm)
