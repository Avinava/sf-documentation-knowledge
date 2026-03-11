---
title: "ConnectApi.ComplianceProcedureEvaluationInfo"
domain: omnistudio
topic: connectapicomplianceprocedureevaluationinfo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.747Z
keywords: [ConnectApi.ComplianceProcedureEvaluationInfo]
---

# ConnectApi.ComplianceProcedureEvaluationInfo

# ConnectApi.ComplianceProcedureEvaluationInfo

Input representation for evaluating a compliance procedure.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| businessContext | List<ConnectApi.ComplianceProcedureBusinessContext> | List of parameter names and parameter values that match the validation procedure parameters. | Required | 65.0 |
| inContextOf | String | User provided key to store logs. | Required | 65.0 |
| transactionKey | String | User provided transaction key for logging and tracking procedure evaluations originating from external systems. | Optional | 65.0 |