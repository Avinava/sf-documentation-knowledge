---
title: "Media Settings Input"
domain: chatterapi
topic: media-settings-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:12.104Z
estimatedTokens: 289
keywords: [Media, Settings, Input, applicable, product, rows, import, csv, file]
---

# Media Settings Input

> Media settings applicable to all product rows in a product import
      .csv file.

# Media Settings Input

Media settings applicable to all product rows in a product import .csv file.

Root XML tag

<mediaSettings>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cmsWorkspaceId | String | ID of a CMS workspace to associate with each product row in a product import .csv file. | Required if you specify one or more media-related column headings in your .csv file. If you are using the /commerce/management/import/product/jobs resource, and you specify one or more media-related columns in your .csv file, you must either specify a cmsWorkspaceId or use the default CMS workspace assigned to the store by specifying a webstoreId in the Webstore Settings Input. If you specify both a cmsWorkspaceId and a webstoreId, the cmsWorkspaceId is used for the import. | 54.0 |

#### See Also

-   [*Salesforce B2B Commerce and D2C Commerce*: Import Commerce Data](https://help.salesforce.com/s/articleView?id=commerce.comm_data_import.htm&type=5&language=en_US "Salesforce B2B Commerce and D2C Commerce: Import Commerce
    Data - HTML (New Window)")

## Code Examples

```
{
   "media":{
      "cmsWorkspaceId":"0ZuRM0000000Fcz0AE"
   }
}
```

## Related Topics

- Webstore Settings Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_webstore_settings_input.htm)
