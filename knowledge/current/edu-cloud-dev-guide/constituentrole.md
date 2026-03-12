---
title: "ConstituentRole"
domain: edu-cloud-dev-guide
topic: constituentrole
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.005Z
estimatedTokens: 817
keywords: [ConstituentRole, roles, associated, individual, API, version, 57.0, later, Calls]
---

# ConstituentRole

> Contains information about roles associated with the individual. This
      object is available in API version 57.0 and later.

# ConstituentRole

Contains information about roles associated with the individual. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContextRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record of the context that's associated with the constituent.This field is a relationship field.Relationship NameContextRecordRelationship TypeLookupRefers ToLearning |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe short description of the constituent's role in the system. |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the constituent role becomes inactive. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the constituent role becomes active. |
| InstitutionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe institution's account related to the constituent role.This field is a relationship field.Relationship NameInstitutionRefers ToAccount |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name for this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PersonId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe individual associated with the constituent role.This field is a polymorphic relationship field.Relationship NamePersonRelationship TypeLookupRefers ToAccount, Contact, Individual |
| RoleType | TypepicklistPropertiesCreate, Filter, Restricted picklist, Group, Sort, UpdateDescriptionSpecifies the type of constituent role.Possible values are:AlumniApplicantDonorFacultyMenteeMentorParentParticipantPhilanthropic ProspectProspectStaffStudentSuspectVolunteer |
| Status | TypepicklistPropertiesCreate, Filter, Restricted picklist, Group, Sort, UpdateDescriptionThe status of the constituent role.Possible values are:ActiveAdmittedCurrentEnrolledFormer |
