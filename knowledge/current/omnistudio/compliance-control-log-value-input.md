---
title: "Compliance Control Log Value Input"
domain: omnistudio
topic: compliance-control-log-value-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.082Z
keywords: [Compliance, Control, Log, Value, Input]
---

# Compliance Control Log Value Input

# Compliance Control Log Value Input

Input representation of the compliance control logs.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| businessContext​AndEvidence | Map<String,​ ComplianceLogging​BusinessContext​EvidenceValueInput> | JSON object with name-value pairs that store information on the business context and evidence used in the evaluation.The maximum size for name is 100 characters and maximum size for value is 1024 characters. | Optional | 64.0 |
| businessOperations​ProcessApiName | String | API name of the business operations process. | Optional | 64.0 |
| compliance​Message | String | Reason for a control failure or passed compliance. For example, the interest rate exceeds the maximum rate for veterans.Maximum length is 1024 characters. | Optional | 64.0 |
| controlVersion​ApiName | String | API name of the control version. | Required | 64.0 |
| errorId | String | Error related to an evaluation compliance check. | Optional | 64.0 |
| errorMessage | String | Message for an error that occurs during an evaluation compliance check. | Optional | 64.0 |
| evaluationTime | String | Time when the compliance check is done. If no value is specified, the current time is used. | Optional | 64.0 |
| inContextOf | String | Reference ID (context) for which the control or procedure is used. | Required | 64.0 |
| isCompliant | Boolean | Indicates whether the control has passed the compliance check. | Required | 64.0 |
| status | String | Specifies the status of the evaluation check. | Required | 64.0 |
| transactionKey | String | Transaction key to identify the log message. | Optional | 64.0 |