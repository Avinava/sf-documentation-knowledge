---
title: "Global Product Import Input"
domain: chatterapi
topic: global-product-import-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:11.807Z
estimatedTokens: 220
keywords: [Product, Import, Input, Configuration, asynchronous, job]
---

# Global Product Import Input

> Configuration for an asynchronous global product import
    job.

# Global Product Import Input

Configuration for an asynchronous global product import job.

Root XML tag

<globalProductImportInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| importConfiguration | Import Configuration Input | Configuration for a product import operation. | Required | 57.0 |

#### See Also

-   [Commerce Import Product Job, Create](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_import_product_job_create.htm "Create a job to asynchronously import product data using a .csv file.")

-   [*Salesforce B2B Commerce and D2C Commerce*: Import Commerce Data](https://help.salesforce.com/s/articleView?id=commerce.comm_data_import.htm&type=5&language=en_US "Salesforce B2B Commerce and D2C Commerce: Import Commerce
    Data - HTML (New Window)")

## Code Examples

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

- Import Configuration Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_import_configuration_input.htm)
- Commerce Import Product Job, Create (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_import_product_job_create.htm)
