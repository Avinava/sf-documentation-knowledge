---
title: "Calculation Procedure Output"
domain: omnistudio
topic: calculation-procedure-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.459Z
estimatedTokens: 215
keywords: [Calculation, Procedure, Output, representation, expression]
---

# Calculation Procedure Output

> Output representation of the expression sets details.

# Calculation Procedure Output

Output representation of the expression sets details.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

This API has been deprecated as of API version 55.0. In API version 55.0 and later, use the new [Business APIs in Business Rules Engine](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/business_rules_engine_connect_apis.htm).

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| description | String | The description of the expression set. | Small, 53.0 | 53.0 |
| id | String | The ID of the expression set record. | Small, 53.0 | 53.0 |
| name | String | The name of the expression set. | Small, 53.0 | 53.0 |

## Code Examples

```
{
   "calculationProcedures" : [ {
      "id" : "0k0x0000000008ZAAQ",
      "description" : "Test calculation set",
      "name" : "Expression_Set_1"
   }
}
```
