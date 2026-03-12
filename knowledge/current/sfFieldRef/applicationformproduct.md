---
title: "ApplicationFormProduct"
domain: sfFieldRef
topic: applicationformproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.520Z
estimatedTokens: 530
keywords: [ApplicationFormProduct, junction, application, product, requested, applicant, API, version, 59.0, later]
---

# ApplicationFormProduct

> Represents a junction between the application and the product requested by an
         applicant. This object is available in API version 59.0 and later.

# ApplicationFormProduct

Represents a junction between the application and the product requested by an applicant. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ApplicationFormProduct in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApplicantVisibleStatus | Applicant Visible Status | picklist |  | 40 |  |  |
| ApplicationFormId | Application Form ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DownPayment | Down Payment | currency |  |  | 18 | 2 |
| HasElectronicStatement | Electronic Statement | boolean |  |  |  |  |
| Id | Application Form Product ID | id |  | 18 |  |  |
| IsAtmCardRequired | ATM Card Required | boolean |  |  |  |  |
| IsCheckbookRequired | Checkbook Required | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoanPurpose | Loan Purpose | picklist |  | 40 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| OwnershipType | Ownership Type | picklist |  | 40 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| RequestedAmount | Requested Amount | currency |  |  | 18 | 2 |
| RequestedMonthlyPayment | Requested Monthly Payment | currency |  |  | 18 | 2 |
| RequestedTerm | Requested Term | int | 4 |  |  |  |
| Stage | Stage | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalBrandOwnedItemAmt | Total Brand Owned Item Amount | currency |  |  | 18 | 2 |
| TotalVendorOwnedItemAmt | Total Vendor Owned Item Amount | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
