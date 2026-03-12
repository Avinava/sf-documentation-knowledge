---
title: "Announcement Input"
domain: chatterapi
topic: announcement-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.968Z
estimatedTokens: 469
keywords: [Announcement, Input]
---

# Announcement Input

> An announcement.

# Announcement Input

An announcement.

Root XML tag

<announcement>

JSON example for creating an announcement

```

```

JSON example for creating an announcement using an existing feed item

```

```

JSON example for updating an announcement

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

## Code Examples

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

```
{
   "expirationDate": "2016-02-22T00:00:00.000Z",
   "isArchived": "false"
}
```

## Related Topics

- Message Body
                                    Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
