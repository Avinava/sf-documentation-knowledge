---
title: "AdSpecMediaPrintIssue"
domain: media-developer-guide
topic: adspecmediaprintissue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.823Z
estimatedTokens: 562
keywords: [AdSpecMediaPrintIssue, junction, space, specification, media, print, issue, API, version, 57.0, later, Calls, Associated, Objects]
---

# AdSpecMediaPrintIssue

> Represents a junction between an ad space specification and a media print issue. This object is
      available in API version 57.0 and later.

# AdSpecMediaPrintIssue

Represents a junction between an ad space specification and a media print issue. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdSpaceSpecificationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ad space specification associated with the ad spec media print issue.This field is a relationship field.Relationship NameAdSpaceSpecificationRelationship TypeLookupRefers ToAdSpaceSpecification |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| MediaPrintIssueId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the media print issue associated with the ad spec media print issue.This field is a relationship field.Relationship NameMediaPrintIssueRelationship TypeLookupRefers ToMediaPrintIssue |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ad spec media print issue. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdSpecMediaPrintIssueFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdSpecMediaPrintIssueHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
