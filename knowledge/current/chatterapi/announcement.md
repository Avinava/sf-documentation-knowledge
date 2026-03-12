---
title: "Announcement"
domain: chatterapi
topic: announcement
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.557Z
estimatedTokens: 723
keywords: [Announcement]
---

# Announcement

> Get information about, update, or delete an
   announcement.

# Announcement

Get information about, update, or delete an announcement.

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

GET, PATCH, DELETE, HEAD

Request body for PATCH

Root XML tag

<announcement>

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

Request parameters for PATCH

| Parameter Name | Value | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| expirationDate | String | Date time in ISO 8601 format. The Salesforce UI displays an announcement until 11:59 p.m. on this date unless another announcement is posted first. The Salesforce UI ignores the time value in the expirationDate. However, you can use the time value to create your own display logic in your own UI. | Required | 31.0 |

Response body for GET, PATCH

[Announcement](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_announcement.htm "An announcement.")

Response body for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/chatter/announcements/announcementId
```

```
/connect/communities/communityId/chatter/announcements/announcementId
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
- Announcement (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_announcement.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Feed Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm)
- Announcement Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_announcement_collection.htm)
- Group Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_detail.htm)
