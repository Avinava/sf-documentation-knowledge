---
title: "BenefitAssignmentAdjustment"
domain: sfFieldRef
topic: benefitassignmentadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.594Z
estimatedTokens: 453
keywords: [BenefitAssignmentAdjustment, monetary, non-monetary, benefit, adjustment, made, enrollee, disbursed, various, frequencies, API, version, 56.0, later]
---

# BenefitAssignmentAdjustment

> Represents a monetary or non-monetary benefit adjustment made to an
         enrollee that can be disbursed in various frequencies. This object is available in API
      version 56.0 and later.

# BenefitAssignmentAdjustment

Represents a monetary or non-monetary benefit adjustment made to an enrollee that can be disbursed in various frequencies. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BenefitAssignmentAdjustment in the Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentType | Adjustment Type | picklist |  | 255 |  |  |
| ApprovalStatus | Approval Status | picklist |  | 40 |  |  |
| BenefitAssignmentId | Benefit Assignment ID | reference |  | 18 |  |  |
| Comment | Comment | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Benefit Assignment Adjustment ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ProcessingStatus | Processing Status | picklist |  | 255 |  |  |
| Reason | Reason | string |  | 255 |  |  |
| RecurringAmount | Recurring Amount | currency |  |  | 18 | 2 |
| ReferenceRecordId | ReferenceRecord ID | reference |  | 18 |  |  |
| StartDate | Start Date Time | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAdjustmentAmount | Total Adjustment Amount | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
