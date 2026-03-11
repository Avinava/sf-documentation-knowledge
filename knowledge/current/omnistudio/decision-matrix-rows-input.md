---
title: "Decision Matrix Rows Input"
domain: omnistudio
topic: decision-matrix-rows-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.174Z
keywords: [Decision, Matrix, Rows, Input]
---

# Decision Matrix Rows Input

# Decision Matrix Rows Input

Input representation of the information to manage rows in relation to the decision matrix version.

JSON Example

Add a row:

```

```

Delete a row:

```

```

Update a row:

```

```

Add row using a CSV file:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fileId | String | The ID of the Content Document Version that contains the rows details to be added or updated in a decision matrix version. | OptionalNoteThis field is required if you’re using a CVS file to add or update rows. | 53.0 |
| rows | Decision Matrix Row Input[] | List of rows to be added, updated, or deleted in a decision matrix version. | Required | 53.0 |