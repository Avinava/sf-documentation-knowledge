---
title: "Streaming Ingestion Walkthrough"
domain: data-cloud
topic: streaming-ingestion-walkthrough
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.490Z
keywords: [Streaming, Ingestion, Walkthrough]
---

# Streaming Ingestion Walkthrough

# Streaming Ingestion Walkthrough

Use this walkthrough to understand the steps for loading records using streaming ingestion.

Before you can start, make sure you’ve completed the prerequisites required to set up your Ingestion API:

-   Set up an [Ingestion API Connector](https://help.salesforce.com/s/articleView?id=sf.c360_a_connect_an_ingestion_source.htm&type=5&language=en_US) to define the endpoints and object payload to ingest data.
-   Download the object endpoints from the configured Ingestion API connector. The object endpoints and the Ingestion API connector name are used as parameters in the API calls.
-   To configure ingestion jobs and expose the API for external consumption create an [Ingestion API Data Stream](https://help.salesforce.com/s/articleView?id=sf.c360_a_create_ingestion_data_stream.htm&type=5&language=en_US).

1.  Create a collection of JSON objects that matches the schema of the source objects you defined in your Ingestion API data stream. Wrap the collection in a data envelope and save it as orders.json. The payload must be less than 200 KB.
    
    ```
    
    ```
    
2.  Request a Data Cloud access token. For more information, refer to [Authentication](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_get_started.htm "Before using Ingestion API in Data Cloud, complete the prerequisites, set up authentication, and know the limits that apply to bulk ingestion and streaming ingestion."). The access\_token property in the token exchange response contains the bearer token to use for the authorization header. The instance\_url is the Data Cloud instance where the Ingestion API is hosted.
3.  Use the [Synchronous Record Validation](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_synchronous_record_validation.htm "Quickly validate your payloads synchronously in development mode before you commit records to the lake.") method and validate if your ingestion request is configured correctly. Requests that fail validation aren’t processed into the data lake. If the request fails validation, the API returns a report indicating which records are problematic and why. Fix the request based on the validation feedback and resubmit until you received a status code in the 200 s from the API.
    
    Here's how a sample request looks like.
    
    ```
    
    ```
    
    ecomm is the name of the Ingestion API connector and Order is the object configured in the Ingestion API connector for payload.
    
4.  After you’re confident that the integration is properly configured, upload your JSON data via the Ingestion API. You must receive a 202 Accepted response indicating your data has been accepted for processing.
    
    ```
    
    ```