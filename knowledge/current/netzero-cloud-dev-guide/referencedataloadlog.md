---
title: "ReferenceDataLoadLog"
domain: netzero-cloud-dev-guide
topic: referencedataloadlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.765Z
estimatedTokens: 1227
keywords: [ReferenceDataLoadLog, history, loading, data, emissions, factors, API, version, 60.0, later, Calls, Associated, Objects]
---

# ReferenceDataLoadLog

> Represents information about the history of loading reference data for emissions factors. This object is available in API version 60.0 and later.

# ReferenceDataLoadLog

Represents information about the history of loading reference data for emissions factors. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DatasetExternalIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique external identifier for the dataset. |
| DatasetName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the dataset. |
| DatasetType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the type of the dataset.Possible values are:EditionVersionThe default value is Edition. |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe description of the dataset load. |
| ErrorMessage | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe error messages generated while loading dataset, if any. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| LoadDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the dataset was loaded. |
| LoadStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the status of loading the dataset.Possible values are:CompletedErrorFailedInProgress—In ProgressWaitingThe default value is Waiting. |
| LoadedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe user who loaded the dataset.This field is a relationship field.Relationship NameLoadedByRelationship TypeLookupRefers ToUser |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the dataset log record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Provider | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe organization that's providing this dataset. |
| Source | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe source of the dataset. |
| TotalLoadedRecordCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of records that were updated or inserted. |
| TotalSkippedRecordCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of records that were skipped. |
| TotalTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe time duration taken to load the dataset. |
| UsageType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe usage of the dataset load log.Possible values are:NetZeroReferenceData—Net Zero Reference DataThe default value is NetZeroReferenceData. |
| VersionNameTag | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name tag of the dataset version. |
| VersionNumber | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe version number for the dataset. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ReferenceDataLoadLogFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ReferenceDataLoadLogHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ReferenceDataLoadLogShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ReferenceDataLoadLogFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- ReferenceDataLoadLogHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- ReferenceDataLoadLogShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
