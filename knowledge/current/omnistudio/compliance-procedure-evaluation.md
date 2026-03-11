---
title: "Compliance Procedure Evaluation"
domain: omnistudio
topic: compliance-procedure-evaluation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.145Z
keywords: [Compliance, Procedure, Evaluation]
---

# Compliance Procedure Evaluation

# Compliance Procedure Evaluation

Represents a single compliance procedure evaluation result.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| controls | Compliance Control Evaluation[] | Details of the compliance control evaluation results. | Big, 64.0 | 64.0 |
| errorId | String | ID for the error that occurs when compliance evaluation fails. | Big, 64.0 | 64.0 |
| errorMessage | String | Messages for the error that occurs when compliance evaluation fails. | Big, 64.0 | 64.0 |
| isCompliant | Boolean | Indicates whether the compliance check has passed (true) or not (false). | Big, 64.0 | 64.0 |
| status | String | Specifies the status of the compliance check. Valid values are:ErrorSuccess | Big, 64.0 | 64.0 |
| transactionId | String | Transaction ID that's generated during the API call. | Big, 64.0 | 64.0 |
| transactionKey | String | Transaction key for the evaluation request. | Big, 64.0 | 64.0 |