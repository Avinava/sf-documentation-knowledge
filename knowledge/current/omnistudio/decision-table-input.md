---
title: "Decision Table Input"
domain: omnistudio
topic: decision-table-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.200Z
keywords: [Decision, Table, Input]
---

# Decision Table Input

# Decision Table Input

Input representation of a decision table.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| conditions | Decision Table Condition[] | The list of decision table conditions on which the decision table executes and provides outcomes. | Required | 55.0 |
| datasetLinkName | String | The API name of the dataset link provided as an input for the decision table execution. | Optional | 55.0 |