---
title: "Decision Matrix Result List"
domain: omnistudio
topic: decision-matrix-result-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:49.967Z
estimatedTokens: 144
keywords: [Decision, Matrix, Result, List, Output, representation, decision, matrix, result, list.]
---

# Decision Matrix Result List

> Output representation of the decision matrix result
    list.

# Decision Matrix Result List

Output representation of the decision matrix result list.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | The request response code. | Small, 53.0 | 53.0 |
| decisionMatrices | Decision Matrix Basic[] | The list of the decision matrices. | Small, 53.0 | 53.0 |
| isSuccess | Boolean | Indicates whether the request was successful. | Small, 53.0 | 53.0 |
| message | String | The request response message. | Small, 53.0 | 53.0 |

## Code Examples

```
{
   "code" : "200",
   "decisionMatrices" : [ {
      "id" : "0lIx0000000001TEAQ",
      "name" : "Decision_Matrix_Test1"
   }, {
      "id" : "0lIx0000000000pEAA",
      "name" : "Decision_Matrix_Test2”
   }, {
      "id" : "0lIx0000000001OEAQ",
      "name" : "Decision_Matrix_Test3”
   } ],
   "isSuccess" : true,
   "message" : ""
}
```

## Related Topics

- Decision Matrix Basic[] (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_matrix_basic.htm)
