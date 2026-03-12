---
title: "Get Job Failed Record Results"
domain: api-asynch
topic: get-job-failed-record-results
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.488Z
estimatedTokens: 345
keywords: [Job, Failed, Record, Results, Retrieves, records, completed, insert, upsert]
---

# Get Job Failed Record Results

> Retrieves a list of failed records for a completed insert, delete, update, or upsert
    job.

# Get Job Failed Record Results

Retrieves a list of failed records for a completed insert, delete, update, or upsert job.

URI

/services/data/vXX.X/jobs/ingest/jobID/failedResults/

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

The response body is a CSV file that all the records that encountered an error while being processed by the job. Each row corresponds to a failed record and contains the following information.

| Property | Type | Description |
| --- | --- | --- |
| sf__Error | Error | Error code and message. |
| sf__Id | string | ID of the record that had an error during processing. Available in API version 53 and later. |
| Fields from the original CSV request data | various | Field data for the row that was provided in the original job data upload request. |

Usage Notes

-   The order of records in the response is not guaranteed to match the ordering of records in the original job data.
-   Results are not recorded for batches that exceed the daily batch allocation.

#### See Also

-   [Bulk API 2.0 Older Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/introduction_bulk_api_2.htm "Bulk API 2.0 Older Documentation - html (New Window)")
