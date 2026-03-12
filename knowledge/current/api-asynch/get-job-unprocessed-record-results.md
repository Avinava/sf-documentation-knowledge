---
title: "Get Job Unprocessed Record Results"
domain: api-asynch
topic: get-job-unprocessed-record-results
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.505Z
estimatedTokens: 352
keywords: [Job, Unprocessed, Record, Results, Retrieves, records, failed, aborted, jobs]
---

# Get Job Unprocessed Record Results

> Retrieves a list of unprocessed records for failed or aborted jobs.

# Get Job Unprocessed Record Results

Retrieves a list of unprocessed records for failed or aborted jobs.

URI

/services/data/vXX.X/jobs/ingest/jobID/unprocessedrecords/

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

The response body is a CSV file that contains all the records that were not processed by the job.

A job that is interrupted or otherwise fails to complete can result in rows that aren’t processed. Unprocessed rows are not the same as failed rows. Failed rows are processed but encounter an error during processing.

Each row corresponds to an unprocessed record and contains this information.

| Property | Type | Description |
| --- | --- | --- |
| Fields from the original CSV request data | various | Field data for the row that was provided in the original job data upload request. |

Usage Notes

-   The order of records in the response is not guaranteed to match the ordering of records in the original job data.

-   Results are not recorded for batches that exceed the daily batch allocation.

#### See Also

-   [Bulk API 2.0 Older Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/introduction_bulk_api_2.htm "Bulk API 2.0 Older Documentation - html (New Window)")
