---
title: "Decision Matrix Lookup (POST)"
domain: omnistudio
topic: decision-matrix-lookup-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.589Z
keywords: [Decision, Matrix, Lookup, POST]
---

# Decision Matrix Lookup (POST)

# Decision Matrix Lookup (POST)

Performs a lookup on decision matrix rows based on the input values provided, and returns the row’s output.

Resource

```

```

Resource Example

```

```

Available version

55.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

JSON example

```

```

Here, Premium and Tenure are column headers in the matrix, and 2400 and 10 are values of a cell in the column.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| inputs | Decision Matrix Input | List of inputs passed to a decision matrix. An input may contain multiple variables. | Required | 55.0 |
| options | Decision Matrix Options Input | The lookup options for a decision matrix. | Optional | 55.0 |

Response body for POST

[Decision Matrix Lookup Result](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_bre_decision_matrix_lookup_result.htm "Output representation of the individual output of a decision matrix version lookup.")