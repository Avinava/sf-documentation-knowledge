---
title: "Submit Failed Records Batch Job"
domain: omnistudio
topic: submit-failed-records-batch-job
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.349Z
estimatedTokens: 264
keywords: [Submit, Failed, Records, Batch, Job, Run, resubmit, existing, batch, job, failed, records, processing., action, executes, asynchronously., Supported, REST, HTTP, Inputs]
---

# Submit Failed Records Batch Job

> Run to resubmit an existing batch job with failed records for
   processing. This action executes the batch job asynchronously.

# Submit Failed Records Batch Job

Run to resubmit an existing batch job with failed records for processing. This action executes the batch job asynchronously.

This object is available in API version 52.0 and later.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/submitFailedRecordsBatchJob

Formats

JSON

HTTP Methods

GET, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| failedRecordIds | TypearrayDescriptionThe IDs of failed records in a batch job. |
| parentBatchJobId | TypestringDescriptionRequired. The ID of a batch job with failed records. |

## Outputs

| Output | Details |
| --- | --- |
| batchJobId | TypestringDescriptionThe ID of a batch job generated after the request is successful. This batch job ID is used to track the progress of the batch job in Monitor Workflow Services in the org. |
| status | TypestringDescriptionIndicates whether a batch job succeeded or failed. |

## Usage

**JSON Sample Request**

```

```

**JSON Sample Response**

```

```

## Code Examples

```
{
   "inputs": [{
      "parentBatchJobId": "0mdRM0000004DXrYAM",
      "failedRecordIds": [
         "001RM000005AG0bYAG", "001RM000005AERZYA4", "001RM000005AG0WYAW"
      ]
   }]
}
```

```
[ {
   "actionName" : "submitFailedRecordsBatchJob",
   "errors" : null,
   "isSuccess" : true,
   "outputValues" : {
      "batchJobId" : "0mdRM0000004DZ9YAM"
   }
} ]
```
