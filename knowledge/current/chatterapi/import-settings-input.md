---
title: "Import Settings Input"
domain: chatterapi
topic: import-settings-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:11.864Z
estimatedTokens: 567
keywords: [Import, Settings, Input, applicable, product, rows, csv, file]
---

# Import Settings Input

> Import settings applicable to all product rows in a product import
      .csv file.

# Import Settings Input

Import settings applicable to all product rows in a product import .csv file.

Root XML tag

<importSettings>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| category | Category Settings Input | Category settings for a product import operation. | Required for a global import if you specify one or more category-related column headings in your .csv file. For store imports, if you don’t specify a category, import uses the default catalog for the store. | 54.0 |
| entitlement | Entitlement Settings Input | Entitlement settings for a product import operation. | Required for a global import if you specify one or more entitlement-related column headings in your .csv file. For store imports, if you don’t specify an entitlement, import uses the default entitlement for the store. | 54.0 |
| media | Media Settings Input | Media settings for a product import operation. | Required for a global import if you specify one or more media-related column headings in your .csv file. For store imports, if you don’t specify a CMS workspace, import uses the default CMS workspace for the store. | 54.0 |
| price | Price Settings Input | Price settings for a product import operation. | Required for a global import if you specify one or more price-related column headings in your .csv file. For store imports, if you don’t specify a price, import uses the default price books for the store. | 54.0 |
| webstore | Webstore Settings Input | Webstore to associate with an asynchronous product import job. If no webstore is specified, the imported products are made globally available. If webstore is included, the import is for the specified store. | Optional; used only for asynchronous import jobs | 57.0 |

#### See Also

-   [Import Configuration Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_import_configuration_input.htm "Configuration input for a product import operation.")

-   [*Salesforce B2B Commerce and D2C Commerce*: Import Commerce Data](https://help.salesforce.com/s/articleView?id=commerce.comm_data_import.htm&type=5&language=en_US "Salesforce B2B Commerce and D2C Commerce: Import Commerce
    Data - HTML (New Window)")

## Code Examples

```
{
   "importSettings":{
      "webstore":{
         "webstoreId":"storeId"
      }
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
```

## Related Topics

- Category Settings Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_category_settings_input.htm)
- Entitlement Settings Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_entitlement_settings_input.htm)
- Media Settings Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_media_settings_input.htm)
- Price Settings Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_price_settings_input.htm)
- Webstore Settings Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_webstore_settings_input.htm)
- Import Configuration Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_import_configuration_input.htm)
