---
title: "CrbnCreditAllocItem"
domain: sfFieldRef
topic: crbncreditallocitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.840Z
estimatedTokens: 352
keywords: [CrbnCreditAllocItem, carbon, credit, allocation, emissions, emission, activity]
---

# CrbnCreditAllocItem

> Represents information about carbon credit allocation and emissions related
         to each emission activity.

# CrbnCreditAllocItem

Represents information about carbon credit allocation and emissions related to each emission activity.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CrbnCreditAllocItem in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CrbnCreditAllocId | Carbon Credit Allocation ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EmissionsActivityId | Emissions Activity ID | reference |  | 18 |  |  |
| Id | Carbon Credit Allocation Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NetEmssnInTco2e | Net Emissions (tCO2e) | double |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalCrbnCrAllocInTco2e | Total Carbon Credits Allocated (tCO2e) | double |  |  | 18 | 2 |
| TotalEmssnInTco2e | Total Emissions (tCO2e) | double |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
