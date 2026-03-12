---
title: "MemberPlanMedicationStmt"
domain: health-cloud-object-reference
topic: memberplanmedicationstmt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.717Z
estimatedTokens: 790
keywords: [MemberPlanMedicationStmt, junction, member, plans, medication, statements, associates, medications, patient, currently, taking, taken, past, their, health]
---

# MemberPlanMedicationStmt

> Represents a junction between member plans and medication statements. It
         associates the medications that a patient is currently taking or has taken in the past with
         their health plan coverage. This object is available in API version 66.0 and later.

# MemberPlanMedicationStmt

Represents a junction between member plans and medication statements. It associates the medications that a patient is currently taking or has taken in the past with their health plan coverage. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| MedicationStatementId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe medication statement associated with the member plan.This field is a relationship field.Relationship NameMedicationStatementRefers ToMedicationStatement |
| MemberPlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent member plan associated with the medication statement.This field is a relationship field.Relationship NameMemberPlanRelationship TypeMaster-detailRefers ToMemberPlan (the master object) |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MemberPlanMedicationStmtChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[MemberPlanMedicationStmtFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[MemberPlanMedicationStmtHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- MemberPlanMedicationStmtChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- MemberPlanMedicationStmtFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- MemberPlanMedicationStmtHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
