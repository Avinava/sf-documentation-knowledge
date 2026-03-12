---
title: "Array Variable Type for variables.json"
domain: bi-dev-guide-wave-templates
topic: array-variable-type-for-variablesjson
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.434Z
estimatedTokens: 79
keywords: [Array, Variable, variables.json, ArrayType, wizard, question, accepts, multiple, selections, user, choices, Define, minimum, maximum, number]
---

# Array Variable Type for variables.json

> Use an ArrayType variable to create a wizard
  question that accepts multiple selections. The user can make multiple choices from a list of
  values. Define a minimum and maximum for the number of items that can be selected.

# Array Variable Type for variables.json

Use an ArrayType variable to create a wizard question that accepts multiple selections. The user can make multiple choices from a list of values. Define a minimum and maximum for the number of items that can be selected.

```

```

Example for ArrayType with enum:

```

```

## Code Examples

```
"variableType" : {  
  "type" : "ArrayType", 
  "itemsType" : { 
    "type" : "NumberType" 
  }
  "sizeLimit"  :{
    "min" : 1, 
    "max" : 100
  }
 }
```

```
"variableType" : {
  "type" : "ArrayType",
  "itemsType" : {
    "type" : "StringType",
    "enums" : [
      "Leads",
      "Campaigns",
      "Campaign Members"
     ]
  },
  "sizeLimit" : {
    "max" : 3
  }
}
```
