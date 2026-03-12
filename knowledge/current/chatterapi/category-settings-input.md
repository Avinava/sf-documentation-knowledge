---
title: "Category Settings Input"
domain: chatterapi
topic: category-settings-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:11.219Z
estimatedTokens: 193
keywords: [Category, Settings, Input, applicable, product, rows, import, csv, file]
---

# Category Settings Input

> Category settings applicable to all product rows in a product import
      .csv file.

# Category Settings Input

Category settings applicable to all product rows in a product import .csv file.

Root XML tag

<categorySettings>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| productCatalogId | String | ID of product catalog to associate with each product row in a product import .csv file. | Required if you specify one or more category-related column headings in your .csv file | 54.0 |

#### See Also

-   [*Salesforce B2B Commerce and D2C Commerce*: Import Commerce Data](https://help.salesforce.com/s/articleView?id=commerce.comm_data_import.htm&type=5&language=en_US "Salesforce B2B Commerce and D2C Commerce: Import Commerce
    Data - HTML (New Window)")

## Code Examples

```
{
   "category":{
      "productCatalogId":"0ZSRM00000004Fk4AI"
   }
}
```
