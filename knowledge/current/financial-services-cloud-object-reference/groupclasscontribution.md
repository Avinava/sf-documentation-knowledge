---
title: "GroupClassContribution"
domain: financial-services-cloud-object-reference
topic: groupclasscontribution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.428Z
estimatedTokens: 1103
keywords: [GroupClassContribution, employer, group, contributions, GroupClass, members, their, dependents, per, product, category, medical, dental, vision, Child]
---

# GroupClassContribution

> Represents employer or group contributions for GroupClass members and their dependents on a per product category such as medical, dental, or vision. Child object of GroupClass. This object is available in API version 55.0 and later.

# GroupClassContribution

Represents employer or group contributions for GroupClass members and their dependents on a per product category such as medical, dental, or vision. Child object of GroupClass. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe employer's contribution currency amount for the corresponding contract plan. If MemberType is Subscriber or not specified, the contribution amount is for the main member. If MemberType is Dependent, the contribution amount is for the dependents. |
| ContractGroupPlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contract group plan associated with the group class contribution.This is a relationship field.Relationship NameContractGroupPlanRelationship TypeLookupRefers ToContractGroupPlan |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEffective end date of the group class contribution. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEffective start date of the group class contribution. |
| GroupBenefitProductCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the group benefit product category. |
| GroupClassId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe group class associated with the group class contribution.This is a relationship field.Relationship NameGroupClassRelationship TypeLookupRefers ToGroupClass |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| MemberType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the member type.Possible values are:DependentSubscriber |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the group class contribution. |
| Percentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe employer's contribution percentage amount for the corresponding contract plan. If MemberType is Subscriber or not specified, the contribution amount is for the main member. If MemberType is Dependent, the contribution amount is for the dependent. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the contribution type.Possible values are:AmountPercentage |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GroupClassContributionChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[GroupClassContributionHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- GroupClassContributionChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- GroupClassContributionHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
