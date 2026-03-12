---
title: "OwnedContentDocument"
domain: sfFieldRef
topic: ownedcontentdocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.356Z
estimatedTokens: 377
keywords: [OwnedContentDocument, file, owned, user, version, 30.0, later]
---

# OwnedContentDocument

> Represents a file owned by a user. This object is available in
  version 30.0 and later.

# OwnedContentDocument

Represents a file owned by a user. This object is available in version 30.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OwnedContentDocument](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_ownedcontentdocument.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ContentDocumentId | Content Document ID | reference |  | 18 |  |  |
| ContentSize | Content Size | int | 9 |  |  |  |
| ContentSizeLong | Content Size | long | 18 |  |  |  |
| ContentUrl | Content URL | url |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created | datetime |  |  |  |  |
| ExternalDataSourceName | External Data Source | string |  | 80 |  |  |
| ExternalDataSourceType | Class ID | picklist |  | 80 |  |  |
| FileExtension | File Extension | string |  | 40 |  |  |
| FileType | File Type | string |  | 20 |  |  |
| Id | User Owned Content Document Id | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Content Modified Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Title | Title | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
