---
title: "Simulation Evaluation Service Input"
domain: psc-api
topic: simulation-evaluation-service-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.254Z
estimatedTokens: 243
keywords: [Simulation, Evaluation, Service, Input, representation, run, expression]
---

# Simulation Evaluation Service Input

> Input representation to run simulation on an expression
      set.

# Simulation Evaluation Service Input

Input representation to run simulation on an expression set.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=psc_api)

#### Note

This API has been deprecated as of API version 55.0. In API version 55.0 and later, use the new [Business APIs in Business Rules Engine](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/business_rules_engine_connect_apis.htm).

Root XML tag

SimulationEvalServiceInput

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| config | Simulation Config Input | Configuration details for the simulation. | Required | 53.0 |
| contextInput | Simulation Context Input | Context details for the simulation. | Required | 58.0 |
| input | Simulation Variable Input[] | List of input variables to run the simulation. | Required | 53.0 |

## Code Examples

```
{
   "input":{
      "variables":[
         {
            "name":"artEstimatedValue",
            "value":"301",
            "datatype":"number"
         },
         {
            "name":"quantity",
            "value":"301",
            "datatype":"number"
         }
      ]
   },
   "contextInput":{
      "name":"PensionFunds",
      "value":{
         "PolicyDetails":[
            {
               "PolicyName":"Policy1",
               "TotalMember":"100",
               "PrincipalAmout":"500",
               "Status":"Active",
               "TotalPremium":"0"
            },
            {
               "PolicyName":"Policy2",
               "TotalMember":"200",
               "PrincipalAmout":"100",
               "Status":"Inactive",
               "TotalPremium":"0"
            },
            {
               "PolicyName":"Policy3",
               "TotalMember":"300",
               "PrincipalAmout":"400",
               "Status":"Active",
               "TotalPremium":"0"
            }
         ]
      }
   },
   "config":{
      "versionInfo":{
         "configurationVersionId":"a1o5w000002EJPPAA4",
         "effectiveDate":"2019-02-13 00:00:00"
      }
   }
}
```

## Related Topics

- Simulation Config Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_simulation_config_input.htm)
- Simulation Context Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_simulation_context_input.htm)
- Simulation Variable Input[] (atlas.en-us.psc_api.meta/psc_api/connect_requests_simulation_variable_input.htm)
