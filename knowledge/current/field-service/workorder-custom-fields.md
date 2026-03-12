---
title: "WorkOrder Custom Fields"
domain: field-service
topic: workorder-custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:55.377Z
estimatedTokens: 905
keywords: [WorkOrder, Custom, Fields, fields, associated, field, service, work, performed, customer., Supported, Calls, Special, Access, Rules]
---

# WorkOrder Custom Fields

> Custom fields associated with field service work to be performed for a
         customer.

# WorkOrder Custom Fields

Custom fields associated with field service work to be performed for a customer.

The standard fields are documented in the [WorkOrder](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_workorder.htm "HTML (New Window)") object reference.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service managed package must be installed.

## Fields

| Field | Details |
| --- | --- |
| FSL__IsFillIn​Candidate__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines if this work order is considered as a candidate when filling in a schedule with the Fill-In Schedule feature. If a service appointment’s parent record is a work order, this field must also be set to true for the appointment to be a candidate. Alternatively, you can create a custom checkbox field through the Field Service Settings page, instead of using this field, to evaluate whether this appointment is considered as a candidate. The custom checkbox field includes formula fields.The default value is true.For more info, view the Fill Schedule Gaps Help article. |
| FSL__Prevent_​Geocoding_For_Chatter_​Actions__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines if the work order’s BeforeUpdate trigger disables the Chatter Action’s geolocation cleanup on address change. This field is set to false after the cleanup completes.The default value is false. |
| FSL__Scheduling_​Priority__c | TypedoublePropertiesFilter, Nillable, SortDescriptionThe work order priority. The lower the value, the higher the priority.For more info, view the Schedule Appointments Using Priorities Help article.This is a calculated field.FormulaCASE(TEXT(Priority), 'Critical' , 1 , 'High' ,2,'Medium' ,3 ,  'Low', 4, null) |
| FSL__VisitingHours__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe visiting hours that define when service appointments associated with the work order can be scheduled. The visiting hours are enforced as long as the Visiting Hours work rule complies with the scheduling policy. Visiting hours are enforced only if the Visiting Hours work rule is part of the scheduling policy.For more info, view the Work Rule Type: Service Appointment Visiting Hours Help article.This is a relationship field.Relationship NameFSL__VisitingHours__rRelationship TypeLookupRefers ToOperatingHours |

#### See Also

-   [Salesforce Object Reference: WorkOrder](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_workorder.htm "Salesforce Object Reference: WorkOrder - HTML (New Window)")

-   [Salesforce Help: Fill Schedule Gaps](https://help.salesforce.com/articleView?id=service.pfs_fill_schedule.htm&type=5&language=en_US "Salesforce Help: Fill Schedule Gaps - HTML (New Window)")

-   [Salesforce Help: Schedule Appointments Using Priorities](https://help.salesforce.com/articleView?id=service.pfs_scheduling_priority.htm&type=5&language=en_US "Salesforce Help: Schedule Appointments Using Priorities - HTML (New Window)")

-   [Salesforce Help: Work Rule Type: Service Appointment Visiting Hours](https://help.salesforce.com/s/articleView?id=service.pfs_optimization_theory_work_rules_visiting_hours.htm&type=5&language=en_US "Salesforce Help: Work Rule Type: Service Appointment Visiting Hours - HTML (New Window)")

## Code Examples

```
CASE(TEXT(Priority), 'Critical' , 1 ,
'High' ,2,'Medium' ,3 , 
'Low', 4, null)
```
