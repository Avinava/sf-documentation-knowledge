---
title: "Expression Set Options Input"
domain: omnistudio
topic: expression-set-options-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.562Z
estimatedTokens: 439
keywords: [Expression, Set, Options, Input, representation, options, executing, expression, set.]
---

# Expression Set Options Input

> Input representation of the options for executing an expression
      set.

# Expression Set Options Input

Input representation of the options for executing an expression set.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionContext​Code | String | The code of the action context used to log explainability for a specific execution of an expression set.NoteTo exclude decision explanations for expression set version steps from action logs, ensure that you exclude the actionContextCode and explainabilitySpecName properties from the payload. | Optional | 55.0 |
| effectiveDate | String | The date from which an expression set comes into effect. The date format is yyyy-mm-dd’T’hh:mm:ss’Z.NoteMultiple versions of an expression set can exist with different date ranges. For example, Version 1 is effective before December 2019, and Version 2 is effective from January 2020 to the present. If you specify effectiveDate as "2019-03-15T00:00:00Z", Version 1 is executed. If you do not specify effectiveDate, the currently active version, Version 2, is executed. | Optional | 55.0 |
| explainability​Spec​Name | String | The name of the explainability specification that is used to log explainability for a specific execution of an expression set.NoteTo exclude decision explanations for expression set version steps from action logs, ensure that you exclude the actionContextCode and explainabilitySpecName properties from the payload. | Optional | 55.0 |
| useDatesOnly | String | Specifies that only the date portion (yyyy-mm-dd) of the value of effectiveDate field is to be used at the time of execution. | Optional | 55.0 |
| versionNumber | String | The version number of the expression set version record. | Optional | 55.0 |

## Code Examples

```
{
  "inputs": [
    {
      "age": "25",
      "state": "CA",
      "PatientId": "001xx000003GYjnAAG"
    }
  ],
  "options": {
    "effectiveDate": "2022-12-03T10:15:30Z",
    "useDatesOnly": "true",
    "actionContextCode": "9QLxx0000004C92GAE",
    "explainabilitySpecName": "ES_One_Explainability"
  }
}
```
