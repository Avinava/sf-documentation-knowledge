---
title: "CMS Folder"
domain: chatterapi
topic: cms-folder
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.652Z
estimatedTokens: 156
keywords: [CMS, Folder, managed, content]
---

# CMS Folder

> Get a managed content folder.

# CMS Folder

Get a managed content folder.

Resource

```

```

Available version

53.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextContent​SpaceId | String | ID of the context workspace. Specify to get folder hierarchy information starting from the root of the context workspace. | Optional | 61.0 |

Response body for GET

[Managed Content Space Folder Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_space_folder_detail.htm "Managed content space folder.")

## Code Examples

```
/connect/cms/folders/folderId
```

## Related Topics

- Managed Content Space Folder Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_space_folder_detail.htm)
