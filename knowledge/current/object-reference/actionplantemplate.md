---
title: "ActionPlanTemplate"
domain: object-reference
topic: actionplantemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.931Z
estimatedTokens: 1633
keywords: [ActionPlanTemplate, instance, action, plan, template, API, version, 44.0, later, Calls, Associated, Objects]
---

# ActionPlanTemplate

> Represents the instance of an action plan template. This object is
		available in API version 44.0 and later.

# ActionPlanTemplate

Represents the instance of an action plan template. This object is available in API version 44.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| ActionPlanType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionThis action plan template’s type. Possible values are:IndustriesSales—This value is available in API version 63.0 and later with the Sales Action Plans add-on license and the Sales Action Plans default permission set.Service |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the category that the action plan template belongs to.Available in API version 64.0 and later.Possible values are:OnboardingApplication |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of this action plan template. |
| EstimatedCompletionDays | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe estimated number of days to complete the action plan.Available in API version 64.0 and later. |
| FileBasedTemplatePath | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe path of the file based template using which the action plan template is created.Available in API version 64.0 and later. |
| IsAdHocItemCreationEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether users can add tasks or other items to generated action plans (true) or not (false). |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this action plan template is locked or not. The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this action plan template can be edited or not. The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this action plan template. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this action plan template. This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SourceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the source type to which the action plan template belongs to.Available in API version 64.0 and later.Possible values are:CRMMigratedFromSandbox |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of this action plan template.Possible values are:DraftFinal—PublishedObsoleteReadOnly |
| Subcategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe subcategory to which the action plan template belongs.Available in API version 64.0 and later.Possible values are:Product OnboardingCustomer Onboarding |
| TargetEntityType | TypepicklistPropertiesCreate, Defaulted on create, Group, Restricted picklist, SortDescriptionThe parent object this action plan template relates to.Possible values are organized by the API version in which they were introduced. Values are available in all versions after introduction unless noted otherwise.API Version 62.0 and later with Financial Services:AccountPlanObjectiveFinancialDealPartyProfileAPI Version 62.0 and later with Public Sector Solutions:ApplicationFormEvaluationVettingEvaluationAPI version 60.0 and later with Education CloudProgramEnrollmentAPI version 58.0 and later with Health CloudCareBarrierAPI version 58.0 and later with Nonprofit Cloud:BenefitProgramAPI Version 58.0 and later with Public Sector Solution and Education Cloud:ApplicationDecisionApplicationReviewBenefitProgramAPI Version 56.0 and later with Automotive Cloud:AccountAssetAsset Account ParticipantAsset Contact ParticipantAsset MilestoneFleetLeadOpportunityRecord AlertVehicleCaseClaimContactAPI Version 58.0 and later with Grantmaking:ApplicationDecisionApplicationReviewBenefitBudgetBudgetAllocationCareBarrierFundingAwardFundingAwardAmendmentFundingAwardRequirementFundingDisbursementFundingOpportunityProgramAPI Version 52.0 and later:BusinessLicenseApplicationIndividualApplicationPublicComplaintRegulatoryCodeViolationViolationEnforcementActionAPI Version 47.0 and later:BusinessMilestoneClaimInsurancePolicyInsurancePolicyCoveragePersonLifeEventVisitAPI Version 46.0 and later:Campaign—Unsupported for Grantmaking.CaseContactContractLeadOpportunityCustom objects with activities enabledAPI Version 44.0 and later:Account |
| UniqueName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name for this action plan template. This field is unique within your organization. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ActionPlanTemplateChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[ActionPlanTemplateFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ActionPlanTemplateHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ActionPlanTemplateOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ActionPlanTemplateShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
