---
title: "Expression Set Custom Element Step Input"
domain: psc-api
topic: expression-set-custom-element-step-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:30.073Z
estimatedTokens: 108
keywords: [Expression, Custom, Element, Step, Input, representation]
---

# Expression Set Custom Element Step Input

> Input representation of a custom element step in an expression
      set.

# Expression Set Custom Element Step Input

Input representation of a custom element step in an expression set.

Root XML tag

<ExpressionSetCustomElementStepInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| parameters | Expression Set Custom Element Parameter Input[] | List of parameters in a custom element. | Required | 58.0 |

## Code Examples

```
"customElement": {
            "parameters": [
              {
                "input": true,
                "name": "Divisor",
                "output": false,
                "value": "v1"
              },
              {
                "input": true,
                "name": "Dividend",
                "output": false,
                "value": "v2"
              },
              {
                "input": false,
                "name": "Answer",
                "output": true,
                "value": "v3"
              }
            ]
          },
```

## Related Topics

- Expression Set Custom Element Parameter Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_expression_set_custom_element_parameter.htm)
