---
title: "ClaimParticipant"
domain: automotive-cloud
topic: claimparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.137Z
estimatedTokens: 598
keywords: [ClaimParticipant, junction, associates, Claim, Account, participants, API, version, 58.0, later, Calls, Special, Access, Rules, Associated]
---

# ClaimParticipant

> A junction object that associates the Claim object with the Account
         object. This object represents the participants of a claim. This object is available
      in API version 58.0 and later.

# ClaimParticipant

A junction object that associates the Claim object with the Account object. This object represents the participants of a claim. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Automotive and Warranty Lifecycle Management must be enabled.

## Fields

| Field | Details |
| --- | --- |
| ClaimId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the claim in which this participant has one or more roles.This field is a relationship field.Relationship NameClaimRelationship TypeLookupRefers ToClaim |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-generated number for the name of the claim participant record. |
| Roles | TypemultipicklistPropertiesCreate, Filter, UpdateDescriptionThe roles that the claim participant can have in the claim.Possible value is:Claimant |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClaimParticipantChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[ClaimParticipantFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ClaimParticipantHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
