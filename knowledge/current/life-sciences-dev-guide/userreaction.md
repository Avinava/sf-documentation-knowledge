---
title: "UserReaction"
domain: life-sciences-dev-guide
topic: userreaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:02.049Z
estimatedTokens: 538
keywords: [UserReaction, reaction, users, medical, insight, upvote, downvote, identify, trending, insights]
---

> Represents the reaction from users to the medical insight, like upvote and
         downvote, which is used to identify trending insights.

# UserReaction

Represents the reaction from users to the medical insight, like upvote and downvote, which is used to identify trending insights.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionComments related to the reaction that was provided. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the user reaction record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SourceReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe medical insight associated with the user reaction.This field is a polymorphic relationship field.Relationship NameSourceReferenceRecordRefers ToMedicalInsight |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of reaction that was provided.Possible values are:DownVoteUpVote |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDifferentiates Life Science usage from other uses.Possible values are:LifeScience |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user who reacted to the medical insight.This field is a relationship field.Relationship NameUserRefers ToUser |
