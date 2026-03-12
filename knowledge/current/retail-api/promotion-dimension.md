---
title: "Promotion Dimension"
domain: retail-api
topic: promotion-dimension
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.301Z
estimatedTokens: 262
keywords: [Promotion, Dimension, configure, integration, export, sales, org, CSV, exports, executed, meta, JSON]
---

# Promotion Dimension

> You must configure the promotion dimension for integration export for each sales org on
  which CSV exports is executed.

# Promotion Dimension

You must configure the promotion dimension for integration export for each sales org on which CSV exports is executed.

The integration export fetches content of the promotion dimension from the Salesforce object—[CGCloud\_\_Promotion\_\_c](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_objects_cgcloud__promotion__c.htm "HTML (New Window)"). After creation of RTR Report Configuration records, provide the following information and a meta JSON:
| Attribute | Description |
| --- | --- |
| Information Internal Name | A unique internal name of the promotion. |
| Configuration Usage | Integration Promotion Dimension |
| Configuration of sales org | The sales organization to which the promotion belongs. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

You must include the accountid attribute in the dimension referencing on the field—CGCloud\_\_Anchor\_Account\_\_c.

## Promotion dimension meta JSON example

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
      "fieldsf":"CGCloud__Date_From__c",
      "name":"datefrom"
   },
   {
      "fieldsf":"CGCloud__PromotionTemplate__c",
      "fieldsf$label":"CGCloud__Promotion_Template__r.CGCloud__Description_Language_1__c",
      "name":"templateName"
   },
   {
      "fieldsf":"CGCloud__Relevant_For_Account_Plan__c",
      "name":"accountplanrelevant"
   },
   {
      "fieldsf":"CGCloud__Anchor_Account__c",
      "name":"accountid"
   },
   {
      "fieldsf":"CGCloud__Anchor_Account__r.CGCloud__ExternalId__c",
      "name":"accountexternalid"
   }
]
```
