---
title: "RetentionStoreUsage"
domain: object-reference
topic: retentionstoreusage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:40.089Z
estimatedTokens: 704
keywords: [RetentionStoreUsage, total, org's, retention, store, measured, specific, points, time, API, 66.0]
---

> Represents the total usage of the org's retention store measured at
         specific points in time. This object is available in API version 66.0 and
      later.

# RetentionStoreUsage

Represents the total usage of the org's retention store measured at specific points in time. This object is available in API version 66.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| AttributeDetail | TypetextareaPropertiesNillableDescription(For future use) Additional metadata or contextual details about the usage measurement. |
| MetricType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionCategorizes the type of usage being measured. Only DATA type is currently captured.DATA: Total storage capacity usage (in bytes).FILES: Files and attachments storage capacity usage (in bytes).RECORDS: Retained record count (in rows).Only DATA type is currently captured. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the retention storage usage record. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the account owner associated with the storage.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RetentionType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIdentifies which retention system this usage record belongs to.Possible values are:ARCHIVEPRIVACY_CENTER |
| UnitOfMeasure | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the unit of measurement for the Usage field value.Possible values are:BYTESROWS |
| Usage | TypelongPropertiesFilter, Group, Nillable, SortDescriptionThe numeric usage value in the unit of measure specified in UnitOfMeasure. |
| UsageDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the usage measurement was captured. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[RetentionStoreUsageOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[RetentionStoreUsageShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- RetentionStoreUsageOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- RetentionStoreUsageShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
