---
title: "GroupCensusMemberPlan"
domain: financial-services-cloud-object-reference
topic: groupcensusmemberplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.410Z
estimatedTokens: 1018
keywords: [GroupCensusMemberPlan, association, GroupCensusMember, ContractGroupPlan, entity, census, data, includes, previous, member, enrollment, plan, new, populate, reading]
---

# GroupCensusMemberPlan

> Represents the association of GroupCensusMember and ContractGroupPlan. Use this entity when census data includes previous member enrollment plan details and new member plan details. You can populate GroupCensusMemberPlan by reading the enrollment census in the enrollment services before creating insurance policies. This object is available in API version 55.0 and later.

# GroupCensusMemberPlan

Represents the association of GroupCensusMember and ContractGroupPlan. Use this entity when census data includes previous member enrollment plan details and new member plan details. You can populate GroupCensusMemberPlan by reading the enrollment census in the enrollment services before creating insurance policies. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContractGroupPlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contract group plan associated with the group census member plan.This is a relationship field.Relationship NameContractGroupPlanRelationship TypeLookupRefers ToContractGroupPlan |
| GroupCensusMemberId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe group census member associated with the group census member plan.This is a relationship field.Relationship NameGroupCensusMemberRelationship TypeLookupRefers ToGroupCensusMember |
| EnrollmentStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, RestrictedDescriptionThe status of the enrollment, that is, the policy creation for a census member and their corresponding plan.Possible values are:CompletedFailedTo Be StartedThe default value is To Be Started. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the group census member plan. |
| OwnerId | TypereferencePropertiesCreate, Default on create, Filter, Group, Sort, UpdateDescriptionThe owner associated with the group census member plan.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GroupCensusMemberPlanChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[GroupCensusMemberPlanFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[GroupCensusMemberPlanHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- GroupCensusMemberPlanChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- GroupCensusMemberPlanFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- GroupCensusMemberPlanHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
