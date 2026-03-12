---
title: "FrgtHaulingEnrgyUse"
domain: netzero-cloud-dev-guide
topic: frgthaulingenrgyuse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.211Z
estimatedTokens: 1882
keywords: [FrgtHaulingEnrgyUse, energy, consumption, freight, hauling, API, version, 54.0, later, Calls, Associated, Objects]
---

# FrgtHaulingEnrgyUse

> Represents the energy consumption related to freight hauling. This
      object is available in API version 54.0 and later.

# FrgtHaulingEnrgyUse

Represents the energy consumption related to freight hauling. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CarbonFootprintReportDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the carbon footprint data of the associated stationary asset is due to be sent to a reporting body. |
| Ch4EmissionsInKg | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CH4 emissions that are calculated for this energy use record. |
| Co2EmissionsInKg | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CO2 emissions that are calculated for this energy use record. |
| Distance | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe distance travelled by the freight vehicle. |
| DistanceUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the distance travelled.Possible values are:KilometersMilesNautical MilesThe default value is 'Kilometers'. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the values of this energy use record are valid. |
| FreightHaulingMode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe mode for freight hauling.Possible values are:AirRailRoadWater |
| FrgtHaulingEmssnFctrId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe freight hauling emission factors that are used to calculate the emissions.This is a relationship field.Relationship NameFrgtHaulingEmssnFctrRelationship TypeLookupRefers ToFrgtHaulingEmssnFctr |
| IsRecordLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the freight hauling energy use record is locked for editing because the associated carbon footprint is locked for editing.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| N2oEmissionsInKg | TypedoublePropertiesFilter, Nillable, SortDescriptionThe N2O emissions that are calculated for this energy use record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Scope3Category | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe scope 3 freight category to allocate to this energy use record. This value is added to the corresponding scope 3 category in the carbon footprint.Possible values are:Downstream Transportation and DistributionUpstream Transportation and DistributionThe default value is 'Downstream Transportation and Distribution'. |
| Scope3CrbnFtprntId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe scope 3 carbon footprint record that's associated with this energy use record. This field is automatically associated with an existing carbon footprint record or if a carbon footprint record doesn't exist for that year, a new carbon footprint record is generated based on the asset and start or end dates of the energy use record.This is a relationship field.Relationship NameScope3CrbnFtprntRelationship TypeLookupRefers ToScope3CrbnFtprnt |
| Scope3EmissionsInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions in metric tonnes of carbon dioxide equivalent. |
| Scope3EmssnSrcId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe scope 3 emission source that's associated with this energy use record.This is a relationship field.Relationship NameScope3EmssnSrcRelationship TypeLookupRefers ToScope3EmssnSrc |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the values of this energy use record are valid. |
| SuplScope3Emissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions value that’s added to the calculated total scope 3 emissions value. |
| SupplierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis is a relationship field.Relationship NameSupplierRelationship TypeLookupRefers ToSupplier |
| Weight | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe weight transported by the freight vehicle. |
| WeightUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the weight transported by the freight vehicle.Possible values are:KG—kgLB—lbLONG_TON—Long TonMETRIC_TONNE—Metric TonneSHORT_TON—Short TonThe default value is 'KG'. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FrgtHaulingEnrgyUseChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 63.0)

Change events are available for the object.

[FrgtHaulingEnrgyUseFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[FrgtHaulingEnrgyUseHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[FrgtHaulingEnrgyUseShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FrgtHaulingEnrgyUseChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- FrgtHaulingEnrgyUseFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- FrgtHaulingEnrgyUseHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- FrgtHaulingEnrgyUseShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
