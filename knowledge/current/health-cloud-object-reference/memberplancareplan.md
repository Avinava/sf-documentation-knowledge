---
title: "MemberPlanCarePlan"
domain: health-cloud-object-reference
topic: memberplancareplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.712Z
estimatedTokens: 764
keywords: [MemberPlanCarePlan, junction, member, plans, care, problems, goals, interventions, plan, patient's, health, coverage, API, version, 66.0]
---

# MemberPlanCarePlan

> Represents a junction between member plans and care plans. It defines the
         problems, goals, and interventions in a care plan based on the patient's health plan
         coverage. This object is available in API version 66.0 and later.

# MemberPlanCarePlan

Represents a junction between member plans and care plans. It defines the problems, goals, and interventions in a care plan based on the patient's health plan coverage. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CarePlanId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe care plan associated with the member plan.This field is a relationship field.Relationship NameCarePlanRefers ToCarePlan |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| MemberPlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent member plan associated with the care plan.This field is a relationship field.Relationship NameMemberPlanRelationship TypeMaster-detailRefers ToMemberPlan (the master object) |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MemberPlanCarePlanChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[MemberPlanCarePlanFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[MemberPlanCarePlanHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- MemberPlanCarePlanChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- MemberPlanCarePlanFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- MemberPlanCarePlanHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
