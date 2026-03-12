---
title: "Retrieve Compliance Async Evaluation Job Detail Action"
domain: omnistudio
topic: retrieve-compliance-async-evaluation-job-detail-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.387Z
estimatedTokens: 348
keywords: [Retrieve, Compliance, Async, Evaluation, Job, Detail, Action, asynchronous, Special, Access, Rules, REST, HTTP, Inputs, Outputs]
---

# Retrieve Compliance Async Evaluation Job Detail Action

> Get job details for an asynchronous compliance evaluation.

# Retrieve Compliance Async Evaluation Job Detail Action

Get job details for an asynchronous compliance evaluation.

This action is available in API version 65.0 and later.

## Special Access Rules

To use this action, you must have the Compliance User permission set.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/retrieveCmplAsyncEvalJobDtl

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| compliance​AsyncEvaluation​JobId | TypestringDescriptionRequired. ID of the asynchronous compliance evaluation job. |
| offsetSize | TypeintegerDescriptionNumber of records after which you want to search records. |
| pageSize | TypeintegerDescriptionNumber of records to display on a single page. |

## Outputs

| Output | Details |
| --- | --- |
| retrieveCmpl​JobDetail​ActionResponse | TypeApex-definedDescriptionAn Apex ConnectApi.ComplianceJobStatusRepresentation record that contains the details and results of the compliance asynchronous evaluation job. |

## Example

POST

This example shows a sample request for the Retrieve Compliance Async Evaluation Job Detail action.

```

```

This is a sample request to call this invocable action from Apex code.

```

```

This example shows a sample response for the Retrieve Compliance Async Evaluation Job Detail action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "complianceAsyncEvaluationJobId": "1VUSG000000N4J3",
      "pageSize":10,
      "offsetSize":0
    }
  ]
}
```

```apex
public class JobStatus {
  public void getJobStatus() {
    String jobId = '<JOB ID>';
    Integer pageSize = 10;
    Integer offset = 0;

    // Call API
    ConnectApi.ComplianceJobStatusRepresentation response = 
      ConnectApi.IndustriesCompliance.getComplianceJobResults(jobId, pageSize,
      offset);
    System.debug('Response**********' + response);
  }
}

// Execute the method
JobStatus jobStatus = new JobStatus();
jobStatus.getJobStatus();
```

```
{
  "actionName": "retrieveCmplAsyncEvalJobDtl",
  "errors": null,
  "invocationId": null,
  "isSuccess": true,
  "outcome": null,
  "outputValues": {
    "retrieveCmplJobDetailActionResponse": {
      "complianceProcedureId": "1Naxx0000004C92CAE",
      "complianceProcedureVersionId": "1Nbxx0000004C92CAE",
      "failedEvaluationsCount": 0,
      "jobId": "1VUxx0000004C92",
      "results": [
        {
          "controls": [
            {
              "complianceControlId": "18Qxx0000004C92EAE",
              "complianceControlVersionId": "18txx0000004C92AAE",
              "complianceMessage": "Compliant!",
              "errorId": null,
              "errorMessage": null,
              "isCompliant": true,
              "status": "Success"
            }
          ],
          "errorId": null,
          "errorMessage": null,
          "isCompliant": true,
          "status": "Success",
          "transactionId": "c6357adf-9798-4549-9d7f-80c12adfad89",
          "transactionKey": "myKey1"
        },
        {
          "controls": [
            {
              "complianceControlId": "18Qxx0000004C92EAE",
              "complianceControlVersionId": "18txx0000004C92AAE",
              "complianceMessage": "Not Compliant!",
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
          "transactionId": "c6357adf-9798-4549-9d7f-80c12adfad89",
          "transactionKey": "myKey2"
        }
      ],
      "successfulEvaluationsCount": 2,
      "totalEvaluationsCount": 2
    }
  },
  "sortOrder": -1,
  "version": 1
}
```
