---
title: "Expression Set DES Token Mapping Input"
domain: psc-api
topic: expression-set-des-token-mapping-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.076Z
estimatedTokens: 146
keywords: [Expression, DES, Token, Mapping, Input, representation, version, step]
---

# Expression Set DES Token Mapping Input

> Input representation of the DES token mapping in an expression set
      version step.

# Expression Set DES Token Mapping Input

Input representation of the DES token mapping in an expression set version step.

Root XML tag

<ExpressionSetDesTokenMappingInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| resource​Reference | String | Name of the expression set resource that’s mapped to a token, such as Variable, Constant, or FiledAlias. | Required | 59.0 |
| expressionSet​MessageToken | String | Name of the explainability message template token. | Required | 59.0 |

## Code Examples

```
"passedMessageTokenMappings": [
{
"expressionSetMessageToken": "price",
"resourceReference": "DM1__Price"
}
],
"failedMessageTokenMappings": [
{
"expressionSetMessageToken": "model",
"resourceReference": "Model"
}
],

"noResultMessageTokenMappings": [
{
"expressionSetMessageToken": "year",
"resourceReference": "Year"
}
]
```
