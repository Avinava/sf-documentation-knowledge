---
title: "DataConnectorIngestApi"
domain: metadata-api
topic: dataconnectoringestapi
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.158Z
estimatedTokens: 509
keywords: [DataConnectorIngestApi, connection, specific, Ingestion, API, Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, Declarative]
---

# DataConnectorIngestApi

> Represents the connection information specific to Ingestion
			API.

# DataConnectorIngestApi

Represents the connection information specific to Ingestion API.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

DataConnectorIngestApi components have the suffix .dataConnectorIngestApi and are stored in the dataConnectorIngestApis folder.

## Version

DataConnectorIngestApi components are available in API version 54.0 and later.

## Special Access Rules

You must have the CustomizeApplication user permissions to access the DataConnectorIngestApi type.

## Fields

| Field Name | Description |
| --- | --- |
| masterLabel | Field TypestringDescriptionRequired.UI label of the Ingestion API Connector. |
| sourceName | Field TypestringDescriptionRequired.Name of the Ingestion API Connector. |

## Declarative Metadata Sample Definition

The following is an example of a DataConnectorIngestApi component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<DataConnectorIngestApi xmlns="http://soap.sforce.com/2006/04/metadata">
    <sourceName>CONNECTOR NAME</sourceName>
    <masterLabel>CONNECTOR NAME</masterLabel>
</DataConnectorIngestApi>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<DataConnectorIngestApi xmlns="http://soap.sforce.com/2006/04/metadata">
    <sourceName>MyConnector</sourceName>
    <masterLabel>MyConnector</masterLabel>
</DataConnectorIngestApi>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip
					File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
