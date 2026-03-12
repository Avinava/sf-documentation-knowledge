---
title: "Simple Variable Types for variables.json"
domain: bi-dev-guide-wave-templates
topic: simple-variable-types-for-variablesjson
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.654Z
estimatedTokens: 261
keywords: [Simple, Variable, variables.json, call, “simple”, because, they’re, standard, predefined, datatypes, Enumerated]
---

# Simple Variable Types for variables.json

> We call the following variable types “simple” because they’re standard, predefined
  datatypes.

# Simple Variable Types for variables.json

We call the following variable types “simple” because they’re standard, predefined datatypes.

| Type Name | Description | Type Declaration |
| --- | --- | --- |
| BooleanType | References true or false values. | "variableType" : { "type": "BooleanType" } |
| StringType | References a string. Can use Array<String> to define restricted valid values for the string. If null or empty, any value is allowed. | "variableType" : { "type": "StringType" } |
| NumberType | References numerical values. | "variableType" : { "type": "NumberType" } |
| NumberType (Range) | References range of numerical values. Use min to specify minimum value and max to specify maximum value. Optional. | "variableType" : { "type": "NumberType", "min":0, "max":100 } |

## Enumerated Values

The StringType and NumberType can both contain lists of values, enums, and an optional array of labels for those values, enumsLabels. The order of values in enumsLabels must match the order of values in enums.

## Example

```

```

## Code Examples

```
"Colors": {
    "label": "Select a color",
    "variableType": {
      "type": "StringType",
      "enums": [ "#ff0000", "#00ff00", "#0000ff" ],
      "enumsLabels": [ "Red", "Green", "Blue" ]
    }
}
```
