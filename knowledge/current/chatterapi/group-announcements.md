---
title: "Group Announcements"
domain: chatterapi
topic: group-announcements
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.527Z
estimatedTokens: 925
keywords: [Group, Announcements, posted, post, announcement]
---

# Group Announcements

> Information about the announcements posted to the
   specified group. Get information or post an announcement to a group.

# Group Announcements

Information about the announcements posted to the specified group. Get information or post an announcement to a group.

Use an announcement to highlight information. Users can discuss, like, and post comments on announcements. Deleting the feed post deletes the announcement.

To get information about, update, or delete an announcement, use the [Announcements Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_announcements_list.htm "Get the announcements for the specified parent or create an announcement. Also get information about, update, or delete an announcement.").

Resource

```

```

```

```

Available since version

31.0

Requires Chatter

Yes

HTTP methods

GET, POST, HEAD

Request parameters for GET

| Parameter Name | Type | Description | Available Since |
| --- | --- | --- | --- |
| page | Integer | An integer specifying a page of items. The default value is 0, which returns the first page. | 31.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don't specify a size, the default is 25. | 31.0 |

Request body for POST

Root XML tag

<announcement>

JSON example for creating an announcement

```

```

JSON example for creating an announcement using an existing feed item

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| body | Message Body Input | Text of the announcement. | Required for creating an announcement if feedItemId isn’t specifiedDon’t specify for updating an announcement. | 31.0 |
| expirationDate | String | Date time in ISO 8601 format. The Salesforce UI displays an announcement until 11:59 p.m. on this date unless another announcement is posted first. The Salesforce UI ignores the time value in the expirationDate. However, you can use the time value to create your own display logic in your own UI. | Required for creating an announcementOptional for updating an announcement | 31.0 |
| feedItemId | String | ID of an AdvancedTextPost feed item that is the body of the announcement. | Required for creating an announcement if body isn’t specifiedDon’t specify for updating an announcement. | 36.0 |
| isArchived | Boolean | Specifies whether the announcement is archived. | Optional | 36.0 |
| parentId | String | ID of the parent entity for the announcement, that is, a group ID when the announcement appears in a group. | Required for creating an announcement if feedItemId isn’t specifiedDon’t specify for updating an announcement. | 36.0 |
| sendEmails | Boolean | Specifies whether the announcement is sent as an email to all group members regardless of their email setting for the group. If Chatter emails aren’t enabled for the organization, announcement emails aren’t sent. Default value is false. | Optional for creating an announcementDon’t specify for updating an announcement | 36.0 |

Request parameters for POST

| Parameter Name | Type | Description | Available Since |
| --- | --- | --- | --- |
| expirationDate | String | Date time in ISO 8601 format. The Salesforce UI displays an announcement until 11:59 p.m. on this date unless another announcement is posted first. The Salesforce UI ignores the time value in the expirationDate. However, you can use the time value to create your own display logic in your own UI. | 31.0 |

Response body for GET

[Announcement Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_announcement_collection.htm "A paginated collection of Announcement response bodies.")

Response body for POST

[Announcement](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_announcement.htm "An announcement.")

## Code Examples

```
/chatter/groups/groupID/announcements
```

```
/connect/communities/communityId/chatter/groups/groupID/announcements
```

```
{   "body":
      {
         "messageSegments": [
         {
            "text": "Please install the updates for all iOS devices.",
            "type": "Text"
          }
          ]
      },
   "parentId": "0F9B0000000004S",
   "expirationDate": "2016-02-22T00:00:00.000Z"
}
```

```
{
   "feedItemId": "0D5D0000000DaZBKA0",
   "expirationDate": "2016-02-22T00:00:00.000Z"
}
```

## Related Topics

- Announcements Resources (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_announcements_list.htm)
- Message Body
                                    Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Announcement Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_announcement_collection.htm)
- Announcement (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_announcement.htm)
