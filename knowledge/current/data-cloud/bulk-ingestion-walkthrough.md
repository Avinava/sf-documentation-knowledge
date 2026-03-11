---
title: "Bulk Ingestion Walkthrough"
domain: data-cloud
topic: bulk-ingestion-walkthrough
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.081Z
keywords: [Bulk, Ingestion, Walkthrough, See]
---

# Bulk Ingestion Walkthrough

# Bulk Ingestion Walkthrough

This walkthrough guides you through the steps for loading records using bulk ingestion.

Before you can start, make sure you’ve completed the prerequisites required to set up your Ingestion API:

-   Set up an [Ingestion API connector](https://help.salesforce.com/s/articleView?id=sf.c360_a_connect_an_ingestion_source.htm&type=5&language=en_US) to define the endpoints and payload to ingest data.
-   Download the object endpoints from the configured Ingestion API connector. The object endpoints and the Ingestion API connector name are used as parameters in the API calls.
-   Create an [Ingestion API Data Stream](https://help.salesforce.com/s/articleView?id=sf.c360_a_create_ingestion_data_stream.htm&type=5&language=en_US) to configure ingestion jobs and expose the API for external consumption.
-   Refer to the links in see also sections to complete authentication steps.

1.  Create a CSV file that has a header row matching the fields in the data stream you created. Each file must not exceed 150 MB. Here's some sample data of an orders.csv file used in this walkthrough.
    
    ```
    
    ```
    
2.  Request a Data Cloud access token. For more information, refer to [Authentication](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_get_started.htm "Before using Ingestion API in Data Cloud, complete the prerequisites, set up authentication, and know the limits that apply to bulk ingestion and streaming ingestion."). The access\_token property in the token exchange response contains the bearer token to use for the authorization header. The instance\_url is the Data Cloud instance where the Ingestion API is hosted.
3.  To upload the data, first create a job. In this example, we’re upserting orders data from an ecomm Ingestion API connector. If you’re deleting records, use the delete operation instead. You must get a JSON response that includes the job id, with an Open job state. You’ll need the job id in the next steps.
    
    Request
    
    ```
    
    ```
    
    Response
    
    ```
    
    ```
    
4.  After creating a job, you're ready to upload your data. You upload the record data using the CSV file you created earlier. You can submit up to 100 CSV files as part of a job.
    
    Request
    
    ```
    
    ```
    
    Response
    
    ```
    
    ```
    
5.  Once you're done submitting data, close the job to indicate that the job is ready for processing.
    
    Request
    
    ```
    
    ```
    
    Response
    
    ```
    
    ```
    
6.  Check the job status and results. To get basic status information on a job, such as the overall job state or the number of records processed, use a Get Job Info request. The job state changes from UploadComplete to either JobComplete or Failed after the files have been loaded into the data lake.
    
    Request
    
    ```
    
    ```
    
    Response
    
    ```
    
    ```
    

#### See Also

-   [*Data Cloud Reference Guide*: Get Started](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_getting_started_with_cdp.htm "Use this section to understand the prerequisites required to get started with Data Cloud API libraries and SDKs.")
    
-   [*Data Cloud Reference Guide*: Get Started with Ingestion API](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_get_started.htm "Before using Ingestion API in Data Cloud, complete the prerequisites, set up authentication, and know the limits that apply to bulk ingestion and streaming ingestion.")