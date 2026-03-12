---
title: "ConnectApi.ComplianceControlEvaluation"
domain: omnistudio
topic: connectapicompliancecontrolevaluation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:47.707Z
estimatedTokens: 237
keywords: [ConnectApi.ComplianceControlEvaluation, Output, representation, details, compliance, control, evaluation.]
---

# ConnectApi.ComplianceControlEvaluation

> Output representation for the details of a compliance control evaluation.

# ConnectApi.ComplianceControlEvaluation

Output representation for the details of a compliance control evaluation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| compliance​ControlId | String | ID of the compliance control. | 65.0 |
| complianceControl​VersionId | String | ID of the compliance control version. | 65.0 |
| compliance​Message | String | Reason a control passes or fails a compliance check. | 65.0 |
| errorId | String | ID of the error that's associated with the compliance control during evaluation. | 65.0 |
| errorMessage | String | Message for the error that's associated with the compliance control during evaluation. | 65.0 |
| isCompliant | Boolean | Indicates whether the control has passed the compliance check (true) or not (false). | 65.0 |
| status | ConnectApi.​ComplianceControl​Evaluation​StatusEnum | Compliance control status. Valid values are:ErrorSkippedSuccess | 65.0 |
