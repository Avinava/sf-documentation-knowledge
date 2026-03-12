---
title: "Competency"
domain: psc-api
topic: competency
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.472Z
estimatedTokens: 791
keywords: [Competency, skill, subject, matter, expertise, behavior, job, role, API, version, 64.0, later, Calls, Special, Access]
---

# Competency

> Represents a skill, subject matter expertise, or behavior required for a job
         or role. This object is available in API version 64.0 and later.

# Competency

Represents a skill, subject matter expertise, or behavior required for a job or role. This object is available in API version 64.0 and later.

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
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the category of the competency. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the competency. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the competency. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CompetencyHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CompetencyOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CompetencyShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CompetencyHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- CompetencyOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- CompetencyShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
