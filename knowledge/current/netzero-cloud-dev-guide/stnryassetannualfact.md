---
title: "StnryAssetAnnualFact"
domain: netzero-cloud-dev-guide
topic: stnryassetannualfact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.963Z
estimatedTokens: 1136
keywords: [StnryAssetAnnualFact, stationary, assets, their, quantify, intensity, API, version, 56.0, later, Calls, Associated, Objects]
---

# StnryAssetAnnualFact

> Represents the information about stationary assets and their types, which is
         used to quantify the related intensity. This object is available in API version 56.0
      and later.

# StnryAssetAnnualFact

Represents the information about stationary assets and their types, which is used to quantify the related intensity. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicableYear | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the year that's applicable to the stationary asset annual fact.Possible values are:2000200120022003200420052006200720082009201020112012201320142015201620172018201920202021202220232024202520262027202820292030203120322033203420352036203720382039204020412042204320442045204620472048204920502051205220532054205520562057205820592060206120622063206420652066206720682069207020712072207320742075207620772078207920802081208220832084208520862087208820892090209120922093209420952096209720982099 |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe information about the stationary asset. |
| EmployeeCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe count of employees that are associated with the stationary asset. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the stationary asset master data. |
| OccupiedFloorArea | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe floor area in a building that's occupied by an organization. This value is used in the associated stationary asset water footprint or its water activities. |
| OccupiedFloorAreaUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the unit of measure to calculate the occupied floor area.Possible values are:m2sqftThe default value is sqft. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| Revenue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe revenue generated from the associated stationary asset. |
| StnryAssetEnvrSrcId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionSpecifies the environmental source that's associated with the stationary asset.This field is a relationship field.Relationship NameStnryAssetEnvrSrcRelationship TypeLookupRefers ToStnryAssetEnvrSrc |
| TotalFloorArea | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total floor area in a building for an organization. This value is used in the associated stationary asset water footprint or its water activities. |
| TotalFloorAreaUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the unit of measure to calculate the total floor area.Possible values are:m2sqftThe default value is sqft. |
| TotalUnitsManufactured | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total units manufactured by the associated stationary asset. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[StnryAssetAnnualFactFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[StnryAssetAnnualFactHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- StnryAssetAnnualFactFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- StnryAssetAnnualFactHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
