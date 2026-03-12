---
title: "Duplicate Job Status Input"
domain: chatterapi
topic: duplicate-job-status-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.530Z
estimatedTokens: 86
keywords: [Duplicate, Job, Status, Input]
---

# Duplicate Job Status Input

> Update the duplicate job status.

# Duplicate Job Status Input

Update the duplicate job status.

Root XML tag

<DuplicateJobStatus>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| status | String | Status of the duplicate job. Canceled is the only valid value. | Required | 42.0 |

## Code Examples

```
{
   "status":"Canceled"
}
```
