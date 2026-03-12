---
title: "Asset File Content"
domain: chatterapi
topic: asset-file-content
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.350Z
estimatedTokens: 176
keywords: [Asset, File, Content, streamed]
---

# Asset File Content

> Get the streamed content of an asset file.

# Asset File Content

Get the streamed content of an asset file.

Resource

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The fullyQualifiedName is the namespace prefix, if there is one, followed by the developer name of the ContentAsset.

Available version

42.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| versionNumber | Integer | Specify an existing version number for the file. If not specified, the latest version is returned. | Optional | 42.0 |

Response body for GET

Binary stream of the content

## Code Examples

```
/connect/file-assets/fullyQualifiedName/content
```

```
/connect/communities/communityId/file-assets/fullyQualifiedName/content
```
