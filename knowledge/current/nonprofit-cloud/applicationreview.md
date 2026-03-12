---
title: "ApplicationReview"
domain: nonprofit-cloud
topic: applicationreview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.154Z
estimatedTokens: 1529
keywords: [ApplicationReview, review, performed, against, Individual, Application, API, version, 56.0, later, Calls, Special, Access, Rules, Associated]
---

# ApplicationReview

> Represents a review performed against a specified Individual
       Application. This object is available in API version 56.0 and later.

# ApplicationReview

Represents a review performed against a specified Individual Application. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Grantmaking license is enabled, Grantmaking is enabled, and the Manage Application system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| ApplicationCategory | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the category of the application based on the decision period.Possible values are:BasicSpecial |
| ApplicationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe individual application associated with the application review.This field is a polymorphic relationship field.Relationship NameApplicationRelationship TypeLookupRefers ToIndividualApplication |
| ApplicationRecommendation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the reviewer's recommended outcome of the application.Possible values are:Ask for RevisionsAwardDeny |
| ApplicationStageDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe application stage definition that's associated with the application review.This field is a relationship field.Relationship NameApplicationStageDefinitionRelationship TypeLookupRefers ToApplicationStageDefinition |
| AssignedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the application was assigned to the reviewer. |
| AssignedUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies the user assigned to perform the review.This field is a relationship field.Relationship NameAssignedUserRelationship TypeLookupRefers ToUser |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe information about the review provided on the application. |
| Condition | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe condition that's applicable to an applicant. |
| DisplayOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order in which the application review shows on a form. |
| DueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last date by which the application review should be completed. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the application review was completed. |
| IsAssignedToMe | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the application review is assigned to the user who's logged in.The default value is false.This field is a calculated field. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the application review is required (true) or not (false).The default value is false. |
| IsSubmitted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the application review has been submitted.This field is available from API version 58.0 and later.The default value is true. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the application being reviewed. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner associated with this application review.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ReviewedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user who reviewed the application.This field is a relationship field.Relationship NameReviewedByRelationship TypeLookupRefers ToUser |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the application review started. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the application review.Possible values are:CanceledCompletedDraft This value is available from API version 63.0 and later.In ProgressNot Started |
| SubmissionDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date when the applicant submitted the application. |
| Title | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe descriptive name for the application review. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApplicationReviewFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ApplicationReviewHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ApplicationReviewOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ApplicationReviewShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
