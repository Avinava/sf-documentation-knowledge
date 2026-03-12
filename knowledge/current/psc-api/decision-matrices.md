---
title: "Decision Matrices"
domain: psc-api
topic: decision-matrices
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:30.388Z
estimatedTokens: 191
keywords: [Decision, Matrices, known, calculation, matrix, search, text, API, maximum, ten, records, contain, keyword]
---

# Decision Matrices

> Get a list of decision matrices ( also known as calculation matrix)
      based on a search text. The API returns a maximum of ten decision matrices records that
      contain the specified keyword.

# Decision Matrices

Get a list of decision matrices ( also known as calculation matrix) based on a search text. The API returns a maximum of ten decision matrices records that contain the specified keyword.

Resource

```

```

Example URI

```

```

Available version

53.0

Requires Chatter

No

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| searchKey | String | The user-entered search text to retrieve a list of decision matrices. |  | 53.0 |

Response body for GET

[Decision Matrix Result List](atlas.en-us.psc_api.meta/psc_api/connect_responses_decision_matrix_result_list.htm "Output representation of the decision matrix result list.")

## Code Examples

```
/connect/omnistudio/decision-matrices
```

```
/services/data/v53.0/connect/omnistudio/decision-matrices?searchKey=Test
```

## Related Topics

- Decision Matrix Result List (atlas.en-us.psc_api.meta/psc_api/connect_responses_decision_matrix_result_list.htm)
