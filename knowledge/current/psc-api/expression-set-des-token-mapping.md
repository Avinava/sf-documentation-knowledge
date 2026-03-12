---
title: "Expression Set DES Token Mapping"
domain: psc-api
topic: expression-set-des-token-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.984Z
estimatedTokens: 135
keywords: [Expression, DES, Token, Mapping, Output, representation, version, step]
---

# Expression Set DES Token Mapping

> Output representation of the DES token mapping in an expression set
      version step.

# Expression Set DES Token Mapping

Output representation of the DES token mapping in an expression set version step.

JSON example

```

```

Properties

| Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| resource​Reference | String | Name of the expression set resource that’s mapped to a token, such as Variable, Constant, or FiledAlias. | Small, 59.0 | 59.0 |
| expressionSet​MessageToken | String | Name of the explainability message template token. | Small, 59.0 | 59.0 |

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

"noResultTokenMappings": [
{
"expressionSetMessageToken": "year",
"resourceReference": "Year"
}
]
```
