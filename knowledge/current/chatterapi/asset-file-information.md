---
title: "Asset File Information"
domain: chatterapi
topic: asset-file-information
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.353Z
estimatedTokens: 199
keywords: [Asset, File, change, visibility, unauthenticated, users]
---

# Asset File Information

> Get information about an asset file or change the visibility of an
      asset file for unauthenticated users.

# Asset File Information

Get information about an asset file or change the visibility of an asset file for unauthenticated users.

Resource

```

```

```

```

Available version

38.0

HTTP methods

GET, PATCH

PATCH is supported in version 43.0 and later.

Request body for PATCH

Root XML tag

<fileAsset>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isVisibleBy​ExternalUsers | Boolean | Indicates whether unauthenticated users can see the asset file (true) or not (false). | Required | 43.0 |

Response body for GET and PATCH

[File Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_details.htm "Includes all the File Summary response body with these additional items.")

## Code Examples

```
/connect/file-assets/assetId
```

```
/connect/communities/communityId/file-assets/assetId
```

```
{
   "isVisibleByExternalUsers": "true"
}
```

## Related Topics

- File Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_details.htm)
