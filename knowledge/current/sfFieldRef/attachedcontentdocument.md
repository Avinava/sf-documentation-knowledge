---
title: "AttachedContentDocument"
domain: sfFieldRef
topic: attachedcontentdocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.860Z
estimatedTokens: 402
keywords: [AttachedContentDocument, read-only, ContentDocument, objects, associated]
---

# AttachedContentDocument

> This read-only object contains all ContentDocument objects associated with an object.

# AttachedContentDocument

This read-only object contains all ContentDocument objects associated with an object.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AttachedContentDocument](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_attachedcontentdocument.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

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
| Id | Content Document Link Id | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Content Modified Date | datetime |  |  |  |  |
| LinkedEntityId | Parent ID | reference |  | 18 |  |  |
| SharingOption | Prevent others from sharing and unsharing | picklist |  | 40 |  |  |
| Title | Title | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
