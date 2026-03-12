---
title: "AssetTitle"
domain: automotive-cloud
topic: assettitle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.061Z
estimatedTokens: 1009
keywords: [AssetTitle, establishes, legal, ownership, asset, vehicle, API, version, 60.0, later, Calls, Associated, Objects]
---

# AssetTitle

> Represents information that establishes the legal ownership of an asset or a
         vehicle. This object is available in API version 60.0 and later.

# AssetTitle

Represents information that establishes the legal ownership of an asset or a vehicle. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Asset associated with the Asset Title record.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the validity of the title ends. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the title is issued. |
| FinancialAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe active Financial Account associated with the asset or vehicle for the Asset Title record.This field is a relationship field.Relationship NameFinancialAccountRelationship TypeLookupRefers ToFinancialAccount |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIdentifies whether the title is active (true) or not (false).The default value is false. |
| IssueFormat | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the format used to issue or transfer the asset title.Possible values are:ElectronicPaper |
| IssuePlaceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe place of issue for an asset title.This field is a relationship field.Relationship NameIssuePlaceRelationship TypeLookupRefers ToGeoState |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| LienStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the lien status of the title.Possible values are:ActiveNoneRelease RequestedReleased |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the Asset Title record. |
| TitleNumber | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique identification number of the title. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of condition of the vehicle or asset associated with the title.Possible values are:CleanClearRebuiltSalvaged |
| VehicleId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe vehicle associated with the Asset Title record.This field is a relationship field.Relationship NameVehicleRelationship TypeLookupRefers ToVehicle |
| VehicleIdentificationNumber | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe vehicle identification number of the vehicle associated with a title. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AssetTitleChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[AssetTitleFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AssetTitleHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
