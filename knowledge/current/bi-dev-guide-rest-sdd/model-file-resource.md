---
title: "Model File Resource"
domain: bi-dev-guide-rest-sdd
topic: model-file-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.396Z
estimatedTokens: 132
keywords: [Model, File, Resource, binary, stream, Einstein, Discovery, contents]
---

# Model File Resource

> Returns a binary stream of the Einstein Discovery model file contents.

# Model File Resource

Returns a binary stream of the Einstein Discovery model file contents.

Resource URL

```

```

Formats

JSON

Available Version

49.0 GET

HTTP Methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| model​Id | String | The ID of the model to retrieve the file for. | Required | 49.0 |

Response body for GET

StreamedRepresentation. Returns a binary stream of the JSON contents of the specified file.

## Code Examples

```
/smartdatadiscovery/models/<modelId>/file
```
