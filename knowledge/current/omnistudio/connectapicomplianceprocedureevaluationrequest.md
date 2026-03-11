---
title: "ConnectApi.ComplianceProcedureEvaluationRequest"
domain: omnistudio
topic: connectapicomplianceprocedureevaluationrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:07.750Z
keywords: [ConnectApi.ComplianceProcedureEvaluationRequest, See]
---

# ConnectApi.ComplianceProcedureEvaluationRequest

# ConnectApi.ComplianceProcedureEvaluationRequest

Input representation details of a compliance evaluation request.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| business​OperationsProcess | String | API name of the business operations process for the evaluation. | Optional | 65.0 |
| evaluations | List<ConnectApi.ComplianceProcedureEvaluationInfo> | List of business contexts to be evaluated. | Required | 65.0 |

#### See Also

-   [evaluateComplianceProcedureAsync(procedureName, evaluationInputs)](atlas.en-us.industries_reference.meta/industries_reference/apex_ConnectAPI_IndustriesCompliance_evaluateComplianceProcedureAsync.htm "Asynchronously evaluate a compliance procedure with the business context.")