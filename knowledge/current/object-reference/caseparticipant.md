---
title: "CaseParticipant"
domain: object-reference
topic: caseparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.446Z
estimatedTokens: 1099
keywords: [CaseParticipant, junction, case, account, contact, stores, participant, associated, applicant, co-applicant, household, business, API, version, 54.0]
---

# CaseParticipant

> Represents a junction between a case, and an account or a contact. This
         object stores the details of the participant associated with a case. This participant could
         be the applicant, co-applicant, a household, or even a business account. This object
      is available in API version 54.0 and later.

# CaseParticipant

Represents a junction between a case, and an account or a contact. This object stores the details of the participant associated with a case. This participant could be the applicant, co-applicant, a household, or even a business account. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Fields and values added in API version 58.0 are available if the add-on license for Financial Services Cloud is enabled.

## Fields

| Field | Details |
| --- | --- |
| AuthorizationProof | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionHow the participant communicated their consent. This field is available in API version 58.0 and later.Possible values are:Email ConsentJoint OwnershipPower of AttorneyVerbal Consent |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe case associated with the case participant record.This field is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, possibly the user only accessed this record or list view (LastReferencedDate) but didn't view it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the case participant record. |
| ParticipantId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe participant associated with the case participant record.This field is a polymorphic relationship field.Relationship NameParticipantRelationship TypeLookupRefers ToAccount, Contact |
| PreferredCallTimeFrom | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start of the preferred time window for contacting the participant. This field is available in API version 58.0 and later. |
| PreferredCallTimeTo | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end of the preferred time window for contacting the participant. This field is available in API version 58.0 and later. |
| PreferredCommunicationMode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionHow the participant prefers to receive messages. This field is available in API version 58.0 and later.Possible values are:EmailPhoneSMS |
| Role | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe role of the case participant.Possible values are:ApplicantComplainant Representative (Available in API version 58.0 and later.)Inspection OfficerLawyerObserverPerpetratorPrimary CaretakerVictimThe default value is Applicant. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the case participant.Possible values are:ActiveInactiveIn Review (Available in API version 58.0 and later.)Pending (Available in API version 58.0 and later.)Submitted (Available in API version 58.0 and later.) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CaseParticipantFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CaseParticipantHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CaseParticipantFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- CaseParticipantHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
