---
title: "FundingOpportunity"
domain: nonprofit-cloud
topic: fundingopportunity
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:02.357Z
estimatedTokens: 1245
keywords: [FundingOpportunity, pool, money, distribution, specific, purpose, API, version, 57.0, later, Calls, Special, Access, Rules, Associated]
---

# FundingOpportunity

> The pool of money available for distribution for a specific purpose. This object is
      available in API version 57.0 and later.

# FundingOpportunity

The pool of money available for distribution for a specific purpose. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Grantmaking license is enabled, Grantmaking is enabled, and the Manage Funding Awards system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| ActionPlanTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe action plan template that represents the application sections for this funding opportunity.Relationship NameActionPlanTemplateRefers ToActionPlanTemplate |
| ApplicationInstructions | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe instructions on how to apply for the funding opportunity. |
| ApplicationTimelineId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe application timeline associated with the opportunity that describes the milestones in the application process.This field is a relationship field.Relationship NameApplicationTimelineRelationship TypeLookupRefers ToApplicationTimeline |
| BudgetTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe budget that's used as a template by the applicants when they apply for the funding opportunity.This field is a relationship field.Relationship NameBudgetTemplateRelationship TypeLookupRefers ToBudget |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description about the opportunity in terms of the minimum award requirements and expected outcome. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the acceptance of funding opportunity applications ended. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| MaximumFundingAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum fund amount that's awarded. |
| MinimumFundingAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum fund amount that's awarded. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the funding opportunity. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner who owns the record.sThis field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentFundingOpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe associated parent funding opportunity.This field is available from API version 59.0 and later.This field is a relationship field.Relationship NameParentFundingOpportunityRelationship TypeLookupRefers ToFundingOpportunity |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe program associated with the funding opportunity.This field is available from API version 58.0 and later.This field is a relationship field.Relationship NameProgramRelationship TypeLookupRefers ToProgram |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the acceptance of funding opportunity applications started. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the funding opportunity.Possible values are:ActiveCancelledCompletedPlanned |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FundingOpportunityFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[FundingOpportunityHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[FundingOpportunityOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[FundingOpportunityShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
