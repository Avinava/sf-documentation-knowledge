---
title: "Commerce Import Product Job, Manage"
domain: chatterapi
topic: commerce-import-product-job-manage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.051Z
estimatedTokens: 374
keywords: [Commerce, Import, Product, Job, Manage, Cancel, status, asynchronously, data, csv, file]
---

# Commerce Import Product Job, Manage

> Cancel or get the status of a job to asynchronously import global
      product data using a .csv file.

# Commerce Import Product Job, Manage

Cancel or get the status of a job to asynchronously import global product data using a .csv file.

Resource

```

```

Available version

57.0

HTTP methods

GET, PATCH

Response body for GET

[Global Product Import](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_global_product_import.htm "Information about a global product import job.")

Request body for PATCH

[Product Import Cancel Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_product_import_cancel_input.htm "Cancel asynchronous product import job input.")

Root XML tag

<productImportCancelInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| status | String | The value must be Aborted. | Required | 57.0 |

Response body for PATCH

[Global Product Import](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_global_product_import.htm "Information about a global product import job.")

#### See Also

-   [Commerce Import Product Job, Create](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_import_product_job_create.htm "Create a job to asynchronously import product data using a .csv file.")

-   [*Salesforce B2B Commerce and D2C Commerce*: Import Commerce Data](https://help.salesforce.com/s/articleView?id=commerce.comm_data_import.htm&type=5&language=en_US "Salesforce B2B Commerce and D2C Commerce: Import Commerce Data - HTML (New Window)")

## Code Examples

```
/commerce/management/import/product/jobs/jobId
```

```
{
  "status":"Aborted"
}
```

## Related Topics

- Global Product Import (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_global_product_import.htm)
- Product Import Cancel Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_product_import_cancel_input.htm)
- Commerce Import Product Job, Create (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_import_product_job_create.htm)
