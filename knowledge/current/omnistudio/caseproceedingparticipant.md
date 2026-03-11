---
title: "CaseProceedingParticipant"
domain: omnistudio
topic: caseproceedingparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.770Z
keywords: [CaseProceedingParticipant, Note, Supported, Calls, Fields, Associated, Objects]
---

# CaseProceedingParticipant

# CaseProceedingParticipant

Represents a junction between the case proceeding and a participant, such as an account or a contact. This object stores the details of a participant who is involved in a case proceeding. This object is available in API version 64.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

When Compliant Data Sharing is enabled for the Case Proceeding object, a case proceeding participant represents information about a user or group of participants who have access to a case proceeding.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CaseProceedingId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe case proceeding associated with the case proceeding participant record.This field is a relationship field.Relationship NameCaseProceedingRelationship TypeMaster-detailRefers ToCaseProceeding (the master object) |
| Comments | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe comments about why the participant has access to the case proceeding. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the participant's association with the case proceeding is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferencedDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the case proceeding participant record. |
| ParticipantId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe participant associated with the case proceeding record.This field is a polymorphic relationship field.Relationship NameParticipantRelationship TypeLookupRefers ToAccount, Contact, Group, User |
| ParticipantRoleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe participant role associated with the case proceeding participant record.This field is a relationship field.Relationship NameParticipantRoleRefers ToParticipantRole |
| ParticipationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actual type of presence of the participant during the case proceeding.Possible values are:AbsentPresent In PersonVirtual |
| Role | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe role of the participant associated with the case proceeding record.Possible values are:AttorneyDefendantJudgePerpetratorPlaintiffVictimWitness |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the participant in the case proceeding.Possible values are:ActiveInactive |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CaseProceedingParticipantFeed](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CaseProceedingParticipantHistory](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.