---
title: "WatchlistedLearner"
domain: edu-cloud-dev-guide
topic: watchlistedlearner
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.829Z
estimatedTokens: 1234
keywords: [WatchlistedLearner, learner, needs, monitored, support, API, version, 62.0, later, Calls, Associated, Objects]
---

# WatchlistedLearner

> Represents information for a learner that needs to be monitored for
         support. This object is available in API version 62.0 and later.

# WatchlistedLearner

Represents information for a learner that needs to be monitored for support. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CarePlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Care Plan associated with the Watchlisted Learner that's used to improve the learner’s performanceThis field is a relationship field.Relationship NameCarePlanRefers ToCarePlan |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe learner’s Case record associated with the Watchlisted Learner.This field is a relationship field.Relationship NameCaseRefers ToCase |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the category of the Watchlisted Learner. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency associated with the Pulse Check.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the learner was removed as a Watchlisted Learner. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Watchlisted Learner is active (true) or not (false).The default value is false. |
| IsEscalated | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Watchlisted Learner is escalated (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Watchlisted Learner. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProgramEnrollmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Program Enrollment record associated with the Watchlisted Learner.This field is a relationship field.Relationship NameProgramEnrollmentRefers ToProgramEnrollment |
| Reason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the reason for adding the learner as a Watchlisted Learner. |
| ReasonDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescriptive context for adding the learner as a Watchlisted Learner. |
| StartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the learner was added as a Watchlisted Learner. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the learner’s performance after being added as a Watchlisted Learner. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WatchlistedLearnerHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[WatchlistedLearnerOwnerSharingRule](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[WatchlistedLearnerShare](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WatchlistedLearnerHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- WatchlistedLearnerOwnerSharingRule (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- WatchlistedLearnerShare (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm)
