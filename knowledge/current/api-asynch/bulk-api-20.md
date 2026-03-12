---
title: "Bulk API 2.0"
domain: api-asynch
topic: bulk-api-20
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.333Z
estimatedTokens: 730
keywords: [Bulk, API, 2.0, Perform, ingest, query, operations, Salesforce, REST-based, programmatic, option, asynchronously, insert, upsert, large]
---

# Bulk API 2.0

> Perform ingest and query operations with Salesforce Bulk API 2.0. The REST-based Bulk
  API 2.0 provides a programmatic option to asynchronously insert, upsert, query, or delete large
  datasets in your Salesforce org. This API is enabled by default for Performance, Unlimited,
  Enterprise, and Developer Editions. The API Enabled permission must be enabled on the profile
  assigned to users accessing an org or data via the API.

# Bulk API 2.0

Perform ingest and query operations with Salesforce Bulk API 2.0. The REST-based Bulk API 2.0 provides a programmatic option to asynchronously insert, upsert, query, or delete large datasets in your Salesforce org. This API is enabled by default for Performance, Unlimited, Enterprise, and Developer Editions. The API Enabled permission must be enabled on the profile assigned to users accessing an org or data via the API.

-   **[How Requests Are Processed](atlas.en-us.api_asynch.meta/api_asynch/how_requests_are_processed.htm)**
    Bulk API 2.0 ingest jobs allow you to upload records to your org by using a CSV file representation. Bulk API 2.0 query jobs return records based on the specified query. A Bulk API 2.0 job specifies which object is being processed (for example, Account or Opportunity) and what type of action is being used (insert, upsert, update, or delete). You process a set of records by creating a job that contains one or more batches.
-   **[Quick Start: Bulk API 2.0](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart.htm)**
    Get up and running with Bulk API 2.0 by sending a few requests to Salesforce. This Quick Start takes you from setting up a basic environment to inserting, upserting, and querying records using Bulk API 2.0. Experience how to use Bulk API 2.0 via cURL in a free Salesforce Developer Edition org by authenticating and following the examples.
-   **[Bulk API 2.0 Ingest](atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_ingest.htm)**
    With Bulk API 2.0, you can insert, update, upsert, or delete large data sets. Prepare a comma-separated value (CSV) file representation of the data you want to upload, create a job, upload job data, and let Salesforce take care of the rest within your org.
-   **[Bulk API 2.0 Query](atlas.en-us.api_asynch.meta/api_asynch/query_bulk_api_2_0.htm)**
    Bulk query jobs enable asynchronous processing of SOQL queries. They’re designed to handle queries that return large amounts of data (2,000 records or more).
-   **[Headers](atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_headers_intro.htm)**
    These are custom HTTP request and response headers that are used for Bulk API 2.0.
-   **[Limits](atlas.en-us.api_asynch.meta/api_asynch/bulk_common_limits.htm)**
    Learn about the importance of limits, and compare the limits and allocations of Bulk API 2.0 and Bulk API. For Bulk API 2.0, we simplified limits, which are available to clients via the REST API /limits endpoint.
-   **[Bulk API 2.0 Older Documentation](atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_older_documentation.htm)**
    Find versions of the Bulk API 2.0 documentation released prior to Summer ’21 (API version 52.0).
-   **[Bulk API 2.0 End-of-Life Policy](atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_end_of_life.htm)**
    See which Bulk API 2.0 versions are supported, unsupported, or unavailable.

## Related Topics

- How Requests Are Processed (atlas.en-us.api_asynch.meta/api_asynch/how_requests_are_processed.htm)
- Quick Start: Bulk API 2.0 (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart.htm)
- Bulk API 2.0 Ingest (atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_ingest.htm)
- Bulk API 2.0 Query (atlas.en-us.api_asynch.meta/api_asynch/query_bulk_api_2_0.htm)
- Headers (atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_headers_intro.htm)
- Limits (atlas.en-us.api_asynch.meta/api_asynch/bulk_common_limits.htm)
- Bulk API 2.0 Older Documentation (atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_older_documentation.htm)
- Bulk API 2.0 End-of-Life Policy (atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_end_of_life.htm)
