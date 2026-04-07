---
title: "Dataset Version File Resource"
domain: bi-dev-guide-rest
topic: dataset-version-file-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:36:56.198Z
estimatedTokens: 105
keywords: [Dataset, File, Resource, binary, content]
---

> Provides access to the binary content of the dataset version
    file.

# Dataset Version File Resource

Provides access to the binary content of the dataset version file.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_rest)

#### Note

This resource is accessible only by the Integration User.

Resource URL

```

```

Formats

JSON

Available Version

36.0

HTTP Methods

GET

GET Response Body

Returns the binary content of the dataset file.

## Code Examples

```
/wave/datasets/<datasetIdOrApiName>/versions/<versionId>/files/<fileId>
```
