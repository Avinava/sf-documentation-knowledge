---
title: "Walkthrough Sending HTTP Requests with cURL"
domain: api-asynch
topic: walkthrough-sending-http-requests-with-curl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.253Z
estimatedTokens: 788
keywords: [Walkthrough, Sending, HTTP, Requests, cURL, now, configured, start, Bulk, API]
---

# Walkthrough Sending HTTP Requests with cURL

> With cURL now configured, you can start sending HTTP requests to the Bulk API.

# Walkthrough Sending HTTP Requests with cURL

With cURL now configured, you can start sending HTTP requests to the Bulk API.

You send HTTP requests to a URI to perform operations with Bulk API.The URI where you send HTTP requests has this format:

https://Web\_Services\_SOAP\_endpoint\_hostame/services/async/APIversion/Resource\_address

The part after the API version (Resource\_address) varies depending on the job or batch being processed.

The easiest way to start using the Bulk API is to enable it for processing records in Data Loader using CSV files. If you use Data Loader, you don't need to craft your own HTTP requests or write your own client application. For an example of writing a client application using Java, see [Sample Client Application Using Java](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code.htm "Use this code sample to create a test client application that inserts a number of account records using the REST-based Bulk API.").

-   **[Step 1: Log In Using the SOAP API](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart_login.htm)**
    The Bulk API doesn't provide a login operation, so you must use SOAP API to log in.
-   **[Step 2: Create a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart_create_job.htm)**
    Before you can load data, you first create a job. The job specifies the type of object, such as Contact, that you’re loading and the operation that you’re performing, such as query, queryAll, insert, update, upsert, or delete. A job also grants you some control over the data load process. For example, you can abort a job that is in progress.
-   **[Step 3: Add a Batch to the Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart_add_batch.htm)**
    After creating the job, you’re ready to create a batch of contact records. You send data in batches in separate HTTP POST requests. The URI for each request is similar to the one you used when creating the job, but you append **jobId**/batch to the URI.
-   **[Step 4: Close the Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart_close_job.htm)**
    When you're finished submitting batches to Salesforce, close the job. Closing the job tells Salesforce that you're done submitting batches for the job, which allows the monitoring page in Salesforce to return more meaningful statistics on the progress of the job.
-   **[Step 5: Check Batch Status](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart_check_status.htm)**
    You can check the status of an individual batch by running this cURL command.
-   **[Step 6: Retrieve Batch Results](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart_retrieve_results.htm)**
    When a batch is Completed, you must retrieve the batch result to see the status of individual records.

#### See Also

-   [About URIs](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_basics_about_uri.htm "You send HTTP requests to a URI to perform operations with Bulk API.")

-   [Data Loader Guide](https://resources.docs.salesforce.com/260/latest/en-us/sfdc/pdf/salesforce_data_loader.pdf "Data Loader Guide - Adobe Acrobat PDF (New Window)")

## Related Topics

- Sample Client Application Using Java (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code.htm)
- Step 1: Log In Using the SOAP API (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart_login.htm)
- Step 2: Create a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart_create_job.htm)
- Step 3: Add a Batch to the Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart_add_batch.htm)
- Step 4: Close the Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart_close_job.htm)
- Step 5: Check Batch Status (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart_check_status.htm)
- Step 6: Retrieve Batch Results (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart_retrieve_results.htm)
- About URIs (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_basics_about_uri.htm)
