---
title: "Decision Table Row List Input"
domain: omnistudio
topic: decision-table-row-list-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.208Z
keywords: [Decision, Table, Row, List, Input]
---

# Decision Table Row List Input

# Decision Table Row List Input

Input representation of the data for a row in the CSV based decision table that has to be added or updated.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| action | String | Action to perform on this row.Valid values are:CreateUpdate | Optional | 62.0 |
| id | String | ID of the decision table tow. | Optional | 62.0 |
| rowdata | Map<String, Object> | Key value pair of the decision table row. | Required | 62.0 |