---
title: "Simulation Input Variables Result List"
domain: psc-api
topic: simulation-input-variables-result-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.251Z
estimatedTokens: 249
keywords: [Simulation, Input, Variables, Result, Output, representation]
---

# Simulation Input Variables Result List

> Output representation of the list of input variables of a
      simulation.

# Simulation Input Variables Result List

Output representation of the list of input variables of a simulation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=psc_api)

#### Note

This API has been deprecated as of API version 55.0. In API version 55.0 and later, use the new [Business APIs in Business Rules Engine](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/business_rules_engine_connect_apis.htm).

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | The request response code. | Small, 53.0 | 53.0 |
| inputVariables | Simulation Input Variables Basic[] | The list of input variables of a simulation. | Small, 53.0 | 53.0 |
| isSuccess | Boolean | Indicates whether the request is successful. | Small, 53.0 | 53.0 |
| message | String | The request response message. | Small, 53.0 | 53.0 |

## Code Examples

```
{
   "code": "200",
   "message": "",
   "isSuccess": true
   "inputVariables": [
     {
         "DataType": "Number",
         "Name": "medicalPayment",
         "ApiName": "medicalPayment",
         "DefaultValue": "10",
         "LastSimulatedValue": "10",
         "Precision": "1"
      }, {
         "DataType": "Number",
         "ApiName": "dedWaiverFactor",
         "Name": "dedWaiverFactor",
         "DefaultValue": "10",
         "LastSimulatedValue": "15",
         "Precision": "1"
      }
   ]
}
```

## Related Topics

- Simulation Input Variables Basic (atlas.en-us.psc_api.meta/psc_api/connect_responses_simulation_input_variable_basic.htm)
