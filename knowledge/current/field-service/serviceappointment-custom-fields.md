---
title: "ServiceAppointment Custom Fields"
domain: field-service
topic: serviceappointment-custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:47:12.129Z
keywords: [ServiceAppointment, Custom, Fields, Supported, Calls, Special, Access, Rules, Internal, See]
---

# ServiceAppointment Custom Fields

# ServiceAppointment Custom Fields

Custom fields associated with an appointment to complete work for a customer in Field Service.

The standard fields are documented in the [ServiceAppointment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_serviceappointment.htm "HTML (New Window)") object reference.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service managed package must be installed.

## Fields

| Field | Details |
| --- | --- |
| FSL__Appointment_​Grade__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe appointment grade of the scheduled appointment using the Appointment Booking feature. |
| FSL__Auto_Schedule__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the appointment is created and scheduled in the same action.The default value is false.For more info, view the Schedule an Appointment Automatically Help article. |
| FSL__Duration_In_​Minutes__c | TypedoublePropertiesFilter, Nillable, SortDescriptionThe duration in minutes of the scheduled appointment. It calculates the time between the scheduled start and end times in minutes.This is a calculated field.FormulaIF (ISBLANK(SchedStartTime), 0,  (SchedEndTime - SchedStartTime)*24*60) |
| FSL__Emergency__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the Emergency Wizard global action schedules the appointment. If true, the service appointment has an emergency icon in the Field Service dispatcher console’s Gantt chart.The default value is false. |
| FSL__GanttColor__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Hex color of the service appointment in the Field Service dispatcher console’s Gantt chart and the resource calendar. |
| FSL__GanttIcon__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA custom icon for the service appointment that appears in the Gantt chart, map, and appointment list. This helps dispatchers quickly identify appointment characteristics. For example, use a custom icon to indicate that an appointment is for a VIP or first-time customer. The format is a URL ending in an image suffix, such as .png or .gif. The image is scaled to 16 x 16 pixels.For more info, view the Create Custom Appointment Icons Help article. |
| FSL__GanttLabel__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe label of the scheduled service appointment in the Field Service dispatcher console’s Gantt chart. This replaces the service appointment number in the chart. |
| FSL__Gantt_Display_​Date__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe Gantt Display Date filter in the date field dropdown menu in the Field Service dispatcher console to control which appointments are visible in the appointment list. When a service appointment’s Gantt Display Date falls within the Gantt time frame, the appointment is visible on the Gantt. For example, if a maintenance appointment must be completed within the next six months, you can set the date so that you see it on the Gantt every day. You can set up this field to update an important appointment’s Gantt Display Date to today’s date on a daily basis.For more info, view the Control Which Appointments Appear in the Dispatcher Console Help article. |
| FSL__InJeopardy​Reason__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe reason for when the service appointment is in jeopardy. Use this field only when the FSL__InJeopardy__c status is true. You can add custom picklist values.Possible values are:Delayed FinishDelayed StartDue Date ApproachingNo ResponseRejected by Contractor |
| FSL__InJeopardy__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines if a service appointment is in jeopardy. This helps dispatchers gain visibility to service appointments at risk. A user can manually set the service appointment status to In Jeopardy or this can be done automatically using, for example, process builders or triggers.The default value is false. |
| FSL__IsFillIn​Candidate__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines if this service appointment is considered as a candidate when filling in a schedule with the Fill-In Schedule feature. If a service appointment’s parent record is a work order or work order line item, the parent record’s FSL__IsFillInCandidate__c field must also be set to true for the appointment to be a candidate. Alternatively, instead of using this field, you can create a custom checkbox field, including formula fields, to evaluate whether this appointment is considered as a candidate. This can be done through the Field Service Settings pageThe default value is true.For more info, view the Fill Schedule Gaps Help article. |
| FSL__IsMultiDay__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines if this service appointment spans over multiple days. Alternatively, instead of using this field, you can create a checkbox formula field through the Field Service Settings page to evaluate whether it spans over multiple days or not.The default value is false.For more info, view the Enable Multiday Service Appointments Help article. |
| FSL__Pinned__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines if this service appointment is pinned to the Field Service dispatcher console’s Gantt chart. Pinned service appointments can’t be manually dragged or automatically scheduled by any scheduling operation. Pinned service appointments have a lock icon in the Field Service dispatcher console’s Gantt chart.The default value is false. |
| FSL__Prevent_​Geocoding_For_Chatter_​Actions__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines if the service appointment’s BeforeUpdate Platform Apex trigger disables the Chatter Actions’s geolocation cleanup on address change. When this field is set to true, it prevents Chatter Actions to geocode the address and waits until Field Service does it after the address changes. This field is set to false after the cleanup completes.The default value is false. |
| FSL__Schedule_Mode__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Unrestricted picklist, Sort, UpdateDescriptionThe type of the scheduling operation. For example, when not using Enhanced Scheduling and Optimization, if the service appointment is scheduled using drag and drop, the value is Manual. If the service appointment is scheduled using the Appointment Booking feature, the value is Automatic. When using Enhanced Scheduling and Optimization, if the service appointment is scheduled using drag and drop, the value is Drag and Drop. If the service appointment is scheduled using the Appointment Booking feature, the value is Schedule. This field is populated by the system. Don't edit this field.Possible values are:AutomaticManualNoneOptimizationAdditional values for each scheduling operation, available only with Enhanced Scheduling and Optimization:Drag and DropScheduleGlobal OptimizationIn-Day OptimizationResource OptimizationThe default value is 'None'. |
| FSL__Schedule_over_​lower_priority_​appointment__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether you can schedule critical service appointments over lower priority appointments.The default value is false.For more info, view the Schedule Appointments Using Priorities Help article. |
| FSL__Scheduling_​Policy_Used__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA scheduling policy used by the scheduler for the service appointment. If you edit this field, the policy overrides the default one on the Field Service Settings page. If this field is empty, the field populates with the policy used by the scheduler after the service appointment gets scheduled.This is a relationship field.Relationship NameFSL__Scheduling_Policy_Used__rRelationship TypeLookupRefers ToFSL__Scheduling_Policy__c |
| FSL__UpdatedBy​Optimization__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines if the service appointment is updated by the optimizer. This field is populated by the system. Don't edit this field.The default value is false. |
| FSL__Use_Async_​Logic__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines if the scheduling features related to the service appointment run asynchronously. If you use UI features, such as the Appointment Booking global action, the managed package takes care of this async response for you.The default value is false. |
| FSL__Virtual_Service_​For_Chatter_Action__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines if the service appointment is a candidate or dummy appointment. If the value is true, the appointment is ignored by your custom triggers. This field is populated by the system. Don't edit this field.The default value is false. |

