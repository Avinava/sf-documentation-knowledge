---
title: "MediaPrintIssue"
domain: media-developer-guide
topic: mediaprintissue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.890Z
estimatedTokens: 642
keywords: [MediaPrintIssue, print, media, issue, date, advertising, deadline, publication, API, version, 57.0, later, Calls, Associated, Objects]
---

# MediaPrintIssue

> Represents the details of a print media issue with details such as
         issue name, date, advertising deadline about the publication. This object is available
      in API version 57.0 and later.

# MediaPrintIssue

Represents the details of a print media issue with details such as issue name, date, advertising deadline about the publication. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdvertisingDeadline | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRepresents the date by which the user can request Ad products in the media plan for the selected issue. |
| IssueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the date of the issue made publicly available. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| MediaChannelId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the media channel associated with the media print issue.This field is a relationship field.Relationship NameMediaChannelRelationship TypeLookupRefers ToMediaChannel |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRepresents the name of the issue for the publication made publicly available based on the publication frequency. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MediaPrintIssueFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[MediaPrintIssueHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[MediaPrintIssueShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
