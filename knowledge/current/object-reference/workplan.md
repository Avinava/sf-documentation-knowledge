---
title: "WorkPlan"
domain: object-reference
topic: workplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.793Z
estimatedTokens: 1267
keywords: [WorkPlan, work, plan, order, line, item, API, version, 52.0, later, Calls, Special, Access, Rules, Associated]
---

# WorkPlan

> Represents a work plan for a work order or work order line item. This
    object is available in API version 52.0 and later.

# WorkPlan

Represents a work plan for a work order or work order line item. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the work plan. |
| ExecutionOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order in which the work plan is executed. Only positive values or null are supported. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. Some sample scenarios are: |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the work plan. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the work plan.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentRecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the work order, work order line item, or change request that the work plan is associated with. Available in API version 54.0 and later.This field is a polymorphic relationship field.Relationship NameParentRecordRelationship TypeLookupRefers ToChangeRequest, WorkOrder, WorkOrderLineItem |
| ParentRecordType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDescribes whether the parent record is a work order, work order line item, or change request. Available in API version 54.0 and later. |
| WorkOrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. The ID of the work order.Relationship NameWorkOrderRelationship TypeLookupRefers ToWorkOrder |
| WorkOrderLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the work order line item.Relationship NameWorkOrderLineItemRelationship TypeLookupRefers ToWorkOrderLineItem |
| WorkPlanTemplateId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the work plan template record. Available in API version 54.0 and later.This field is a relationship field.Relationship NameWorkPlanTemplateRelationship TypeLookupRefers ToWorkPlanTemplate |

## Associated Objects

This object has these associated objects. Unless noted, they’re available in the same API version as this object.

[WorkPlanChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object. Available in API version 54.0 and later.

[WorkPlanFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[WorkPlanHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[WorkPlanOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[WorkPlanShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WorkPlanChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- WorkPlanFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- WorkPlanHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- WorkPlanOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- WorkPlanShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
