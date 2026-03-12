---
title: "Calculation Procedure List Output"
domain: omnistudio
topic: calculation-procedure-list-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.456Z
estimatedTokens: 245
keywords: [Calculation, Procedure, Output, representation, expression, result]
---

# Calculation Procedure List Output

> Output representation of the expression set result
    list.

# Calculation Procedure List Output

Output representation of the expression set result list.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

This API has been deprecated as of API version 55.0. In API version 55.0 and later, use the new [Business APIs in Business Rules Engine](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/business_rules_engine_connect_apis.htm).

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| calculationProcedures | Calculation Procedure Output[] | The list of the expression sets. | Small, 53.0 | 53.0 |
| code | String | The request response code. | Small, 53.0 | 53.0 |
| message | String | The request response message. | Small, 53.0 | 53.0 |
| success | Boolean | Indicates whether the request was successful. | Small, 53.0 | 53.0 |

## Code Examples

```
{
   "calculationProcedures" : [ {
      "id" : "0k0x0000000008ZAAQ",
      "description" : "Test calculation set",
      "name" : "Expression_Set_1"
   },{
      "id" : "0k0x000000000BQAAY",
      "description" : "Test procedure set",
      "name" : "Expression_Set_2"
   } ],
   "code" : "200",
   "isSuccess" : true,
   "message" : ""
}
```

## Related Topics

- Calculation Procedure Output[] (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_calculation_procedure_output.htm)
