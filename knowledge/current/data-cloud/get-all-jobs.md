---
title: "Get All Jobs"
domain: data-cloud
topic: get-all-jobs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.322Z
keywords: [Get, Jobs]
---

# Get All Jobs

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