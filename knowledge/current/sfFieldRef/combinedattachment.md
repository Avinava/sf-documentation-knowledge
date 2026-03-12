---
title: "CombinedAttachment"
domain: sfFieldRef
topic: combinedattachment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.522Z
estimatedTokens: 415
keywords: [CombinedAttachment, read-only, notes, attachments, Google, Docs, documents, uploaded, libraries, Salesforce, CRM, Content, files, added, Chatter]
---

# CombinedAttachment

> This read-only object contains all notes, attachments, Google Docs,
   documents uploaded to libraries in Salesforce CRM Content, and files added to Chatter that are
   associated with a record.

# CombinedAttachment

This read-only object contains all notes, attachments, Google Docs, documents uploaded to libraries in Salesforce CRM Content, and files added to Chatter that are associated with a record.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CombinedAttachment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_combinedattachment.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ContentSize | Content Size | int | 9 |  |  |  |
| ContentSizeLong | Content Size | long | 18 |  |  |  |
| ContentUrl | Content URL | url |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created | datetime |  |  |  |  |
| ExternalDataSourceName | External Data Source | string |  | 80 |  |  |
| ExternalDataSourceType | Class ID | picklist |  | 80 |  |  |
| FileExtension | File Extension | string |  | 40 |  |  |
| FileType | File Type | string |  | 30 |  |  |
| Id | Combined Attachment Id | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Content Modified Date | datetime |  |  |  |  |
| ParentId | Parent ID | reference |  | 18 |  |  |
| RecordType | Type | string |  | 30 |  |  |
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
