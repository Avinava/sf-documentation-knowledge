---
title: "IdentityDocument"
domain: sfFieldRef
topic: identitydocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.661Z
estimatedTokens: 370
keywords: [IdentityDocument, documents, identify, Financial, Services, Cloud, clients]
---

# IdentityDocument

> Represents information about documents used to identify Financial Services
      Cloud clients.

# IdentityDocument

Represents information about documents used to identify Financial Services Cloud clients.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see IdentityDocument in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExpirationDate | Expiration Date | date |  |  |  |  |
| Id | Identity Document ID | id |  | 18 |  |  |
| IdDocumentType | Document Type | picklist |  | 40 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IssueDate | Issue Date | date |  |  |  |  |
| IssuingAuthority | Issuing Authority/Country | string |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Document Number | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RelatedLegalEntityId | Related Legal Entity ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| VerifiedById | User ID | reference |  | 18 |  |  |
| VerifiedOn | Verified On | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
