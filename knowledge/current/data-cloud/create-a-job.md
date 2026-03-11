---
title: "Create a Job"
domain: data-cloud
topic: create-a-job
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.128Z
keywords: [Create, Job, Note]
---

# Create a Job

# Create a Job

Creates a job that represents the bulk operation for loading data into the Data Cloud org.

Creating a [data stream](https://help.salesforce.com/s/articleView?id=sf.c360_a_data_ingestion.htm&type=5&language=en_US) in Data Cloud is a prerequisite for creating a job. When the job is created it’s ready to accept data for processing via [Upload Job Data](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_upload_job_data.htm "Uploads CSV data for the job to process. A job can consist of up to 100 data files. After all of the data has been uploaded, close the job to indicate the data is ready to be processed.") request.

URI

/api/v1/ingest/jobs

Available since release

Data Cloud v1.0, Salesforce v51.0

Formats

JSON

HTTP methods

POST

Authentication

Authorization: Bearer access\_token

Request body

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

All fields defined in the schema must be present in the request payload. This condition holds regardless of whether the Value Required is set to true or not. If there’s no data available for a certain field on a record, send in a blank value.

```

```

Request parameters

| Parameter | Description |
| --- | --- |
| object | The object type for the data being processed. Use only a single object type per job. |
| operation | The processing operation for the job. Valid values are upsert and delete. |
| sourceName | The name of the Ingestion API connector. |

Response body

The JSON response body returns a property called id that corresponds to the job id. The state is set to open, which signals that the job has been created and data can be added to the job. Retain the job id for subsequent steps.

```

```