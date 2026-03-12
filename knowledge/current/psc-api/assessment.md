---
title: "Assessment"
domain: psc-api
topic: assessment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:32.950Z
estimatedTokens: 1924
keywords: [Assessment, Stores, data, API, version, 55.0, later, Calls, Associated, Objects]
---

# Assessment

> Stores the header data for an assessment. This object is
      available in API version 55.0 and later.

# Assessment

Stores the header data for an assessment. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the account for which the assessment was taken.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ApplicantId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe applicant for whom the assessment was carried out. This field is available only if you have enabled Integrated Onboarding for Financial Services Cloud.This field is a relationship field. |
| AssessmentRating | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe overall rating for the assessment.Possible values are:HighLowMedium |
| AssessmentStagedDataId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Assessment Staged Data that's associated with this assessment.This field is a relationship field.Relationship NameAssessmentStagedDataRefers ToAssessmentStagedData |
| AssessmentStatus | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the assessment.Possible values are:CanceledCompletedIn Progress |
| AssessorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person who carried out the assessment and recorded the responses.This field is a polymorphic relationship field.Relationship NameAssessorRefers ToAccount, Contact, HealthcareProvider, User |
| CareProgramSiteId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionStores the derived Care Program Site Identifier when the site assessment is done in the context of care program sites. This field is available in API version 63.0 when Site Management is enabled.This is a relationship field.Relationship NameCareProgramSiteRefers ToCareProgramSite |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the case associated with the assessment.This is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| CompletedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the assessment was completed. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the contact associated with the assessment.This is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| EffectiveDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp from when the assessment is effective. |
| ExpirationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp from when the assessment lapses. |
| ExternalAssessmentDefId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe associated external assessment definition.This field is a relationship field.Relationship NameExternalAssessmentDefRelationship TypeLookupRefers ToExternalAssessmentDefinition |
| Identifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of a completed or partially completed assessment in the source system. |
| IsSavedForLater | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the assessment is saved as a draft (true) or not (false). The default value is false. This field is available in API version 60.0 and later. |
| IsSuggestedAssessment | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the assessment is a suggested assessment (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the assessment. |
| OmniProcessId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe OmniScript associated with the assessment record. This field is available in API version 56.0 and later.This field is a relationship field.Relationship NameOmniProcessRelationship TypeLookupRefers ToOmniProcess |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the relationship record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related assessment, if any.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToAssessment |
| PartyProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents information about the profile of a party, such as a contact, account, or lead. This field is available only if you’ve enabled the Know Your Customer setting in your Salesforce org.Relationship NamePartyProfileRelationship TypeLookupRefers ToPartyProfile |
| ResponseContextId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record in which context the response was taken. This field is available in API version 56.0 and later where Public Sector Solutions is enabled.This field is a polymorphic relationship field.Relationship NameResponseContextRelationship TypeLookupRefers ToApplicationFormEvaluation - Available in API version 62.0 and laterBusinessLicenseApplicationCarePlanIndividualApplicationPublicComplaintVettingEvaluation - Available in API version 62.0 and laterVisit |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of assessment. This field is available only if you have enabled Integrated Onboarding for Financial Services Cloud. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AssessmentChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[AssessmentFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[AssessmentHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[AssessmentShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
