---
title: "Expression Set Custom Element Parameter Input"
domain: psc-api
topic: expression-set-custom-element-parameter-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.070Z
estimatedTokens: 224
keywords: [Expression, Custom, Element, Input, representation]
---

# Expression Set Custom Element Parameter Input

> Input representation of a custom element parameter in an expression
      set.

# Expression Set Custom Element Parameter Input

Input representation of a custom element parameter in an expression set.

Root XML tag

<ExpressionSetCustomElementParameterInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| input | Boolean | Indicates whether the custom element parameter is an input parameter (true) or not (false). | Required | 58.0 |
| name | String | Name of the custom element parameter. | Required | 58.0 |
| output | Boolean | Indicates whether the custom element parameter is an output parameter (true) or not (false). | Required | 58.0 |
| type | String | Type of custom element parameter.Valid values are:FormulaLiteralLookupParameterPicklistThe default value is Parameter. | Optional | 58.0 |
| value | String | Name of the expression set variable. | Required | 58.0 |

## Code Examples

```
"parameters": [
              {
                "input": true,
                "name": "Divisor",
                "output": false,
                "value": "v1",
                "type": "Parameter"
              },
              {
                "input": true,
                "name": "Dividend",
                "output": false,
                "value": "v2",
                "type": "Parameter"
              },
              {
                "input": false,
                "name": "Answer",
                "output": true,
                "value": "v3",
                "type": "Parameter"
              }
            ]
```
