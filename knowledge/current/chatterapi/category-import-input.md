---
title: "Category Import Input"
domain: chatterapi
topic: category-import-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:07.558Z
estimatedTokens: 94
keywords: [Category, Import, Configuration, asynchronous, job]
---

> Configuration for an asynchronous category import job.

# Category Import Input

Configuration for an asynchronous category import job.

Root XML tag

categoryImportInput

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| importConfiguration | Import Configuration Input | Configuration for a category import operation. | Required | 59.0 |

## Code Examples

```
{
  "importConfiguration": {
      "importSource":{
         "contentVersionId":"069xx0000004CH6AAM"
      },
      "importSettings":{
         "productCatalogId": "0ZSxx000000004rGAA"
      }
  }
}
```

## Related Topics

- Import Configuration Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_import_configuration_input.htm)
