---
title: "FundingOppParticipant"
domain: nonprofit-cloud
topic: fundingoppparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.821Z
estimatedTokens: 803
keywords: [FundingOppParticipant, user, group, participants, access, funding, opportunity, API, version, 60.0, later, Calls, Special, Rules, Associated]
---

# FundingOppParticipant

> Represents information about a user or group of participants who have
         access to a funding opportunity. This object is available in API version 60.0 and
      later.

# FundingOppParticipant

Represents information about a user or group of participants who have access to a funding opportunity. This object is available in API version 60.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

This object is available only if the Grantmaking license is enabled, Grantmaking is enabled, and the Manage Funding Awards system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| Comments | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe comments about why the participant has access to the funding opportunity. |
| FundingOpportunityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe funding opportunity associated with the funding opportunity participant.This field is a relationship field.Relationship NameFundingOpportunityRelationship TypeMaster-DetailRefers ToFundingOpportunity |
| IsParticipantActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the funding opportunity participant is currently active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the funding opportunity participant. |
| ParticipantId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe participant associated with the funding opportunity.This field is a polymorphic relationship field.Relationship NameParticipantRelationship TypeLookupRefers ToGroup, User |
| ParticipantRoleId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe participant role associated with the funding opportunity participant.This field is a relationship field.Relationship NameParticipantRoleRelationship TypeLookupRefers ToParticipantRole |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FundingOppParticipantFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[FundingOppParticipantHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.
