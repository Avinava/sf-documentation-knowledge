---
title: "CrbnEmssnScopeAlloc"
domain: sfFieldRef
topic: crbnemssnscopealloc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.924Z
estimatedTokens: 338
keywords: [CrbnEmssnScopeAlloc, allocation, fuel, consumption, different, scope, emissions, energy, record, tCO₂e, calculated, results, classified, either, emission]
---

# CrbnEmssnScopeAlloc

> Represents the allocation of fuel consumption for different scope emissions.
         For an energy use record, tCO₂e is calculated and the results are classified as either
         Scope 1, Scope 2, or Scope 3 emission values. Each individual fuel type has its own scope
         allocation record. To put the tCO2e result in the correct scope, the energy use record
         points to the scope allocation record.

# CrbnEmssnScopeAlloc

Represents the allocation of fuel consumption for different scope emissions. For an energy use record, tCO₂e is calculated and the results are classified as either Scope 1, Scope 2, or Scope 3 emission values. Each individual fuel type has its own scope allocation record. To put the tCO2e result in the correct scope, the energy use record points to the scope allocation record.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CrbnEmssnScopeAlloc in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Carbon Emissions Scope Allocation ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
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
