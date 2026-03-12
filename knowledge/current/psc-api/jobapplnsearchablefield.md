---
title: "JobApplnSearchableField"
domain: psc-api
topic: jobapplnsearchablefield
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.955Z
estimatedTokens: 2863
keywords: [JobApplnSearchableField, searchable, data, job, applications, enabling, criteria-based, search, filtering, match, user-specific, criteria, API, version, 62.0]
---

# JobApplnSearchableField

> Represents searchable data for job applications, enabling criteria-based
         search and filtering to find applications that match the user-specific criteria. This
      object is available in API version 62.0 and later.

# JobApplnSearchableField

Represents searchable data for job applications, enabling criteria-based search and filtering to find applications that match the user-specific criteria. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Talent Recruitment Management is enabled in your org. To access the object, you need one of these permission sets.

| User Type | Permission Set |
| --- | --- |
| Internal Users | Talent Recruitment Management Specialist Access |
| Salesforce Platform Users | Talent Recruitment Management Hiring Manager AccessORTalent Recruitment Management Employee Access |

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the job applicant's account.The Data Processing Engine definition Aggregate Job Application Details for Search maps this field to ApplicationForm.Account.Id.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| ApplicantEmail | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email address of the job applicant.The Data Processing Engine definition Aggregate Job Application Details for Search maps this field to ApplicationForm.Account.PartyProfile.PrimaryEmail. |
| ApplicantExperience | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe total work experience of the job applicant.The Data Processing Engine definition Aggregate Job Application Details for Search calculates the total work experience by adding the Tenure values in the ApplicationForm.Account.PersonEmployment records.Possible values are:EightToTwelve—8 to 12FifteenPlus—15+TwelveToFifteen—12 to 15ZeroToThree—3 to 8 |
| ApplicantName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the job applicant.The Data Processing Engine definition Aggregate Job Application Details for Search maps this field to ApplicationForm.Account.Name. |
| ApplicantQualification | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA list of qualifications held by the job applicant.The Data Processing Engine definition Aggregate Job Application Details for Search creates the list from the Degree values in the ApplicationForm.Account.PersonEducation records. |
| ApplicationFormId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe application form associated with the job application.The Data Processing Engine definition Aggregate Job Application Details for Search maps this field to ApplicationForm.Id.This field is a relationship field.Relationship NameApplicationFormRefers ToApplicationForm |
| ApplicationFormName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the application form associated with the job application.The Data Processing Engine definition Aggregate Job Application Details for Search maps this field to ApplicationForm.Name. |
| ApplicationFormStage | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe stage in the approval process of the application form associated with the job application.The Data Processing Engine definition Aggregate Job Application Details for Search maps this field to ApplicationForm.Stage. |
| AppliedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the job application was submitted.The Data Processing Engine definition Aggregate Job Application Details for Search maps this field to ApplicationForm.SubmissionDate. |
| CandidateSourceKey | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique key of the recruitment portal where the job application was submitted.The Data Processing Engine definition Aggregate Job Application Details for Search maps this field to ApplicationForm.ApplicationFormRelation.RecruitmentRequistion.RecruitmentPosting.CandidateSourceKey. |
| EmploymentOfferStatus | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the employment offer associated with the job application.The Data Processing Engine definition Aggregate Job Application Details for Search maps this field to ApplicationForm.EmploymentOffer.Status. |
| Geolocation | TypelocationPropertiesNillableDescriptionThe geolocation of the applied job position. |
| GeolocationLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe latitude of the applied job position's geolocation.The Data Processing Engine definition Aggregate Job Application Details for Search maps this field to ApplicationForm.ApplicationFormRelation.RecruitmentRequistion.JobPstnRecruitmentRqs.JobPosition.Location.Latitude. |
| GeolocationLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe longitude of the the applied job position's geolocation.The Data Processing Engine definition Aggregate Job Application Details for Search maps this field to ApplicationForm.ApplicationFormRelation.RecruitmentRequistion.JobPstnRecruitmentRqs.JobPosition.Location.Longitude. |
| JobPositionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe job position associated with the job application.The Data Processing Engine definition Aggregate Job Application Details for Search maps this field to ApplicationForm.ApplicationFormRelation.RecruitmentRequistion.JobPstnRecruitmentRqs.JobPosition.Id.This field is a relationship field.Relationship NameJobPositionRefers ToJobPosition |
| JobPositionName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the job position associated with the job application.The Data Processing Engine definition Aggregate Job Application Details for Search maps this field to ApplicationForm.ApplicationFormRelation.RecruitmentRequistion.JobPstnRecruitmentRqs.JobPosition.Name. |
| LastEvaluationDecision | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe decision of the latest application form evaluation associated with the job application.The Data Processing Engine definition Aggregate Job Application Details for Search maps this field to ApplicationForm.ApplicationFormEvaluation.Decision. |
| LastEvaluationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe latest application form evaluation associated with the job application.The Data Processing Engine definition Aggregate Job Application Details for Search maps this field to ApplicationForm.ApplicationFormEvaluation.Id.This field is a relationship field.Relationship NameLastEvaluationRefers ToApplicationFormEvaluation |
| LastEvaluationName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the latest application form evaluation associated with the job application.The Data Processing Engine definition Aggregate Job Application Details for Search maps this field to ApplicationForm.ApplicationFormEvaluation.Name. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of location associated with the applied job position.The Data Processing Engine definition Aggregate Job Application Details for Search maps this field to ApplicationForm.ApplicationFormRelation.RecruitmentRequistion.JobPstnRecruitmentRqs.JobPosition.Location.Id.This field is a relationship field.Relationship NameLocationRefers ToLocation |
| LocationName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the applied job position's location.The Data Processing Engine definition Aggregate Job Application Details for Search maps this field to ApplicationForm.ApplicationFormRelation.RecruitmentRequistion.JobPstnRecruitmentRqs.JobPosition.Location.Name. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the job application searchable field record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the job application searchable field record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RecruitmentPostingId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe recruitment posting associated with the job application.The Data Processing Engine definition Aggregate Job Application Details for Search maps this field to ApplicationForm.ApplicationFormRelation.RecruitmentRequistion.RecruitmentPosting.Id.This field is a relationship field.Relationship NameRecruitmentPostingRefers ToRecruitmentPosting |
| RecruitmentPostingName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the recruitment posting associated with the job application.The Data Processing Engine definition Aggregate Job Application Details for Search maps this field to ApplicationForm.ApplicationFormRelation.RecruitmentRequistion.RecruitmentPosting.Name. |
| RecruitmentRequisitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe recruitment requisition associated with the job application.The Data Processing Engine definition Aggregate Job Application Details for Search maps this field to ApplicationForm.ApplicationFormRelation.RecruitmentRequistion.Id.This field is a relationship field.Relationship NameRecruitmentRequisitionRefers ToRecruitmentRequisition |
| RequisitionIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the recruitment requisition associated with the job application.The Data Processing Engine definition Aggregate Job Application Details for Search maps this field to ApplicationForm.ApplicationFormRelation.RecruitmentRequistion.Name. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[JobApplnSearchableFieldOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[JobApplnSearchableFieldShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- JobApplnSearchableFieldOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- JobApplnSearchableFieldShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
