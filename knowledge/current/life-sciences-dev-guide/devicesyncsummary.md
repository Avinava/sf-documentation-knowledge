---
title: "DeviceSyncSummary"
domain: life-sciences-dev-guide
topic: devicesyncsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.751Z
estimatedTokens: 2190
keywords: [DeviceSyncSummary, summary, synchronized, data, mobile, device, API, version, 65.0, later, Calls, Associated, Objects]
---

# DeviceSyncSummary

> Represents a summary of the synchronized data from a mobile device.
      This object is available in API version 65.0 and later.

# DeviceSyncSummary

Represents a summary of the synchronized data from a mobile device. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AppVersion | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The version of the mobile application with data to sync. |
| BundleIdentifier | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the mobile application bundle. |
| DataDownloadDuration | TypedoublePropertiesFilter, Nillable, SortDescriptionThe duration of a download process in milliseconds.This field is a calculated field. |
| DeviceIdentifier | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the mobile device. |
| DownloadCreatedRecords | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of records created based on the downloaded records. |
| DownloadEnd | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp when the download ended. |
| DownloadFreezeTime | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of time during a download process that the sync is paused while the mobile application runs in the background. |
| DownloadStart | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp when the download started. |
| DownloadUpdatedRecords | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of records updated based on the downloaded records. |
| DownloadedRecords | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of records downloaded. |
| ErrorCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe error code. |
| ErrorDetail | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe message to display when synchronization fails. |
| FileReferenceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the file downloaded from the mobile device.This field is a polymorphic relationship field.Relationship NameFileReferenceRelationship TypeLookupRefers ToPresentationFileReference |
| IosVersion | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The version of the mobile device's operating system. |
| IsDownloadCompleted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the download completed (true) or not (false).The default value is false. |
| IsUploadCompleted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the upload completed (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastSuccessfulUploadTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp of the most recent successful upload during the synchronization process. |
| LastSyncTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp of the most recent synchronization process. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| MetadataDownloadDuration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe duration of a metadata download process in milliseconds. |
| MetadataDownloadStart | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp when the metadata download started. |
| MetadataUpdated | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp of the most recent metadata update. |
| MetadataVersion | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The version of the metadata. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionA system-generated identifier for the device sync summary record. |
| Network | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of network used for the synchronization process. |
| OfflineCreatedDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The timestamp when the current user created the record from the mobile device. |
| OfflineLastModifiedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp when the current user last modified the record from the mobile device. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| S3Bucket | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Amazon S3 bucket used as a data source. |
| SignalStrength | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA measure of the quality of the connection to a mobile device. |
| SyncErrorMessage | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe message to display when synchronization with an external system fails. |
| SyncStatus | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of a synchronization process with an external system.Possible values are:ErrorNewOkPending |
| SyncSummaryData | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional synchronization data in JSON format. |
| SyncTrigger | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The action or condition that triggered the synchronization process.Possible values are:Days Offline LimitForcedInitialManualMetadata In BackgroundPinTerritory Switch |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of synchronization performed.Possible values are:clmdata |
| UploadDuration | TypedoublePropertiesFilter, Nillable, SortDescriptionThe duration of an upload process in milliseconds.This field is a calculated field. |
| UploadEnd | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp when the upload ended. |
| UploadFreezeTime | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of time during an upload process that the sync is paused while the mobile application runs in the background. |
| UploadRecords | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number or records uploaded during the synchronization process. |
| UploadStart | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number or records uploaded during the synchronization process. |
| UserLocation | TypelocationPropertiesNillableDescriptionThe latitude and longitude coordinates of the mobile device during the synchronization process. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DeviceSyncSummaryFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[DeviceSyncSummaryHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[DeviceSyncSummaryShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- DeviceSyncSummaryFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- DeviceSyncSummaryHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- DeviceSyncSummaryShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
