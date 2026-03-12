---
title: "File Share Link"
domain: chatterapi
topic: file-share-link
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.880Z
estimatedTokens: 326
keywords: [File, Share, Link, shared]
---

# File Share Link

> File shared as a link.

# File Share Link

File shared as a link.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| expirationDate | String | Expiration date of the generated public link. | Small, 58.0 | 58.0 |
| fileViewUrl | String | URL where the file can be viewed and downloaded. This value is also called the file share link. | Small, 30.0 | 30.0 |
| isPassword​Required | Boolean | Specifies whether a password is needed for the file’s public link (true) or not (false). | Small, 58.0 | 58.0 |
| password | String | If isPasswordRequired is true, the auto-generated password for the file’s public link. | Small, 58.0 | 58.0 |
| sharingType | String | The permission level of sharing. Values are:C—CollaboratorI—Sharing permission is determined by location. This generally occurs when the sharing permission is not set on the file, but on the library. This value is also used when the context user is the owner of the file.N—No accessV—Viewer | Small, 30.0 | 30.0 |

#### See Also

-   [File Shares Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_shares_page.htm "Files share page.")

-   [Files Shares Link](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_files_shares_link.htm "Get, create, and delete a file’s share link.")

## Related Topics

- File Shares Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_shares_page.htm)
- Files Shares Link (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_files_shares_link.htm)
