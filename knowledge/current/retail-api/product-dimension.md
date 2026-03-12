---
title: "Product Dimension"
domain: retail-api
topic: product-dimension
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.292Z
estimatedTokens: 200
keywords: [Product, Dimension, configure, integration, export, sales, org, CSV, exports, executed, meta, JSON]
---

# Product Dimension

> You must configure product dimension for integration export for each sales org on which
  CSV exports is executed.

# Product Dimension

You must configure product dimension for integration export for each sales org on which CSV exports is executed.

The integration export fetches content of the product dimension from the Salesforce object—[Product2](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_objects_product2_custom_objects.htm "HTML (New Window)"). After creation of RTR Report Configuration" records, provide the following information and a meta JSON:
| Attribute | Description |
| --- | --- |
| Information Internal Name | A unique internal name of the product. |
| Configuration Usage | Integration Product Dimension |
| Configuration of sales org | The sales organization to which the product belongs. |

## Product dimension meta JSON example

```

```

## Code Examples

```
[
   {
      "fieldsf$label":"CGCloud__Description_1__c",
      "fieldsf":"CGCloud__Description_1__c",
      "name":"description"
   },
   {
      "fieldsf$label":"CGCloud__Consumer_Goods_External_Product_Id__c",
      "fieldsf":"CGCloud__Consumer_Goods_External_Product_Id__c",
      "name":"externalid"
   },
   {
      "fieldsf$label":"CGCloud__Product_Short_Code__c",
      "fieldsf":"CGCloud__Consumer_Goods_Product_Code__c",
      "name":"productcode"
   },
   {
      "fieldsf$label":"CGCloud__Criterion_1_Product_Description__c",
      "fieldsf":"CGCloud__Criterion_1_Product_Description__c",
      "name":"category"
   }
]
```
