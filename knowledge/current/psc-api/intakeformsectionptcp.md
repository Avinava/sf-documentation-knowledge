---
title: "IntakeFormSectionPtcp"
domain: psc-api
topic: intakeformsectionptcp
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.937Z
estimatedTokens: 780
keywords: [IntakeFormSectionPtcp, user, group, participants, access, intake, form, API, version, 64.0, later, Calls, Associated, Objects]
---

# IntakeFormSectionPtcp

> Represents information about a user or group of participants who have
         access to an intake form section. This object is available in API version 64.0 and
      later.

# IntakeFormSectionPtcp

Represents information about a user or group of participants who have access to an intake form section. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Comments | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe comments about why the participant has access to the intake form section. |
| IntakeFormSectionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe intake form section associated with the intake form section participant record.This field is a relationship field.Relationship NameIntakeFormSectionRelationship TypeMaster-detailRefers ToIntakeFormSection (the master object) |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the participant's association with the intake form section is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the intake form section participant. |
| ParticipantId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe participant associated with the intake form section participant record.This field is a polymorphic relationship field.Relationship NameParticipantRefers ToGroup, User |
| ParticipantRoleId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe participant role associated with the intake form section participant record.This field is a relationship field.Relationship NameParticipantRoleRefers ToParticipantRole |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[IntakeFormSectionPtcpFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[IntakeFormSectionPtcpHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- IntakeFormSectionPtcpFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- IntakeFormSectionPtcpHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
