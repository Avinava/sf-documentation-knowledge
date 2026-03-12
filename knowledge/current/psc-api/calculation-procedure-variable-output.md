---
title: "Calculation Procedure Variable Output"
domain: psc-api
topic: calculation-procedure-variable-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.714Z
estimatedTokens: 189
keywords: [Calculation, Procedure, Variable, Output, variables, expression]
---

# Calculation Procedure Variable Output

> Details of the variables of an expression set.

# Calculation Procedure Variable Output

Details of the variables of an expression set.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=psc_api)

#### Note

This API has been deprecated as of API version 55.0. In API version 55.0 and later, use the new [Business APIs in Business Rules Engine](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/business_rules_engine_connect_apis.htm).

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| dataType | String | The data type of the variable. | Small, 53.0 | 53.0 |
| name | String | The name of the variable. | Small, 53.0 | 53.0 |

## Code Examples

```
{
      "dataType" : "Number",
      "name" : "var2"
}
```
