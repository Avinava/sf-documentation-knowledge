---
title: "Ingest Data"
domain: data-cloud
topic: ingest-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.284Z
estimatedTokens: 300
keywords: [Ingest, Data, Load, records, Cloud, programmatically, Ingestion, API, configure, connector, retrieval, schedule, order, pull]
---

# Ingest Data

> Load data records into your Data Cloud programmatically using the Ingestion
  API or configure an S3 connector with retrieval schedule in order to pull records from
  S3.

# Ingest Data

Load data records into your Data Cloud programmatically using the Ingestion API or configure an S3 connector with retrieval schedule in order to pull records from S3.

-   **[Ingest Data into Data Cloud](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_salesforce_cdp_ingestion.htm)**
    The Ingestion API provides a RESTful interface that supports both streaming and bulk interaction patterns for loading data into Data Cloud. You can use a single Ingestion API connector for performing both bulk and streaming uploads.
-   **[Create an Amazon S3 Data Stream](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_create_an_amazon_s3_data_stream_using_salesforce_cdp_apis.htm)**
    Create a data stream to programmatically stream data from an Amazon S3 data source. With the data stream you can ingest data into your Data Cloud data lake.
-   **[Rotation of S3 Credentials with Metadata API](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_rotate_s3_credentials.htm)**
    Use the Metadata API to rotate the S3 credentials and enable access to AWS. To update the S3 credentials you must retrieve the metadata of S3 connectors, modify the S3 credentials, and deploy the metadata.

## Related Topics

- Ingest Data into Data Cloud (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_salesforce_cdp_ingestion.htm)
- Create an Amazon S3 Data Stream (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_create_an_amazon_s3_data_stream_using_salesforce_cdp_apis.htm)
- Rotation of S3 Credentials with Metadata API (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_rotate_s3_credentials.htm)
