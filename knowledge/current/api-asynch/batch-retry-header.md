---
title: "Batch Retry Header"
domain: api-asynch
topic: batch-retry-header
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.031Z
estimatedTokens: 176
keywords: [Batch, Retry, Sforce-Disable-Batch-Retry, disable, retries, unfinished, batches]
---

# Batch Retry Header

> Use Sforce-Disable-Batch-Retry to disable retries
  on unfinished batches.

# Batch Retry Header

Use Sforce-Disable-Batch-Retry to disable retries on unfinished batches.

When you create a bulk job, the Batch Retry request header lets you disable retries for unfinished batches included in the job. Use this header to limit the batch processing time for batches that consistently time out.

## Header Field Name and Values

Field name

Sforce-Disable-Batch-Retry

Field values

-   TRUE. Unfinished batches in this job aren’t retried.
-   FALSE. Unfinished batches in this job are retried the standard number of times (15 for bulk queries and 10 for bulk uploads). If the header isn’t provided in the request, this is the default value.

Example

Sforce-Disable-Batch-Retry: TRUE
