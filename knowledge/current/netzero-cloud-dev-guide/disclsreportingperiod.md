---
title: "DisclsReportingPeriod"
domain: netzero-cloud-dev-guide
topic: disclsreportingperiod
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.792Z
estimatedTokens: 996
keywords: [DisclsReportingPeriod, corporate, reporting, period, stakeholder, disclosure, reports, API, version, 57.0, later, Calls, Associated, Objects]
---

# DisclsReportingPeriod

> Represents a corporate reporting period that is used for stakeholder
         disclosure reports. This object is available in API version 57.0 and
      later.

# DisclsReportingPeriod

Represents a corporate reporting period that is used for stakeholder disclosure reports. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AffiliateAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe account that's identified as the affiliate account.This field is a relationship field.Relationship NameAffiliateAccountRelationship TypeLookupRefers ToAccount |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the reporting period. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the reporting period. |
| Identifier | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionThe unique identifier of the reporting period. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the reporting period. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DisclsReportingPeriodChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 63.0)

Change events are available for the object.

[DisclsReportingPeriodFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[DisclsReportingPeriodHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[DisclsReportingPeriodShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- DisclsReportingPeriodChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- DisclsReportingPeriodFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- DisclsReportingPeriodHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- DisclsReportingPeriodShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
