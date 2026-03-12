---
title: "AttributePicklistValue"
domain: field-service
topic: attributepicklistvalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:54.233Z
estimatedTokens: 895
keywords: [AttributePicklistValue, asset, attribute, picklist, API, version, 57.0, later, Calls, Special, Access, Rules, Usage, Associated, Objects]
---

# AttributePicklistValue

> Represents the values of an asset attribute picklist. This object is
      available in API version 57.0 and later.

# AttributePicklistValue

Represents the values of an asset attribute picklist. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field | Details |
| --- | --- |
| Abbreviation | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA short name of the picklist value that's displayed at run time. Use up to 255 alphanumeric characters. Can include the following special characters: @ ! - < > * ? + = % # ( ) / \ & ‘ £ € $ ”. |
| Code | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA picklist value code unique to the picklist. Maximum size is 80 alphanumeric characters. Can include the following special characters: @ ! - < > * ? + = % # ( ) / \ & ‘ £ € $ ”. |
| DisplayValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe displayed picklist value if it’s different from the Name field. For example, the Name ‘5’ could have a DisplayValue ‘Five’. |
| IsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the picklist value is the default for the associated picklist. Only one value can be the default for a picklist.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the attribute picklist value was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the attribute picklist value was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the attribute picklist value. |
| PicklistId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the picklist that the value is associated with.This field is a relationship field.Relationship NamePicklistRelationship TypeLookupRefers ToAttributePicklist |
| Sequence | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe order in which the picklist value appears in the picklist. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the attribute picklist value.Possible values are:ActiveDraftInactiveThe default value is Draft. |
| Value | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe text value for a picklist item if the picklist data type is text. This value must be unique within a picklist. Maximum size is 255 alphanumeric characters. Can include the following special characters: @ ! - < > * ? + = % # ( ) / \ & ‘ £ € $ ”. |

## Usage

The AttributePicklistValue object is the child object and the AttributePicklist object contains the picklist. Let’s say you need an asset attribute to track the T-shirt size, which can be small, medium, or large. Create an AttributePicklist parent record as a Text type for the T-shirt size attribute. Then create AttributePicklistValue records, one for each picklist value small, medium, and large, and associate them with the parent record..

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

AttributePicklistValueHistory

History is available for tracked fields of the object.
