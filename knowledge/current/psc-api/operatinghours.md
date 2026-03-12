---
title: "OperatingHours"
domain: psc-api
topic: operatinghours
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.037Z
estimatedTokens: 739
keywords: [OperatingHours, hours, facility, open, Calls, Special, Access, Rules, Associated, Objects]
---

# OperatingHours

> Represents the hours that a facility is open.

# OperatingHours

Represents the hours that a facility is open.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Provider Management is enabled in your org. To access the object, you need the Provider Management Access permission set or the Provider Management permission set license. Partner users need the Provider Management for Partner permission set or permission set license.

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the operating hours. Add any details that aren’t included in the name. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the operating hours. For example, Summer Hours, Winter Hours, or Peak Season Hours. |
| TimeZone | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe time zone which the operating hours fall within. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[OperatingHoursChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[OperatingHoursFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[OperatingHoursShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- OperatingHoursChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
- OperatingHoursFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- OperatingHoursShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
