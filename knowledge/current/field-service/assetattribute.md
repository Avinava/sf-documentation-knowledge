---
title: "AssetAttribute"
domain: field-service
topic: assetattribute
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:55.909Z
estimatedTokens: 468
keywords: [AssetAttribute, Stores, asset, attributes, track, analyze, conditions, improve, their, uptime., API, version, 57.0, later., Supported, Calls, Special, Access, Rules, Fields]
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
