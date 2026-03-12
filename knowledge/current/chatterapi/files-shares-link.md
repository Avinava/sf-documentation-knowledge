---
title: "Files Shares Link"
domain: chatterapi
topic: files-shares-link
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.410Z
estimatedTokens: 403
keywords: [Files, Shares, Link, file’s, share]
---

# Files Shares Link

> Get, create, and delete a file’s share
    link.

# Files Shares Link

Get, create, and delete a file’s share link.

Resource

```

```

```

```

Available since version

36.0

In versions 30.0–35.0, use /chatter/files/fileId/file-shares/link and /connect/communities/communityId/chatter/files/fileId/file-shares/link, which require Chatter.

HTTP methods

GET, PUT, DELETE

Request body for PUT

In version 36.0–57.0, PUT requests don’t require a request body and they ignore any request body provided. In version 58.0 and later, the [File Share Link Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_file_share_link_input.htm "File share link input.") request body is available for PUT requests but isn’t required.

Root XML tag

<fileShareLink>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| expirationDate | String | Expiration date of the generated public link. | Optional | 58.0 |
| isPassword​Required | Boolean | Specifies whether a password is needed for the file’s public link (true) or not (false). Specifying true generates a password. | Optional | 58.0 |

Response body for GET or PUT

[File Share Link](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_shares_link.htm "File shared as a link.")

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/connect/files/fileId/file-shares/link
```

```
/connect/communities/communityId/files/fileId/file-shares/link
```

```
{
"expirationDate": "2024-07-07T23:59:11.168Z",
"isPasswordRequired": "true"
}
```

## Related Topics

- File Share Link Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_file_share_link_input.htm)
- File Share Link (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_shares_link.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
