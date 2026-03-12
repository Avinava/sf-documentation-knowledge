---
title: "CareProviderSearchConfig"
domain: sfFieldRef
topic: careprovidersearchconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.162Z
estimatedTokens: 342
keywords: [CareProviderSearchConfig, appear, provider, search, results, specify, arbitrary, objects, source, made, target, API, version, 48.0, later]
---

# CareProviderSearchConfig

> Represents fields that can appear in provider search results. Use this object to specify fields in arbitrary objects (source) that are made available in the search
		object (target). This object is available in API version 48.0 and later.

# CareProviderSearchConfig

Represents fields that can appear in provider search results. Use this object to specify fields in arbitrary objects (source) that are made available in the search object (target). This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CareProviderSearchConfig in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| Id | Care Provider Search Config ID | id |  | 18 |  |  |
| IsActive | Is Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MappedObject | Mapped Object | picklist |  | 255 |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| SourceField | Source Field | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetField | Target Field | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
