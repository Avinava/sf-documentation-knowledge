---
title: "User Files Resources"
domain: chatterapi
topic: user-files-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:16.818Z
estimatedTokens: 163
keywords: [User, Files, Resources, user’s, Upload, file]
---

# User Files Resources

> Get information about a user’s files. Upload a file.

# User Files Resources

Get information about a user’s files. Upload a file.

Available resources are:

| Resource | Description |
| --- | --- |
| /connect/files/users/me | Upload a file, including references to external files, to the Files home or get information about files a user owns. These files don’t include files shared with a user, files a user follows, or general organization files. |
| /connect/files/users/me/filter/groups | Get information about files posted to groups that the specified user is a member of. |
| /connect/files/users/me/filter/shared-with-me | Get information about files that have been shared with the specified user. |

## Related Topics

- /connect/files/users/me (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_files_general.htm)
- /connect/files/users/me/filter/groups (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_files_groups.htm)
- /connect/files/users/me/filter/shared-with-me (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_files_sharing.htm)
