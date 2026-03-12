---
title: "BusRegAuthTypeDependency"
domain: psc-api
topic: busregauthtypedependency
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.326Z
estimatedTokens: 737
keywords: [BusRegAuthTypeDependency, association, permit, dependency, business, context, API, version, 50.0, later, Calls, Associated, Objects]
---

# BusRegAuthTypeDependency

> Information related to the association of permit to permit dependency in a
      given business context.  This object is available in API version 50.0 and later.

# BusRegAuthTypeDependency

Information related to the association of permit to permit dependency in a given business context. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert(), search()

## Fields

| Field | Details |
| --- | --- |
| DependentBusRegAuthId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe regulatory authorization type that requires the parent regulatory authorization type. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the examination taken by the person. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this record. |
| ParentBusRegAuthId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe regulatory authorization type that is a requirement for the child regulatory authorization type. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[BusRegAuthTypeDependencyFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object. This object is available in API version 51.0 and later.

[BusRegAuthTypeDependencyHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object. This object is available in API version 51.0 and later.

[BusRegAuthTypeDependencyOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[BusRegAuthTypeDependencyShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- BusRegAuthTypeDependencyFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- BusRegAuthTypeDependencyHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- BusRegAuthTypeDependencyOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- BusRegAuthTypeDependencyShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
