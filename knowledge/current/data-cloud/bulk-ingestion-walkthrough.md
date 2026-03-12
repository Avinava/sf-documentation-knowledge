---
title: "Bulk Ingestion Walkthrough"
domain: data-cloud
topic: bulk-ingestion-walkthrough
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:12.961Z
estimatedTokens: 844
keywords: [Bulk, Ingestion, Walkthrough, guides, steps, loading, records]
---

# Bulk Ingestion Walkthrough

> This walkthrough guides you through the steps for loading records using bulk
  ingestion.

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

## Code Examples

```
id,contact_name,created_date,tax_exempt,ship_address,total,tax_rate,modified_date
f19cae7e-5cdb-41ce-92ba-539afea04f9d,Jadyn Kozey,2021-07-22T08:57:08.118Z,false,9818 Walter Course Apt. 811,77506,84,2021-07-05T09:31:44.457Z
48c8b6a6-8179-4a15-ba19-ec5c8206ce28,Kristina Jakubowski,2021-07-08T22:57:02.008Z,false,245 Schowalter Port Suite 245,16986,61,2021-07-03T06:20:52.886Z
```

```
curl --location --request POST 'https://{instance_url}/api/v1/ingest/jobs' \
--header 'Authorization: Bearer {access_token}' \
--header 'Content-Type: application/json' \
--data-raw '{
   "object":"Orders",
   "sourceName":"ecomm_api",
   "operation":"upsert"
}'
```

```
{
   "object": "Orders",
   "id": "913a8b00-7a9e-4331-aaf6-a019ae5021ab",
   "operation": "upsert",
   "sourceName": "ecomm_api",
   "createdById": "005R0000000zqc8IAA",
   "createdDate": "2021-08-12T17:06:42.921387Z",
   "systemModstamp": "2021-08-12T17:06:42.921387Z",
   "state": "Open",
   "contentType": "CSV",
   "apiVersion": "v1",
   "contentUrl": "/api/v1/ingest/jobs/913a8b00-7a9e-4331-aaf6-a019ae5021ab/batches"
}
```

```
curl --location --request PUT 'https://{instance_url}/api/v1/ingest/jobs/913a8b00-7a9e-4331-aaf6-a019ae5021ab/batches
' \
--header 'Authorization: Bearer {access_token}' \
--header 'Content-Type: text/csv' \
--data-binary '@orders.csv'
```

```
201 Created
```

## Related Topics

- Authentication (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_get_started.htm)
- Data Cloud Reference Guide: Get Started (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_getting_started_with_cdp.htm)
- Data Cloud Reference Guide: Get Started with Ingestion API (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_get_started.htm)
