---
title: "AccountingFieldMapping"
domain: sfFieldRef
topic: accountingfieldmapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.073Z
estimatedTokens: 414
namespace: NamespacePrefix
keywords: [AccountingFieldMapping, custom, mappings, populate, transaction, journal, records, Salesforce, data, API, version, 58.0, later]
---

# AccountingFieldMapping

> Represents the custom field mappings used to populate transaction journal
         records with other Salesforce data. This object is available in API version 58.0 and
      later.

**Namespace:** `NamespacePrefix`

# AccountingFieldMapping

Represents the custom field mappings used to populate transaction journal records with other Salesforce data. This object is available in API version 58.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AccountingFieldMapping in the Accounting Subledger Developer Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountingModelConfigId | ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| Id | Accounting Field Mapping ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsForAllocationType | Is for Allocation Type | boolean |  |  |  |  |
| IsForPaymentType | Is for Payment Type | boolean |  |  |  |  |
| IsForTransactionType | Is for Transaction Type | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MappingBehavior | Mapping Behavior | picklist |  | 255 |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| SourceField | Custom Field Definition ID | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetField | Custom Field Definition ID | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
