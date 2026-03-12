---
title: "Expression Set (POST)"
domain: omnistudio
topic: expression-set-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:48.872Z
estimatedTokens: 374
keywords: [Expression, Set, POST, Creates, expression, set, Business, Rules, Engine., performs, series, calculations, lookup, tables, user-defined, variables, constants.]
---

# Expression Set (POST)

> Creates an expression set in Business Rules Engine. An expression
      set performs a series of calculations by using lookup tables and user-defined variables and
      constants.

# Expression Set (POST)

Creates an expression set in Business Rules Engine. An expression set performs a series of calculations by using lookup tables and user-defined variables and constants.

Resource

```

```

Resource Example

```

```

Available version

58.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

Root XML tag

<ExpressionSetInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | Unique name of the expression set. | Required | 58.0 |
| context​Definitions | Context Definition Input | List of context definitions in an expression set. | Optional | 58.0 |
| description | String | Description of the expression set. | Optional | 58.0 |
| name | String | Name of the expression set. | Required | 58.0 |
| usage​Type | String | Usage type of the expression set.Valid value is Bre. The default value is Bre.When Business Rules Engine is enabled for a Salesforce org, the default value is Bre. Other usage types may be available to you depending on your industry solution and permission sets. | Required | 58.0 |
| versions | Expression Set Version Input[] | List of the expression set versions. | Optional | 58.0 |

Response body for POST

[Expression Set Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_expression_set_output.htm "Output representation of the expression set create, update and delete request.")

## Code Examples

```
/connect/business-rules/expression-set
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect
/business-rules/expression-set
```

```
{
  "name": "CTX Mapping ES",
  "apiName": "CTX_Mapping_ES_1",
  "description": "...",
  "usageType": "Bre",
  "contextDefinitions": [
    {
      "id": "11Oxx0000006PcLEAU"
    }
  ],
  "versions": [
    {
      "name": "CTX_Mapping_ES_1 V1",
      "apiName": "CTX_Mapping_ES_1_V1",
      "description": "Sample CTX Mapping",
      "startDate": "2022-11-14T20:31:47.000+0000",
      "endDate": "2022-11-14T20:31:47.000+0000",
      "versionNumber": 1,
      "rank": 1,
      "enabled": true,
      "showExplExternally": false,
      "steps": [
        {
          "name": "Condition1",
          "description": "Condition step for conditions w.r.t product",
          "sequenceNumber": 1,
          "resultIncluded": true,
          "stepType": "Condition",
          "conditionExpression": {
            "expression": "productName == 'iPhone' && productColor == 'Red'",
            "resultParameter": "condition_output__1"
          }
        }
      ],
      "variables": [
        {
          "name": "productName",
          "collection": false,
          "dataType": "Text",
          "description": "productName",
          "input": true,
          "output": false,
          "type": "Variable"
        },
        {
          "name": "productColor",
          "collection": false,
          "dataType": "Text",
          "description": "productColor",
          "input": true,
          "output": false,
          "type": "Variable"
        },
        {
          "name": "condition_output__1",
          "dataType": "Boolean",
          "description": "condition_output__1",
          "input": false,
          "output": true,
          "resultStep": "Condition1",
          "type": "Variable"
        }
      ]
    }
  ]
}
```

## Related Topics

- Context Definition Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_context_definition_input.htm)
- Expression Set Version Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_expression_set_version.htm)
- Expression Set Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_expression_set_output.htm)
