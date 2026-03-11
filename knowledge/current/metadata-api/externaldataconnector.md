---
title: "ExternalDataConnector"
domain: metadata-api
topic: externaldataconnector
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.472Z
keywords: [ExternalDataConnector, Important, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition]
---

# ExternalDataConnector

# ExternalDataConnector

Used to represent the object where the data was sourced.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

ExternalDataConnector components have the suffix externalDataConnector and are stored in the externalDataConnectors folder.

## Version

ExternalDataConnector components are available in API version 50.0 and later.

## Special Access Rules

You need the Salesforce CustomizeApplication permission to access this object.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| dataConnectionStatus | DataConnectionStatus (enumeration of type string) | Indicates whether you’re connected to a data source. Valid values are:ConnectedDisconnectedFailed |
| dataConnectorConfiguration | string | Reference to the Data Connector Configuration that is used to retrieve or receive data such as DataConnectorS3. |
| dataConnectorType | DataConnectorType (enumeration of type string) | Type of connection such as AmazonS3. Valid values are:ACCOUNTENGAGEMENTAmazonS3CuratedEntityDataCloudExternalPlatformGoogleCloudStorageIngestApiSalesforceCommerceCloudSalesforceDotComSalesforceInteractionStudioSalesforceMarketingCloudSFTPStreamingAppUPLOAD |
| dataPlatform | string | Reference to the Data Platform that provides or uses this data, such as Amazon_S3. |
| externalDataTranObjects | ExternalDataTranObject | Stores the schema objects related to the data connector. Available in API version 56.0 and later. |
| masterLabel | string | Required. The UI name for the ExternalDataConnector. |

## Declarative Metadata Sample Definition

The following is an example of a ExternalDataConnector component.

```

```