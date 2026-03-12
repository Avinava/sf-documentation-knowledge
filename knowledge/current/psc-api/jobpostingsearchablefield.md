---
title: "JobPostingSearchableField"
domain: psc-api
topic: jobpostingsearchablefield
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.997Z
estimatedTokens: 2770
keywords: [JobPostingSearchableField, searching, Filtering, published, Job, Postings, API, version, 62.0, later, Calls, Special, Access, Rules, Associated]
---

# JobPostingSearchableField

> Object used for searching and Filtering published Job Postings. This
      object is available in API version 62.0 and later.

# JobPostingSearchableField

Object used for searching and Filtering published Job Postings. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Talent Recruitment Management is enabled in your org. To access the object, you need one of these permission sets.

| User Type | Permission Set |
| --- | --- |
| Internal Users | Talent Recruitment Management Specialist Access |
| Salesforce Platform Users | Talent Recruitment Management Hiring Manager AccessORTalent Recruitment Management Employee Access |
| Customer and Partner Community Users | Talent Recruitment Management Applicant Access |

## Fields

| Field | Details |
| --- | --- |
| DepartmentName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the department that the job position is associated with.The Data Processing Engine definition Aggregate Job Possting Details for Search maps this field to RecruitmentPosting.RecruitmentRequisition.JobPstnRecruitmentRqs.JobPosition.InternalOrganizationUnit.Name. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the job position vacancies were removed from the portal.The Data Processing Engine definition Aggregate Job Posting Details for Search maps this field to RecruitmentPosting.EndDate. |
| Geolocation | TypelocationPropertiesNillableDescriptionThe geolocation of the advertised job position. |
| GeolocationLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe latitude of the advertised job position's geolocation.The Data Processing Engine definition Aggregate Job Possting Details for Search maps this field to RecruitmentPosting.RecruitmentRequisition.JobPstnRecruitmentRqs.JobPosition.Location.Latitude. |
| GeolocationLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe longitude of the advertised job position's geolocation.The Data Processing Engine definition Aggregate Job Possting Details for Search maps this field to RecruitmentPosting.RecruitmentRequisition.JobPstnRecruitmentRqs.JobPosition.Location.Longitude. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of location associated with the advertised job position.The Data Processing Engine definition Aggregate Job Possting Details for Search maps this field to RecruitmentPosting.RecruitmentRequisition.JobPstnRecruitmentRqs.JobPosition.Location.Id.This field is a relationship field.Relationship NameLocationRefers ToLocation |
| LocationName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the advertised job position's location.The Data Processing Engine definition Aggregate Job Possting Details for Search maps this field to RecruitmentPosting.RecruitmentRequisition.JobPstnRecruitmentRqs.JobPosition.Location.Name. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the job posting searchable field record. |
| OccupationGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe occupation group that the position is associated with.The Data Processing Engine definition Aggregate Job Posting Details for Search maps this field to RecruitmentPosting.RecruitmentRequisition.JobPstnRecruitmentRqs.JobPosition.Position.Occupation.OccupationGroup.Id.This field is a relationship field.Relationship NameOccupationGroupRefers ToOccupationGroup |
| OccupationGroupName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the occupation group that the position is associated with.The Data Processing Engine definition Aggregate Job Posting Details for Search maps this field to RecruitmentPosting.RecruitmentRequisition.JobPstnRecruitmentRqs.JobPosition.Position.Occupation.OccupationGroup.Name. |
| OccupationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe occupation that the position is associated with.The Data Processing Engine definition Aggregate Job Posting Details for Search maps this field to RecruitmentPosting.RecruitmentRequisition.JobPstnRecruitmentRqs.JobPosition.Position.Occupation.Id.This field is a relationship field.Relationship NameOccupationRefers ToOccupation |
| OccupationName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the occupation that the position is associated with.The Data Processing Engine definition Aggregate Job Posting Details for Search maps this field to RecruitmentPosting.RecruitmentRequisition.JobPstnRecruitmentRqs.JobPosition.Position.Occupation.Name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the job posting searchable field record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PayRange | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe pay range for the advertised job position.The Data Processing Engine definition Aggregate Job Posting Details for Search determines the pay range from the Maximum Salary and Minimum Salary values in the RecruitmentPosting.RecruitmentRequisition.JobPstnRecruitmentRqs.JobPosition.Position.PositionPayGrade.PayGrade record.Possible values are:Frtykto70k—40,000 to 70,000Lessthan25k—Less than 25,000Morethan100k—Greater than 100,000Svntykto100k—70,000 to 100,000Twnty5kto40k—25,000 to 40,000 |
| PositionDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the advertised job position.The Data Processing Engine definition Aggregate Job Posting Details for Search maps this field to RecruitmentPosting.RecruitmentRequisition.JobPstnRecruitmentRqs.JobPosition.Position.Description. |
| PositionSensitivity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe sensitivity of the position.The Data Processing Engine definition Aggregate Job Posting Details for Search maps this field to RecruitmentPosting.RecruitmentRequisition.JobPstnRecruitmentRqs.JobPosition.Position.Sensitivity. |
| PositionStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the position associated with the advertised job position.The Data Processing Engine definition Aggregate Job Posting Details for Search maps this field to RecruitmentPosting.RecruitmentRequisition.JobPstnRecruitmentRqs.JobPosition.Position.Status. |
| PositionTitle | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe title of the advertised job position.The Data Processing Engine definition Aggregate Job Posting Details for Search maps this field to RecruitmentPosting.RecruitmentRequisition.ExternalVacancyTitle. |
| PositionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of the position associated with the advertised job position.The Data Processing Engine definition Aggregate Job Posting Details for Search maps this field to RecruitmentPosting.RecruitmentRequisition.JobPstnRecruitmentRqs.JobPosition.Position.Type. |
| RecruitmentPostingId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe recruitment posting that advertised the vacancies in the job position.The Data Processing Engine definition Aggregate Job Posting Details for Search maps this field to RecruitmentPosting.Id.This field is a relationship field.Relationship NameRecruitmentPostingRefers ToRecruitmentPosting |
| RecruitmentPostingName | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the recruitment posting that advertised the vacancies in the job position.The Data Processing Engine definition Aggregate Job Posting Details for Search maps this field to RecruitmentPosting.Name. |
| RecruitmentRequisitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe recruitment requisition associated with the recruitment posting.The Data Processing Engine definition Aggregate Job Posting Details for Search maps this field to RecruitmentPosting.RecruitmentRequisition.Id.This field is a relationship field.Relationship NameRecruitmentRequisitionRefers ToRecruitmentRequisition |
| RequisitionIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the recruitment requisition associated with the recruitment posting.The Data Processing Engine definition Aggregate Job Posting Details for Search maps this field to RecruitmentPosting.RecruitmentRequisition.Name. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the job position vacancies were advertised on the portal.The Data Processing Engine definition Aggregate Job Posting Details for Search maps this field to RecruitmentPosting.StartDate. |
| UniqueKey | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionA unique key for the job posting searchable field record. |
| VacancyCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of vacancies in the advertised job position.The Data Processing Engine definition Aggregate Job Posting Details for Search maps this field to RecruitmentPosting.RecruitmentRequisition.VacancyCount. |
| WorkScheduleType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of work schedule associated with the position associated with the advertised job position. For example, part time or full time.The Data Processing Engine definition Aggregate Job Posting Details for Search maps this field to RecruitmentPosting.RecruitmentRequisition.JobPstnRecruitmentRqs.JobPosition.Position.ScheduleType. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[JobPostingSearchableFieldOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[JobPostingSearchableFieldShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- JobPostingSearchableFieldOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- JobPostingSearchableFieldShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
