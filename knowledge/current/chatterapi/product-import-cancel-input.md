---
title: "Product Import Cancel Input"
domain: chatterapi
topic: product-import-cancel-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:12.519Z
estimatedTokens: 211
keywords: [Product, Import, Cancel, Input, asynchronous, job]
---

# Product Import Cancel Input

> Cancel asynchronous product import job input.

# Product Import Cancel Input

Cancel asynchronous product import job input.

Root XML tag

<productImportCancelInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| status | String | The value must be Aborted. | Required | 57.0 |

#### See Also

-   [Commerce Import Product Job, Manage](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_import_product_job_manage.htm "Cancel or get the status of a job to asynchronously import global product data using a .csv file.")

-   [*Salesforce B2B Commerce and D2C Commerce*: Import Commerce Data](https://help.salesforce.com/s/articleView?id=commerce.comm_data_import.htm&type=5&language=en_US "Salesforce B2B Commerce and D2C Commerce: Import Commerce
    Data - HTML (New Window)")

## Code Examples

```
{
  "status":"Aborted"
}
```

## Related Topics

- Commerce Import Product Job, Manage (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_import_product_job_manage.htm)
