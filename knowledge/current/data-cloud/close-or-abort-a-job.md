---
title: "Close or Abort a Job"
domain: data-cloud
topic: close-or-abort-a-job
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:12.063Z
estimatedTokens: 341
keywords: [Close, Abort, Job, job, updating, state, UploadComplete., close, uploaded, data, enqueued, processing., abort, update, Aborted., doesn’t, get, queued, processed., Any]
---

# Close or Abort a Job

> Close a job by updating the job state to UploadComplete. When you
  close a job, the uploaded data is enqueued for processing. To abort a job, update the job state to
   Aborted. If you abort a job, the job doesn’t get queued or processed. Any data
  uploaded as part of the aborted job is deleted.

# Close or Abort a Job

Close a job by updating the job state to UploadComplete. When you close a job, the uploaded data is enqueued for processing. To abort a job, update the job state to Aborted. If you abort a job, the job doesn’t get queued or processed. Any data uploaded as part of the aborted job is deleted.

Any open bulk jobs older than seven days, with state as Open or UploadComplete are deleted from the queue. After a job is closed or aborted, you can’t add more job data.

URI

/api/v1/ingest/jobs/{id}

Available since release

Data Cloud v1.0, Salesforce v51.0

Formats

JSON

HTTP methods

PATCH

Authentication

Authorization: Bearer access\_token

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

All fields defined in the schema must be present in the request payload. This condition holds regardless of whether the Value Required in the Ingestion API Connector is set to true or not. If there is no data available for a certain field on a record, send in a blank value.

Request body

```

```

Request parameters

| Parameter | Description |
| --- | --- |
| id | The job id returned in the response body from the Create Job request. |
| state | The state to update the job to. Use UploadComplete to close a job, or Aborted to abort a job. |

Response body

```

```

## Example

```

```

## Code Examples

```
{
   "state" : "UploadComplete"
}
```

```
{
       "id": "7505e000001NLkPAAW",
       "operation": "upsert",
       "object": "Contact",
       "createdById": "0055e000003PfMYAA0",
       "createdDate": "2021-06-10T13:25:40.000Z",
       "systemModstamp": "2021-06-10T13:25:40.000Z",
       "state": "UploadComplete",
       "contentType": "CSV",
       "apiVersion": "v1"
}
```

```
curl --location --request PATCH 'https://{instance_url}/api/v1/ingest/jobs/{id}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <access_token>' \
--data-raw '{
   "state":"UploadComplete"
}'
< HTTP/1.1 200 OK
< Content-Type: application/json;charset=UTF-8
< Transfer-Encoding: chunked
<
{"id":"7505e000001NLkPAAW","operation":"upsert","object":"Contact","createdById":"0055e000003PfMYAA0","createdDate":"2021-06-10T13:25:40.000Z","systemModstamp":"2021-06-10T13:25:40.000Z","state":"UploadComplete","contentType":"CSV","apiVersion":1}
```
