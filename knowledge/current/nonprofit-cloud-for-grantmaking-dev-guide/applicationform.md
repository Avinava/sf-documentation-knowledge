---
title: "ApplicationForm"
domain: nonprofit-cloud-for-grantmaking-dev-guide
topic: applicationform
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.805Z
estimatedTokens: 920
keywords: [ApplicationForm, application, form, submitted, individual, organization, API, version, 66.0, later, Calls, Special, Access, Rules, Associated]
---

# ApplicationForm

> Represents an application form submitted by an individual or
         organization. This object is available in API version 66.0 and later.

# ApplicationForm

Represents an application form submitted by an individual or organization. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Grantmaking license is enabled, Grantmaking is enabled, and Track Applications is turned on.

## Fields

| Field | Details |
| --- | --- |
| ApplicationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the application. |
| BudgetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe budget that's associated with the application.This field is a relationship field.Relationship NameBudgetRefers ToBudget |
| CompletionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that the application was completed. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact that's associated with the application.This field is a relationship field.Relationship NameContactRefers ToContact |
| DueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the application is due. |
| Purpose | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe purpose of the funding that's requested in the application. |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe opportunity that's associated with the application.This field is a polymorphic relationship field.Relationship NameReferenceRecordRefers ToBenefit, FundingOpportunity, Program |
| ReferralId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe referral that's associated with the application.This field is a relationship field.Relationship NameReferralRefers ToReferral |
| RequestedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of funding that's requested in the application. |
| Title | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe descriptive name of the application. The name includes the applicant and the program that the applicant is applying to. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of application.Possible values are:EmployeeRecruitment—Talent Recruitment ManagementGrantmakingOtherProgramVolunteer |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApplicationFormFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[ApplicationFormHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[ApplicationFormOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ApplicationFormShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
