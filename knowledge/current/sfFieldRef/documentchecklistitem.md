---
title: "DocumentChecklistItem"
domain: sfFieldRef
topic: documentchecklistitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.394Z
estimatedTokens: 481
keywords: [DocumentChecklistItem, checklist, item, file, documentation, upload]
---

# DocumentChecklistItem

> Represents a checklist item for a file documentation upload.

# DocumentChecklistItem

Represents a checklist item for a file documentation upload.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see DocumentChecklistItem in the Financial Services Cloud Developer Guide, Life Sciences Cloud Developer Guide, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DocumentCategoryId | Document Category ID | reference |  | 18 |  |  |
| DocumentTypeId | Document Type ID | reference |  | 18 |  |  |
| Id | Document Checklist Item ID | id |  | 18 |  |  |
| Instruction | Instructions | textarea |  | 32000 |  |  |
| IsAccepted | Accepted | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsFrozen | Frozen | boolean |  |  |  |  |
| IsRequired | Required | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentRecordId | Parent Record ID | reference |  | 18 |  |  |
| ReceivedDocumentId | Received Document ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TransformationInfo | Transformation Info | textarea |  | 10240 |  |  |
| UploadedById | User ID | reference |  | 18 |  |  |
| WhoId | Who ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
