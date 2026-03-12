---
title: "VisitedParty"
domain: health-cloud-object-reference
topic: visitedparty
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:38.206Z
estimatedTokens: 529
keywords: [VisitedParty, contact, person, account, that’s, visited, API, version, 49.0, later, Calls, Associated, Objects]
---

# VisitedParty

> Represents the contact person at the account that’s being visited. This
    object is available in API version 49.0 and later.

# VisitedParty

Represents the contact person at the account that’s being visited. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContactId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionLookup to the person assigned as the contact at an account. This field references the Contact object. |
| IsPrimaryContact | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the person is the primary visited party. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the visited party. |
| VisitId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionLookup to the Visit record this person is associated with. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[VisitedPartyHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

[VisitedPartyFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

## Related Topics

- VisitedPartyHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- VisitedPartyFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
