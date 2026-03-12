---
title: "Resource Input"
domain: omnistudio
topic: resource-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.721Z
estimatedTokens: 491
keywords: [Resource, Input, representation, expression, variable, constant]
---

# Resource Input

> Input representation of the expression set resource (variable or
      constant).

# Resource Input

Input representation of the expression set resource (variable or constant).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

This API has been deprecated as of API version 55.0. In API version 55.0 and later, use the new [Business APIs in Business Rules Engine](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/business_rules_engine_connect_apis.htm).

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | The API name of the variable or constant. | Required | 53.0 |
| calculationMatrixName | String | The name of the decision matrix used in the variable or constant. | Optional | 53.0 |
| dataType | String | The date type of the variable or constant.Possible values are:BooleanCurrencyDateNumberPercentText | Required | 53.0 |
| defaultValue | String | The default value of the variable or constant. | Optional | 53.0 |
| displayName | String | The display name of the variable or constant that appears in the user interface. | Optional | 53.0 |
| id | String | The ID of the variable or constant. | RequiredNoteThis field is required for the update request. | 53.0 |
| isEditable | Boolean | Indicates whether the variable or constant is editable.NoteThis field is for user-interface use only. | Optional | 53.0 |
| isUserDefined | Boolean | Indicates whether the variable or constant is user-defined. | Optional | 53.0 |
| name | String | The name of the variable or constant. | Required | 53.0 |
| precision | Integer | The floating-point precision of the variable or constant. | RequiredNoteThis field is required when the data type is number, currency, or percentage. | 53.0 |
| uiDisplayOrder | Integer | The display order of the variable or constant in the UI.NoteReserved for future use. | Optional | 53.0 |

## Code Examples

```
{
   "variables":{
      "details":[ {
         "apiName":"condition_output__1",
         "dataType":"Boolean",
         "defaultValue":"False",
         "id":"0kJxx00000000KzEAI",
         "isEditable":false,
         "isUserDefined":false,
         "name":"condition_output__1"
      } ]
   }
}
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
}
```
