---
title: "Import Configuration Input"
domain: chatterapi
topic: import-configuration-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:11.857Z
estimatedTokens: 273
keywords: [Import, Configuration, Input, product, operation]
---

# Import Configuration Input

> Configuration input for a product import operation.

# Import Configuration Input

Configuration input for a product import operation.

Root XML tag

<importConfiguration>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| importSettings | Import Settings | Settings applicable to all product rows in a product import .csv file. | Required if you specify media-related, entitlement-related, price-related, or category-related column headings in your .csv file. | 54.0 |
| importSource | Import Source | Specifies a product import .csv file for a product import operation. | Required | 54.0 |

#### See Also

-   [Global Product Import Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_global_product_import_input.htm "Configuration for an asynchronous global product import job.")

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

- Import Settings (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_import_settings_input.htm)
- Import Source (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_import_source_input.htm)
- Global Product Import Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_global_product_import_input.htm)
