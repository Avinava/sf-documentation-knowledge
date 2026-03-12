---
title: "Personalization Recommender Jobs"
domain: chatterapi
topic: personalization-recommender-jobs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.262Z
estimatedTokens: 111
keywords: [Personalization, Recommender, Jobs, associated, specific]
---

# Personalization Recommender Jobs

> Get jobs associated with a specific personalization recommender.

# Personalization Recommender Jobs

Get jobs associated with a specific personalization recommender.

Resource

```

```

Available version

63.0

HTTP method

GET

Response body

[Personalization Recommender Job Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_recommender_job_collection.htm "Contains a collection of personalization recommender jobs.")

## Example

Request:

```

```

Response:

```

```

## Code Examples

```
/personalization/personalization-recommenders/{idOrName}/jobs
```

```
GET /personalization/personalization-recommenders/0heWs000000009hIAA/jobs
```

```
{
    "jobs": [
        {
            "version": "1",
            "startTime": "2025-01-16T04:05:00.000Z",
            "updatedTime": "2025-01-16T04:09:00.000Z",
            "status": "Complete",
            "errorCode": null,
            "errorMessage": null
        },
        {
            "version": "2",
            "startTime": "2025-01-17T04:05:00.000Z",
            "updatedTime": "2025-01-17T04:15:00.000Z",
            "status": "Processing",
            "errorCode": null,
            "errorMessage": null
        }
    ]
}
```

## Related Topics

- Personalization Recommender Job Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_recommender_job_collection.htm)