## Internal Fields

These internal fields are used by the Field Service managed package for Street Level Routing calculations. Although they’re publicly accessible, they must only be updated by the managed package.

-   FSL\_\_InternalSLRGeolocation\_\_Latitude\_\_s
-   FSL\_\_InternalSLRGeolocation\_\_Longitude\_\_s
-   FSL\_\_InternalSLRGeolocation\_\_c

#### See Also

-   [Salesforce Object Reference: ServiceAppointment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_serviceappointment.htm "Salesforce Object Reference: ServiceAppointment - HTML (New Window)")
    
-   [Salesforce Help: Schedule an Appointment Automatically](https://help.salesforce.com/articleView?id=service.pfs_scheduling_auto.htm&type=5&language=en_US "Salesforce Help: Schedule an Appointment Automatically - HTML (New Window)")
    
-   [Salesforce Help: Create Custom Appointment Icons](https://help.salesforce.com/articleView?id=service.pfs_gantt_icons.htm&type=5&language=en_US "Salesforce Help: Create Custom Appointment Icons - HTML (New Window)")
    
-   [Salesforce Help: Control Which Appointments Appear in the Dispatcher Console](https://help.salesforce.com/articleView?id=service.pfs_horizon.htm&type=5&language=en_US "Salesforce Help: Control Which Appointments Appear in the Dispatcher
    Console - HTML (New Window)")
    
-   [Salesforce Help: Fill Schedule Gaps](https://help.salesforce.com/articleView?id=service.pfs_fill_schedule.htm&type=5&language=en_US "Salesforce Help: Fill Schedule Gaps - HTML (New Window)")
    
-   [Salesforce Help: Enable Multiday Service Appointments](https://help.salesforce.com/articleView?id=service.pfs_multiday.htm&type=5&language=en_US "Salesforce Help: Enable Multiday Service Appointments - HTML (New Window)")
    
-   [Salesforce Help: Schedule Appointments Using Priorities](https://help.salesforce.com/articleView?id=service.pfs_scheduling_priority.htm&type=5&language=en_US "Salesforce Help: Schedule Appointments Using Priorities - HTML (New Window)")