---
title: "AttributePicklist"
domain: object-reference
topic: attributepicklist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.242Z
estimatedTokens: 1273
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

[AttributePicklistHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AttributePicklistOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[AttributePicklistShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

#### See Also

-   [AssetAttribute](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_assetattribute.htm "Stores asset attributes to track and analyze asset conditions to improve their uptime. This object is available in API version 57.0 and later.")

-   [AttributeDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attributedefinition.htm "Represents a product, asset, or object attribute, for example, a hardward specification or software detail. This object is available in API version 57.0 and later.")

-   [AttributePicklistValue](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attributepicklistvalue.htm "Represents the values of an asset attribute picklist. This object is available in API version 57.0 and later.")

-   [RecordsetFltrCritMonitor](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_recordsetfltrcritmonitor.htm "Monitors whether the value of an asset attribute is within the threshold of a recordset filter criteria (RFC). You can monitor one or more RFCs for an Asset. This object is available in API version 57.0 and later.")

## Related Topics

- AttributePicklistHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- AttributePicklistOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- AttributePicklistShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
- AssetAttribute (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_assetattribute.htm)
- AttributeDefinition (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attributedefinition.htm)
- AttributePicklistValue (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attributepicklistvalue.htm)
- RecordsetFltrCritMonitor (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_recordsetfltrcritmonitor.htm)
