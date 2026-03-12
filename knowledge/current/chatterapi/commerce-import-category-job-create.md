---
title: "Commerce Import Category Job, Create"
domain: chatterapi
topic: commerce-import-category-job-create
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.040Z
estimatedTokens: 206
keywords: [Commerce, Import, Category, Job, asynchronously, data, csv, file]
---

# Commerce Import Category Job, Create

> Create a job to asynchronously import category data using a .csv
      file.

# Commerce Import Category Job, Create

Create a job to asynchronously import category data using a .csv file.

Resource

```

```

Available version

59.0

HTTP methods

POST

Request body for POST

[Category Import Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_category_import_input.htm "Configuration for an asynchronous category import job.")

Root XML tag

categoryImportInput

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| importConfiguration | Import Configuration Input | Configuration for a category import operation. | Required | 59.0 |

Response body for POST

[Category Import](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_category_import.htm "Information about a category import job.")

## Code Examples

```
/commerce/management/import/category/jobs
```

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

- Category Import Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_category_import_input.htm)
- Import Configuration Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_import_configuration_input.htm)
- Category Import (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_category_import.htm)
