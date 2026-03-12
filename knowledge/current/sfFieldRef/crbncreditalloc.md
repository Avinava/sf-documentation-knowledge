---
title: "CrbnCreditAlloc"
domain: sfFieldRef
topic: crbncreditalloc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.818Z
estimatedTokens: 575
keywords: [CrbnCreditAlloc, how, carbon, credits, allocated, organization, offset, their, emissions]
---

# CrbnCreditAlloc

> Represents information about how the carbon credits are allocated by an
         organization to offset their emissions.

# CrbnCreditAlloc

Represents information about how the carbon credits are allocated by an organization to offset their emissions.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CrbnCreditAlloc in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AllocatedCarbonCrCost | Allocated Carbon Credits Cost | currency |  |  | 18 | 2 |
| AnnualEmssnInventoryId | Annual Emissions Inventory ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Carbon Credit Allocation ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NetEmissionsInTco2e | Net Emissions (tCO2e) | double |  |  | 18 | 2 |
| NetScope1EmssnInTco2e | Net Scope 1 Emissions (tCO2e) | double |  |  | 18 | 2 |
| NetScope2EmssnInTco2e | Net Scope 2 Emissions (tCO2e) | double |  |  | 18 | 2 |
| NetScope3EmssnInTco2e | Net Scope 3 Emissions (tCO2e) | double |  |  | 18 | 2 |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Scp1CrbnCrAllocInTco2e | Scope 1 Carbon Credit Allocation (tCO2e) | double |  |  | 18 | 2 |
| Scp2CrbnCrAllocInTco2e | Scope 2 Carbon Credit Allocation (tCO2e) | double |  |  | 18 | 2 |
| Scp3CrbnCrAllocInTco2e | Scope 3 Carbon Credit Allocation (tCO2e) | double |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalCrbnCrAllocInTco2e | Total Carbon Credits Allocated (tCO2e) | double |  |  | 18 | 2 |
| TotalEmssnInTco2e | Total Emissions (tCO2e) | double |  |  | 18 | 2 |
| TotalScope1EmssnInTco2e | Total Scope 1 Emissions (tCO2e) | double |  |  | 18 | 2 |
| TotalScope2EmssnInTco2e | Total Scope 2 Emissions (tCO2e) | double |  |  | 18 | 2 |
| TotalScope3EmssnInTco2e | Total Scope 3 Emissions (tCO2e) | double |  |  | 18 | 2 |
| Year | Year | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
