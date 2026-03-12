---
title: "Announcements Resources"
domain: chatterapi
topic: announcements-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.566Z
estimatedTokens: 1017
keywords: [Announcements, Resources, parent, announcement]
---

# Announcements Resources

> Get the announcements for the specified parent or create an
      announcement. Also get information about, update, or delete an announcement.

# Announcements Resources

Get the announcements for the specified parent or create an announcement. Also get information about, update, or delete an announcement.

Use an announcement to highlight information. Users can discuss, like, and post comments on announcements. Deleting the feed post deletes the announcement.

This image shows an announcement in a group. Creating an announcement also creates a feed item with the announcement text.

![Announcement in the Salesforce UI](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Fgroup_announcement.png&folder=chatterapi)

An announcement displays in a designated location in the Salesforce UI until 11:59 p.m. on its expiration date, unless it’s deleted or replaced by another announcement.

Available resources are:

| Resource | Description |
| --- | --- |
| /chatter/announcements | Get the announcements for the specified parent or create an announcement. |
| /chatter/announcements/announcementId | Get information about, update, or delete an announcement. |

## Announcements

Get the announcements for the specified parent or create an announcement.

Resource

```

```

```

```

Available version

36.0

Requires Chatter

Yes

HTTP methods

GET, POST, HEAD

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | Integer | Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned. | Optional | 36.0 |
| pageSize | Integer | Specifies the number of announcements per page. | Optional | 36.0 |
| parentId | String | ID of the parent entity for the announcement, that is, a group ID when the announcement appears in a group. | Required | 36.0 |

Response body for GET

[Announcement Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_announcement_collection.htm "A paginated collection of Announcement response bodies.")

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

Response body for POST

[Announcement](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_announcement.htm "An announcement.")

-   **[Announcement](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_announcements.htm)**
    Get information about, update, or delete an announcement.

## Code Examples

```
/connect/communities/communityId/chatter/announcements
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

- /chatter/announcements/announcementId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_announcements.htm)
- Announcement Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_announcement_collection.htm)
- Message Body
                                    Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Announcement (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_announcement.htm)
- Announcement (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_announcements.htm)
