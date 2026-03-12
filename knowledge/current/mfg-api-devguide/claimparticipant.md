---
title: "ClaimParticipant"
domain: mfg-api-devguide
topic: claimparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.667Z
estimatedTokens: 356
keywords: [ClaimParticipant, junction, associates, Claim, Account, participants, Manufacturing, Cloud, API, version, 58.0, later, Calls]
---

# ClaimParticipant

> A junction object that associates the Claim object with the Account
         object. This object represents the participants of a claim. This object is available
      in Manufacturing Cloud in API version 58.0 and later.

# ClaimParticipant

A junction object that associates the Claim object with the Account object. This object represents the participants of a claim. This object is available in Manufacturing Cloud in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ClaimId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the claim in which this participant has one or more roles.This field is a relationship field.Relationship NameClaimRelationship TypeLookupRefers ToClaim |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-generated number for the name of the claim participant record. |
| Roles | TypemultipicklistPropertiesCreate, Filter, UpdateDescriptionThe roles that the claim participant can have in the claim.Possible value is:Claimant |
