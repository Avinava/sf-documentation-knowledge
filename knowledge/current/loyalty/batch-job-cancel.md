---
title: "Batch Job Cancel"
domain: loyalty
topic: batch-job-cancel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.020Z
estimatedTokens: 250
keywords: [Batch, Job, Cancel, data, processing, engine, calc, management, status, Submitted, Progress, canceled]
---

# Batch Job Cancel

> Cancel a batch job of type data processing engine (calc job) and batch
      management. A batch job with only the status Submitted or In Progress can be
    canceled.

# Batch Job Cancel

Cancel a batch job of type data processing engine (calc job) and batch management. A batch job with only the status Submitted or In Progress can be canceled.

Special Access Rules

To use this resource, the following permissions are required:

-   Your org must have the Batch Management and Data Processing Engine licenses
-   Users in your org require System Administration profile

Resource

```

```

Resource example

```

```

Available version

52.0

Requires Chatter

No

HTTP methods

POST

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

POST doesn’t take request parameters or a request body.

Response body for POST

Returns HTTP 201 on success.

See [Batch Job Cancel Output](atlas.en-us.loyalty.meta/loyalty/connect_responses_batch_job_cancel.htm "Output representation of the batch job cancel request.") for HTTP code descriptions that are unique to this resource in case of failure of the batch job cancel request.

## Code Examples

```
/connect/batch-job/batchJobId/cancel-job
```

```
/connect/batch-job/0mdxx00000000fxAAA/cancel-job
```

## Related Topics

- Batch Job Cancel Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_batch_job_cancel.htm)
