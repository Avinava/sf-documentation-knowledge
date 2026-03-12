---
title: "Get Job Successful Record Results"
domain: api-asynch
topic: get-job-successful-record-results
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.502Z
estimatedTokens: 334
keywords: [Job, Successful, Record, Results, Retrieves, successfully, processed, records, completed]
---

# Get Job Successful Record Results

> Retrieves a list of successfully processed records for a completed job.

# Get Job Successful Record Results

Retrieves a list of successfully processed records for a completed job.

URI

/services/data/vXX.X/jobs/ingest/jobID/successfulResults/

Availability

This resource is available in API version 41.0 and later.

Formats

CSV

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

None.

Request Body

None required.

Response Body

The response body is a CSV file that all the records that the job successfully processed. Each row corresponds to a successfully processed record and contains the following information.

| Property | Type | Description |
| --- | --- | --- |
| sf__Created | boolean | Indicates if the record was created. |
| sf__Id | string | ID of the record that was successfully processed. |
| Fields from the original CSV request data | various | Field data for the row that was provided in the original job data upload request. |

Usage Notes

-   The order of records in the response is not guaranteed to match the ordering of records in the original job data.
-   Results are not recorded for batches that exceed the daily batch allocation.

#### See Also

-   [Bulk API 2.0 Older Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/introduction_bulk_api_2.htm "Bulk API 2.0 Older Documentation - html (New Window)")
