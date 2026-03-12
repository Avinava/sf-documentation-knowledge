---
title: "ConnectApi.ComplianceJobStatusRepresentation"
domain: omnistudio
topic: connectapicompliancejobstatusrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:46.744Z
estimatedTokens: 209
keywords: [Output, representation, job, status]
---

# ConnectApi.ComplianceJobStatusRepresentation

> Output representation for job status response.

# ConnectApi.ComplianceJobStatusRepresentation

Output representation for job status response.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| compliance​ProcedureId | String | ID of the compliance procedure. | 65.0 |
| compliance​Procedure​VersionId | String | ID of the compliance procedure version. | 65.0 |
| failed​EvaluationCount | Integer | Number of evaluations that failed. | 65.0 |
| jobId | String | Job ID that's associated with the async evaluation of the compliance procedure. | 65.0 |
| results | List<ConnectApi.ComplianceProcedureEvaluation> | List of evaluation results for the compliance procedure. | 65.0 |
| successful​EvaluationCount | Integer | Number of evaluations that are successful. | 65.0 |
| total​EvaluationCount | Integer | Total number of evaluations. | 65.0 |

## Related Topics

- ConnectApi.ComplianceProcedureEvaluation (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_compliance_procedure_evaluation_output.htm)
