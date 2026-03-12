---
title: "ActionPlan"
domain: psc-api
topic: actionplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:32.777Z
estimatedTokens: 1287
keywords: [ActionPlan, instance, action, plan, tasks, created, template, API, version, 44.0, later, Calls, Associated, Objects]
---

# ActionPlan

> Represents the instance of an action plan, a set of tasks created from
			an action plan template. This object is available in API version 44.0 and
		later.

# ActionPlan

Represents the instance of an action plan, a set of tasks created from an action plan template. This object is available in API version 44.0 and later.

## Supported Calls

create()delete()describeLayout()describeSObjects()getDeleted()getUpdated()query()retrieve()undelete()update()upsert()

## Fields

| Field Name | Details |
| --- | --- |
| ActionPlanState | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe status of work being done for the action plan.Possible values are:CanceledCompleteIn ProgressNot StartedThe default value is Not Started. |
| ActionPlanTemplateVersionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the version of the action plan template used to create this action plan. At creation, the referenced action plan template must be in the published state. |
| ActionPlanType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe action plan’s type.Possible values are:IndustriesSales—This value is available in API version 63.0 and later with the Sales Action Plans add-on license and the Sales Action Plans default permission set.Service |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the action plan is locked or not. |
| IsUsingHolidayHours | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether task completion dates have been calculated by incrementing the task offset for each non-work day, excluding recurring holidays. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nllable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the action plan can be edited or not. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the action plan. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record. |
| StartDate | TypedatePropertiesCreate, Default on create, Filter, Group, SortDescriptionThe start date of the action plan. |
| TargetId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the parent object record that relates to this action plan.For API version 63.0 and later, supported parent objects are Account, AccountPlanObjective, Applicant, ApplicationForm, ApplicationFormProduct, Asset, BusinessLicense, BusinessMilestone, Campaign, Case, ChangeRequest, Claim, Contact, Contract, FinancialGoal, Incident, InsurancePolicy, InsurancePolicyCoverage, Lead, Opportunity, PersonLifeEvent, Problem, ResidentialLoanApplication, WorkOrder, and WorkOrderLineItem.For API version 62.0 and later, supported parent objects are ApplicationFormEvaluation and VettingEvaluation.For API version 48.0 and later, supported parent objects are Account, AssetsAndLiabilities, BusinessMilestone, Campaign, Card, Case, Claim, Contact, Contract, Financial Account, Financial Goal, Financial Holding, InsurancePolicy, InsurancePolicyCoverage, Lead, Opportunity, PersonLifeEvent, ResidentialLoanApplication, and Visit as well as custom objects with activities enabled.For API version 47.0 and later, supported parent objects are Account, BusinessMilestone, Campaign, Case, Claim, Contact, Contract, InsurancePolicy, InsurancePolicyCoverage, Lead, Opportunity, PersonLifeEvent, and Visit as well as custom objects with activities enabled.For API version 46.0 and later, supported parent objects are Account, Campaign, Case, Contact, Contract, Lead, and Opportunity as well as custom objects with activities enabled.For API version 45.0 and earlier, the only supported parent object is Account. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ActionPlanChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[ActionPlanFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ActionPlanHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ActionPlanOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ActionPlanShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
