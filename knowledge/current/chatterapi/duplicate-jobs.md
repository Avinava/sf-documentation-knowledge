---
title: "Duplicate Jobs"
domain: chatterapi
topic: duplicate-jobs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.933Z
estimatedTokens: 178
keywords: [Duplicate, Jobs, run, job]
---

# Duplicate Jobs

> Get duplicate jobs or run a job.

# Duplicate Jobs

Get duplicate jobs or run a job.

Resource

```

```

Available version

42.0

HTTP methods

GET, POST

Response body for GET

[Duplicate Job Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_duplicate_job_collection.htm "A collection of duplicate jobs.")

Request body for POST

Root XML tag

<DuplicateJob>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| duplicateJob​DefId | String | ID of the duplicate job definition. | Required | 42.0 |

Response body for POST

[Duplicate Job](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_duplicate_job.htm "A duplicate job.")

## Code Examples

```
/dedupe/jobs
```

```
{
   "duplicateJobDefId":"0POB0000004GUDXIA4"
}
```

## Related Topics

- Duplicate Job Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_duplicate_job_collection.htm)
- Duplicate Job (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_duplicate_job.htm)
