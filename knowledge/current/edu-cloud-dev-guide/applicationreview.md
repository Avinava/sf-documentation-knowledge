---
title: "ApplicationReview"
domain: edu-cloud-dev-guide
topic: applicationreview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.891Z
estimatedTokens: 1035
keywords: [ApplicationReview, review, performed, against, application, API, version, 57.0, later, Calls]
---

# ApplicationReview

> Represents a review performed against the specified application. This
      object is available in API version 57.0 and later.

# ApplicationReview

Represents a review performed against the specified application. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcademicTerm | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the academic term associated with the application. |
| ApplicationCategory | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the category of the application based on the admission decision period.Possible values are:Early DecisionRegular Decision |
| ApplicationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe application that is in review.This field is a relationship field.Relationship NameApplicationRelationship TypeLookupRefers ToIndividualApplication |
| ApplicationRecommendation | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionSpecifies the recommendation provided by the reviewer for the application into the institution.Possible values are:AdmitAdmit with ConditionsDenyPending |
| AssignedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the date on which the application is assigned for review. |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe information added by the reviewer about the application that's in review. |
| Condition | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe condition that’s applicable to an applicant. |
| DueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last date by which the application review should be completed. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the application review was completed. |
| InstitutionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe institution's account related to the application review.This field is a relationship field.Relationship NameInstitutionRefers ToAccount |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name for this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ReviewedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifier of the reviewer of the application.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| Score | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe calculated score for assessments related to an application review. |
| StartDate | TypedateTimePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the application review started. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionSpecifies the status of the application review.Possible values are:CancelledCompletedIn ProgressNot Started |
| Submission Date | TypedateTimePropertiesFilter, Group, Nillable, Sort,DescriptionThe date when the applicant submitted the application. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the application review.This field is available in API version 64.0 and later.Possible values are:Staff Review |
