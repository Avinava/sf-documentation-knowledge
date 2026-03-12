---
title: "SalesAgreement"
domain: sfFieldRef
topic: salesagreement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.809Z
estimatedTokens: 597
keywords: [SalesAgreement, long-term, agreement, buyer, seller, negotiate, price, volume, products]
---

# SalesAgreement

> Represents a long-term agreement between a buyer and a seller to negotiate
      price and volume of products.

# SalesAgreement

Represents a long-term agreement between a buyer and a seller to negotiate price and volume of products.

For more information, see SalesAgreement in the Manufacturing Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ActivatedDate | Activated Date | datetime |  |  |  |  |
| ActualsCalculationMode | Actuals Calculation Mode | picklist |  | 255 |  |  |
| AgreementType | Agreement Type | picklist |  | 255 |  |  |
| ApprovedById | User ID | reference |  | 18 |  |  |
| ApprovedDate | Approved Date | datetime |  |  |  |  |
| CancellationDate | Cancellation Date | datetime |  |  |  |  |
| CancellationReason | Cancellation Reason | picklist |  | 40 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 2000 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Sales Agreement ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastActualsCalculatedDate | Last Actuals Calculated Date | datetime |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PricebookId | Price Book ID | reference |  | 18 |  |  |
| ProductLevel | Product Level | picklist |  | 255 |  |  |
| RenewedFromAgreementId | Sales Agreement ID | reference |  | 18 |  |  |
| RenewedToAgreementId | Sales Agreement ID | reference |  | 18 |  |  |
| ScheduleCount | Schedule Count | int | 9 |  |  |  |
| ScheduleFrequency | Schedule Frequency | picklist |  | 255 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| StatusCode | Status Code | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAgreementAmount | Total Agreement Amount | currency |  |  | 18 | 2 |
| TotalProposedAgreementAmount | Total Proposed Agreement Amount | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
