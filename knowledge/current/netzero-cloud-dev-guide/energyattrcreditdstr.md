---
title: "EnergyAttrCreditDstr"
domain: netzero-cloud-dev-guide
topic: energyattrcreditdstr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.161Z
estimatedTokens: 1262
keywords: [EnergyAttrCreditDstr, junction, energy, attribute, credits, stationary, asset, indicating, quantity, distributed, specific, API, version, 59.0, later]
---

# EnergyAttrCreditDstr

> Represents a junction between energy attribute credits and stationary
         asset energy use indicating the quantity of credits distributed for a specific energy
         use. This object is available in API version 59.0 and later.

# EnergyAttrCreditDstr

Represents a junction between energy attribute credits and stationary asset energy use indicating the quantity of credits distributed for a specific energy use. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AllocationDate | TypedateTimePropertiesDefaulted on create, Filter, Nillable, SortDescriptionThe date when the energy attribute certificate credit was allocated. |
| CleanEnergyType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe clean energy type associated with this energy attribute certificate distribution.Possible values are:BiomassGeothermalSolarWind |
| EnergyAttrCertCreditId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe energy attribute certificate credit record that's associated with the energy attribute certificate distribution.This field is a relationship field.Relationship NameEnergyAttrCertCreditRelationship TypeLookupRefers ToEnergyAttrCertCredit |
| EnrgyAttrCrAllocCost | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe cost of the energy attribute certificate credits that were allocated for the stationary asset energy use records. |
| EnrgyAttrCreditsAlloc | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe energy attribute certificate credits that were allocated for the stationary asset energy use records in kWh. |
| EnrgyAttrCreditsUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the energy attribute certificate credits.Possible values are:Kwh—kWhMwh—MWhThe default value is Mwh. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the energy attribute certificate distribution. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| StnryAssetEnergyUseId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe stationary asset energy use record that's associated with the energy attribute certificate distribution.This field is a relationship field.Relationship NameStnryAssetEnergyUseRelationship TypeLookupRefers ToStnryAssetEnrgyUse |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EnergyAttrCreditDstrChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[EnergyAttrCreditDstrFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[EnergyAttrCreditDstrHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[EnergyAttrCreditDstrShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- EnergyAttrCreditDstrChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- EnergyAttrCreditDstrFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- EnergyAttrCreditDstrHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- EnergyAttrCreditDstrShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
