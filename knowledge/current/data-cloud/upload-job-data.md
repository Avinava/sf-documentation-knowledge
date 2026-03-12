---
title: "Upload Job Data"
domain: data-cloud
topic: upload-job-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:12.632Z
estimatedTokens: 385
keywords: [Upload, Job, Data, Uploads, CSV, data, job, process., consist, 100, files., After, uploaded, close, indicate, ready, processed., File, Layouts, Operation]
---

# Upload Job Data

> Uploads CSV data for the job to process. A job can consist of up to 100 data files.
  After all of the data has been uploaded, close the job to indicate the data is ready to be
  processed.

# Upload Job Data

Uploads CSV data for the job to process. A job can consist of up to 100 data files. After all of the data has been uploaded, close the job to indicate the data is ready to be processed.

URI

/api/v1/ingest/jobs/{id}/batches

Available since release

Data Cloud v1.0, Salesforce v51.0

Formats

CSV

HTTP methods

PUT

Authentication

Authorization: Bearer access\_token

Request body

Include the CSV file with record data.

```

```

Request parameters

| Parameter | Description |
| --- | --- |
| id | The job id returned in the response body from the Create a Job request. |

Response body

Returns a status code of 202 (Accepted), which indicates that the job data was successfully uploaded in Data Cloud.

## CSV File Layouts for Each Operation

**For Upserts**: Create a CSV file that has a header row matching the fields in the data stream you defined.

**For Deletes**: Create a CSV file without any headers, meaning the first row corresponds to raw data, with up to 2 columns. In the first column, provide the primary key value corresponding to each record that must be deleted. A second column is only necessary for profile type data or other category type where a record version column was set for the data stream. In such a case, the second column must contain datetime values greater than the original record, so that the system understands that the deletion request supersedes the original upsert request.

## Example

**Profile or Other Category**

```

```

## Example

**Engagement Category**

```

```

## Code Examples

```
curl --location --request PUT 'https://{instance_url}/api/v1/ingest/jobs/{id}/batches' \
--header 'Content-Type: text/csv' \
--header 'Authorization: Bearer {access_token}' \
--data-binary @type_name-1.csv

HTTP/1.1 202 Accepted
```

```
"f3f7b60d-d8c3-423b-8ee2-4b4d79cfb449","2023-10-26T02:51:28.939Z"
"375907b0-d381-435a-9995-82c6ae995348","2023-10-26T02:51:28.939Z"
"77d07844-eacb-4c81-a5c5-76e35e10e447","2023-10-26T02:51:28.939Z"
"05be4dc0-acc0-4721-93e6-ffa933db6458","2023-10-26T02:51:28.939Z"
"39cd5169-c12c-458f-8e08-dd51c6b06d4e","2023-10-26T02:51:28.939Z"
```

```
"0cbd70f6-3abb-45b0-af78-0535c3849049"
"1b9c134b-7525-4554-bac4-ca660f647458"
"402a1fa1-00fa-40ee-afeb-7a6f9241d518"
"37813397-0427-4f24-b473-10bf22bd0f6e"
"9d20dcd5-a073-42e0-bf85-c30a7d36d1de"
"c1a0014b-6d90-4e16-ada6-aace2d797d2b"
"ede4ef8e-acb6-4b08-90ca-93f318fddef7"
"b5167c8a-bf4f-452d-884f-a8e85e7b59f8"
"4eb81189-86be-4336-8773-207a9f8827ef"
```

## Related Topics

- Create a Job (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_create_a_job.htm)
