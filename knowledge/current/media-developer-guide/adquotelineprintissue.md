---
title: "AdQuoteLinePrintIssue"
domain: media-developer-guide
topic: adquotelineprintissue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.677Z
estimatedTokens: 632
keywords: [AdQuoteLinePrintIssue, media, print, issue, quote, item, API, version, 56.0, later, Calls, Associated, Objects]
---

# AdQuoteLinePrintIssue

> Represents the media print issue for an ad quote item. This object is
      available in API version 56.0 and later.

# AdQuoteLinePrintIssue

Represents the media print issue for an ad quote item. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdQuoteLineId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the ad quote line that the print issue belong to.This field is a relationship field.Relationship NameAdQuoteLineRelationship TypeMaster-detailRefers ToAdQuoteLine (the master object) |
| CreativeIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe externally generated unique identifier of the creative for the ad quote line print issue. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| MediaPrintIssueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the media print issue that the ad quote line print issue belong to.This field is a relationship field.Relationship NameMediaPrintIssueRefers ToMediaPrintIssue |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ad quote line print issue. |
| TargetPrintIssueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe target print date of the ad quote line print issue. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdQuoteLinePrintIssueFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdQuoteLinePrintIssueHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
