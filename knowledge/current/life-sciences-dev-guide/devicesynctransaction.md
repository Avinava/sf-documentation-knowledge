---
title: "DeviceSyncTransaction"
domain: life-sciences-dev-guide
topic: devicesynctransaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.768Z
estimatedTokens: 1883
keywords: [DeviceSyncTransaction, data, items, synchronize, mobile, device, API, version, 65.0, later, Calls, Associated, Objects]
---

# DeviceSyncTransaction

> Represents a set of related data items to synchronize from a mobile
         device. This object is available in API version 65.0 and later.

# DeviceSyncTransaction

Represents a set of related data items to synchronize from a mobile device. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActualRecordsCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of data items retrieved from the mobile device and ready to sync. |
| AppVersion | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The version of the mobile application with data to sync. |
| CanCancDpndBeRetired | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a retry operation is available for a dependent child transaction with a status of Canceled (true) or not (false).The default value is false.This field is a calculated field. |
| Comments | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information about the transaction. |
| DependentOfflineIdentifiers | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA comma-separated list of IDs that represent dependent transactions from the mobile device. The transactions are processed in the order in which they’re listed. |
| DeviceIdentifier | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the mobile device. |
| DevicePlatform | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe operating system of the mobile device.Possible values are:AndroidMacOSWindowsiOS |
| DeviceType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of mobile device, for example Phone or Tablet. |
| ExpectedRecordCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expected number of data items to sync. |
| IsBulk | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to sync data items in bulk (true) or not (false). Synchronize data items in bulk only if there are no dependencies between transactions.The default value is false. |
| IsDebugMode | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the sync runs in debug mode (true) or not (false).The default value is false. |
| IsOwnerPermissionEnforced | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to respect the user permissions of the transaction record’s owner during the sync (true) or not (false).The default value is false. |
| IsRealTime | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the transaction is eligible for real-time batch processing (true) or not (false).The default value is false. |
| IsRetry | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the sync is a retry operation (true) or not (false).The default value is false.This field is a calculated field. |
| IsSimulatable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the simulate operation applies to the transaction (true) or not (false).The default value is false.This field is a calculated field. |
| IsWithSignedItem | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the transaction includes data items with a signature (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastRunDebug | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID associated with the debug log attachment from the most recent sync. |
| LastRunLogId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe transaction log from the most recent sync. If no errors occurred, the log is empty.This field is a relationship field.Relationship NameLastRunLogRelationship TypeLookupRefers ToDeviceSyncTransactionLog |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| MetadataVersion | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The metadata version for data from the mobile device. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionA system-generated identifier for the device sync transaction. |
| NumberOfFailedAttempts | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of sync failures for the transaction. |
| OfflineTimestamp | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The timestamp when the record from the mobile device occurred. |
| OfflineUniqueIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. A unique identifier for the record from the mobile device. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Sequence | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOrder position of the transaction in relation to other transactions to sync. Use sequence values to process device sync transactions in a specific order. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The sync status.Possible values are:CanceledFailedInProgressManualNewRetrySuccessWaiting |
| TotSyncTranRecordCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of data items in the transaction.This field is a calculated field. |
| TransactionSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe application that stores the data items to sync.Possible values are:CLM. |
| UserDeviceData | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionUser data from the mobile device. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DeviceSyncTransactionFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[DeviceSyncTransactionHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- DeviceSyncTransactionFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- DeviceSyncTransactionHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
