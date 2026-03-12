---
title: "DocumentEnvelope"
domain: sfFieldRef
topic: documentenvelope
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.468Z
estimatedTokens: 458
keywords: [DocumentEnvelope, container, document, routed, signatures, API, version, 56.0, later]
---

# DocumentEnvelope

> The container for a document that is routed for signatures. This object is available in API version 56.0 and later.

# DocumentEnvelope

The container for a document that is routed for signatures. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see DocumentEnvelope in the Salesforce Contracts Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeliveredDateTime | Delivered Date Time | datetime |  |  |  |  |
| EnvelopeIdentifier | Envelope Identifier | string |  | 80 |  |  |
| EnvelopeMessageContent | Envelope Message | textarea |  | 32768 |  |  |
| EnvelopeSubject | Envelope Subject | string |  | 1000 |  |  |
| EnvelopeUri | Envelope URI | string |  | 255 |  |  |
| FinalStatusDateTime | Final Status Date Time | datetime |  |  |  |  |
| FinalStatusReason | Final Status Reason | string |  | 1000 |  |  |
| Id | Document Envelope ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastSyncDateTime | Last Sync Date Time | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ReferenceObjectId | ReferenceObject ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| StatusChangeDateTime | Status Change Date Time | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Vendor | Vendor | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
