---
title: "File Shares"
domain: chatterapi
topic: file-shares
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.406Z
estimatedTokens: 584
keywords: [File, Shares, users, groups, records, shared, Share]
---

# File Shares

> Get the users, groups, or records with which a file has been
      shared. Share a file with users.

# File Shares

Get the users, groups, or records with which a file has been shared. Share a file with users.

Resource

```

```

```

```

Available since version

36.0

In versions 24.0–35.0, use /chatter/files/fileId/file-shares and /connect/communities/communityId/chatter/files/fileId/file-shares, which require Chatter.

HTTP methods

GET, POST

POST is available in versions 30.0 and later.

Request parameters for GET

In versions 30.0 and later, the first share returned in a GET request is the organization record share. In communities, the first share returned is the network record share.

| Name | Type | Description | Required or Optional | Available Since |
| --- | --- | --- | --- | --- |
| page | Integer | An integer greater than 0 specifying a page of topics. The default value is zero. | Optional | 24.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 to 100. The default value is 25. | Optional | 24.0 |

Request body for POST

Root XML tag

<fileShares>

JSON example

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| message | String | Private message body that’s sent to the recipients. If digital experiences is enabled, an email is sent instead of a private message. | 30.0 |
| shares | Share Input[] | Collection of Share Input request bodies. | 30.0 |

Request parameters for POST

**Parameters for sharing a file with users**

| Name | Type | Description | Required or Optional | Available Since |
| --- | --- | --- | --- | --- |
| id(1–9) | String | List of up to 9 user IDs to share this file with. This list must match the list of sharing types. | Required | 30.0 |
| message | String | Private message body that’s sent to the recipients. If Salesforce Communities is enabled, an email is sent instead of a private message. | Optional | 30.0 |
| sharingType(1–9) | String | List of sharing types, either C for collaborator or V for viewer. This list must match the list of user IDs. | Required | 30.0 |

Response body for GET and POST

[File Shares Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_shares_page.htm "Files share page.")

Example for POST

This example uses request parameters to share a file with two users.

```

```

Here is the same example using a request body.

```

```

## Code Examples

```
/connect/files/fileId/file-shares
```

```
/connect/communities/communityId/files/fileId/file-shares
```

```
{
  "message": "I shared a document with you.",
  "shares": [
     { "id": "005D0000001Az4l", "sharingType": "V" },
     { "id": "005D0000001B2ny", "sharingType": "C" }
   ]
}
```

```
POST /connect/files/069D00000001JDU/file-shares?​id1=005D0000001LL8O&id2=005D0000001QdEL&sharingType1=C&sharingType2=V
```

```
POST /connect/files/069D00000001JDU/file-shares

{
  "shares": [
     { "id": "005D0000001LL8O", "sharingType": "C" },
     { "id": "005D0000001QdEL", "sharingType": "V" }
   ]
}
```

## Related Topics

- Share
                      Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_shares_input.htm)
- File Shares Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_shares_page.htm)
- Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group.htm)
- Record
                                        Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_record_summary.htm)
- User
                                        Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
