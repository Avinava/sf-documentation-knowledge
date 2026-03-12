---
title: "DeviceSyncTransactionRecord"
domain: life-sciences-dev-guide
topic: devicesynctransactionrecord
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.788Z
estimatedTokens: 1255
keywords: [DeviceSyncTransactionRecord, data, item, synchronize, mobile, device, API, version, 65.0, later, Calls, Associated, Objects]
---

# DeviceSyncTransactionRecord

> Represents a single data item to synchronize from a mobile device.
      This object is available in API version 65.0 and later.

# DeviceSyncTransactionRecord

Represents a single data item to synchronize from a mobile device. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DeviceSyncTransactionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The device sync transaction associated with the data item to sync.This field is a relationship field.Relationship NameDeviceSyncTransactionRelationship TypeMaster-detailRefers ToDeviceSyncTransaction (the master object) |
| FieldValues | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe content of the data item to sync. If the data item is an attachment or a delete operation, this field is empty. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. A system-generated identifier for the device sync transaction record. |
| ObjectName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The type of object associated with the data item to sync. |
| OfflineCreatedDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The timestamp when the current user created the record from the mobile device. |
| OfflineUniqueIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. A unique identifier for the record from the mobile device. |
| OperationType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The type of sync operation to perform.Possible values are:deleteinsertupdate |
| ProcessedRecordIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the processed record after the synchronization process is complete. |
| RecordIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the record with the data item to sync, either a custom identifier for a new record or a standard identifier for an existing record. |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record associated with the device sync transaction record.This field is a polymorphic relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToAccount |
| Sequence | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionOrder position of the data item in relation to other data items associated with the same device sync transaction. Use sequence values to preserve the order of data items in the record received from the mobile device. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The sync status.Possible values are:PreparingReady |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DeviceSyncTransactionRecordFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[DeviceSyncTransactionRecordHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[DeviceSyncTransactionRecordShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- DeviceSyncTransactionRecordFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- DeviceSyncTransactionRecordHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- DeviceSyncTransactionRecordShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
