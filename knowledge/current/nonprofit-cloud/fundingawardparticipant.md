---
title: "FundingAwardParticipant"
domain: nonprofit-cloud
topic: fundingawardparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.803Z
estimatedTokens: 793
keywords: [FundingAwardParticipant, user, group, participants, access, funding, award, API, version, 59.0, later, Calls, Special, Rules, Associated]
---

# FundingAwardParticipant

> Represents information about a user or group of participants who have
         access to a funding award. This object is available in API version 59.0 and
      later.

# FundingAwardParticipant

Represents information about a user or group of participants who have access to a funding award. This object is available in API version 59.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

This object is accessible only when the Grantmaking license is on, Grantmaking is active, Compliant Data Sharing is on, and users have the Managed Funding Awards system permission.

## Fields

| Field | Details |
| --- | --- |
| Comments | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe comments about why the participant has access to the funding award. |
| FundingAwardId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe funding award associated with the funding award participant.This field is a relationship field.Relationship NameFundingAwardRelationship TypeMaster-DetailRefers ToFundingAward |
| IsParticipantActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the funding award participant is currently active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the funding award participant. |
| ParticipantId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe participant associated with the funding award.This field is a polymorphic relationship field.Relationship NameParticipantRelationship TypeLookupRefers ToGroup, User |
| ParticipantRoleId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe participant role associated with the funding award participant.This field is a relationship field.Relationship NameParticipantRoleRelationship TypeLookupRefers ToParticipantRole |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FundingAwardParticipantFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[FundingAwardParticipantHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.
