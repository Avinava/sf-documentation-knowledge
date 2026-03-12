---
title: "Calculation Procedure Version Definition Input"
domain: omnistudio
topic: calculation-procedure-version-definition-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.107Z
estimatedTokens: 644
keywords: [Calculation, Procedure, Version, Definition, Input, representation, expression, set, version, definition., Note]
---

# Calculation Procedure Version Definition Input

> Input representation of the expression set version
    definition.

# Calculation Procedure Version Definition Input

Input representation of the expression set version definition.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

This API has been deprecated as of API version 55.0. In API version 55.0 and later, use the new [Business APIs in Business Rules Engine](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/business_rules_engine_connect_apis.htm).

JSON example

Specify the version record ID or CLONE in the versionId field to either update an existing expression set version record or save the expression set version record as a new expression set version record.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| calculationProcedureId | String | The ID of the expression-set record that you want to update the definition details for or save as a new version definition record. | Optional | 53.0 |
| constants | Calculation Procedure Resource[] | The constant values passed in the expression set version record. | Optional | 53.0 |
| description | String | The description of the expression set version record. | Optional | 53.0 |
| enabled | Boolean | Indicates whether the expression set version record is active (true) for execution or not (false). The default is false.NoteThis field must be false with the update or save as request. | Optional | 53.0 |
| endDate | String | The date and time until when an active expression set version record is in effect. | Optional | 53.0 |
| name | String | The name of the expression set version record. | Optional | 53.0 |
| rank | Integer | The rank of the expression set version record. When multiple records are in effect, the record that’s ranked higher takes precedence. | Optional | 53.0 |
| root | String[] | The first steps defined in the expression set version record. | Optional | 53.0 |
| startDate | String | The start date and time from when an active expression set version record is in effect. | Optional | 53.0 |
| step | Map<String, Calculation Procedure Step Input> | The list of steps defined in the expression set version record. | Optional | 53.0 |
| variables | Calculation Procedure Resource[] | The variable values passed in the expression set version record. | Optional | 53.0 |
| versionId | String | The ID of the expression set version record. | Required | 53.0 |
| versionNumber | Integer | The version number of the expression set record. | Optional | 53.0 |

## Code Examples

```
{
   "calculationProcedureId":"0k0xx00000000HlAAI",
   "code":"200",
   "constants":{
      "details":[ {
         "apiName":"SENIOR_CITIZEN_AGE",
         "dataType":"Number",
         "defaultValue":"60",
         "isEditable":true,
         "isUserDefined":true,
         "name":"SENIOR_CITIZEN_AGE",
         "precision":2
      }.]
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
            "childStepIds":[],
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
      "details":[ {
         "apiName":"condition_output__1",
         "dataType":"Boolean",
         "defaultValue":"False",
         "id":"0kJxx00000000KzEAI",
         "isEditable":false,
         "isUserDefined":false,
         "name":"condition_output__1"
      }, {
         "apiName":"age",
         "dataType":"Number",
         "defaultValue":"60",
         "id":"0kJxx00000000L0EAI",
         "isEditable":true,
         "isUserDefined":true,
         "name":"age",
         "precision":2
      } ]
   },
   "versionId":"0k1xx00000000KzAAI",
   "versionNumber":1
}
```

## Related Topics

- Calculation Procedure Resource (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_resource_input.htm)
- Calculation Procedure Step
                                 Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_calculation_procedure_step_input.htm)
