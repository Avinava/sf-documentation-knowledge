---
title: "Get Job Info"
domain: data-cloud
topic: get-job-info
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:12.305Z
estimatedTokens: 110
keywords: [Get, Job, Info, Retrieves, detailed, information, specified, job.]
---

# Get Job Info

> Retrieves detailed information about the specified job.

# Get Job Info

Retrieves detailed information about the specified job.

URI

/api/v1/ingest/jobs/{id}

Available since release

Data Cloud v1.0, Salesforce v51.0

Formats

JSON

HTTP methods

GET

Authentication

Authorization: Bearer access\_token

Request body

```

```

Request parameters

| Parameter | Description |
| --- | --- |
| id | The job id returned in the response body from the Create Job request. |

Response body

```

```

## Code Examples

```
curl --location --request GET
       'https://{instance_url}/api/v1/ingest/jobs/4d5a4477-e27f-4bc1-a219-31e79407eade' \
       --header 'Authorization: Bearer {access_token}'
```

```
HTTP/1.1 200 OK
       {
       "id": "4d5a4477-e27f-4bc1-a219-31e79407eade",
       "operation": "upsert",
       "object": "runners__c",
       "createdById": "005R0000000sJ1hIAE",
       "createdDate": "2021-04-08T14:29:53.000Z",
       "systemModstamp": "2021-04-08T14:29:53.000Z",
       "state": "Open",
       "contentType": "CSV",
       "apiVersion": 1,
       "contentUrl": "api/v1/ingest/jobs/4d5a4477-e27f-4bc1-a219-31e79407eade/batches",
       "retries": 0,
       "totalProcessingTime": 0
       }
```
