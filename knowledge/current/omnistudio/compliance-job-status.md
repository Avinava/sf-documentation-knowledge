---
title: "Compliance Job Status"
domain: omnistudio
topic: compliance-job-status
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:49.696Z
estimatedTokens: 238
keywords: [Compliance, Job, Status, Output, representation, details, compliance, job.]
---

# Compliance Job Status

> Output representation for the details of the compliance job.

# Compliance Job Status

Output representation for the details of the compliance job.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| compliance​ProcedureId | String | ID of the compliance procedure. | Big, 65.0 | 65.0 |
| compliance​Procedure​VersionId | String | ID of the compliance procedure version. | Big, 65.0 | 65.0 |
| failed​EvaluationCount | Integer | Number of evaluations that failed. | Big, 65.0 | 65.0 |
| jobId | String | Job ID that's associated with the async evaluation of the compliance procedure. | Big, 65.0 | 65.0 |
| results | Compliance Procedure Evaluation[] | List of evaluation results for the compliance procedure. | Big, 65.0 | 65.0 |
| successful​EvaluationCount | Integer | Number of evaluations that are successful. | Big, 65.0 | 65.0 |
| total​EvaluationCount | Integer | Total number of evaluations. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "jobId": "YYx123456789012345",
  "totalEvaluationsCount": 2,
  "successfulEvaluationsCount": 2,
  "failedEvaluationsCount": 0,
  "complianceProcedureId": "18GXX0001234501",
  "complianceProcedureVersionId": "18HXX0001234501",
  "results": [
    {
      "status": "SUCCESS",
      "transactionId": "ZZ9123456789012345",
      "transactionKey": "uuid-1234-5678-9012-eu",
      "isCompliant": true,
      "controls": [
        {
          "complianceControlId": "18QXX0001234501",
          "complianceControlVersionId": "18tXX0001234501",
          "status": "SUCCESS",
          "isCompliant": true,
          "complianceMessage": "Control A passed"
        }
      ]
    }
  ]
}
```

## Related Topics

- Compliance Procedure Evaluation (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_compliance_procedure_evaluation_output.htm)
