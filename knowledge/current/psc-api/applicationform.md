---
title: "ApplicationForm"
domain: psc-api
topic: applicationform
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:32.871Z
estimatedTokens: 1664
keywords: [ApplicationForm, high, level, submitted, application, API, version, 62.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# ApplicationForm

> Represents the high level information of a submitted application. This
      object is available in API version 62.0 and later.

# ApplicationForm

Represents the high level information of a submitted application. This object is available in API version 62.0 and later.

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
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that's associated with the application.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| ApplicationSummary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA summary of the information provided in the application.Available in API version 64.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LeadId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the lead associated with the application.This field is a relationship field.Relationship NameLeadRefers ToLead |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The name of the application form. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the opportunity associated with the application.This field is a relationship field.Relationship NameOpportunityRefers ToOpportunity |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PreliminaryApplicationRefId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe preliminary application reference that represents the saved application.This field is a relationship field.Relationship NamePreliminaryApplicationRefRefers ToPreliminaryApplicationRef |
| RecruitmentPostingId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe recruitment posting associated with the application form.This field is a relationship field.Available in API version 63.0 and later.Relationship NameRecruitmentPostingRefers ToRecruitmentPosting |
| Score | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates how well the application matches the posted requirements.Available in API version 64.0 and later. |
| Score Reason | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe information about the score provided on the application form.Available in API version 64.0 and later. |
| Score Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies how the score is used for the application form.Available in API version 64.0 and later. |
| Stage | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe stage in the approval process of the application.Picklist values for this field aren't predefined. Before you create a record, ensure that your Salesforce admin has defined picklist values according to your organization’s requirement. |
| SubmissionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the application is submitted. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage of application.Possible value:EmployeeRecruitment—Talent Recruitment Management |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApplicationFormChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ApplicationFormFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ApplicationFormHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ApplicationFormOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ApplicationFormShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ApplicationFormChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
- ApplicationFormFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- ApplicationFormHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- ApplicationFormOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- ApplicationFormShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
