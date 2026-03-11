---
title: "Upload Job Data"
domain: data-cloud
topic: upload-job-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.528Z
keywords: [Upload, Job, Data, CSV, File, Layouts, Operation, Example]
---

# Upload Job Data

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