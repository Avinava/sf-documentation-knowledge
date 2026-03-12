---
title: "Commerce Import Category Job, Manage"
domain: chatterapi
topic: commerce-import-category-job-manage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.044Z
estimatedTokens: 243
keywords: [Commerce, Import, Category, Job, Manage, Cancel, status, asynchronously, data, csv, file]
---

# Commerce Import Category Job, Manage

> Cancel or get the status of a job to asynchronously import category
      data using a .csv file.

# Commerce Import Category Job, Manage

Cancel or get the status of a job to asynchronously import category data using a .csv file.

Resource

```

```

Available version

59.0

HTTP methods

GET, PATCH

Response body for GET

[Category Import](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_category_import.htm "Information about a category import job.")

Request body for PATCH

[Category Import Abort Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_category_import_abort_input.htm "Cancel asynchronous category import job input.")

Root XML tag

categoryImportAbortInput

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| status | String | The value must be Aborted. | Required | 59.0 |

Response body for PATCH

[Category Import](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_category_import.htm "Information about a category import job.")

## Code Examples

```
/commerce/management/import/category/jobs/${jobId}
```

```
{
  "status":"Aborted"
}
```

## Related Topics

- Category Import (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_category_import.htm)
- Category Import Abort Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_category_import_abort_input.htm)
