---
title: "FundingAwardRequirement"
domain: nonprofit-cloud-for-grantmaking-dev-guide
topic: fundingawardrequirement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.058Z
estimatedTokens: 1364
keywords: [FundingAwardRequirement, deliverable, milestone, funding, award, disbursement, API, version, 57.0, later, Calls, Special, Access, Rules, Associated]
---

# FundingAwardRequirement

> Represents a deliverable or milestone for a funding award or funding
            disbursement. This object is available in API version 57.0 and later.

# FundingAwardRequirement

Represents a deliverable or milestone for a funding award or funding disbursement. This object is available in API version 57.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud_for_grantmaking_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Grantmaking license is enabled, Grantmaking is enabled, and the Manage Funding Awards system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| ActionPlanTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe action plan template that's related to the funding award requirement and that's used for funding requirement forms.This field is a relationship field.This field is available from API version 64.0 and later.Relationship NameActionPlanTemplateRefers ToActionPlanTemplate |
| ApprovalStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the approval status the information that's submitted against the requirements.Possible values are:ApprovedIn ReviewNewRejected |
| AssignedContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact who is responsible for submitting the requirement.This field is a relationship field.Relationship NameAssignedContactRelationship TypeLookupRefers ToContact |
| AssignedUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user who submits the funding requirement.This field is a relationship field.Relationship NameAssignedUserRelationship TypeLookupRefers ToUser |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the funding requirement. |
| DueDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last date and time of submitting the requirement. |
| FundingAwardId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionFunding award that's associated with the funding requirement.This field is a relationship field.Relationship NameFundingAwardRelationship TypeMaster-DetailRefers ToFundingAward |
| FundingDisbursementId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe funding disbursement that's associated with the requirement. The funds are disbursed only after the requirements are fulfilled.This field is a relationship field.Relationship NameFundingDisbursementRelationship TypeLookupRefers ToFundingDisbursement |
| IsSubmitted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the requirement for the funding award has been submitted (true) or not (false).This field is available from API version 58.0 and later.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the funding requirement. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the funding requirement.Possible values are:ApprovedDelayedIn ProgressOpenRejectedSubmitted |
| SubmittedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual date and time when the requirement was submitted. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of funding requirement.Possible values are:Combined ReportContractFinancial ReportNarrative Report |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FundingAwardRequirementFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[FundingAwardRequirementHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[FundingAwardRqmtSectionOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.
