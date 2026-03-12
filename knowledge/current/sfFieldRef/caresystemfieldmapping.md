---
title: "CareSystemFieldMapping"
domain: sfFieldRef
topic: caresystemfieldmapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.465Z
estimatedTokens: 332
namespace: NamespacePrefix
keywords: [CareSystemFieldMapping, mapping, source, system, Salesforce, target, entities, attributes]
---

# CareSystemFieldMapping

> Represents a mapping from source system fields to Salesforce target entities and attributes.

**Namespace:** `NamespacePrefix`

# CareSystemFieldMapping

Represents a mapping from source system fields to Salesforce target entities and attributes.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CareSystemFieldMapping in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| ExternalIdField | External ID Field | string |  | 255 |  |  |
| Id | Care System Field Mapping ID | id |  | 18 |  |  |
| IsActive | Is Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| Role | Role | picklist |  | 255 |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetObject | Target Object | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
