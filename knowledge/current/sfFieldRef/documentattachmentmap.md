---
title: "DocumentAttachmentMap"
domain: sfFieldRef
topic: documentattachmentmap
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.375Z
estimatedTokens: 237
keywords: [DocumentAttachmentMap, Maps, relationship, EmailTemplate, attachment, stored, Document]
---

# DocumentAttachmentMap

> Maps the relationship between an EmailTemplate and its attachment,
      which is stored as a Document.

# DocumentAttachmentMap

Maps the relationship between an EmailTemplate and its attachment, which is stored as a Document.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [DocumentAttachmentMap](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_documentattachmentmap.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DocumentId | Document ID | reference |  | 18 |  |  |
| DocumentSequence | Attachment Sequence | int | 9 |  |  |  |
| Id | Document Entity Map Id | id |  | 18 |  |  |
| ParentId | Entity ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
