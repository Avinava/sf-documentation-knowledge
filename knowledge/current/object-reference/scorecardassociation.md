---
title: "ScorecardAssociation"
domain: object-reference
topic: scorecardassociation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.661Z
estimatedTokens: 397
keywords: [ScorecardAssociation, connection, specific, scorecard, associated, account, channel, program, level, API, version, 41.0, later, Calls]
---

# ScorecardAssociation

> Represents a connection between a specific scorecard and the associated
         account, channel program, or channel program level. This object is available in API
      version 41.0 and later.

# ScorecardAssociation

Represents a connection between a specific scorecard and the associated account, channel program, or channel program level. This object is available in API version 41.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the Scorecard Association. |
| ScorecardId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the scorecard that the association is related to. Several metrics can be tied to a single scorecard.This is a relationship field.Relationship NameScorecardRelationship TypeLookupRefers ToScorecard |
| TargetEntityId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe associated object that a specific scorecard is associated with.This is a polymorphic relationship field.Relationship NameTargetEntityRelationship TypeLookupRefers ToAccount, ChannelProgram, ChannelProgramLevel |
