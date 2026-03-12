---
title: "ContentDocument"
domain: sfFieldRef
topic: contentdocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.075Z
estimatedTokens: 617
keywords: [ContentDocument, document, uploaded, library, Salesforce, CRM, Content, Files, versions, 17.0, later, API, version, 21.0]
---

# ContentDocument

> Represents a document that has been uploaded to a library in
			Salesforce CRM Content or Salesforce Files. This object is available in versions 17.0
			and later for Salesforce CRM Content. This object
			is available in API version 21.0 and later for Salesforce Files.

# ContentDocument

Represents a document that has been uploaded to a library in Salesforce CRM Content or Salesforce Files. This object is available in versions 17.0 and later for Salesforce CRM Content. This object is available in API version 21.0 and later for Salesforce Files.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ContentDocument](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contentdocument.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ArchivedById | User ID | reference |  | 18 |  |  |
| ArchivedDate | Archived Date | date |  |  |  |  |
| ContentAssetId | Asset File ID | reference |  | 18 |  |  |
| ContentModifiedDate | Content Modified Date | datetime |  |  |  |  |
| ContentSize | Size | int | 9 |  |  |  |
| ContentSizeLong | Size | long | 18 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created | datetime |  |  |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| FileExtension | File Extension | string |  | 40 |  |  |
| FileType | File Type | string |  | 20 |  |  |
| Id | Content Document ID | id |  | 18 |  |  |
| IsArchived | Is Archived | boolean |  |  |  |  |
| IsDeleted | Is Deleted | boolean |  |  |  |  |
| IsInternalOnly | Is Internal Only | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LatestPublishedVersionId | Latest Published Version ID | reference |  | 18 |  |  |
| MalwareScanDate | Malware Scan Date | datetime |  |  |  |  |
| MalwareScanStatus | Malware Scan Status | picklist |  | 40 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentId | Parent ID | reference |  | 18 |  |  |
| PublishStatus | Publish Status | picklist |  | 40 |  |  |
| SharingOption | Prevent others from sharing and unsharing | picklist |  | 40 |  |  |
| SharingPrivacy | File Privacy on Records | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Title | Title | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
