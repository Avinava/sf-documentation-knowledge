---
title: "Get All Jobs"
domain: data-cloud
topic: get-all-jobs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:13.257Z
estimatedTokens: 190
keywords: [Jobs, Retrieves, Data, Cloud]
---

# Get All Jobs

> Retrieves all jobs in Data Cloud.

# Get All Jobs

Retrieves all jobs in Data Cloud.

URI

/api/v1/ingest/jobs

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
| limit | The number of records to return. Defaults to 20. Maximum up to 100 records per request. |
| offset | Number of rows to skip before returning. |
| orderBy | The field used to order job definition results. The default order is by systemModstamp. |
| states | Get jobs in specific states. Valid states are Open, UploadComplete, Failed, Aborted, and JobComplete. The parameter’s value can be a comma-delimited list. |

Response body

```

```

## Code Examples

```
curl --location --request GET 'https://{instance_url}/api/v1/ingest/jobs/' \
       --header 'Authorization: Bearer {access_token}'
```

```
HTTP/1.1 200 OK
       {
       "data": [{
       "id": "4d5a4477-e27f-4bc1-a219-31e79407eade",
       "operation": "upsert",
       "object": "MyCdpObject",
       "createdById": "005R0000000sJ1hIAE",
       "createdDate": "2021-04-08T14:29:53.000Z",
       "systemModstamp": "2021-04-08T14:29:53.000Z",
       "states": "Open",
       "contentType": "CSV",
       "apiVersion": "v1",
       "contentUrl": "api/v1/ingest/jobs/4d5a4477-e27f-4bc1-a219-31e79407eade/batches"
       }, {
       "id": "9d5a4477-e27f-4bc1-a219-31e79407eade",
       ...
       }]
       }
```
