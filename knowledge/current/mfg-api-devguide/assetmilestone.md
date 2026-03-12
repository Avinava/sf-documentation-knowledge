---
title: "AssetMilestone"
domain: mfg-api-devguide
topic: assetmilestone
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.599Z
estimatedTokens: 1146
keywords: [AssetMilestone, key, events, lifecycle, asset, manufacturing, registration, resale, API, version, 58.0, later, Calls]
---

# AssetMilestone

> Represents the key events in the lifecycle of an asset, such as
         manufacturing, registration, or resale. This object is available in API version 58.0
      and later.

# AssetMilestone

Represents the key events in the lifecycle of an asset, such as manufacturing, registration, or resale. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Address | TypeaddressPropertiesFilter, NillableDescriptionThe address associated with the milestone. |
| AssetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe asset record that's associated with the milestone.This field is a relationship field.Relationship NameAssetRelationship TypeMaster-detailRefers ToAsset (the master object) |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city where the milestone occurred. |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country where the milestone occurred. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the milestone. |
| ExpiredDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expiration date of the milestone. |
| GeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe level of accuracy of a location’s geographical coordinates compared with its physical address. A geocoding service typically provides this value based on the milestone location’s latitude and longitude coordinates.Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Latitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the milestone location. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location associated with the milestone.This field is a relationship field.Relationship NameLocationRelationship TypeLookupRefers ToLocation |
| Longitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the milestone location. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| MilestoneDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date on which the milestone occurred. |
| MilestoneType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of milestone. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the asset milestone. |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the location where the milestone occurred. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the milestone in the external system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external system from where the record was imported. |
| Stage | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the stage of the milestone.Possible values are:ActiveExpiredTentative |
| StageComment | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe comments about the stage of the milestone. For example, the reason for marking the milestone as tentative. |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state where the milestone occurred. |
| Street | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street where the milestone occurred. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage type of the asset milestone.Possible values are:Manufacturing |
