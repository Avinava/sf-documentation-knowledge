---
title: "OrderBy Input"
domain: omnistudio
topic: orderby-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.535Z
estimatedTokens: 137
keywords: [OrderBy, Input, representation, clause, sort, actionable, members]
---

# OrderBy Input

> Input representation of the
      orderBy
      clause to sort actionable list members.

# OrderBy Input

Input representation of the orderBy clause to sort actionable list members.

JSON Example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldName | String | Name of the field used for sorting actionable list members | Required | 57.0 |
| nulls | String | Specifies where to show the fields with a null value-at the top or bottom of the sorted list | Optional | 57.0 |
| operator | String | Specifies the sorting order:ASCDESC | Required | 57.0 |

## Code Examples

```
{
   "orderBy" : {
       "orderByList" : [
          {
             "fieldName" : "Name",
             "operator" : "ASC",
             "nulls" : "First"
          }
       ]
   }
}
```
