---
title: "ConnectApi.ComplianceProcedureEvaluationRequest"
domain: omnistudio
topic: connectapicomplianceprocedureevaluationrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:46.681Z
estimatedTokens: 195
keywords: [Input, representation, compliance, evaluation]
---

# ConnectApi.ComplianceProcedureEvaluationRequest

> Input representation details of a compliance evaluation request.

# ConnectApi.ComplianceProcedureEvaluationRequest

Input representation details of a compliance evaluation request.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| business​OperationsProcess | String | API name of the business operations process for the evaluation. | Optional | 65.0 |
| evaluations | List<ConnectApi.ComplianceProcedureEvaluationInfo> | List of business contexts to be evaluated. | Required | 65.0 |

#### See Also

-   [evaluateComplianceProcedureAsync(procedureName, evaluationInputs)](atlas.en-us.industries_reference.meta/industries_reference/apex_ConnectAPI_IndustriesCompliance_evaluateComplianceProcedureAsync.htm "Asynchronously evaluate a compliance procedure with the business context.")

## Related Topics

- ConnectApi.ComplianceProcedureEvaluationInfo (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_compliance_procedure_evaluation_info.htm)
- evaluateComplianceProcedureAsync(procedureName, evaluationInputs) (atlas.en-us.industries_reference.meta/industries_reference/apex_ConnectAPI_IndustriesCompliance_evaluateComplianceProcedureAsync.htm)
