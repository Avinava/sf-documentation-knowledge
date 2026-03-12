---
title: "PcmtEmssnFctrSet"
domain: sfFieldRef
topic: pcmtemssnfctrset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:07.493Z
estimatedTokens: 406
keywords: [PcmtEmssnFctrSet, collection, emission, factors, convert, spent, amounts, procurement, data, carbon, emissions, tonnes, dioxide, equivalent, tCO₂e]
---

# PcmtEmssnFctrSet

> Represents a collection of emission factors that are used to convert spent
         amounts in procurement data to carbon emissions in tonnes of carbon dioxide equivalent
         (tCO₂e).

# PcmtEmssnFctrSet

Represents a collection of emission factors that are used to convert spent amounts in procurement data to carbon emissions in tonnes of carbon dioxide equivalent (tCO₂e).

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PcmtEmssnFctrSet in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyCode | Currency Code | picklist |  | 255 |  |  |
| Description | Description | string |  | 255 |  |  |
| EmissionFactorDataSource | Emissions Factor Data Source | textarea |  | 32000 |  |  |
| EmissionFactorUpdateYear | Emissions Factor Update Year | picklist |  | 255 |  |  |
| ExternalIdentifier | External Identifier | string |  | 255 |  |  |
| Id | Procurement Emissions Factor Set ID | id |  | 18 |  |  |
| IsComplete | Complete | boolean |  |  |  |  |
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
