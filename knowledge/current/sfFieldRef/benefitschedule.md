---
title: "BenefitSchedule"
domain: sfFieldRef
topic: benefitschedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.733Z
estimatedTokens: 423
keywords: [BenefitSchedule, plan, delivering, benefit]
---

# BenefitSchedule

> Represents information about the plan for delivering the
         benefit.

# BenefitSchedule

Represents information about the plan for delivering the benefit.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BenefitSchedule in the Energy and Utilities Cloud Developer Guide, Program Management Guide, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BenefitId | Benefit ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DataPyRef__c | DataPyRef | string |  | 50 |  |  |
| DataPyTag__c | DataPyTag | double |  |  | 4 | 1 |
| DefaultBenefitQuantity | Default Benefit Quantity | double |  |  | 8 | 2 |
| Description | Description | textarea |  | 1000 |  |  |
| FirstSessionEndDateTime | First Session End Date Time | datetime |  |  |  |  |
| FirstSessionStartDateTime | First Session Start Date Time | datetime |  |  |  |  |
| Id | Benefit Schedule ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MaximumParticipantCount | Maximum Participant Count | int | 9 |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
