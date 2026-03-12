---
title: "ApplicationReview"
domain: psc-api
topic: applicationreview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:32.921Z
estimatedTokens: 987
keywords: [ApplicationReview, review, performed, against, Application, API, version, 56.0, later, Calls, Special, Access, Rules]
---

# ApplicationReview

> Represents a review performed against a specified Application. This object is available in API version 56.0 and later.

# ApplicationReview

Represents a review performed against a specified Application. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Grantmaking license is enabled, Grantmaking is enabled, and the Manage Application system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| ApplicationCategory | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the category of the application based on the decision period.Possible values are:BasicSpecial |
| ApplicationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the application.This field is a polymorphic relationship field.Relationship NameApplicationRelationship TypeLookupRefers ToIndividualApplication |
| ApplicationRecommendation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the reviewer's recommended outcome of the application.Possible values are:Ask for RevisionsAwardDeny |
| AssignedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the application was assigned to the reviewer. |
| AssignedUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies the user assigned to perform the review.This field is a relationship field.Relationship NameAssignedUserRelationship TypeLookupRefers ToUser |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe information about the review provided on the application. |
| Condition | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe condition that’s applicable to an applicant. |
| DueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last date by which the application review should be completed. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the application review was completed. |
| IsSubmitted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the budget has been submitted. This field is available from API version 59.0 and later.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the application being reviewed. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner who owns the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ReviewedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of person who reviewed the application.This field is a relationship field.Relationship NameReviewedByRelationship TypeLookupRefers ToUser |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the application review started. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the application review.Possible values are:Not StartedIn ProgressCompletedCancelled |
| SubmissionDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date when the applicant submitted the application. |
| Title | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe detailed name of the preliminary application reference. |
