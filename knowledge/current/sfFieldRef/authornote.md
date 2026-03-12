---
title: "AuthorNote"
domain: sfFieldRef
topic: authornote
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.232Z
estimatedTokens: 452
keywords: [AuthorNote, Stores, notes, associated, different, records, along, author, time, authored, isn’t, necessarily, person, created, record]
---

# AuthorNote

> Stores notes associated with different types of records along with
         information about the author of the note and the time the note was authored. The author
         isn’t necessarily the person who created a record. The author is the person who provided
         the information in the note. This object is available in API version 52.0 and
      later.

# AuthorNote

Stores notes associated with different types of records along with information about the author of the note and the time the note was authored. The author isn’t necessarily the person who created a record. The author is the person who provided the information in the note. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AuthorNote in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AuthorId | Author ID | reference |  | 18 |  |  |
| AuthorName | Author Name | string |  | 255 |  |  |
| AuthoredDateTime | Authored Date | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Author Note ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NoteText | Note Text | textarea |  | 32000 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentRecordId | ParentRecord ID | reference |  | 18 |  |  |
| RecipientType | Recipient Type | picklist |  | 40 |  |  |
| SourceSystem | Source System | string |  | 64 |  |  |
| SourceSystemIdentifier | Source System ID | string |  | 255 |  |  |
| SourceSystemModified | Source System Modified | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
