---
title: "Product Part Dimension"
domain: retail-api
topic: product-part-dimension
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:37.287Z
estimatedTokens: 322
keywords: [Product, Part, Dimension, extract, data, Bill, Materials, BOM, component, level, configure, sales, org, CSV, exports]
---

# Product Part Dimension

> To extract data at the Bill of Materials (BOM) component or product part level,
  configure Product Part Dimension for each sales org on which CSV exports are executed.

# Product Part Dimension

To extract data at the Bill of Materials (BOM) component or product part level, configure Product Part Dimension for each sales org on which CSV exports are executed.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

To save the KPIs related to BOM components in the database, enable the BOM scope in the KPI definition and the BOM Component Writeback option in the storage settings. For more information, see [https://help.salesforce.com/s/articleView?id=ind.tpm\_foundation\_create\_kpi\_definitions.htm&type=5](https://help.salesforce.com/s/articleView?id=ind.tpm_foundation_create_kpi_definitions.htm&type=5&language=en_US).

The integration export fetches content of the product part dimension from the Salesforce object—CGCloud\_\_Child\_Product\_\_c. After creation of RTR Report Configuration records, provide the following information and a meta JSON:
| Report Configuration Attribute | Description |
| --- | --- |
| Information Internal Name | A unique internal name of the product. |
| Configuration Usage | Integration Product Part Dimension |
| Configuration of sales org | The sales organization to which the product belongs. |

## Integration Product Part Dimension meta JSON example

```

```

## Code Examples

```
[
   {
      "fieldsf":"Id",
      "name":"id"
   },
   {
      "name":"quantity",
      "fieldsf":"CGCloud__Quantity__c",
      "fieldsf$label":"CGCloud__Quantity__c"
   },
   {
      "name":"externalid",
      "fieldsf":"CGCloud__ExternalId__c",
      "fieldsf$label":"CGCloud__ExternalId__c"
   },
   {
      "fieldsf":"CGCloud__Child_Product__r.Name",
      "fieldsf$label":"CGCloud__Child_Product__r.Name",
      "name":"componentName"
   }
]
```
