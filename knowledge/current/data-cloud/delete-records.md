---
title: "Delete Records"
domain: data-cloud
topic: delete-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.161Z
keywords: [Delete, Records, Note]
---

# Delete Records

# Delete Records

Delete records from the data lake table.

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

You can delete up to 200 records using the delete operation. To delete more than 200 records in a request, use bulk ingestion operations. For more information, see [Delete operation in an Upload Job](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_upload_job_data.htm "Uploads CSV data for the job to process. A job can consist of up to 100 data files. After all of the data has been uploaded, close the job to indicate the data is ready to be processed.").

URI

/api/v1/ingest/sources/{name}/{object-name}

Available since release

Data Cloud v1.0, Salesforce v51.0

Formats

JSON

HTTP methods

DELETE

Authentication

Authorization: Bearer access\_token

Request body

```

```

Request parameters

| Parameter | Description |
| --- | --- |
| name | Name of the Ingest API data connector. |
| object-name | Name of the object configured in Ingest API data connector for payload. |
| ids | The primary keys of the object. ids can be supplied via query parameters or through the request body.{   "ids": [      "001xx000003DGb2AAG"    ] } |

Response body

```

```

Returns a status code of 202 (Accepted), which indicates that the request is accepted and it gets processed asynchronously.