---
title: "WorkProcedureStep"
domain: health-cloud-object-reference
topic: workprocedurestep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:38.254Z
estimatedTokens: 953
keywords: [WorkProcedureStep, work, that's, part, procedure, Special, Access, Rules, Calls, Associated, Objects]
---

# WorkProcedureStep

> Represents information about the work type that's a part of a work
         procedure.

# WorkProcedureStep

Represents information about the work type that's a part of a work procedure.

## Special Access Rules

Available in API version 56.0 and later with Health Cloud.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssociatedFlowName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the flow definition that associated with the work procedure step.This field is available in API version 58.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| LeadTime | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe time required before a work procedure step can begin. |
| LeadTimeUnitType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure used to calculate the lead time.Possible values are:DaysHoursMinutes |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the work procedure step. |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the sequence in which the work type will be performed. |
| WorkProcedureId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent work procedure that's associated with the step.This field is a relationship field.Relationship NameWorkProcedureRelationship TypeMaster-DetailRefers ToWorkProcedure |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work type that's associated with the work procedure step.This field is a relationship field.Relationship NameWorkTypeRelationship TypeLookupRefers ToWorkType |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WorkProcedureStepChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[WorkProcedureStepFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[WorkProcedureStepHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- WorkProcedureStepChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- WorkProcedureStepFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- WorkProcedureStepHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
