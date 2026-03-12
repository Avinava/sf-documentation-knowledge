---
title: "AssetStatePeriodAttribute"
domain: sfFieldRef
topic: assetstateperiodattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.765Z
estimatedTokens: 366
keywords: [AssetStatePeriodAttribute, virtual, holds, key-value, pair, asset, attribute, state, period, child, AssetStatePeriod, API, version, 60.0, later]
---

# AssetStatePeriodAttribute

> Represents a virtual object that holds the key-value pair of the
         asset attribute in a specified asset state period. This object is a child object of
         AssetStatePeriod. This object is available in API version 60.0 and later.

# AssetStatePeriodAttribute

Represents a virtual object that holds the key-value pair of the asset attribute in a specified asset state period. This object is a child object of AssetStatePeriod. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AssetStatePeriodAttribute](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_assetstateperiodattribute.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Transaction Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssetStatePeriodId | Asset State Period ID | reference |  | 18 |  |  |
| AttributeDefinitionId | Attribute Definition ID | reference |  | 18 |  |  |
| AttributeName | Name | string |  | 255 |  |  |
| AttributePicklistValueId | Attribute Picklist Value ID | reference |  | 18 |  |  |
| AttributeValue | Value | string |  | 150 |  |  |
| CreatedById | User ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExternalId | External ID | string |  | 255 |  |  |
| Id | Asset State Period Attribute ID | id |  | 18 |  |  |
| LastModifiedById | User ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
