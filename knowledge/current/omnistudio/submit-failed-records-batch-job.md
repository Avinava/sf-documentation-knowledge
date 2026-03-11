---
title: "Submit Failed Records Batch Job"
domain: omnistudio
topic: submit-failed-records-batch-job
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.501Z
keywords: [Submit, Failed, Records, Batch, Job, Supported, REST, HTTP, Methods, Inputs, Outputs, Usage]
---

# Submit Failed Records Batch Job

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