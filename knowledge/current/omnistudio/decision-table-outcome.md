---
title: "Decision Table Outcome"
domain: omnistudio
topic: decision-table-outcome
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.316Z
keywords: [Decision, Table, Outcome]
---

# Decision Table Outcome

# Decision Table Outcome

Output representation of the decision table execution.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | Integer | The error code if transaction fails for any reason. | Small, 55.0 | 55.0 |
| errorMessage | String | The error message if transaction fails for any reason. | Small, 55.0 | 55.0 |
| outcomeList | Decision Table Outcome Item[] | Outcome list that stores two or more outcomes provided by the decision table. | Small, 55.0 | 55.0 |
| outcomeType | String | The outcome type after the request is successful. | Small, 55.0 | 55.0 |
| successStatus | Boolean | Indicates the status of the decision table execution. | Small, 55.0 | 55.0 |