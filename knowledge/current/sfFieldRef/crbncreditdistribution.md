---
title: "CrbnCreditDistribution"
domain: sfFieldRef
topic: crbncreditdistribution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.869Z
estimatedTokens: 416
keywords: [CrbnCreditDistribution, junction, sustainability, credit, carbon, allocation, objects, offset, emissions, items, specify, activity]
---

# CrbnCreditDistribution

> Represents a junction between the sustainability credit and carbon credit
         allocation objects. To offset emissions for carbon credit allocation items, specify the
         emissions activity on this junction object.

# CrbnCreditDistribution

Represents a junction between the sustainability credit and carbon credit allocation objects. To offset emissions for carbon credit allocation items, specify the emissions activity on this junction object.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CrbnCreditDistribution in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CrbnCrAllocDate | Carbon Credit Allocation Date | date |  |  |  |  |
| CrbnCreditAllocId | Carbon Credit Allocation ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EmissionsActivityId | Emissions Activity ID | reference |  | 18 |  |  |
| Id | Carbon Credit Distribution ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SustainabilityCreditId | Sustainability Credit ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalCrbnCrAllocCost | Total Carbon Credits Allocation Cost | currency |  |  | 18 | 2 |
| TotalCrbnCrAllocInTco2e | Total Carbon Credits Allocated (tCO2e) | double |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
