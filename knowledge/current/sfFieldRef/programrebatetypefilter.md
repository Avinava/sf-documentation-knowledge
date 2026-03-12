---
title: "ProgramRebateTypeFilter"
domain: sfFieldRef
topic: programrebatetypefilter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:10.439Z
estimatedTokens: 316
keywords: [ProgramRebateTypeFilter, definition, filters, transaction, journals, eligible, rebate, filter, rebates, data, processing, engines]
---

# ProgramRebateTypeFilter

> The definition that filters the transaction journals eligible for a rebate
      type. This filter definition is used in the rebates data processing engines.

# ProgramRebateTypeFilter

The definition that filters the transaction journals eligible for a rebate type. This filter definition is used in the rebates data processing engines.

For more information, see ProgramRebateTypeFilter in the Rebate Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FilterField | Custom Field Definition ID | picklist |  | 255 |  |  |
| Id | Program Rebate Type Filter ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Operator | Operator | picklist |  | 255 |  |  |
| ProgramRebateTypeId | Program Rebate Type ID | reference |  | 18 |  |  |
| Sequence | Sequence | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Value | Value | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
