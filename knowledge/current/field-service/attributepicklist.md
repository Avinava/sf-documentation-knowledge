---
title: "AttributePicklist"
domain: field-service
topic: attributepicklist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:54.226Z
estimatedTokens: 771
keywords: [AttributePicklist, custom, picklist, asset, attribute, API, version, 57.0, later, Calls, Special, Access, Rules, Usage, Associated]
---

# AttributePicklist

> Represents a custom picklist for an asset attribute. This object is
      available in API version 57.0 and later.

# AttributePicklist

Represents a custom picklist for an asset attribute. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field | Details |
| --- | --- |
| DataType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe data type of this picklist.Possible values are:BooleanCurrencyDateDatetimeNumberPercentTextThe default value is Boolean. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the picklist. Maximum size is 32000 alphanumeric characters. Can include the following special characters: @! - < > * ? + = % # ( ) / \ & ‘ £ € $ ”. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the attribute picklist was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the attribute picklist was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the picklist. Names must be unique. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the attribute picklist record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the attribute picklist.Possible values are:ActiveDraftInactiveThe default value is Draft. |
| UnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the unit of measure associated with the product.This field is a relationship field.This field is available when Revenue Cloud is enabled.This field is available in API version 63.0 and later.Relationship NameUnitOfMeasureRefers ToUnitOfMeasure |

## Usage

The AttributePicklist object is the parent object and the AttributePicklistValue object contains the picklist values. Let’s say you need an asset attribute to track the T-shirt size, which can be small, medium, or large. Create an AttributePicklist parent record as a Text type for the T-shirt size attribute. Then create AttributePicklistValue records, one for each picklist value small, medium, and large, and associate them with the parent record.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

AttributePicklistHistory

History is available for tracked fields of the object.

AttributePicklistOwnerSharingRule

Sharing rules are available for the object.

AttributePicklistShare

Sharing is available for the object.
