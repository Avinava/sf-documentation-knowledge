---
title: "RecruitmentRequisition"
domain: psc-api
topic: recruitmentrequisition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.396Z
estimatedTokens: 1472
keywords: [RecruitmentRequisition, formal, recruit, position, provider, vacancy, API, version, 62.0, later, Calls, Special, Access, Rules, Associated]
---

# RecruitmentRequisition

> Represents a formal request to recruit for a position or a provider
         vacancy. This object is available in API version 62.0 and later.

# RecruitmentRequisition

Represents a formal request to recruit for a position or a provider vacancy. This object is available in API version 62.0 and later.

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
| ActionPlanTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe action plan template associated with the recruitment requisition.This field is a relationship field.Relationship NameActionPlanTemplateRefers ToActionPlanTemplate |
| ApprovalDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the recruitment requisition was approved.Available in API version 63.0 and later. |
| ApprovalStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the approval status of the recruitment requisition.Picklist values for this field aren't predefined. Before you create a record, ensure that your Salesforce admin has defined picklist values according to your organization’s requirement. |
| DefaultPostingLanguage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the default language for vacancy information on a recruitment portal when it can't be shown in the user’s selected language. |
| ExpectedHireDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expected start date for an employee or a provider recruited for the vacancy. |
| ExternalVacancyTitle | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe title of the vacancy on external recruitment portals. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the recruitment requisition record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RequisitionType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the recruitment requisition.Possible values are:PositionRequisitionThe default value is PositionRequisition. |
| State | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the state of the recruitment requisition.Picklist values for this field aren't predefined. Before you create a record, ensure that your Salesforce admin has defined picklist values according to your organization’s requirement. |
| VacancyCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of vacancies in the advertised job position. |
| VacancyDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the vacancy for which you want to recruit. |
| VacancyTitle | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe title of the vacancy in the recruitment requisition. |
| VacancyType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of vacancy in the recruitment requisition. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[RecruitmentRequisitionFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[RecruitmentRequisitionHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[RecruitmentRequisitionOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[RecruitmentRequisitionShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- RecruitmentRequisitionFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- RecruitmentRequisitionHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- RecruitmentRequisitionOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- RecruitmentRequisitionShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
