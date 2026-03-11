---
title: "WorkOrderLineItem Custom Fields"
domain: field-service
topic: workorderlineitem-custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:47:12.153Z
keywords: [WorkOrderLineItem, Custom, Fields, Supported, Calls, Special, Access, Rules, See]
---

# WorkOrderLineItem Custom Fields

# WorkOrderLineItem Custom Fields

Custom fields associated with a subtask on a work order in field service.

The standard fields are documented in the [WorkOrderLineItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_workorderlineitem.htm "HTML (New Window)") object reference.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service managed package must be installed.

## Fields

| Field | Details |
| --- | --- |
| FSL__IsFillIn​Candidate__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines if this work order line item is considered as a candidate when filling in a schedule with the Fill-In Schedule feature. If a service appointment’s parent record is a work order line item, this field must also be set to true for the appointment to be a candidate. Alternatively, you can create a custom checkbox field through the Field Service Settings page, instead of using this field, to evaluate whether this appointment is considered as a candidate. The custom checkbox field includes formula fields.The default value is true.For more info, view the Fill Schedule Gaps Help article. |
| FSL__VisitingHours__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe visiting hours that define when service appointments associated with the work order line item can be scheduled. Visiting hours are enforced only if the Visiting Hours work rule is part of the scheduling policy.For more info, view the Work Rule Type: Service Appointment Visiting Hours Help article.This is a relationship field.Relationship NameFSL__VisitingHours__rRelationship TypeLookupRefers ToOperatingHours |

#### See Also

-   [Salesforce Object Reference: WorkOrderLineItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_workorderlineitem.htm "Salesforce Object Reference: WorkOrderLineItem - HTML (New Window)")
    
-   [Salesforce Help: Fill Schedule Gaps](https://help.salesforce.com/articleView?id=service.pfs_fill_schedule.htm&type=5&language=en_US "Salesforce Help: Fill Schedule Gaps - HTML (New Window)")
    
-   [Salesforce Help: Work Rule Type: Service Appointment Visiting Hours](https://help.salesforce.com/s/articleView?id=service.pfs_optimization_theory_work_rules_visiting_hours.htm&type=5&language=en_US "Salesforce Help: Work Rule Type: Service Appointment Visiting Hours - HTML (New Window)")