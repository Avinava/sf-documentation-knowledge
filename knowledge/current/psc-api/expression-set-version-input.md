---
title: "Expression Set Version Input"
domain: psc-api
topic: expression-set-version-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.093Z
estimatedTokens: 331
keywords: [Expression, Version, Input, representation]
---

# Expression Set Version Input

> Input representation of an expression set version.

# Expression Set Version Input

Input representation of an expression set version.

Root XML tag

<ExpressionSetVersionInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | API name of the version. | Required | 58.0 |
| description | String | Description of the version. | Optional | 58.0 |
| enabled | Boolean | Indicates whether the version is active (true) or inactive (false). | Required | 58.0 |
| endDate | String | Effective end date of the version. | Required | 58.0 |
| id | String | ID of expression set version. | Optional | 58.0 |
| name | String | Name of the version. | Required | 58.0 |
| rank | Integer | Rank of the version. | Optional | 58.0 |
| show​Expl​Externally | Boolean | Indicates whether the decision explanation is exposed to community users (true) or not (false). | Required | 58.0 |
| start​Date | String | Effective start date of the version. | Required | 58.0 |
| steps | Expression Set Version Step Input[] | List of steps in an expression set. | Optional | 58.0 |
| variables | Expression Set Version Variable Input[] | List of variables in an expression set. | Optional | 58.0 |
| version​Number | Integer | Version number of the expression set version. | Required | 58.0 |

## Code Examples

```
"versions": [
    {
      "description": null,
      "endDate": "2023-03-29T13:08:36.000+0000",
      "name": "ExpressionSet DM V1",
      "apiName": "ExpressionSet_DM_V1",
      "showExplExternally": false,
      "startDate": "2023-02-16T13:08:36.000+0000",
      "enabled": false,
      "steps": [
        {
          "actionType": null,
          "advancedCondition": null,
          "aggregation": null,
          "assignment": null,
          "conditionExpression": {
            "expression": "productName == 'iPhone' && City == 'Los Angeles",
            "resultParameter": "condition_output__1"
          },
          "customElement": null,
          "lookupTable": null,
          "description": "Condition step for conditions w.r.t product",
          "failedExplainerTemplate": null,
          "name": "Condition1",
          "parentStep": null,
          "passedExplainerTemplate": null,
          "resultIncluded": true,
          "sequenceNumber": 1,
          "shouldExposeExecPathMsgOnly": false,
          "shouldExposeConditionDetails": false,
          "shouldShowExplExternally": false,
          "stepType": "Condition",
          "subExpression": null
        },
        {
          "actionType": "GetOutputsFromDecisionMatrix",
          "advancedCondition": null,
          "aggregation": null,
          "assignment": null,
          "conditionExpression": null,
          "customElement": null,
          "lookupTable": {
            "lookupTableName": "DM_for_test",
            "type": "DecisionMatrix"
          },
          "description": null,
          "failedExplainerTemplate": null,
          "name": "DM_for_test",
          "parentStep": null,
          "passedExplainerTemplate": null,
          "resultIncluded": true,
          "sequenceNumber": 2,
          "shouldExposeExecPathMsgOnly": true,
          "shouldExposeConditionDetails": false,
          "shouldShowExplExternally": false,
          "stepType": "BusinessKnowledgeModel",
          "subExpression": null
        }
      ],
      "variables": [
        {
          "collection": false,
          "dataType": "Text",
          "decimalPlaces": 2,
          "description": null,
          "input": true,
          "lookupName": "DM_for_test",
          "lookupType": "DecisionMatrix",
          "name": "City",
          "objectName": null,
          "output": false,
          "resultStep": null,
          "type": "Variable",
          "value": null
        },
        {
          "collection": false,
          "dataType": "Text",
          "decimalPlaces": null,
          "description": null,
          "input": false,
          "lookupName": "DM_for_test",
          "lookupType": "DecisionMatrix",
          "name": "DM_for_test__State",
          "objectName": null,
          "output": true,
          "resultStep": null,
          "type": "Variable",
          "value": null
        },
        {
          "collection": false,
          "dataType": "Text",
          "decimalPlaces": null,
          "description": "productName",
          "input": true,
          "lookupName": null,
          "lookupType": null,
          "name": "productName",
          "objectName": null,
          "output": false,
          "resultStep": null,
          "type": "Variable",
          "value": null
        },
        {
          "collection": false,
          "dataType": "Boolean",
          "decimalPlaces": null,
          "description": "condition_output__1",
          "input": false,
          "lookupName": null,
          "lookupType": null,
          "name": "condition_output__1",
          "objectName": null,
          "output": true,
          "resultStep": "Condition1",
          "type": "Variable",
          "value": null
        }
      ],
      "versionNumber": 1
    }
  ]
```

## Related Topics

- Expression
                        Set Version Step Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_expression_set_version_step.htm)
- Expression Set Version Variable Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_expression_set_version_variable.htm)
