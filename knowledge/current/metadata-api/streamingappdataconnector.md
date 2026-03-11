---
title: "StreamingAppDataConnector"
domain: metadata-api
topic: streamingappdataconnector
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.757Z
keywords: [StreamingAppDataConnector, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# StreamingAppDataConnector

# StreamingAppDataConnector

Represents the connection information specific to Web and Mobile Connectors.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

StreamingAppDataConnector components have the suffix .streamingAppDataConnector and are stored in the streamingAppDataConnectors folder.

## Version

StreamingAppDataConnector components are available in API version 55.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| appIdentifier | Field TypestringDescriptionRequired.The unique app identifier (UUID). |
| dataConnectorType | Field TypeDataConnectorType (enumeration of type string)DescriptionRequired.The value of the field is restricted to SteamingApp.Possible values are:DataCloudStreamingApp |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type. |
| masterLabel | Field TypestringDescriptionRequired.The display name of the connector. |
| streamingAppDataConnectorType | Field TypeStreamingAppDataConnectorType (enumeration of type string)DescriptionRequired.The type of connector.Possible values are:MobileAppWebApp |

## Declarative Metadata Sample Definition

The following is an example of a StreamingAppDataConnector component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").