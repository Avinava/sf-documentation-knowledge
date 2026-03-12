---
title: "TaxEngineProvider"
domain: sfFieldRef
topic: taxengineprovider
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.149Z
estimatedTokens: 440
namespace: NamespacePrefix
keywords: [TaxEngineProvider, general, service, manages, tax, engine, adapter, Apex, Salesforce, engine’s, prefix, providers, one-to-many, relationship, engines]
---

# TaxEngineProvider

> Represents general information about a service that manages a tax engine,
         such as the ID of the tax adapter Apex class in Salesforce, and the engine’s namespace
         prefix. Tax engine providers have a one-to-many relationship with tax engines, where the
         tax engine record represents a specific configuration of a tax engine that can be assigned
         to multiple order items. This object is available in API version 55.0 and later.

**Namespace:** `NamespacePrefix`

# TaxEngineProvider

Represents general information about a service that manages a tax engine, such as the ID of the tax adapter Apex class in Salesforce, and the engine’s namespace prefix. Tax engine providers have a one-to-many relationship with tax engines, where the tax engine record represents a specific configuration of a tax engine that can be assigned to multiple order items. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [TaxEngineProvider](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_taxengineprovider.htm "HTML (New Window)") in the Billing Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApexAdapterId | Class ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CustomMetadataTypeApiName | Custom Metadata Type API Name | string |  | 255 |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| DeveloperName | Name | string |  | 255 |  |  |
| Id | Tax Engine Provider ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 255 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
