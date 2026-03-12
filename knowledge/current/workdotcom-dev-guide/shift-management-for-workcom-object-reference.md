---
title: "Shift Management for Work.com Object Reference"
domain: workdotcom-dev-guide
topic: shift-management-for-workcom-object-reference
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.603Z
estimatedTokens: 3708
keywords: [Shift, Management, Work.com, package, includes, several, custom, objects, described, requires, Workplace, Command, Center, builds, Service]
---

# Shift Management for Work.com Object Reference

> The Shift Management package includes several custom objects and fields that are
    described in this section. Shift Management requires Workplace Command Center and it builds on
    Field Service objects and capabilities such as service appointments and schedule
    optimization.

# Shift Management for Work.com Object Reference

The Shift Management package includes several custom objects and fields that are described in this section. Shift Management requires Workplace Command Center and it builds on Field Service objects and capabilities such as service appointments and schedule optimization.

To get started with Shift Management, see [Shift Management in Salesforce Help](https://help.salesforce.com/articleView?id=workdotcom_shifts.htm&type=0&language=en_US). The relationships between objects used by Shift Management are described in the following diagram:

![Shift management object model](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fworkdotcom%2Fimages%2Fwkfsl_shift_management_erd.png&folder=workdotcom_dev_guide)

## Standard Objects Used by Shift Management

[Employee](https://developer.salesforce.com/docs/atlas.en-us.260.0.workdotcom_dev_guide.meta/workdotcom_dev_guide/sforce_api_objects_employee.htm)

Represents an employee within a company or organization. When you import employee data to Shift Management, we create a Service Resource record from the Employee records.

[Location](https://developer.salesforce.com/docs/atlas.en-us.260.0.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_location.htm)

Location is used by Work.com to represent a physical organization location. Shift Management uses location data in your org to populate Service Territories.

[ServiceTerritoryMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_serviceterritorymember.htm)

Links a service resource (employee) to the service territory (location) so that they can be assigned to service appointments within the territory location.

[UserTerritory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_userterritory.htm)

Links a shift planner or workplace manager to a service territory (location). With custom permission sets, gives access to view and manage the service territories.

## Standard Objects with Custom Fields Used by Shift Management

[ServiceAppointment](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_serviceappointment.htm "Represents available shifts for a workplace and confirmed shifts for service resources. Service appointments are linked to planned occupancy and, when confirmed, to a service resource (a person). This object is available in API version 38.0 and later.")

Represents available shifts for a workplace and confirmed shifts for service resources. Service appointments are linked to planned occupancy and, when confirmed, to a service resource (a person).

[ServiceResource](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_serviceresource.htm "Represents a user who can accept shifts. Data is imported from employee records to create User and Service Resource records. Service Resources are linked to Service Territories through their Service Territory Membership. This object is available in API version 38.0 and later.")

Represents a user who can accept shifts. Data is imported from employee records to create User and Service Resource records. Service Resources are linked to Service Territories through their Service Territory Membership.

[ServiceTerritory](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_serviceterritory.htm "Represents the locations and spaces associated with your workplace. Work.com adds new custom fields to the standard ServiceTerritory object. This object is available in API version 38.0 and later.")

Represents the locations and spaces associated with your workplace. Work.com adds new custom fields to the standard ServiceTerritory object.

[Shift](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_shift.htm "Represents a shift for service resource scheduling. Shift is a Salesforce standard object that represents an employee’s availability based on their preferences and constraints. Shifts are created for the service resources (employees) included in a facility plan when the planner sends a request for availability. This object is available in API version 46.0 and later.")

Represents a shift for service resource scheduling. Shift is a Salesforce standard object that represents an employee’s availability based on their preferences and constraints. Shifts are created for the service resources (employees) included in a facility plan when the planner sends a request for availability.

[WorkOrder](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_shift.htm "Represents a shift for service resource scheduling. Shift is a Salesforce standard object that represents an employee’s availability based on their preferences and constraints. Shifts are created for the service resources (employees) included in a facility plan when the planner sends a request for availability. This object is available in API version 46.0 and later.")

Represents field service work to be performed for a customer. Work.com adds new custom fields to the WorkOrder object. The custom field associated with Shift Manager contains information about the facility plan for that shift.

## Custom Objects Used by Shift Management

[wkfsl\_\_Facility\_Plan\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_wkfsl__facility_plan__c.htm "Represents the facility plan to help you manage your sites and buildings. This object has information such as maximum occupancy, arrival window start and end times, and arrival interval information for a location. This object is installed as a part of the Shift Management managed package. This object is available in API version 48.0 and later.")

Represents the facility plan to help you manage your sites and buildings. This object has information such as maximum occupancy, arrival window start and end times, and arrival interval information for a location. This object is installed as a part of the Shift Management managed package.

[wkfsl\_\_PlanningPeriod\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_wkfsl__planningperiod__c.htm "This object has been deprecated in Shift Management managed package version 3.0. Use the wkfsl__Facility_Plan__c object to manage requests for employee availability and set a response due date in version 3.0 and later. This object is installed as a part of the Shift Management managed package. This object is available in API version 48.0 and later.")

This object has been deprecated in Shift Management managed package version 3.0. Use the wkfsl\_\_Facility\_Plan\_\_c object to manage requests for employee availability and set a response due date in version 3.0 and later.

[wkfsl\_\_Shift\_Management\_Metric\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_wkfsl__shift_management_metric__c.htm "Stores metrics that summarize shift data such as available employees and planned occupancy. Each record stores calculated shift data associated with a location and scoped to the current day. This object is installed as a part of the Shift Management managed package. This object is available in API version 48.0 and later.")

Stores metrics that summarize shift data such as available employees and planned occupancy. Each record stores calculated shift data associated with a location and scoped to the current day. This object is installed as a part of the Shift Management managed package.

[wkfsl\_\_ShiftAcceptNotification\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_wkfsl__shiftacceptnotification__c.htm "Represents a helper object to ensure that employees don’t receive more than one mobile app notification when they are assigned a service appointment. This object is installed as a part of the Shift Management managed package. This object is available in API version 48.0 and later.")

Represents a helper object to ensure that employees don’t receive more than one mobile app notification when they are assigned a service appointment. This object is installed as a part of the Shift Management managed package.

[wkfsl\_\_Territory\_Parent\_Update\_Evt\_\_e](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_wkfsl__territory_parent_update_evt__e.htm "This event is triggered when the parent territory field on the service territory is updated. When service territories are copied from location records during setup, the event triggers to link a territory to its parent territory. This object is available in API version 48.0 and later.")

This event is triggered when the parent territory field on the service territory is updated. When service territories are copied from location records during setup, the event triggers to link a territory to its parent territory.

-   **[ServiceAppointment](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_serviceappointment.htm)**
    Represents available shifts for a workplace and confirmed shifts for service resources. Service appointments are linked to planned occupancy and, when confirmed, to a service resource (a person). This object is available in API version 38.0 and later.
-   **[ServiceResource](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_serviceresource.htm)**
    Represents a user who can accept shifts. Data is imported from employee records to create User and Service Resource records. Service Resources are linked to Service Territories through their Service Territory Membership. This object is available in API version 38.0 and later.
-   **[ServiceTerritory](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_serviceterritory.htm)**
    Represents the locations and spaces associated with your workplace. Work.com adds new custom fields to the standard ServiceTerritory object. This object is available in API version 38.0 and later.
-   **[Shift](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_shift.htm)**
    Represents a shift for service resource scheduling. Shift is a Salesforce standard object that represents an employee’s availability based on their preferences and constraints. Shifts are created for the service resources (employees) included in a facility plan when the planner sends a request for availability. This object is available in API version 46.0 and later.
-   **[WorkOrder](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_workorder.htm)**
    Represents field service work to be performed for a customer. Work.com adds new custom fields to the WorkOrder object. The custom field associated with Shift Manager contains information about the facility plan for that shift. This object is available in API version 36.0 and later.
-   **[wkfsl\_\_Facility\_Plan\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_wkfsl__facility_plan__c.htm)**
    Represents the facility plan to help you manage your sites and buildings. This object has information such as maximum occupancy, arrival window start and end times, and arrival interval information for a location. This object is installed as a part of the Shift Management managed package. This object is available in API version 48.0 and later.
-   **[wkfsl\_\_PlanningPeriod\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_wkfsl__planningperiod__c.htm)**
    This object has been deprecated in Shift Management managed package version 3.0. Use the wkfsl\_\_Facility\_Plan\_\_c object to manage requests for employee availability and set a response due date in version 3.0 and later. This object is installed as a part of the Shift Management managed package. This object is available in API version 48.0 and later.
-   **[wkfsl\_\_Shift\_Management\_Metric\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_wkfsl__shift_management_metric__c.htm)**
    Stores metrics that summarize shift data such as available employees and planned occupancy. Each record stores calculated shift data associated with a location and scoped to the current day. This object is installed as a part of the Shift Management managed package. This object is available in API version 48.0 and later.
-   **[wkfsl\_\_ShiftAcceptNotification\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_wkfsl__shiftacceptnotification__c.htm)**
    Represents a helper object to ensure that employees don’t receive more than one mobile app notification when they are assigned a service appointment. This object is installed as a part of the Shift Management managed package. This object is available in API version 48.0 and later.
-   **[wkfsl\_\_Territory\_Parent\_Update\_Evt\_\_e](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_wkfsl__territory_parent_update_evt__e.htm)**
    This event is triggered when the parent territory field on the service territory is updated. When service territories are copied from location records during setup, the event triggers to link a territory to its parent territory. This object is available in API version 48.0 and later.

#### See Also

-   [Understand the Work.com Data Model](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_data_model.htm "The Workplace Command Center uses a mix of standard Salesforce objects, custom objects, and Metadata types to represent workspace information, employee status and health assessments, consent and authorization information, and employee survey information.")

-   [*Object Reference for Work.com*: Employee](https://developer.salesforce.com/docs/atlas.en-us.260.0.workdotcom_dev_guide.meta/workdotcom_dev_guide/sforce_api_objects_employee.htm)

-   [*Field Service Data Model*](https://developer.salesforce.com/docs/atlas.en-us.260.0.field_service_dev.meta/field_service_dev/fsl_dev_soap_core.htm)

-   [*Object Reference for Salesforce and Lightning Platform*: ServiceTerritoryMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_serviceterritorymember.htm)

-   [*Object Reference for Work.com*: Location](https://developer.salesforce.com/docs/atlas.en-us.260.0.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_location.htm)

-   [*Object Reference for Salesforce and Lightning Platform*: UserTerritory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_userterritory.htm)

## Related Topics

- ServiceAppointment (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_serviceappointment.htm)
- ServiceResource (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_serviceresource.htm)
- ServiceTerritory (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_serviceterritory.htm)
- Shift (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_shift.htm)
- WorkOrder (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_shift.htm)
- wkfsl__Facility_Plan__c (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_wkfsl__facility_plan__c.htm)
- wkfsl__PlanningPeriod__c (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_wkfsl__planningperiod__c.htm)
- wkfsl__Shift_Management_Metric__c (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_wkfsl__shift_management_metric__c.htm)
- wkfsl__ShiftAcceptNotification__c (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_wkfsl__shiftacceptnotification__c.htm)
- wkfsl__Territory_Parent_Update_Evt__e (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkfsl_sforce_api_objects_wkfsl__territory_parent_update_evt__e.htm)
