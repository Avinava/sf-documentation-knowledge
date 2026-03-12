---
title: "OthrLifecyclEmssnFctrSet"
domain: netzero-cloud-dev-guide
topic: othrlifecyclemssnfctrset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.607Z
estimatedTokens: 1078
keywords: [OthrLifecyclEmssnFctrSet, collection, emissions, factors, calculate, occur, throughout, fuel, lifecycle, extraction, end-of-life, fuels, stationary, vehicle, assets]
---

# OthrLifecyclEmssnFctrSet

> Represents a collection of emissions factors used to calculate emissions that
         occur throughout the fuel lifecycle, from extraction to end-of-life. These fuels are used
         in stationary and vehicle assets other than electricity. This object is available in
      API version 66.0 and later.

# OthrLifecyclEmssnFctrSet

Represents a collection of emissions factors used to calculate emissions that occur throughout the fuel lifecycle, from extraction to end-of-life. These fuels are used in stationary and vehicle assets other than electricity. This object is available in API version 66.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Fields

| Field | Details |
| --- | --- |
| Ch4GlblWarmingPot | TypedoublePropertiesFilter, Nillable, SortDescriptionThe value that's used to convert the CH4 emissions into their equivalent CO2 emissions. |
| EmissionFactorDataSource | TypetextareaPropertiesNillableDescriptionThe source of the emissions factor reference data. |
| EmissionFactorUpdateYear | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe year in which this reference data for the emissions factor was most recently updated.Possible values are:20002001200220032004200520062007200820092010201120122013201420152016201720182019202020212022202320242025202620272028202920302031203220332034203520362037203820392040 |
| ExternalIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe external identifier for the emissions factor. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| N2oGlblWarmingPot | TypedoublePropertiesFilter, Nillable, SortDescriptionThe value that's used to convert the N2O emissions into their equivalent CO2 emissions. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ReferenceDataLoadLogId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe reference data load log record related to the emissions factor.This field is a relationship field.Relationship NameReferenceDataLoadLogRefers ToReferenceDataLoadLog |
| ShouldLockDtastUpdtForRec | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the emissions factor record can be locked from dataset updates.The default value is false. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OthrLifecyclEmssnFctrSetChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[OthrLifecyclEmssnFctrSetHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[OthrLifecyclEmssnFctrSetShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- OthrLifecyclEmssnFctrSetChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- OthrLifecyclEmssnFctrSetHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- OthrLifecyclEmssnFctrSetShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
