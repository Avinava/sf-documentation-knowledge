---
title: "RefrigerantEmssnFctr"
domain: sfFieldRef
topic: refrigerantemssnfctr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.937Z
estimatedTokens: 394
keywords: [RefrigerantEmssnFctr, warming, potential, individual, refrigerants, compares, atmospheric, radiative, forcing, molecule, refrigerant, carbon, dioxide]
---

# RefrigerantEmssnFctr

> Represents the global warming potential values for individual refrigerants.
         Global warming potential compares the atmospheric radiative forcing of one molecule of
         refrigerant to that of carbon dioxide.

# RefrigerantEmssnFctr

Represents the global warming potential values for individual refrigerants. Global warming potential compares the atmospheric radiative forcing of one molecule of refrigerant to that of carbon dioxide.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see RefrigerantEmssnFctr in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EmissionFactorDataSource | Emissions Factor Data Source | textarea |  | 32000 |  |  |
| EmissionFactorUpdateYear | Emissions Factor Update Year | picklist |  | 255 |  |  |
| ExternalIdentifier | External Identifier | string |  | 255 |  |  |
| GlblWarmingPotInKgCo2eKg | Global Warming Potential | double |  |  | 18 | 0 |
| Id | Refrigerant Emissions Factor ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ReferenceDataLoadLogId | Reference Data Load Log ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
