---
title: "FrgtHaulingEmssnFctr"
domain: netzero-cloud-dev-guide
topic: frgthaulingemssnfctr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.190Z
estimatedTokens: 1391
keywords: [FrgtHaulingEmssnFctr, emissions, factors, scope, freight, hauling, API, version, 54.0, later, Calls, Associated, Objects]
---

# FrgtHaulingEmssnFctr

> Represents the emissions factors for scope 3 freight hauling. This
      object is available in API version 54.0 and later.

# FrgtHaulingEmssnFctr

Represents the emissions factors for scope 3 freight hauling. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Ch4EmissionsFactor | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CH4 emissions factor associated with the freight hauling mode. |
| Ch4EmissionsFactorUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the CH4 emissions factor.Possible values are:G_PER_TONNE_KM—g/tonne-kmG_PER_TONNE_MI—g/ton-miThe default value is 'G_PER_TONNE_KM'. |
| Co2EmissionsFactor | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CO2 emissions factor associated with the freight hauling mode. |
| Co2EmissionsFactorUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the CO2 emissions factor.Possible values are:G_PER_TONNE_MI—g/ton-miKG_PER_TONNE_KM—kg/tonne-kmThe default value is 'KG_PER_TONNE_KM'. |
| EmissionFactorDataSource | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe source of the emissions factor reference data. |
| EmissionFactorUpdateYear | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe year in which this reference data for the emissions factor was most recently updated.Possible values are:20002001200220032004200520062007200820092010201120122013201420152016201720182019202020212022202320242025202620272028202920302031203220332034203520362037203820392040 |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external identifier for the emissions factor. |
| FreightHaulingMode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe freight hauling mode that's used to calculate the emissions.Possible values are:AirRailRoadWater |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| N2oEmissionsFactor | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe N2O emissions factor associated with the freight hauling mode. |
| N2oEmissionsFactorUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the N2O emissions factor.Possible values are:G_PER_TONNE_KM—g/tonne-kmG_PER_TONNE_MI—g/ton-miThe default value is 'G_PER_TONNE_KM'. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OtherEmssnFctrId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe other emission factor set record containing global warming potential values for CH4 and N2O.This is a relationship field.Relationship NameOtherEmssnFctrRelationship TypeLookupRefers ToOtherEmssnFctrSet |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ReferenceDataLoadLogId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe reference data load log record that's associated with the emissions factor.This field is a relationship field.Relationship NameReferenceDataLoadLogRelationship TypeLookupRefers ToReferenceDataLoadLog |
| ShouldLockDtastUpdtForRec | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the emissions factor record can be locked from dataset updates.The default value is false. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FrgtHaulingEmssnFctrFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[FrgtHaulingEmssnFctrHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[FrgtHaulingEmssnFctrShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FrgtHaulingEmssnFctrFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- FrgtHaulingEmssnFctrHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- FrgtHaulingEmssnFctrShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
