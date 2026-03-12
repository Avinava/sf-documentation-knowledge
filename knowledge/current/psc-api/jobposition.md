---
title: "JobPosition"
domain: psc-api
topic: jobposition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.967Z
estimatedTokens: 1368
keywords: [JobPosition, instance, employment, particular, position, organization, API, version, 62.0, later, Calls, Special, Access, Rules, Associated]
---

# JobPosition

> Represents an instance of employment in a particular position in the
         organization. This object is available in API version 62.0 and later.

# JobPosition

Represents an instance of employment in a particular position in the organization. This object is available in API version 62.0 and later.

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
| Code | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code for the job position. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the job position. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the job position. |
| InternalOrganizationUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the internal organization unit associated with the job position.This field is a relationship field.Relationship NameInternalOrganizationUnitRefers ToInternalOrganizationUnit |
| LastFilledDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the job position was last filled.Available in API version 63.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the location associated with the job position.This field is a relationship field.Relationship NameLocationRefers ToLocation |
| ManagerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe manager for the job position.This field is a polymorphic relationship field.Relationship NameManagerRefers ToAccount, Employee2 |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the job position. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PositionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the position associated with the job position.This field is a relationship field.Relationship NamePositionRefers ToPosition |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the job position. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the job position.Possible values are:CanceledCompleteIn ProgressUpcomingAvailable in API version 63.0 and later. |
| Title | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe title of the job position. |
| VolunteerInitiativeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lookup to a related volunteer initiative that this job is for.This field is a relationship field.Relationship NameVolunteerInitiativeRefers ToVolunteerInitiative |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[JobPositionFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[JobPositionHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[JobPositionOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API Version 65.0)

Sharing rules are available for the object.

[JobPositionShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- JobPositionFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- JobPositionHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- JobPositionOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- JobPositionShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
