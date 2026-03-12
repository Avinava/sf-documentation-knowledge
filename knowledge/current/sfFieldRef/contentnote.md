---
title: "ContentNote"
domain: sfFieldRef
topic: contentnote
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.147Z
estimatedTokens: 347
keywords: [ContentNote, created, enhanced, taking, tool, released, Winter, ‘16]
---

# ContentNote

> Represents a note created with the enhanced note taking tool, released
   in Winter ‘16.

# ContentNote

Represents a note created with the enhanced note taking tool, released in Winter ‘16.

For more information, see ContentNote in the Object Reference for Salesforce and Lightning Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Content | Content | base64 |  |  |  |  |
| ContentModifiedDate | Content Modified Date | datetime |  |  |  |  |
| ContentSize | Content Size | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created | datetime |  |  |  |  |
| FileExtension | File Extension | string |  | 20 |  |  |
| FileType | File Type | string |  | 20 |  |  |
| Id | Note Id | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsReadOnly | Is Read Only | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LatestContentId | Content Body ID | reference |  | 18 |  |  |
| LatestPublishedVersionId | ContentVersion ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SharingPrivacy | Note Privacy on Records | picklist |  | 40 |  |  |
| TextPreview | Text Preview | string |  | 255 |  |  |
| Title | Title | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
