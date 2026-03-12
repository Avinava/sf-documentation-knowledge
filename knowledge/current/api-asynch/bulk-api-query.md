---
title: "Bulk API Query"
domain: api-asynch
topic: bulk-api-query
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.096Z
estimatedTokens: 559
keywords: [Bulk, API, Query, efficiently, large, data, reduce, number, requests, retrieve, divided, files, formats, CSV, XML]
---

# Bulk API Query

> Use bulk query to efficiently query large data sets and reduce the number of API
    requests. A bulk query can retrieve up to 15 GB of data, divided into 15 files of 1 GB each. The
    data formats supported are CSV, XML, and JSON.

# Bulk API Query

Use bulk query to efficiently query large data sets and reduce the number of API requests. A bulk query can retrieve up to 15 GB of data, divided into 15 files of 1 GB each. The data formats supported are CSV, XML, and JSON.

Bulk API query limits are described in [Bulk API and Bulk API 2.0 Limits and Allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_bulkapi.htm) in the *Salesforce Developer Limits and Allocations Quick Reference*

-   **[How Bulk Queries Are Processed](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_bulk_query_processing.htm)**
    The bulk query workflow begins when you create a bulk query job and add one or more batches to the query job. When a bulk query is processed, Salesforce attempts to execute the query. If the query doesn’t execute within the standard 2-minute timeout limit, the job fails and a QUERY\_TIMEOUT error is returned. In this case, rewrite a simpler query, and resubmit the batch.
-   **[Use Bulk Query](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_using_bulk_query.htm)**
    When you add a batch to a bulk query job, the Content-Type in the header for the request must be text/csv, application/xml, or application/json, depending on the content type specified when the job was created. The actual SOQL statement supplied for the batch is in plain text format.
-   **[PK Chunking](atlas.en-us.api_asynch.meta/api_asynch/async_api_headers_enable_pk_chunking.htm)**
    Use the primary key (PK) chunking request header to enable automatic PK chunking for a bulk query job. PK chunking splits bulk queries on large tables into chunks based on the record IDs, or primary keys, of the queried records.
-   **[Walk Through a Bulk Query Sample](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code_curl_walkthrough.htm)**
    This code sample uses cURL to query several account records.
-   **[Walk Through a Bulk Query Sample Using PK Chunking](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code_curl_walkthrough_pk_chunking.htm)**
    This code sample uses cURL to perform a bulk query with PK chunking enabled on several account records.

## Related Topics

- How Bulk Queries Are Processed (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_bulk_query_processing.htm)
- Use Bulk Query (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_using_bulk_query.htm)
- PK Chunking (atlas.en-us.api_asynch.meta/api_asynch/async_api_headers_enable_pk_chunking.htm)
- Walk Through a Bulk Query Sample (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code_curl_walkthrough.htm)
- Walk Through a Bulk Query Sample Using PK Chunking (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code_curl_walkthrough_pk_chunking.htm)
