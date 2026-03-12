---
title: "CaseParticipant"
domain: nonprofit-cloud
topic: caseparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.261Z
estimatedTokens: 791
keywords: [CaseParticipant, junction, case, account, contact, stores, participant, associated, applicant, co-applicant, household, business, API, version, 54.0]
---

# CaseParticipant

> Represents a junction between a case, and an account or a contact. This
         object stores the details of the participant associated with a case. This participant could
         be the applicant, co-applicant, a household, or even a business account. This object
      is available in API version 54.0 and later.

# CaseParticipant

Represents a junction between a case, and an account or a contact. This object stores the details of the participant associated with a case. This participant could be the applicant, co-applicant, a household, or even a business account. This object is available in API version 54.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AuthorizationProof | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHow the participant communicated their consent. This field is available in API version 58.0 and later.Possible values are:Email ConsentJoint OwnershipPower of AttorneyVerbal Consent |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe case associated with the case participant record.This field is a relationship field.Relationship NameCaseRelationship TypeMaster-DetailRefers ToCase |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the case participant record. |
| ParticipantId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe participant associated with the case participant record.This field is a polymorphic relationship field.Relationship NameParticipantRelationship TypeLookupRefers ToAccount, Contact |
| PreferredCallTimeFrom | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start of the preferred time window for contacting the participant. This field is available in API version 58.0 and later. |
| PreferredCallTimeTo | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end of the preferred time window for contacting the participant. This field is available in API version 58.0 and later. |
| PreferredCommunicationMode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHow the participant prefers to receive messages. This field is available in API version 58.0 and later.Possible values are:EmailPhoneSMS |
| Role | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the role of the case participant.Possible values are:ApplicantInspection OfficerLawyerObserverPerpetratorPrimary CaretakerVictimThe default value is Applicant. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the status of the case participant.Possible values are:ActiveInactive |
