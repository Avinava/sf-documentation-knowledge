---
title: "RebateClaim"
domain: sfFieldRef
topic: rebateclaim
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.455Z
estimatedTokens: 516
keywords: [RebateClaim, claim, submitted, end, customer, distributor, ship, debit, rebate, program]
---

# RebateClaim

> Represents Information about the claim submitted by the end customer or
         distributor for a ship and debit rebate program.

# RebateClaim

Represents Information about the claim submitted by the end customer or distributor for a ship and debit rebate program.

For more information, see RebateClaim in the Automotive Cloud Developer Guide, and Rebate Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ClaimAmount | Claim Amount | currency |  |  | 18 | 2 |
| ClaimDate | Claim Date | datetime |  |  |  |  |
| ClaimedByAccountId | Account ID | reference |  | 18 |  |  |
| ClaimedByAccountNumber | Claimed By Account Number | string |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| Id | Rebate Claim ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Claim Number | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParticipatingAccountId | Account ID | reference |  | 18 |  |  |
| ParticipatingAccountNumber | Participating Account Number | string |  | 40 |  |  |
| ProcessingStatus | Processing Status | picklist |  | 40 |  |  |
| ProcessingStatusMessage | Processing Status Message | string |  | 1333 |  |  |
| ProductCode | Product Code | string |  | 40 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| ProgramReferenceNumber | Program Reference Number | string |  | 40 |  |  |
| Quantity | Quantity | double |  |  | 18 | 2 |
| ReferencePricePerUnit | Reference Price Per Unit | currency |  |  | 16 | 2 |
| ResalePricePerUnit | Resale Price Per Unit | currency |  |  | 16 | 2 |
| SalePricePerUnit | Sale Price Per Unit | currency |  |  | 16 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
