---
title: "Scorecard"
domain: object-reference
topic: scorecard
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.656Z
estimatedTokens: 630
keywords: [Scorecard, scorecards, measure, partner, performance, establish, benchmarks, channel, programs, Experience, Cloud, Display, any, report, summary]
---

# Scorecard

> Use scorecards to measure partner performance and establish benchmarks for
         channel programs within Experience Cloud. Display any report summary results that your
         channel account manager or executive team wants to see. This object is available in
      API version 40.0 and later.

# Scorecard

Use scorecards to measure partner performance and establish benchmarks for channel programs within Experience Cloud. Display any report summary results that your channel account manager or executive team wants to see. This object is available in API version 40.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the scorecard. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the scorecard visible to end users. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns the scorecard.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Usage

The Scorecard object is used in tandem with the ScorecardMetric and ScorecardAssociation objects.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ScorecardOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ScorecardShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ScorecardOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ScorecardShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
