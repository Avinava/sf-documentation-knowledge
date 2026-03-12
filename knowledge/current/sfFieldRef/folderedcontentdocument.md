---
title: "FolderedContentDocument"
domain: sfFieldRef
topic: folderedcontentdocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.465Z
estimatedTokens: 365
keywords: [FolderedContentDocument, relationship, parent, child, ContentFolderItem, ContentWorkspace]
---

# FolderedContentDocument

> Represents the relationship between a parent and child
			ContentFolderItem in a ContentWorkspace.

# FolderedContentDocument

Represents the relationship between a parent and child ContentFolderItem in a ContentWorkspace.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FolderedContentDocument](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_folderedcontentdocument.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ContentDocumentId | Content Document ID | reference |  | 18 |  |  |
| ContentSize | Size | int | 9 |  |  |  |
| ContentSizeLong | Size | long | 18 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FileExtension | File Extension | string |  | 40 |  |  |
| FileType | File Type | string |  | 20 |  |  |
| Id | Content Folder Member ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsFolder | Is Folder | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ParentContentFolderId | Parent Content Folder ID | reference |  | 18 |  |  |
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
