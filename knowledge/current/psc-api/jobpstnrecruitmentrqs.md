---
title: "JobPstnRecruitmentRqs"
domain: psc-api
topic: jobpstnrecruitmentrqs
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.005Z
estimatedTokens: 823
keywords: [JobPstnRecruitmentRqs, junction, job, position, recruitment, requisition, API, version, 62.0, later, Calls, Special, Access, Rules, Associated]
---

# JobPstnRecruitmentRqs

> Represents a junction between a job position and a recruitment
         requisition. This object is available in API version 62.0 and later.

# JobPstnRecruitmentRqs

Represents a junction between a job position and a recruitment requisition. This object is available in API version 62.0 and later.

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
| EffectiveFromDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the job position recruitment requisition is effective. |
| EffectiveToDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the job position recruitment requisition is no longer effective. |
| JobPositionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the job position associated with the job position recruitment requisition.This field is a relationship field.Relationship NameJobPositionRelationship TypeMaster-detailRefers ToJobPosition (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the job position recruitment requisition. |
| RecruitmentRequisitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the recruitment requisition associated with the job position recruitment requisition.This field is a relationship field.Relationship NameRecruitmentRequisitionRefers ToRecruitmentRequisition |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[JobPstnRecruitmentRqsFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[JobPstnRecruitmentRqsHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- JobPstnRecruitmentRqsFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- JobPstnRecruitmentRqsHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
