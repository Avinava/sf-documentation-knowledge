---
title: "DeviceSyncTransactionLog"
domain: life-sciences-dev-guide
topic: devicesynctransactionlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.777Z
estimatedTokens: 1008
keywords: [DeviceSyncTransactionLog, log, synchronized, data, mobile, device, API, version, 65.0, later, Calls, Associated, Objects]
---

# DeviceSyncTransactionLog

> Represents a log with information about the synchronized data from a mobile
         device.
      This object is available in API version 65.0 and later.

# DeviceSyncTransactionLog

Represents a log with information about the synchronized data from a mobile device. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DeviceGenRecordIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the record associated with the log entry. |
| DeviceSyncTransactionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The device sync transaction associated with the log.This field is a relationship field.Relationship NameDeviceSyncTransactionRelationship TypeMaster-detailRefers ToDeviceSyncTransaction (the master object) |
| ExceptionCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe error code if the sync process encountered an error. |
| ExceptionLocation | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe device sync transaction record associated with the log entry. |
| ExceptionLog | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe raw log data. |
| ExceptionType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of error associated with a log entry. |
| FieldName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe field associated with a log entry. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LogType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The type of log.Possible values are:Error |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the device sync transaction log record. |
| ObjectName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of object associated with the log. |
| SyncStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe sync status.Possible values are:ErrorNewOkPending |
| Value | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe data item associated with the log entry. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DeviceSyncTransactionLogFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[DeviceSyncTransactionLogHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- DeviceSyncTransactionLogFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- DeviceSyncTransactionLogHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
