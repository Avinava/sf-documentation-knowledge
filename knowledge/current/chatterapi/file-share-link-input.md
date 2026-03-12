---
title: "File Share Link Input"
domain: chatterapi
topic: file-share-link-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.719Z
estimatedTokens: 166
keywords: [File, Share, Link, Input]
---

# File Share Link Input

> File share link input.

# File Share Link Input

File share link input.

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

#### See Also

-   [Files Shares Link](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_files_shares_link.htm "Get, create, and delete a file’s share link.")

## Code Examples

```
{
"expirationDate": "2024-07-07T23:59:11.168Z",
"isPasswordRequired": "true"
}
```

## Related Topics

- Files Shares Link (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_files_shares_link.htm)
