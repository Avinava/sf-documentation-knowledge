---
title: "CareRequestConfiguration"
domain: metadata-api
topic: carerequestconfiguration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.014Z
keywords: [CareRequestConfiguration, Important, Parent, Type, File, Suffix, Directory, Location, Version, Fields, CareRequestRecords, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# CareRequestConfiguration

# CareRequestConfiguration

Represents the details for a record type such as service request, drug request, or admission request. One or more record types can be associated with a care request.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

CareRequestConfiguration components have the suffix .careRequestConfiguration and are stored in the careRequestConfigurations folder.

## Version

CareRequestConfiguration components are available in API version 44.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| careRequestRecordType | Field TypestringDescriptionRequired.The record type for the care request. |
| careRequestRecords | Field TypeCareRequestRecords[]DescriptionThe list of objects you can select to configure the care request. |
| careRequestType | Field TypestringDescriptionRequired.The type of care request. For example, an appeal, a service request, or an admission. |
| isActive | Field TypebooleanDescriptionIndicates whether the care request is active (true) or not (false). |
|  | Field TypebooleanDescriptionIndicates whether the record type of the care request is default (true) or not (false). |
|  | Field TypestringDescriptionRequired.A user-friendly name for CareRequestConfiguration, which is defined when the CareRequestConfiguration is created. |

## CareRequestRecords

Displays a list of objects to customize the care request.

| Field Name | Description |
| --- | --- |
| careRequestRecord | Field TypestringDescriptionRequired.The object selected to configure the care request. |

## Declarative Metadata Sample Definition

This is an example of a CareRequestConfiguration component.

```

```

This is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").