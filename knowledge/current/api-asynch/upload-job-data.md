---
title: "Upload Job Data"
domain: api-asynch
topic: upload-job-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.596Z
estimatedTokens: 460
keywords: [Upload, Job, Data, Uploads, CSV, provide]
---

# Upload Job Data

> Uploads data for a job using CSV data you provide.

# Upload Job Data

Uploads data for a job using CSV data you provide.

URI

/services/data/vXX.X/jobs/ingest/jobID/batches

Availability

This resource is available in API version 41.0 and later.

Formats

text/csv

HTTP Method

PUT

Authentication

Authorization: Bearer token

Parameters

None.

Request Body

CSV file with record data.

Response Body

None. Returns a status code of 201 (Created), which indicates that the job data was successfully received by Salesforce.

Usage Notes

The resource URL is provided in the contentUrl field in the response from [Create a Job](atlas.en-us.api_asynch.meta/api_asynch/create_job.htm#create_job "Creates a job representing a bulk operation and its associated data that is sent to Salesforce for asynchronous processing. Provide job data via an Upload Job Data request or as part of a multipart create job request."), or the response from a [Job Info](atlas.en-us.api_asynch.meta/api_asynch/get_job_info.htm#get_job_info "Retrieves detailed information about a job.") request on an open job.

A request can provide CSV data that does not in total exceed 150 MB of base64 encoded content. When job data is uploaded, it is converted to base64. This conversion can increase the data size by approximately 50%. To account for the base64 conversion increase, upload data that does not exceed 100 MB.

Don’t delete your local CSV data until you’ve confirmed that all records were successfully processed by Salesforce. If a job fails, use the successful results, failed results, and unprocessed records resources to determine what records from your CSV data you need to resubmit.

#### See Also

-   [Bulk API 2.0 Older Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/introduction_bulk_api_2.htm "Bulk API 2.0 Older Documentation - html (New Window)")

## Related Topics

- Create a Job (atlas.en-us.api_asynch.meta/api_asynch/create_job.htm)
- Job Info (atlas.en-us.api_asynch.meta/api_asynch/get_job_info.htm)
