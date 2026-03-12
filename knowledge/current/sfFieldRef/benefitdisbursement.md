---
title: "BenefitDisbursement"
domain: sfFieldRef
topic: benefitdisbursement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.651Z
estimatedTokens: 602
keywords: [BenefitDisbursement, allocation, enrollee's, benefit, made, monetary, non-monetary, different, frequencies, API, version, 56.0, later]
---

# BenefitDisbursement

> Represents the allocation of an enrollee's benefit that can be made as
         monetary or non-monetary with different frequencies. This object is available in API
      version 56.0 and later.

# BenefitDisbursement

Represents the allocation of an enrollee's benefit that can be made as monetary or non-monetary with different frequencies. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BenefitDisbursement in the Education Cloud Developer Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActualCompletionDate | Actual Completion Date | datetime |  |  |  |  |
| AdjustmentAmount | Adjustment Amount | currency |  |  | 18 | 2 |
| ApprovalStatus | Approval Status | picklist |  | 40 |  |  |
| BenefitAssignmentId | Benefit Assignment ID | reference |  | 18 |  |  |
| BenefitCategory | Benefit Category | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| DisbursedQuantity | Disbursed Quantity | double |  |  | 8 | 2 |
| DisbursementStatus | Disbursement Status | picklist |  | 40 |  |  |
| EndDate | End Date | datetime |  |  |  |  |
| EntitlementAmount | Entitlement Amount | currency |  |  | 18 | 2 |
| ExternalPaymentReference | External Payment Reference | string |  | 100 |  |  |
| Id | Benefit Disbursement ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| PaymentStatus | Payment Status | picklist |  | 40 |  |  |
| PayoutAmount | Payout Amount | currency |  |  | 18 | 2 |
| ProgramEnrollmentId | Program Enrollment ID | reference |  | 18 |  |  |
| RecipientCount | Recipient Count | int | 9 |  |  |  |
| RecipientId | Recipient ID | reference |  | 18 |  |  |
| RecipientType | Recipient Type | picklist |  | 40 |  |  |
| StartDate | Start Date | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UnitOfMeasureId | Unit of Measure ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
