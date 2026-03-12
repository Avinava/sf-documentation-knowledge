---
title: "BldgEnrgyIntensity"
domain: netzero-cloud-dev-guide
topic: bldgenrgyintensity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.561Z
estimatedTokens: 2041
keywords: [BldgEnrgyIntensity, average, energy, intensity, fuel, across, buildings, derive, data, published, sources, Alternatively, records, source, setting]
---

# BldgEnrgyIntensity

> Represents the average energy intensity by fuel type across a set of
         buildings. You can derive this data from published sources. Alternatively, you can do so by
         using energy use records as the data source and then setting up a window of time with some
         characteristics of the building size and type. This object is available in API version
      54.0 and later.

# BldgEnrgyIntensity

Represents the average energy intensity by fuel type across a set of buildings. You can derive this data from published sources. Alternatively, you can do so by using energy use records as the data source and then setting up a window of time with some characteristics of the building size and type. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AnnualEnergyIntensityInKwhM2 | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe average energy consumption intensity for a year in kWh per square meter. The fuel-specific energy consumption intensities are stored in the associated building energy intensity value records. |
| AnnualEnergyIntensityInKwhSqft | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe average energy consumption intensity for a year in kWh per square foot. The fuel-specific energy consumption intensities are stored in the associated building energy intensity value records. |
| AreSysGenEnrgyUseRecIncluded | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescription"Indicates whether to include records created when filling data gaps (true) or not (false). Note: Including these records could result in inaccurate calculations."The default value is 'false'. |
| AveragePowerUsageEffectiveness | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescription |
| AveragingWindowEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the energy use records are considered to calculate the building energy intensity. |
| AveragingWindowStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the energy use records are considered to calculate the building energy intensity. |
| BldgEnergyIntensityIdentifier | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe unique external identifier for the building energy intensity record. |
| BuildingAssetType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe stationary asset type of the asset for which the building energy intensity is calculated. |
| BuildingSize | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription |
| BuildingSizeCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe building size category record for the stationary asset. You can add appropriate building size ranges by creating or editing building size category records.This is a relationship field.Relationship NameBuildingSizeCategoryRelationship TypeLookupRefers ToBldgSizeCategory |
| BusinessRegion | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe business region. If you select the business region, you can't select the country and state. |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the country. You can enter a country only when you don’t select the business region. |
| EmissionFactorDataSource | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe source of the emissions factor reference data. |
| EmissionFactorUpdateYear | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe year when the emissions factor reference data was last updated by a publishing authority. |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external identifier for the emissions factor. |
| IsRecordLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates that the record is locked for editing.The default value is false. |
| LastCalculatedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the record was most recently calculated. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| MaximumBuildingSizeInM2 | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum size of the building in square meters. This value is used to calculate building energy intensity. |
| MaximumBuildingSizeInSqft | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum size of the building in square feet. This value is used to calculate building energy intensity. |
| MinimumBuildingSizeInM2 | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum size of the building in square meters. This value is used to calculate building energy intensity. |
| MinimumBuildingSizeInSqft | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum size of the building in square meters. This value is used to calculate building energy intensity. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ReferenceDataLoadLogId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe reference data load log record that's associated with the emissions factor.This field is a relationship field.Relationship NameReferenceDataLoadLogRelationship TypeLookupRefers ToReferenceDataLoadLog |
| RegionalDivision | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe regional division for this building energy intensity record.Possible values are:EastNorthCentral—East North CentralEastSouthCentral—East South CentralMiddleAtlantic—Middle AtlanticMountainNewEngland—New EnglandPacificSouthAtlantic—South AtlanticWestNorthCentral—West North CentralWestSouthCentral—West South Central |
| ShouldLockDtastUpdtForRec | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the emissions factor record can be locked from dataset updates.The default value is false. |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the state. You can enter a state only when you don’t select the business region and don’t enter multiple countries. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BldgEnrgyIntensityFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BldgEnrgyIntensityHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[BldgEnrgyIntensityShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- BldgEnrgyIntensityFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- BldgEnrgyIntensityHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- BldgEnrgyIntensityShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
