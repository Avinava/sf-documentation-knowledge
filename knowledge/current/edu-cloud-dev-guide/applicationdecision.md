---
title: "ApplicationDecision"
domain: edu-cloud-dev-guide
topic: applicationdecision
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.853Z
estimatedTokens: 822
keywords: [ApplicationDecision, academic, standing, applicant, API, version, 57.0, later, Calls]
---

# ApplicationDecision

> Represents information about the academic standing of an applicant. This
      object is available in API version 57.0 and later.

# ApplicationDecision

Represents information about the academic standing of an applicant. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Account associated with the Application Decision.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ApplicantDecision | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionSpecifies the applicant’s decision.Possible values are:AcceptDeclineDeferWithdraw |
| ApplicationDecision | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionSpecifies the decision on the application.Possible values are:AdmitCancelledDenyEnrollWaitlist |
| ApplicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe application for which the decision is announced.This field is a polymorphic relationship field.Relationship NameApplicationRelationship TypeLookupRefers ToIndividualApplication |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe information about the decision provided on the application. |
| DecisionAuthorityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifier for the decision authority person.Relationship NameDecisionAuthorityRelationship TypeLookupRefers ToUser |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name for this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PreliminaryApplicationRefId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifier for the preliminary application reference.Relationship NamePreliminaryApplicationRefRelationship TypeLookupRefers ToPreliminaryApplicationRef |
| Score | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe calculated score for assessments related to an application decision. |
