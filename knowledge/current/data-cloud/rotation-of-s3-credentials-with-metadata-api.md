---
title: "Rotation of S3 Credentials with Metadata API"
domain: data-cloud
topic: rotation-of-s3-credentials-with-metadata-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:13.564Z
estimatedTokens: 954
keywords: [Rotation, Credentials, Metadata, API, rotate, enable, access, AWS, retrieve, connectors, modify, deploy, Familiarize, Yourself, Salesforce]
---

# Rotation of S3 Credentials with Metadata API

> Use the Metadata API to rotate the S3 credentials and enable access to AWS. To update
    the S3 credentials you must retrieve the metadata of S3 connectors, modify the S3 credentials,
    and deploy the metadata.

# Rotation of S3 Credentials with Metadata API

Use the Metadata API to rotate the S3 credentials and enable access to AWS. To update the S3 credentials you must retrieve the metadata of S3 connectors, modify the S3 credentials, and deploy the metadata.

## Familiarize Yourself with Salesforce CLI

You can retrieve or deploy S3 connector metadata by using [Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.252.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm). We recommend that you get familiar with using either of the options to ensure a smooth update of S3 credentials.

## Define the Metadata of the S3 Connector

You can use an unpackage.xml file to define the metadata to retrieve. In this case, include the [DataConnectorS3](https://developer.salesforce.com/docs/atlas.en-us.252.0.api_meta.meta/api_meta/meta_dataconnectors3.htm) metadata type. Include all the S3 connectors that you want to update the credentials for. This sample unpackage.xml file illustrates how to work with S3 connector metadata. A best practice is to name the unpackage.xml file with a low-level qualifier of .xml such as DataConnectorS3.xml.

```

```

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

Save the file to a directory that Salesforce CLI can access.

## Retrieve the Metadata of S3 Data Connector

Refer to [Retrieve S3 Connector Metadata with Salesforce CLI](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_retrieve_s3_connector_metadata_using_salesforce_cli.htm "You can retrieve the metadata of an S3 Connector by using Salesforce CLI.") and retrieve the metadata for the S3 data connector.

## Update the S3 Access Key and Secret Key

1.  Extract the contents of the metadata file.

    ```

    ```

    Here’s how the extracted folder structure looks like.

    ![S3 data connectore metadata folder structure](/docs/resources/img/en-us/252.0?doc_id=dev_guides%2Fapi_c360a%2Fimages%2Fc360a_s3dataconnector_folderstructure.png&folder=c360a_api)

2.  Edit the files referenced in the s3DataConnectors directory. Update the attributes s3AccessKey and s3SecretKey. Here's a sample of the contents of the files for S3 connectors metadata.

    ```

    ```


## Create the S3 Connectors Package for Deployment

After changes are made to all S3 Connectors files, create a zipped package. Make sure that the package.xml file is at the top-most level of the package. Navigate down to the unpackaged directory and run this command.

```

```

Here’s the output of the command.

```

```

## Deploy DataConnectorS3 Metadata

Refer to [Deploy S3 Connector Metadata with Salesforce CLI](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_deploy_s3_connector_metadata_using_salesforce_cli.htm "Use Salesforce CLI to deploy the metadata package.") to deploy the metadata for the S3 data connector.

## Verify the Metadata Deployment

To verify if the metadata is deployed, refresh an impacted data stream where the S3 access key and secret key are modified. Click **Refresh Now** on at least one of the data streams to validate the change. A successful refresh indicates a successful update of S3 credentials.

![Refresh a CDP data stream to check S3 credential update](/docs/resources/img/en-us/252.0?doc_id=dev_guides%2Fapi_c360a%2Fimages%2Fc360a_s3dataconnector_verify.png&folder=c360a_api)

-   **[Retrieve S3 Connector Metadata with Salesforce CLI](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_retrieve_s3_connector_metadata_using_salesforce_cli.htm)**
    You can retrieve the metadata of an S3 Connector by using Salesforce CLI.
-   **[Deploy S3 Connector Metadata with Salesforce CLI](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_deploy_s3_connector_metadata_using_salesforce_cli.htm)**
    Use Salesforce CLI to deploy the metadata package.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Contact_Point_Addr</members>
        <name>DataConnectorS3</name>
    </types>
    <types>
        <members>Contact_Point_Phone</members>
        <name>DataConnectorS3</name>
    </types>
    <types>
        <members>Contact_Point_Email</members>
        <name>DataConnectorS3</name>
    </types>
    <version>54.0</version>
</Package>
```

```
mkdir <location to unzip>
cd <location to unzip>
unzip <filename.zip to unzip> (the default filename will be unpackaged.xml)
```

```
<?xml version="1.0" encoding="UTF-8"?>
<DataConnectorS3 xmlns="http://soap.sforce.com/2006/04/metadata">
    <delimiter>,</delimiter>
    <fileNameWildcard>ContactPointEmail_*.csv</fileNameWildcard>
    <importFromDirectory>DTX_2020_01/ContactPointEmail/</importFromDirectory>
    <masterLabel>Contact_Contact_Point_Email_DTX_01</masterLabel>
    <s3AccessKey>*</s3AccessKey>
    <s3BucketName>asd-aws-s3-bucket-01</s3BucketName>
    <s3SecretKey>*</s3SecretKey>
</DataConnectorS3>
```

```
cd <location of unzipped files>
zip -r -X s3Connectors.zip *
```

```
adding: package.xml (deflated 60%)
  adding: s3DataConnectors/ (stored 0%)
  adding: s3DataConnectors/Contact_Contact_Point_Addr_DTX_01.s3DataConnector (deflated 43%)
  adding: s3DataConnectors/Contact_Contact_Point_Phone_DTX_01.s3DataConnector (deflated 43%)
  adding: s3DataConnectors/Contact_Contact_Point_Email_DTX_01.s3DataConnector (deflated 43%)
```

## Related Topics

- Retrieve S3 Connector Metadata with Salesforce CLI (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_retrieve_s3_connector_metadata_using_salesforce_cli.htm)
- Deploy S3 Connector Metadata with Salesforce CLI (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_deploy_s3_connector_metadata_using_salesforce_cli.htm)
