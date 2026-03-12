---
title: "AssetAttribute"
domain: object-reference
topic: assetattribute
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:04.985Z
estimatedTokens: 748
keywords: [AssetAttribute, Stores, asset, attributes, track, analyze, conditions, improve, their, uptime, API, version, 57.0, later, Calls]
---

# AssetAttribute

> Stores asset attributes to track and analyze asset conditions to improve
         their uptime. This object is available in API version 57.0 and later.

# AssetAttribute

Stores asset attributes to track and analyze asset conditions to improve their uptime. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), update()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the asset.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| AttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the attribute definition for this asset attribute.This field is a relationship field.Relationship NameAttributeDefinitionRelationship TypeLookupRefers ToAttributeDefinition |
| AttributeName | TypestringPropertiesFilter, Group, SortDescriptionThe name given to the asset attribute in the UI by the user. |
| AttributePicklistValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the attribute picklist value if the attribute is a picklist type.This field is a relationship field.Relationship NameAttributePicklistValueRelationship TypeLookupRefers ToAttributePicklistValue |
| AttributeValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the value of an asset attribute, for example 5-TB storage . |
| ExternalId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn auto-generated ID of the attribute record saved in an external system (for example an HBase database). This field is reserved and used for internal purpose. |

## Usage

Add asset descriptors to the AssetAttribute object instead of creating multiple custom attributes on an asset. This helps scale to a high asset volume in the system.

#### See Also

-   [AttributeDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attributedefinition.htm "Represents a product, asset, or object attribute, for example, a hardward specification or software detail. This object is available in API version 57.0 and later.")

-   [AttributePicklist](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attributepicklist.htm "Represents a custom picklist for an asset attribute. This object is available in API version 57.0 and later.")

-   [AttributePicklistValue](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attributepicklistvalue.htm "Represents the values of an asset attribute picklist. This object is available in API version 57.0 and later.")

-   [RecordsetFltrCritMonitor](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_recordsetfltrcritmonitor.htm "Monitors whether the value of an asset attribute is within the threshold of a recordset filter criteria (RFC). You can monitor one or more RFCs for an Asset. This object is available in API version 57.0 and later.")

## Related Topics

- AttributeDefinition (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attributedefinition.htm)
- AttributePicklist (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attributepicklist.htm)
- AttributePicklistValue (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attributepicklistvalue.htm)
- RecordsetFltrCritMonitor (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_recordsetfltrcritmonitor.htm)
