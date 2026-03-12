---
title: "ContractGroupPlan"
domain: financial-services-cloud-object-reference
topic: contractgroupplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.869Z
estimatedTokens: 1672
keywords: [ContractGroupPlan, plans, part, contract, insurance, carrier, group, corresponds, included, quote, Line, Items, Child, API, version]
---

# ContractGroupPlan

> Represents a set of plans as part of the contract between the insurance carrier and the group. This set of plans corresponds to the plans included in the quote (as Quote Line Items). Child object of Contract. This object is available in API version 55.0 and later.

# ContractGroupPlan

Represents a set of plans as part of the contract between the insurance carrier and the group. This set of plans corresponds to the plans included in the quote (as Quote Line Items). Child object of Contract. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe group account associated with the contract group plan.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ContractGroupParentPlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contract group parent plan associated with the contract group plan.This is a relationship field.Relationship NameContractGroupParentPlanRelationship TypeLookupRefers ToContractGroupPlan |
| ContractId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe contract associated with the contract group plan.This is a relationship field.Relationship NameContractRelationship TypeLookupRefers ToContract |
| EffectiveEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe effective end date of the plan line item. |
| EffectiveStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe effective start date of the plan line item. |
| EligibilityCriteria | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe eligibility criteria for the contract group plan. |
| EnrollmentEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when enrollment ends for the plans in the contract. |
| EnrollmentRatingType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the enrollment rating type.Possible values are:CompositeRate |
| EnrollmentStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when enrollment starts for the plans in the insurance contract. |
| EnrollmentWaitingPeriod | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe waiting period in days after joining date before enrollment can begin. |
| GroupNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe group number associated with the group account. Required for the enrollment process. |
| IsOptional | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the coverage product plan is optional (true) or mandatory (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the contract group plan. |
| OriginalContractPlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe original contract plan associated with the contract group plan.This is a relationship field.Relationship NameOriginalContractPlanRelationship TypeLookupRefers ToContractGroupPlan |
| PlanType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the category for each contract plan. |
| PricingStructure | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe structure of pricing based on the rate band tiers. |
| ProductNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product number associated with a contract group plan. |
| QuoteLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe quote line item associated with the contract group plan.This is a relationship field.Relationship NameQuoteLineItemRelationship TypeLookupRefers ToQuoteLineItem |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the group contract plan.Possible values are:ActiveInactive |
| UnitPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe price of the contract group plan. |
| UsageType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionInternal field. Specifies the application using the group census to populate data. For example, Insurance or Loyalty.Possible values are:InsuranceThe default value is 'Insurance'. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContractGroupPlanChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[ContractGroupPlanFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ContractGroupPlanHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ContractGroupPlanChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- ContractGroupPlanFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ContractGroupPlanHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
