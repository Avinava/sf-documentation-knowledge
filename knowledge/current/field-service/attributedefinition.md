---
title: "AttributeDefinition"
domain: field-service
topic: attributedefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:47:12.532Z
keywords: [AttributeDefinition, Supported, Calls, Special, Access, Rules, Fields, Usage, Associated, Objects]
---

# AttributeDefinition

# AttributeDefinition

Represents a product, asset, or object attribute, for example, a hardward specification or software detail. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field | Details |
| --- | --- |
| DataType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe data type of the attribute definition.Possible values are:CheckboxDateDatetimeNumberPicklistText |
| DefaultValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe default value for this attribute. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of this attribute. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe unique name of the attribute definition record.This name must begin with a letter and use only alphanumeric characters and underscores. It can't include spaces, end with an underscore, or have two consecutive underscores.The developer name is used for internal purpose and must be unique for all records (including deleted records). If the system doesn't find the name unique, it automatically overrides the user input and creates a unique name. For external use, the developer name need not be fixed. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the attribute definition is active. Active attributes definitions can be selected for assets.The default value is false. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the attribute definition is required for an asset.The default value is false. |
| Label | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for the attribute. Displays a friendly name for the attribute, for example, threshold monitor lightning component and recordset filter criteria rule. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the attribute definition was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the attribute definition was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the attribute. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the attribute definition.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PicklistId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the attribute picklist with the valid values for this attribute.This field is a relationship field.Relationship NamePicklistRelationship TypeLookupRefers ToAttributePicklist |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the attribute definition in an external system. |
| UnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the measurement unit for this attribute.This field is a relationship field.Relationship NameUnitOfMeasureRelationship TypeLookupRefers ToUnitOfMeasure |

## Usage

Add asset descriptors to the Asset object instead of creating multiple custom attributes on an asset. This helps scale to a high volume of various assets in the system. When you create the AttributeDefinition, you can provide a unique API name. If the API name is not unique, the system appends a number to the end of the API name. The value of this number depends on how many times the same name has been used.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

AttributeDefinitionHistory

History is available for tracked fields of the object.

AttributeDefinitionOwnerSharingRule

Sharing rules are available for the object.

AttributeDefinitionShare

Sharing is available for the object.