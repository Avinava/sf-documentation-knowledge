---
title: "Tactic Dimension"
domain: retail-api
topic: tactic-dimension
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.315Z
estimatedTokens: 201
keywords: [Tactic, Dimension, configure, integration, exports, sales, org, CSV, executed, meta, JSON]
---

# Tactic Dimension

> You must configure the tactic dimension for integration exports for each sales org on
  which CSV exports is executed.

# Tactic Dimension

You must configure the tactic dimension for integration exports for each sales org on which CSV exports is executed.

The integration export fetches content of the tactic dimension from the Salesforce object—[CGCloud\_\_Tactic\_\_c](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_objects_cgcloud__tactic__c.htm "HTML (New Window)"). After creation of RTR Report Configuration" records, provide the following information and a meta JSON:
| Attribute | Description |
| --- | --- |
| Information Internal Name | A unique internal name of the tactic. |
| Configuration Usage | Integration Tactic Dimension |
| Configuration of sales org | The sales organization to which the tactic belongs. |

## Tactic dimension meta JSON example

```

```

## Code Examples

```
[
   {
      "name":"name",
      "fieldsf":"Name",
      "fieldsf$label":"Name"
   },
   {
      "name":"compensationmodel",
      "fieldsf":"CGCloud__Compensation_Model__c",
      "fieldsf$label":"CGCloud__Compensation_Model__c"
   },
   {
      "name":"amount",
      "fieldsf":"CGCloud__Amount__c",
      "fieldsf$label":"CGCloud__Amount__c"
   },
   {
      "name":"lifttype",
      "fieldsf":"CGCloud__Lift_Type__c",
      "fieldsf$label":"CGCloud__Lift_Type__c"
   },
   {
      "name":"liftvalue",
      "fieldsf":"CGCloud__Lift_Value__c",
      "fieldsf$label":"CGCloud__Lift_Value__c"
   }
]
```
