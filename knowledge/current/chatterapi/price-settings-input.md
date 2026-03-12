---
title: "Price Settings Input"
domain: chatterapi
topic: price-settings-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:12.502Z
estimatedTokens: 343
keywords: [Price, Settings, Input, applicable, product, rows, import, csv, file]
---

# Price Settings Input

> Price settings are applicable to all product rows in a product
      import .csv file.

# Price Settings Input

Price settings are applicable to all product rows in a product import .csv file.

Root XML tag

<priceSettings>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| pricebookAliasToIdMapping | Map<String, ID> | Map of price book aliases and corresponding price book IDs. The aliases defined in the map are associated with each product row in a product import .csv file. The .csv file’s column headings can associate prices to price book aliases. By using alias names in the column headings instead of price book IDs, you improve the readability of the .csv files. By convention, the “original” alias refers to your store’s default strikethrough price book. And the “sales” alias refers to your store’s default price book. For global imports, you can specify other alias names of your choosing for other price books. For store imports, the only aliases allowed are “sales” and “original.” | Required if you specify one or more price-related column headings in your .csv file | 54.0 |

#### See Also

-   [*Salesforce B2B Commerce and D2C Commerce*: Import commerce Data](https://help.salesforce.com/s/articleView?id=commerce.comm_data_import.htm&type=5&language=en_US "Salesforce B2B Commerce and D2C Commerce: Import commerce
    Data - HTML (New Window)")

## Code Examples

```
{
   "price":{
      "pricebookAliasToIdMapping":{
         "original":"01sRM000004aArJYAU",
         "sales":"01sRM000004aArIYAU",
         "holidayspecials":"01sRM000004aArKYAU"
      }
   }
}
```
