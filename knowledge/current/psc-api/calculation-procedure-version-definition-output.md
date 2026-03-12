---
title: "Calculation Procedure Version Definition Output"
domain: psc-api
topic: calculation-procedure-version-definition-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.721Z
estimatedTokens: 631
keywords: [Calculation, Procedure, Version, Definition, Output, representation, expression]
---

# Calculation Procedure Version Definition Output

> Output representation of the expression set version
    definition.

# Calculation Procedure Version Definition Output

Output representation of the expression set version definition.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=psc_api)

#### Note

This API has been deprecated as of API version 55.0. In API version 55.0 and later, use the new [Business APIs in Business Rules Engine](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/business_rules_engine_connect_apis.htm).

JSON Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| calculationProcedureId | String | The ID of the expression set record. | Small, 53.0 | 53.0 |
| code | String | The request response code. | Small, 53.0 | 53.0 |
| constants | Resource List Output | The constant definition of the expression set version record. | Small, 53.0 | 53.0 |
| description | String | The description of the expression set version record. | Small, 53.0 | 53.0 |
| enabled | Boolean | Indicates whether the expression set version record is active for execution. The default is false. | Small, 53.0 | 53.0 |
| endDate | String | The date and time until when an active expression set version record is in effect. | Small, 53.0 | 53.0 |
| isSuccess | Boolean | Indicates whether the request is successful. | Small, 53.0 | 53.0 |
| message | String | The request response message. | Small, 53.0 | 53.0 |
| name | String | The name of the expression set version record. | Small, 53.0 | 53.0 |
| rank | Integer | The rank of the expression set version record. When multiple records are in effect, the record that’s ranked higher takes precedence. 1 denotes the highest rank. | Small, 53.0 | 53.0 |
| root | Root Step List Output | The first step defined in the expression set version record. If the first step is a branch, then the first steps in the record. | Small, 53.0 | 53.0 |
| startDate | String | The start date and time from when an active expression set version record is in effect. | Small, 53.0 | 53.0 |
| step | Calculation Procedure Step Map Output | The list of steps defined in the expression set version record. | Small, 53.0 | 53.0 |
| variables | Resource List Output | The variable definition of the expression set version record. | Small, 53.0 | 53.0 |
| versionId | String | The ID of the expression set version record. | Small, 53.0 | 53.0 |
| versionNumber | Integer | The number of the expression set version record. | Small, 53.0 | 53.0 |

## Code Examples

```
{
   "calculationProcedureId":"0k0xx00000000HlAAI",
   "code":"200",
   "constants":{
      "details":[
         {
            "apiName":"SENIOR_CITIZEN_AGE",
            "dataType":"Number",
            "defaultValue":"60",
            "isEditable":true,
            "isUserDefined":true,
            "name":"SENIOR_CITIZEN_AGE",
            "precision":2
         }
      ]
   },
   "enabled":false,
   "isSuccess":true,
   "message":"",
   "name":"rule3 V1",
   "rank":1,
   "root":{
      "steps":[
         "0mqxx00000000UfAAI"
      ]
   },
   "startDate":"2021-08-04T08:57:23.000Z",
   "step":{
      "details":{
         "0mqxx00000000UfAAI":{
            "childStepIds":[
            ],
            "conditionsExpressionText":"age == SENIOR_CITIZEN_AGE",
            "conditionsUiFormattedText":"{"bypass":[]}",
            "id":"0mqxx00000000UfAAI",
            "inputVariablesFormatText":"[{"name":"age","dataType":"Number","alias":"age"}]",
            "isResultIncluded":false,
            "name":"Condition",
            "outputVariablesFormatText":"{"name":"condition_output__1","dataType":"Boolean","alias":"condition_output__1"}",
            "outputVariablesMappingText":"{"condition_output__1":"condition_output__1"}",
            "returnMessageValueSet":"{"true":"","false":""}",
            "stage":"Calculation",
            "stepType":"Condition"
         }
      }
   },
   "variables":{
      "details":[
         {
            "apiName":"condition_output__1",
            "dataType":"Boolean",
            "defaultValue":"False",
            "id":"0kJxx00000000KzEAI",
            "isEditable":false,
            "isUserDefined":false,
            "name":"condition_output__1"
         },
         {
            "apiName":"age",
            "dataType":"Number",
            "defaultValue":"60",
            "id":"0kJxx00000000L0EAI",
            "isEditable":true,
            "isUserDefined":true,
            "name":"age",
            "precision":2
         }
      ]
   },
   "versionId":"0k1xx00000000KzAAI",
   "versionNumber":1
}
```

## Related Topics

- Resource List Output (atlas.en-us.psc_api.meta/psc_api/connect_responses_resource_list_output.htm)
- Root Step List Output (atlas.en-us.psc_api.meta/psc_api/connect_responses_root_step_list_output.htm)
- Calculation Procedure Step Map Output (atlas.en-us.psc_api.meta/psc_api/connect_responses_calculation_procedure_step_map_output.htm)
