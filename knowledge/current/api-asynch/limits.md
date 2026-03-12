---
title: "Limits"
domain: api-asynch
topic: limits
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.181Z
estimatedTokens: 717
keywords: [Limits, specific, Bulk, API, importance, compare, allocations, 2.0, simplified, clients, via, REST, endpoint, Considering, Per-Transaction, Apex]
---

# Limits

> Note the following limits specific to Bulk API.

# Limits

Note the following limits specific to Bulk API.

Batch Allocations, General, Ingest, and Query Limits

Most limits for Bulk API are described in [Bulk API and Bulk API 2.0 Limits and Allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_bulkapi.htm). Additional limits specific to Bulk API are called out in this topic.

API usage limits

Bulk API use is subject to the standard API usage limits. Each HTTP request counts as one call for the purposes of calculating usage limits.

Apex transactions

When DML is performed with Bulk API, each chunk of 200 records is processed as a separate transaction. For more information about Apex limits, see [Per-Transaction Apex Limits](atlas.en-us.api_asynch.meta/api_asynch/bulk_common_limits.htm#bulk_apex_limits).

Batch content

Each batch must contain exactly one CSV, XML, or JSON file containing records for a single object, or the batch isn’t processed and stateMessage is updated. Use the Enterprise WSDL for the correct format for object records.

Compression

The only valid compression value is gzip. Compression is optional, but recommended. Compression doesn’t affect the character or batch size limits.

Job abort

Any user with correct permission can abort a job. Only the user who created a job can close it.

Job close

Only the user who created a job can close it. Any user with correct permission can abort a job.

Job content

Each job can specify one operation and one object. Batches associated with this job contain records of one object. Optionally, you can specify serial processing mode, which is used only when previously submitted asynchronous jobs have accidentally produced contention because of locks. Use only when advised by Salesforce.

Job external ID

You can't edit the value of an external ID field in JobInfo. When specifying an external ID, the operation must be upsert. If you try to use it with create or update, an error is generated.

Job status in job history

The job status and batch results sets for completed jobs are available for 7 days, after which the data is deleted permanently.

Job status change

When you submit a POST body with a change in job status, you can only specify the status field value. If operation or entity field values are specified, an error occurs.

Portal users

Regardless of whether the API Enabled profile permission is granted, portal users (Customer Portal, Self-Service portal, and Partner Portal) can't access Bulk API.

SOQL

Bulk API doesn’t support queries with any of the following:

-   GROUP BY, OFFSET, or TYPEOF clauses
-   Aggregate functions such as COUNT()
-   Date functions in GROUP BY clauses (date functions in WHERE clauses are supported)
-   Compound address fields or compound geolocations fields

## Related Topics

- Per-Transaction Apex Limits (atlas.en-us.api_asynch.meta/api_asynch/bulk_common_limits.htm)
