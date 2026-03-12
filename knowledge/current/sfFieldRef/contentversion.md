---
title: "ContentVersion"
domain: sfFieldRef
topic: contentversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.223Z
estimatedTokens: 906
keywords: [ContentVersion, specific, version, document, Salesforce, CRM, Content, Files, versions, 17.0, later, documents, 20.0]
---

# ContentVersion

> Represents a specific version of a document in Salesforce CRM
			Content or Salesforce Files. This object is available in versions 17.0 and later
		for Salesforce CRM Content documents. This object is available in versions 20.0 and later
		for Salesforce Files.

# ContentVersion

Represents a specific version of a document in Salesforce CRM Content or Salesforce Files. This object is available in versions 17.0 and later for Salesforce CRM Content documents. This object is available in versions 20.0 and later for Salesforce Files.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ContentVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contentversion.htm "HTML (New Window)") in the Consumer Goods Cloud Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Checksum | Checksum | string |  | 50 |  |  |
| ContentBodyId | Content Body ID | reference |  | 18 |  |  |
| ContentDocumentId | Content Document ID | reference |  | 18 |  |  |
| ContentLocation | Content Location | picklist |  | 40 |  |  |
| ContentModifiedById | User ID | reference |  | 18 |  |  |
| ContentModifiedDate | Content Modified Date | datetime |  |  |  |  |
| ContentSize | Size | int | 9 |  |  |  |
| ContentSizeLong | Size | long | 18 |  |  |  |
| ContentUrl | Content URL | url |  | 1333 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| ExternalDataSourceId | External Data Source ID | reference |  | 18 |  |  |
| ExternalDocumentInfo1 | External Document Info1 | string |  | 1000 |  |  |
| ExternalDocumentInfo2 | External Document Info2 | string |  | 1000 |  |  |
| FeaturedContentBoost | Featured Content Boost | int | 9 |  |  |  |
| FeaturedContentDate | Featured Content Date | date |  |  |  |  |
| FileExtension | File Extension | string |  | 40 |  |  |
| FileType | File Type | string |  | 20 |  |  |
| FirstPublishLocationId | First Publish Location ID | reference |  | 18 |  |  |
| Id | Content Version ID | id |  | 18 |  |  |
| IsAssetEnabled | Asset File Enabled | boolean |  |  |  |  |
| IsDeleted | Is Deleted | boolean |  |  |  |  |
| IsLatest | Is Latest | boolean |  |  |  |  |
| IsMajorVersion | Major Version | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MalwareScanDate | Malware Scan Date | datetime |  |  |  |  |
| MalwareScanStatus | Malware Scan Status | picklist |  | 40 |  |  |
| NegativeRatingCount | Negative Rating Count | int | 9 |  |  |  |
| Origin | Content Origin | picklist |  | 40 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PathOnClient | Path On Client | string |  | 500 |  |  |
| PositiveRatingCount | Positive Rating Count | int | 9 |  |  |  |
| PublishStatus | Publish Status | picklist |  | 40 |  |  |
| RatingCount | Rating Count | int | 9 |  |  |  |
| ReasonForChange | Reason For Change | string |  | 1000 |  |  |
| SharingOption | Prevent others from sharing and unsharing | picklist |  | 40 |  |  |
| SharingPrivacy | File Privacy on Records | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TagCsv | Tags | textarea |  | 2000 |  |  |
| TextPreview | Text Preview | string |  | 255 |  |  |
| Title | Title | string |  | 255 |  |  |
| VersionData | Version Data | base64 |  |  |  |  |
| VersionDataUrl | Version Data URL | string |  | 255 |  |  |
| VersionNumber | Version Number | string |  | 20 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
