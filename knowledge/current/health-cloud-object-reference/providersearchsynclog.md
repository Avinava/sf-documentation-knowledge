---
title: "ProviderSearchSyncLog"
domain: health-cloud-object-reference
topic: providersearchsynclog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.902Z
estimatedTokens: 1180
keywords: [ProviderSearchSyncLog, log, provider, search, data, sync, status, healthcare, record, API, version, 49.0, later, Calls, Associated]
---

# ProviderSearchSyncLog

> Represents a log with information about the provider search data sync status
         of a healthcare provider record. This object is available in API version 49.0 and
      later.

# ProviderSearchSyncLog

Represents a log with information about the provider search data sync status of a healthcare provider record. This object is available in API version 49.0 and later.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete()

## Fields

| Field | Details |
| --- | --- |
| FacilityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe business account of the facility.This field is a relationship field.Relationship NameFacilityRelationship TypeLookupRefers ToAccount |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastSync | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp of the most recent data sync. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Message | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe message returned if an error occurred during the data sync. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the provider search sync log. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProviderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the healthcare organization or the practitioner.This field is a relationship field.Relationship NameProviderRelationship TypeLookupRefers ToHealthcareProvider |
| ProviderName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the healthcare provider. |
| SyncStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe status of the data sync.Possible values are:FailureSuccessThe default value is Success. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProviderSearchSyncLogChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[ProviderSearchSyncLogFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProviderSearchSyncLogHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProviderSearchSyncLogOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ProviderSearchSyncLogShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProviderSearchSyncLogChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- ProviderSearchSyncLogFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ProviderSearchSyncLogHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ProviderSearchSyncLogOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ProviderSearchSyncLogShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
