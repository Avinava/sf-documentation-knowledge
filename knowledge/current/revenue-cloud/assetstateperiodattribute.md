---
title: "AssetStatePeriodAttribute"
domain: revenue-cloud
topic: assetstateperiodattribute
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:09.565Z
estimatedTokens: 732
keywords: [AssetStatePeriodAttribute, Represents, virtual, holds, key-value, pair, asset, attribute, specified, state, period., child, AssetStatePeriod., API, version, 60.0, later., Important, Supported, Calls]
---

# AssetStatePeriodAttribute

> Represents a virtual object that holds the key-value pair of the
         asset attribute in a specified asset state period. This object is a child object of
         AssetStatePeriod. This object is available in API version 60.0 and later.

# AssetStatePeriodAttribute

Represents a virtual object that holds the key-value pair of the asset attribute in a specified asset state period. This object is a child object of AssetStatePeriod. This object is available in API version 60.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeLayout(), describeSObjects(), query(), retrieve()

## Special Access Rules

This object is available in Enterprise, Unlimited, and Developer Editions of Revenue Cloud with the [Access Lifecycle-Managed Assets user permission](https://help.salesforce.com/s/articleView?id=ind.rev_cloud_asset_migration_permission.htm&language=en_US). This object is editable only through API and not the UI.

## Fields

| Field | Details |
| --- | --- |
| AssetStatePeriodId | TypereferencePropertiesFilter, Group, SortDescriptionThe asset state period that's associated with the asset attribute.This field is a relationship field.Relationship NameAssetStatePeriodRelationship TypeMaster-detailRefers ToAssetStatePeriod (the master object) |
| AttributeDefinitionId | TypereferencePropertiesFilter, Group, SortDescriptionThe attribute definition that's associated with the asset state period attribute.This field is a relationship field.Relationship NameAttributeDefinitionRelationship TypeLookupRefers ToAttributeDefinition |
| AttributeName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the asset attribute. |
| AttributePicklistValueId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe value specified in the picklist type field that corresponds to the attribute in the AttributePicklistValue object.This field is a relationship field.Relationship NameAttributePicklistValueRelationship TypeLookupRefers ToAttributePicklistValue |
| AttributeValue | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe value of the asset state period attribute. For example, a shirt can have the value of blue, which indicates the shirt's color, or it can have the value of small, which indicates the shirt's size.You can use this field to filter records only if the DataType value in the related AttributeDefinitionId record is Text. If the DataType value is Picklist, use the value in the AttributePicklistValueId field for filtering. You can’t use this field to filter records if the DataType value is Checkbox, Currency, Date, Datetime, Multipicklist, Number, or Percent. |

## Usage

This object doesn’t support custom fields, validation rules, or triggers. In SOQL queries, you can filter records by using Id and AttributeDefinition. You can’t use AttributeValue in the WHERE clause.
