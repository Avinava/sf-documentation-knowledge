---
title: "Compliance Procedure Evaluation Response"
domain: omnistudio
topic: compliance-procedure-evaluation-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.513Z
estimatedTokens: 138
keywords: [Compliance, Procedure, Evaluation, Output, representation, results]
---

# Compliance Procedure Evaluation Response

> Output representation of compliance procedure evaluation results.

# Compliance Procedure Evaluation Response

Output representation of compliance procedure evaluation results.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| compliance​ProcedureId | String | ID of the compliance procedure. | Big, 64.0 | 64.0 |
| complianceProcedure​VersionId | String | ID of the compliance procedure version. | Big, 64.0 | 64.0 |
| evaluations | Compliance Procedure Evaluation[] | List of compliance evaluations. | Big, 64.0 | 64.0 |

## Code Examples

```
{
  "complianceProcedureId": "1Naxx0000004GxQCAU",
  "complianceProcedureVersionId": "1Nbxx0000004IceCAE",
  "evaluations": [
    {
      "controls": [
        {
          "complianceControlId": "18Qxx0000004Gz2EAE",
          "complianceControlVersionId": "18txx0000004LM0AAM",
          "complianceMessage": "Compliant as the criteria matched.",
          "errorId": null,
          "errorMessage": null,
          "isCompliant": true,
          "status": "Success"
        },
        {
          "complianceControlId": "18Qxx0000004Hn2EAE",
          "complianceControlVersionId": "18txx0000004N9IAAU",
          "complianceMessage": "Account Not Compliant as it is not from USA",
          "errorId": null,
          "errorMessage": null,
          "isCompliant": false,
          "status": "Success"
        }
      ],
      "errorId": null,
      "errorMessage": null,
      "isCompliant": false,
      "status": "Success",
      "transactionId": "66eef71c-c82c-4f3c-acb2-b5ba592bf4d4",
      "transactionKey": "myKey"
    }
  ]
}
```

## Related Topics

- Compliance Procedure Evaluation (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_compliance_procedure_evaluation_output.htm)
