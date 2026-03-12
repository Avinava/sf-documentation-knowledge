---
title: "Employment"
domain: psc-api
topic: employment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.562Z
estimatedTokens: 1247
keywords: [Employment, individual's, organization, API, version, 62.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# Employment

> Represents the details of an individual's employment with an
         organization. This object is available in API version 62.0 and later.

# Employment

Represents the details of an individual's employment with an organization. This object is available in API version 62.0 and later.

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
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the employment. |
| EffectiveFromDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date when the employment is effective. |
| EffectiveToDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the employment is no longer effective. |
| Employee2Id | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the employee2 record associated with the employment.This field is a relationship field.Relationship NameEmployee2Refers ToEmployee2 |
| EmployeeUserId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the employee's user record.This field is a relationship field.Relationship NameEmployeeUserRefers ToUser |
| EmploymentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of the employment.Picklist values for this field aren't predefined. Before you create a record, ensure that your Salesforce admin has defined picklist values according to your organization’s requirements. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the employment. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ScheduleType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of work schedule associated with the employment. For example, part-time or full-time.Picklist values for this field aren't predefined. Before you create a record, ensure that your Salesforce admin has defined picklist values according to your organization’s requirements. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the employment.Picklist values for this field aren't predefined. Before you create a record, ensure that your Salesforce admin has defined picklist values according to your organization’s requirements. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EmploymentFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[EmploymentHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[EmploymentOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[EmploymentShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- EmploymentFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- EmploymentHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- EmploymentOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- EmploymentShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
