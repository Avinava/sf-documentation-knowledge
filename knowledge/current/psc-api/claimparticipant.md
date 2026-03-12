---
title: "ClaimParticipant"
domain: psc-api
topic: claimparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.798Z
estimatedTokens: 987
keywords: [ClaimParticipant, participants, claim, insured, claimants, witnesses, associates, claims, participant, accounts, Calls, Special, Access, Rules, Associated]
---

# ClaimParticipant

> Represents the participants of a claim such as those insured, the
         claimants, and the witnesses. The object associates claims with participant
      accounts.

# ClaimParticipant

Represents the participants of a claim such as those insured, the claimants, and the witnesses. The object associates claims with participant accounts.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To access this object on your Public Sector Solutions org, Benefit Disbursement must be enabled and you must have the Benefit Disbursement Access permission set or the Benefit Disbursement permission set license.

To access this object on your Experience Cloud site, users need the Benefit Assistance Community Access permission set or the Benefit Assistance for Communities permission set license.

## Fields

| Field | Details |
| --- | --- |
| ClaimId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the claim in which this participant has one or more roles.This field is a relationship field.Relationship NameClaimRelationship TypeLookupRefers ToClaim |
| IsInjured | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the claim participant was injured in the accident.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number assigned to this record. |
| ParticipantAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the claim participant's account.This field is a relationship field.Relationship NameParticipantAccountRelationship TypeLookupRefers ToAccount |
| ParticipantContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the claim participant's contact.This field is a relationship field.Relationship NameParticipantContactRelationship TypeLookupRefers ToContact |
| Roles | TypemultipicklistPropertiesCreate, Filter, UpdateDescriptionRequired. The roles that the claim participant can have in the claim. For example, witness, victim, defendant, claimant.Picklist values aren't predefined for this field. Before you create a record, ensure that your Salesforce admin has defined picklist values based on your organization’s requirement. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system this record was obtained from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique ID of this record in the source system. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClaimParticipantFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ClaimParticipantHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ClaimParticipantFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- ClaimParticipantHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
