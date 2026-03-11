---
title: "DataConnectorS3"
domain: metadata-api
topic: dataconnectors3
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.679Z
keywords: [DataConnectorS3, Important, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition]
---

# DataConnectorS3

# DataConnectorS3

Represents the connection information specific to Amazon S3.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

DataConnectorS3 components have the suffix s3DataConnector and are stored in the s3DataConnectors folder.

## Version

DataConnectorS3 components are available in API version 50.0 and later.

## Special Access Rules

You need the Salesforce CustomizeApplication permission to access this object.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| fileNameWildcard | string | Optional. File or Wildcard (*) to be used when finding files. |
| importFromDirectory | string | Required. Path from the directory to where files are located. |
| masterLabel | string | Required. The UI name for the S3 data connector. |
| s3BucketName | string | Optional. The Amazon S3 Name of the Bucket. |

## Declarative Metadata Sample Definition

The following is an example of a DataConnectorS3 component.

```

```