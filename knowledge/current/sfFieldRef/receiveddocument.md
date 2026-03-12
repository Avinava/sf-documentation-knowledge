---
title: "ReceivedDocument"
domain: sfFieldRef
topic: receiveddocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.657Z
estimatedTokens: 404
keywords: [ReceivedDocument, operation, performed, document, rotating, splitting, text, extraction]
---

# ReceivedDocument

> Contains a request for an operation to be performed on a document,
      such as rotating, splitting, or text extraction.

# ReceivedDocument

Contains a request for an operation to be performed on a document, such as rotating, splitting, or text extraction.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ReceivedDocument in the Channel Revenue Management Developer Guide, Life Sciences Cloud Developer Guide, Public Sector Solutions Developer Guide, and Rebate Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Direction | Direction | picklist |  | 255 |  |  |
| DocumentNumber | Document Number | string |  | 225 |  |  |
| Id | Received Document ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Priority | Priority | picklist |  | 255 |  |  |
| Source | Source | string |  | 225 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| StatusReason | Status Reason | textarea |  | 4000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
