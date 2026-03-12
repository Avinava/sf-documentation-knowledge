---
title: "Benefit"
domain: sfFieldRef
topic: benefit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.551Z
estimatedTokens: 819
keywords: [Benefit, benefits, provided, sector, agencies, aim, support, citizens, their, businesses, stores, whether, financial, service-based, organizations]
---

# Benefit

> Represents the benefits provided by public sector agencies that aim to
         support citizens and their businesses. This object stores whether the benefit is for
         financial or service-based organizations.

# Benefit

Represents the benefits provided by public sector agencies that aim to support citizens and their businesses. This object stores whether the benefit is for financial or service-based organizations.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see Benefit in the Education Cloud Developer Guide, Life Sciences Cloud Developer Guide, Loyalty Management Developer Guide, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BenefitManagerId | User ID | reference |  | 18 |  |  |
| BenefitStatus | Benefit Status | picklist |  | 40 |  |  |
| BenefitTypeId | Benefit Type ID | reference |  | 18 |  |  |
| BnftDisbFieldSetApiName | Benefit Disbursement Field Set | string |  | 255 |  |  |
| BudgetAmount | Budget Amount | currency |  |  | 18 | 2 |
| BudgetAmountUsed | Budget Amount Used | currency |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| CurrentMonthDisbursedQty | Current Month Disbursed Quantity | double |  |  | 18 | 0 |
| CurrentYearAssignedQty | Current Year Assigned Quantity | double |  |  | 18 | 0 |
| CurrentYearDisbursedQty | Current Year Disbursed Quantity | double |  |  | 18 | 0 |
| Description | Description | textarea |  | 1000 |  |  |
| EndDateTime | End Date | datetime |  |  |  |  |
| EnrolleeAmountLimit | Enrollee Amount Limit | currency |  |  | 18 | 2 |
| EnrolleeLimitFrequency | Enrollee Limit Frequency | picklist |  | 40 |  |  |
| EnrolleeTrxnAmountLimit | Enrollee Transaction Amount Limit | currency |  |  | 18 | 2 |
| EnrollmentCount | Enrollment Count | int | 9 |  |  |  |
| GoalDefinitionId | Goal Definition ID | reference |  | 18 |  |  |
| Id | Benefit ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MaxBenefitAmount | Maximum Benefit Amount | currency |  |  | 18 | 2 |
| MinBenefitAmount | Minimum Benefit Amount | currency |  |  | 18 | 2 |
| Name | Benefit Name | string |  | 255 |  |  |
| PayeeType | Payee Type | picklist |  | 40 |  |  |
| PayoutFrequency | Payout Frequency | picklist |  | 255 |  |  |
| PreviousMonthDisbursedQty | Previous Month Disbursed Quantity | double |  |  | 18 | 0 |
| PreviousYearAssignedQty | Previous Year Assigned Quantity | double |  |  | 18 | 0 |
| PreviousYearDisbursedQty | Previous Year Disbursed Quantity | double |  |  | 18 | 0 |
| ProgramId | Program ID | reference |  | 18 |  |  |
| RecertificationFrequency | Recertification Frequency | int | 9 |  |  |  |
| StartDateTime | Start Date | datetime |  |  |  |  |
| StartRecertificationFrom | Start Recertification From | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UnitId | Unit of Measure ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
