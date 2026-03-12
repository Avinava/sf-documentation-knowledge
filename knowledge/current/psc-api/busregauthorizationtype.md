---
title: "BusRegAuthorizationType"
domain: psc-api
topic: busregauthorizationtype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.320Z
estimatedTokens: 525
keywords: [BusRegAuthorizationType, association, authorization, activity, license, permit, Calls, Associated, Objects]
---

# BusRegAuthorizationType

> Represents the association between authorization activity and license
      or permit type.

# BusRegAuthorizationType

Represents the association between authorization activity and license or permit type.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BusinessTypeIdentifierId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the business type that this requirement applies to. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when a user most recently viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when a user most recently viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this business emergency service type. |
| RegAuthTypeIdentifierId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the emergency service type that this permit or license applies to. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[BusRegAuthorizationTypeFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object. This object is available in API version 51.0 and later.

[BusRegAuthorizationTypeHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object. This object is available in API version 51.0 and later.

## Related Topics

- BusRegAuthorizationTypeFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- BusRegAuthorizationTypeHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
