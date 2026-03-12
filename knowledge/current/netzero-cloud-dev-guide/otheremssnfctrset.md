---
title: "OtherEmssnFctrSet"
domain: netzero-cloud-dev-guide
topic: otheremssnfctrset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.579Z
estimatedTokens: 1276
keywords: [OtherEmssnFctrSet, collection, emissions, conversion, factors, various, data, sources, neither, electricity, grid, nor, scope, API, version]
---

# OtherEmssnFctrSet

> Represents a collection of emissions and conversion factors for various data
         types and sources that are neither the electricity grid nor scope 3 data types. This
      object is available in API version 54.0 and later.

# OtherEmssnFctrSet

Represents a collection of emissions and conversion factors for various data types and sources that are neither the electricity grid nor scope 3 data types. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Ch4GlblWarmingPot | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value that's used to convert the CH4 emissions into their equivalent CO2 emissions. |
| EmissionFactorDataSource | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe source of the emissions factor reference data. |
| EmissionFactorUpdateYear | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe year in which this reference data for the emissions factor was most recently updated.Possible values are:20002001200220032004200520062007200820092010201120122013201420152016201720182019202020212022202320242025202620272028202920302031203220332034203520362037203820392040 |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external identifier for the emissions factor. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| N2oGlblWarmingPot | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value that's used to convert the N2O emissions into their equivalent CO2 emissions. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ReferenceDataLoadLogId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe reference data load log record that's associated with the emissions factor.This field is a relationship field.Relationship NameReferenceDataLoadLogRelationship TypeLookupRefers ToReferenceDataLoadLog |
| RefrigerantLeakageRtInKgItKwh | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe leakage rate of the refrigerant used for cooling the data center's computing equipment. |
| RefrigerantLeakageRtInKgM2 | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe annual average leakage rate of the refrigerant for the occupied building space in kilograms of refrigerant per square meter. This leakage rate is used to estimate the refrigerant consumption in the office space. This value is calculated if you enter the Refrigerant Leakage Rate (kg/sqft) value. |
| RefrigerantLeakageRtInKgSqft | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe annual average leakage rate of the refrigerant for the occupied building space in kilograms of refrigerant per square foot. This leakage rate is used to estimate the refrigerant consumption in the office space. This value is calculated if you enter the Refrigerant Leakage Rate (kg/m2) value. |
| ShouldLockDtastUpdtForRec | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the emissions factor record can be locked from dataset updates.The default value is false. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OtherEmssnFctrSetFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[OtherEmssnFctrSetHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[OtherEmssnFctrSetShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- OtherEmssnFctrSetFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- OtherEmssnFctrSetHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- OtherEmssnFctrSetShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
