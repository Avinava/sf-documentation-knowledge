---
title: "ConnectApi.ComplianceProcedureEvaluationInfo"
domain: omnistudio
topic: connectapicomplianceprocedureevaluationinfo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.642Z
estimatedTokens: 161
keywords: [ConnectApi.ComplianceProcedureEvaluationInfo, Input, representation, evaluating, compliance, procedure.]
---

# ConnectApi.ComplianceProcedureEvaluationInfo

> Input representation for evaluating a compliance procedure.

# ConnectApi.ComplianceProcedureEvaluationInfo

Input representation for evaluating a compliance procedure.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| businessContext | List<ConnectApi.ComplianceProcedureBusinessContext> | List of parameter names and parameter values that match the validation procedure parameters. | Required | 65.0 |
| inContextOf | String | User provided key to store logs. | Required | 65.0 |
| transactionKey | String | User provided transaction key for logging and tracking procedure evaluations originating from external systems. | Optional | 65.0 |

## Related Topics

- ConnectApi.ComplianceProcedureBusinessContext (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_compliance_procedure_business_context.htm)
