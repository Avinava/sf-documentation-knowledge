---
title: "RegulatoryAuthority"
domain: omnistudio
topic: regulatoryauthority
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:54.324Z
estimatedTokens: 789
keywords: [RegulatoryAuthority, Represents, authority, responsible, issuing, licenses, permits, defining, regulatory, code., API, version, 65.0, later., Supported, Calls, Fields, Associated, Objects]
---

# RegulatoryAuthority

> Represents the authority responsible for issuing licenses, permits, and
         defining the regulatory code. This object is available in API version 65.0 and later.

# RegulatoryAuthority

Represents the authority responsible for issuing licenses, permits, and defining the regulatory code. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Comments | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionNotes or observations about the regulatory authority. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the regulatory authority. |
| JurisdictionRegion | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe national, regional, or local geographic area or jurisdiction where the regulatory authority has legal authority. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name for the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Resources | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe links to official resources and relevant documents from regulatory authorities that are essential for the effective functioning of regulatory duties." |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of the regulatory authority. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[RegulatoryAuthorityFeed](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[RegulatoryAuthorityHistory](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[RegulatoryAuthorityShare](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- RegulatoryAuthorityFeed (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)
- RegulatoryAuthorityHistory (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)
- RegulatoryAuthorityShare (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)
