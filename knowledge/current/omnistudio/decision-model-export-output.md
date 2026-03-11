---
title: "Decision Model Export Output"
domain: omnistudio
topic: decision-model-export-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.302Z
keywords: [Decision, Model, Export, Output]
---

# Decision Model Export Output

# Decision Model Export Output

Output representation of a completed DMN (Decision Model Notation) export request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Decision Model Export Error[] | List of errors corresponding to a failed export request. | Small, 58.0 | 58.0 |
| message | String | Response message from the completed export request. | Small, 58.0 | 58.0 |
| success | Boolean | Indicates whether the export request was successful (true) or not (false). | Small, 58.0 | 58.0 |