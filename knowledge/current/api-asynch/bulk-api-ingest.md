---
title: "Bulk API Ingest"
domain: api-asynch
topic: bulk-api-ingest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.018Z
estimatedTokens: 620
keywords: [Bulk, API, Ingest, insert, upsert, large, data, Salesforce, org, Prepare, CSV, XML, JSON, file, representation]
---

# Bulk API Ingest

> With Bulk API, you can insert, update, or upsert large data sets into your Salesforce
  org. Prepare a CSV, XML, or JSON file representation of the data you want to upload, create a job,
  upload job data, and let Salesforce take care of the rest.

# Bulk API Ingest

With Bulk API, you can insert, update, or upsert large data sets into your Salesforce org. Prepare a CSV, XML, or JSON file representation of the data you want to upload, create a job, upload job data, and let Salesforce take care of the rest.

Bulk API ingest limits are described in [Bulk API and Bulk API 2.0 Limits and Allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_bulkapi.htm) in the *Salesforce Developer Limits and Allocations Quick Reference*

-   **[Plan Bulk Data Loads](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_planning_intro.htm)**
    Bulk API performance depends on the type of data that you're loading, as well as any workflow rules and triggers associated with the objects in your batches. It's useful to understand the factors that determine optimal loading time.
-   **[Install cURL](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart_set_up_client.htm)**
    The Bulk API uses HTTP GET and HTTP POST methods to send and receive CSV, XML, and JSON content, so it’s simple to build client applications using the tool or the language of your choice. This quick start uses a command-line tool called cURL to simplify sending and receiving HTTP requests and responses.
-   **[Walkthrough Sending HTTP Requests with cURL](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart_requests_intro.htm)**
    With cURL now configured, you can start sending HTTP requests to the Bulk API.
-   **[Prepare Data Files](atlas.en-us.api_asynch.meta/api_asynch/datafiles_intro.htm)**
    The Bulk API processes records in comma-separated values (CSV) files, XML files, or JSON files.
-   **[Load Binary Attachments](atlas.en-us.api_asynch.meta/api_asynch/binary_intro.htm)**
    The Bulk API can load binary attachments, which can be Attachment objects or Salesforce CRM Content.
-   **[Request Basics](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_basics_intro.htm)**
    Here are some Bulk API request basics, including the format of URIs used to perform operations and details on how to authenticate requests using a session header.
-   **[Work with Batches](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_intro.htm)**
    A batch is a set of records sent to the server in an HTTP POST request. Each batch is processed independently by the server, not necessarily in the order it’s received.

## Related Topics

- Plan Bulk Data Loads (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_planning_intro.htm)
- Install cURL (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart_set_up_client.htm)
- Walkthrough Sending HTTP Requests with cURL (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart_requests_intro.htm)
- Prepare Data Files (atlas.en-us.api_asynch.meta/api_asynch/datafiles_intro.htm)
- Load Binary Attachments (atlas.en-us.api_asynch.meta/api_asynch/binary_intro.htm)
- Request Basics (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_basics_intro.htm)
- Work with Batches (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_intro.htm)
