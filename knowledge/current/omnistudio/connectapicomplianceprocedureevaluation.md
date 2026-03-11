---
title: "ConnectApi.ComplianceProcedureEvaluation"
domain: omnistudio
topic: connectapicomplianceprocedureevaluation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:07.811Z
keywords: [ConnectApi.ComplianceProcedureEvaluation]
---

# ConnectApi.ComplianceProcedureEvaluation

# ConnectApi.ComplianceProcedureEvaluation

Represents a Single Compliance Procedure Evaluation result

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| controls | List<ConnectApi.Compliance​ControlEvaluation> | Details of the compliance control evaluation results. | 65.0 |
| errorId | String | ID for the error that occurs when compliance evaluation fails. | 65.0 |
| errorMessage | String | Messages for the error that occurs when compliance evaluation fails. | 65.0 |
| isCompliant | Boolean | Indicates whether the compliance check has passed (true) or not (false). | 65.0 |
| status | String | Processing status of compliance check. Valid values are:ErrorSuccess | 65.0 |
| transactionId | String | Transaction ID that's generated during the API call. | 65.0 |
| transactionKey | String | Transaction key for the evaluation request that's specified during the API call. | 65.0 |