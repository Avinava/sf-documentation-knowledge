---
title: "Bulk API"
domain: api-asynch
topic: bulk-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.021Z
estimatedTokens: 715
keywords: [Bulk, API, predecessor, current, 2.0, Although, gives, fine-grained, control, over, specifics, jobs, batches, work-flow, complex]
---

# Bulk API

> Bulk API is the predecessor to the current Bulk API 2.0. Although Bulk API gives you
  more fine-grained control over the specifics of jobs and batches, its work-flow is more complex
  than Bulk API 2.0. If the feature set and limits are a unique match to your project requirements,
  use Bulk API.

# Bulk API

Bulk API is the predecessor to the current Bulk API 2.0. Although Bulk API gives you more fine-grained control over the specifics of jobs and batches, its work-flow is more complex than Bulk API 2.0. If the feature set and limits are a unique match to your project requirements, use Bulk API.

-   **[How Bulk API Works](atlas.en-us.api_asynch.meta/api_asynch/api_asynch_introduction_how_bulk_api_works.htm)**
    You process a set of records by creating a job that contains one or more batches.
-   **[Quick Start: Bulk API](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_intro.htm)**
    You process a set of records by creating a job that contains one or more batches. The job specifies which object is being processed and what type of operation is being used. Ingest jobs are defined by CSV, XML, JSON, or binary attachments. Query jobs are defined by a SOQL statement.
-   **[Bulk API Ingest](atlas.en-us.api_asynch.meta/api_asynch/api_asynch_bulk_ingest.htm)**
    With Bulk API, you can insert, update, or upsert large data sets into your Salesforce org. Prepare a CSV, XML, or JSON file representation of the data you want to upload, create a job, upload job data, and let Salesforce take care of the rest.
-   **[Bulk API Query](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_bulk_query_intro.htm)**
    Use bulk query to efficiently query large data sets and reduce the number of API requests. A bulk query can retrieve up to 15 GB of data, divided into 15 files of 1 GB each. The data formats supported are CSV, XML, and JSON.
-   **[Headers](atlas.en-us.api_asynch.meta/api_asynch/async_api_headers.htm)**
    These are the custom HTTP request and response headers that are used for Bulk API.
-   **[Limits](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_concepts_limits.htm)**
    Note the following limits specific to Bulk API.
-   **[Bulk API Reference](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference.htm)**
    These are the supported resources for the Bulk API, as well as the details on errors and processing limits.
-   **[Sample Client Application Using Java](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code.htm)**
    Use this code sample to create a test client application that inserts a number of account records using the REST-based Bulk API.
-   **[Map Data Fields](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_mapping.htm)**
    To use Bulk API to import data that was exported directly from Microsoft Outlook, Google Contacts, and other third-party sources, map data fields in any CSV import file to Salesforce data fields. It's not necessary for the CSV import file to be Bulk API-compatible.
-   **[Bulk API End-of-Life Policy](atlas.en-us.api_asynch.meta/api_asynch/bulk_common_api_end_of_life.htm)**
    See which Bulk API versions are supported, unsupported, or unavailable.

## Related Topics

- How Bulk API Works (atlas.en-us.api_asynch.meta/api_asynch/api_asynch_introduction_how_bulk_api_works.htm)
- Quick Start: Bulk API (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_intro.htm)
- Bulk API Ingest (atlas.en-us.api_asynch.meta/api_asynch/api_asynch_bulk_ingest.htm)
- Bulk API Query (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_bulk_query_intro.htm)
- Headers (atlas.en-us.api_asynch.meta/api_asynch/async_api_headers.htm)
- Limits (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_concepts_limits.htm)
- Bulk API Reference (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference.htm)
- Sample Client Application Using Java (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code.htm)
- Map Data Fields (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_mapping.htm)
- Bulk API End-of-Life Policy (atlas.en-us.api_asynch.meta/api_asynch/bulk_common_api_end_of_life.htm)
