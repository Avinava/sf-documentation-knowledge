---
title: "Commerce Import Product Job, Create"
domain: chatterapi
topic: commerce-import-product-job-create
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.047Z
estimatedTokens: 344
keywords: [Commerce, Import, Product, Job, asynchronously, data, csv, file]
---

# Commerce Import Product Job, Create

> Create a job to asynchronously import product data using a .csv
      file.

# Commerce Import Product Job, Create

Create a job to asynchronously import product data using a .csv file.

Resource

```

```

Available version

57.0

HTTP methods

POST

Request body for POST

[Global Product Import Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_global_product_import_input.htm "Configuration for an asynchronous global product import job.")

Root XML tag

<globalProductImportInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| importConfiguration | Import Configuration Input | Configuration for a product import operation. | Required | 57.0 |

Response body for POST

[Global Product Import](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_global_product_import.htm "Information about a global product import job.")

#### See Also

-   [Commerce Import Product Job, Manage](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_import_product_job_manage.htm "Cancel or get the status of a job to asynchronously import global product data using a .csv file.")

-   [*Salesforce B2B Commerce and D2C Commerce*: Import Commerce Data](https://help.salesforce.com/s/articleView?id=commerce.comm_data_import.htm&type=5&language=en_US "Salesforce B2B Commerce and D2C Commerce: Import Commerce Data - HTML (New Window)")

## Code Examples

```
/commerce/management/import/product/jobs
```

```
{
   "importConfiguration":{
      "importSource":{
         "contentVersionId":"069RM0000008F4FYAU"
      },
      "importSettings":{
         "category":{
            "productCatalogId":"0ZSRM00000004Fk4AI"
         },
         "media":{
            "cmsWorkspaceId":"0ZuRM0000000Fcz0AE"
         },
         "price":{
            "pricebookAliasToIdMapping":{
               "original":"01sRM000004aArJYAU",
               "sales":"01sRM000004aArIYAU",
               "wintersales":"01sRM000004aArKYAU"
            }
         },
         "entitlement":{
            "defaultEntitlementPolicyId":"1CeRM00000003o40AA"
         }
      }
   }
}
```

## Related Topics

- Global Product Import Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_global_product_import_input.htm)
- Import Configuration Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_import_configuration_input.htm)
- Global Product Import (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_global_product_import.htm)
- Commerce Import Product Job, Manage (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_import_product_job_manage.htm)
