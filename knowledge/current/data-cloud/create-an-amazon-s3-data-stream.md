---
title: "Create an Amazon S3 Data Stream"
domain: data-cloud
topic: create-an-amazon-s3-data-stream
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:12.999Z
estimatedTokens: 821
keywords: [Amazon, Data, Stream, programmatically, source, ingest, Cloud, lake]
---

# Create an Amazon S3 Data Stream

> Create a data stream to programmatically stream data from an Amazon S3 data source. With
    the data stream you can ingest data into your Data Cloud data lake.

# Create an Amazon S3 Data Stream

Create a data stream to programmatically stream data from an Amazon S3 data source. With the data stream you can ingest data into your Data Cloud data lake.

Get familiar with [Using Metadata API](https://developer.salesforce.com/docs/atlas.en-us.252.0.api_meta.meta/api_meta/file_based_zip_file.htm), and then complete these steps to create your data stream.

1.  Define metadata in your local client application.

    This diagram describes how each object relates to other objects.

    ![Corresponding diagram of information](/docs/resources/img/en-us/252.0?doc_id=dev_guides%2Fapi_c360a%2Fimages%2FEntitiesLeveragedS3DataStream.png&folder=c360a_api)

2.  Create a zip file with package.xml. For more information, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.252.0.api_meta.meta/api_meta/file_based_zip_file.htm?q=zip%20file).
3.  Use the [deploy()](https://developer.salesforce.com/docs/atlas.en-us.252.0.api_meta.meta/api_meta/meta_deploy.htm) call to move your metadata package from your local file system to Data Cloud.
4.  Note the data stream definition ID so that you can use it in your POST request.

    After you create the POST request or include the credentials in the Data Connector S3 XML metadata, update the Amazon S3 credentials of the data stream in Data Cloud.

5.  Create a POST request for the User Interface API to create the data stream. When a new data stream is created, a data lake object gets created to store the data ingested from the data stream.

-   **[Post Data from an Amazon S3 Data Source](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_post_amazon_s3_data_stream.htm)**
    Use the POST method to stream data from an Amazon S3 data source.

#### See Also

-   [Salesforce Help: Create a Cloud Storage Data Stream](https://help.salesforce.com/s/articleView?id=sf.c360_a_create_cloud_storage_data_stream.htm&type=5&language=en_US "Salesforce Help: Create a Cloud Storage Data Stream - HTML (New Window)")

-   [DataStreamDefinition](https://developer.salesforce.com/docs/atlas.en-us.252.0.api_meta.meta/api_meta/meta_datastreamdefinition.htm "DataStreamDefinition - HTML (New Window)")

-   [DataSource](https://developer.salesforce.com/docs/atlas.en-us.252.0.api_meta.meta/api_meta/meta_datasource.htm "DataSource - HTML (New Window)")

-   [MktDataTranObject](https://developer.salesforce.com/docs/atlas.en-us.252.0.api_meta.meta/api_meta/meta_mktdatatranobject.htm "MktDataTranObject - HTML (New Window)")

-   [ExternalDataConnector](https://developer.salesforce.com/docs/atlas.en-us.252.0.api_meta.meta/api_meta/meta_externaldataconnector.htm "ExternalDataConnector - HTML (New Window)")

-   [ObjectSourceTargetMap](https://developer.salesforce.com/docs/atlas.en-us.252.0.api_meta.meta/api_meta/meta_objectsourcetargetmap.htm "ObjectSourceTargetMap - HTML (New Window)")

-   [DataConnectorS3](https://developer.salesforce.com/docs/atlas.en-us.252.0.api_meta.meta/api_meta/meta_dataconnectors3.htm "DataConnectorS3 - HTML (New Window)")

-   [Get Started with User Interface API](https://developer.salesforce.com/docs/atlas.en-us.252.0.uiapi.meta/uiapi/ui_api_get_started.htm "Get Started with User Interface API - HTML (New Window)")

## Related Topics

- Post Data from an Amazon S3 Data Source (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_post_amazon_s3_data_stream.htm)
