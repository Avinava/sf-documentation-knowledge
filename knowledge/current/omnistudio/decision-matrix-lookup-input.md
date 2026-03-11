---
title: "Decision Matrix Lookup Input"
domain: omnistudio
topic: decision-matrix-lookup-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.167Z
keywords: [Decision, Matrix, Lookup, Input]
---

# Decision Matrix Lookup Input

# Decision Matrix Lookup Input

Input representation of the input for a decision matrix lookup.

JSON example

```

```

Here, Premium and Tenure are column headers in the matrix, and 2400 and 10 are values of a cell in the column.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| inputs | Decision Matrix Input | List of inputs passed to a decision matrix. An input may contain multiple variables. | Required | 55.0 |
| options | Decision Matrix Options Input | The lookup options for a decision matrix. | Optional | 55.0 |