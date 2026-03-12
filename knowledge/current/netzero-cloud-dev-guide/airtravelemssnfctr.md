---
title: "AirTravelEmssnFctr"
domain: netzero-cloud-dev-guide
topic: airtravelemssnfctr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.343Z
estimatedTokens: 1874
keywords: [AirTravelEmssnFctr, emissions, factors, scope, commercial, air, travel, API, version, 54.0, later, Calls, Associated, Objects]
---

# AirTravelEmssnFctr

> Represents the emissions factors for scope 3 commercial air travel. This
      object is available in API version 54.0 and later.

# AirTravelEmssnFctr

Represents the emissions factors for scope 3 commercial air travel. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Ch4PsgrKmLongHaulInKgCo2e | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CH4 emissions per passenger-kilometer in CO2e from long-haul flights. |
| Ch4PsgrKmMediumHaulInKgCo2e | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CH4 emissions per passenger-kilometer in CO2e from medium-haul flights. |
| Ch4PsgrKmShortHaulInKgCo2e | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CH4 emissions per passenger-kilometer in CO2e from short-haul flights. |
| Ch4PsgrMileLongHaulInKgCo2e | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CH4 emissions per passenger-mile in CO2e from long-haul flights. |
| Ch4PsgrMileMediumHaulInKgCo2e | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CH4 emissions per passenger-mile in CO2e from medium-haul flights. |
| Ch4PsgrMileShortHaulInKgCo2e | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CH4 emissions per passenger-mile in CO2e from short-haul flights. |
| Co2PsgrKmLongHaulInKg | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CO2 emissions per passenger-kilometer from long-haul flights. |
| Co2PsgrKmMediumHaulInKg | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CO2 emissions per passenger-kilometer from medium-haul flights. |
| Co2PsgrKmShortHaulInKg | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CO2 emissions per passenger-kilometer from short-haul flights. |
| Co2PsgrMileLongHaulInKg | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CO2 emissions per passenger-mile from long-haul flights. |
| Co2PsgrMileMediumHaulInKg | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CO2 emissions per passenger-mile from medium-haul flights. |
| Co2PsgrMileShortHaulInKg | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CO2 emissions per passenger-mile from short-haul flights. |
| DistanceUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the distance.Possible values are:KilometersMilesThe default value is 'Kilometers'. |
| EmissionFactorDataSource | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe source of the emissions factor reference data. |
| EmissionFactorUpdateYear | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe year in which this reference data for the emissions factor was most recently updated.Possible values are:20002001200220032004200520062007200820092010201120122013201420152016201720182019202020212022202320242025202620272028202920302031203220332034203520362037203820392040 |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external identifier for the emissions factor. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| LongHaulMinimumDistance | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum distance for a long-haul flight that’s adjusted according to the short-haul or medium-haul distances. |
| MediumHaulMaximumDistance | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum distance of a medium-haul flight. |
| N2oPsgrKmLongHaulInKgCo2e | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe N2O emissions per passenger-kilometer in CO2e from long-haul flights. |
| N2oPsgrKmMediumHaulInKgCo2e | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe N2O emissions per passenger-kilometer in CO2e from medium-haul flights. |
| N2oPsgrKmShortHaulInKgCo2e | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe N2O emissions per passenger-kilometer in CO2e from short-haul flights. |
| N2oPsgrMileLongHaulInKgCo2e | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe N2O emissions per passenger-mile in CO2e from long-haul flights. |
| N2oPsgrMileMediumHaulInKgCo2e | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe N2O emissions per passenger-mile in CO2e from medium-haul flights. |
| N2oPsgrMileShortHaulInKgCo2e | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe N2O emissions per passenger-mile in CO2e from short-haul flights. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ReferenceDataLoadLogId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe reference data load log record that's associated with the emissions factor.This field is a relationship field.Relationship NameReferenceDataLoadLogRelationship TypeLookupRefers ToReferenceDataLoadLog |
| ShortHaulMaximumDistance | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum distance of a short-haul flight. |
| ShouldLockDtastUpdtForRec | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the emissions factor record can be locked from dataset updates.The default value is false. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AirTravelEmssnFctrFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AirTravelEmssnFctrHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AirTravelEmssnFctrShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AirTravelEmssnFctrFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- AirTravelEmssnFctrHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- AirTravelEmssnFctrShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
