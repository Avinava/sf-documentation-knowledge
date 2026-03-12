---
title: "WorkPlan"
domain: field-service
topic: workplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:55.075Z
estimatedTokens: 829
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

WorkPlanChangeEvent

Change events are available for the object. Available in API version 54.0 and later.

WorkPlanFeed

Feed tracking is available for the object.

WorkPlanHistory

History is available for tracked fields of the object.

WorkPlanOwnerSharingRule

Sharing rules are available for the object.

WorkPlanShare

Sharing is available for the object.
