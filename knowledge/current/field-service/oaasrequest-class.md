---
title: "OAASRequest Class"
domain: field-service
topic: oaasrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:55.247Z
estimatedTokens: 1993
namespace: FSL
keywords: [OAASRequest, Represents, request, sent, OAAS.Optimize, method., contains, details, optimization, call., allTasksMode, filterFieldAPIName, start, finish, includeServicesWithEmptyLocation, keepApptScheduled, Beta, Usage, locations, numberOfServicesToSchedule]
---

# OAASRequest Class

> Represents the request sent in the OAAS.Optimize() method. This class contains all the details of a global
      optimization call.

**Namespace:** `FSL`

# OAASRequest Class

Represents the request sent in the OAAS.Optimize() method. This class contains all the details of a global optimization call.

## Namespace

[FSL](atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm "The Field Service (FSL) namespace contains all classes, methods, Visualforce pages, and custom objects within the Field Service managed package. To allow access to namespace elements, assign the FSL custom permission set that's appropriate for the user's persona. For example, to allow a user to book appointments, assign the FSL Agent custom permission set.")

-   **[OAASRequest Properties](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAASRequest.htm#apex_FSL_OAASRequest_properties)**


## OAASRequest Properties

OAASRequest contains the following properties.

-   **[allTasksMode](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAASRequest.htm#apex_FSL_OAASRequest_allTasksMode)**
    If true, all service appointments within the time frame are considered during optimization. If false, only unscheduled appointments are considered, and scheduled appointments are pinned (unmovable).
-   **[filterFieldAPIName](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAASRequest.htm#apex_FSL_OAASRequest_filterFieldAPIName)**
    The API name of a Boolean field on the ServiceAppointment object. Only service appointments on which the Boolean field is set to true are optimized.
-   **[start](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAASRequest.htm#apex_FSL_OAASRequest_start)**
    The start of the time frame in which the optimization process considers data for scheduling.
-   **[finish](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAASRequest.htm#apex_FSL_OAASRequest_finish)**
    The end of the time frame in which the optimization process considers data for scheduling.
-   **[includeServicesWithEmptyLocation](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAASRequest.htm#apex_FSL_OAASRequest_includeServicesWithEmptyLocation)**
    If true, service appointments both with and without an associated service territory are considered during optimization. If false, only appointments with an associated service territory are considered.
-   **[keepApptScheduled (Beta)](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAASRequest.htm#apex_FSL_OAASRequest_keepApptScheduled)**
    The API name of a Boolean field on the ServiceAppointment object. Only service appointments on which the Boolean field is set to true are never dropped from the schedule after global or in-day optimization. keepApptScheduledis only available for Enhanced Scheduling and Optimization.
-   **[locations](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAASRequest.htm#apex_FSL_OAASRequest_locations)**
    A list of IDs of service territories for which optimization will run.
-   **[numberOfServicesToSchedule](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAASRequest.htm#apex_FSL_OAASRequest_numberOfServicesToSchedule)**
    Not currently in use. Leave as null.
-   **[schedulingPolicyId](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAASRequest.htm#apex_FSL_OAASRequest_schedulingPolicyId)**
    The record ID of the scheduling policy that is used to schedule the service appointment.

### allTasksMode

If true, all service appointments within the time frame are considered during optimization. If false, only unscheduled appointments are considered, and scheduled appointments are pinned (unmovable).

#### Signature

public Boolean allTasksMode {get; set;}

#### Property Value

Type: [Boolean](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_boolean.htm#apex_methods_system_boolean "HTML (New Window)")

### filterFieldAPIName

The API name of a Boolean field on the ServiceAppointment object. Only service appointments on which the Boolean field is set to true are optimized.

#### Signature

public String filterFieldAPIName {get; set;}

#### Property Value

Type: [String](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_string.htm#apex_methods_system_string "HTML (New Window)")

### start

The start of the time frame in which the optimization process considers data for scheduling.

#### Signature

public Datetime start {get; set;}

#### Property Value

Type: [Datetime](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_datetime.htm#apex_methods_system_datetime "HTML (New Window)")

### finish

The end of the time frame in which the optimization process considers data for scheduling.

#### Signature

public Datetime finish {get; set;}

#### Property Value

Type: [Datetime](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_datetime.htm#apex_methods_system_datetime "HTML (New Window)")

### includeServicesWithEmptyLocation

If true, service appointments both with and without an associated service territory are considered during optimization. If false, only appointments with an associated service territory are considered.

#### Signature

public Boolean includeServicesWithEmptyLocation {get; set;}

#### Property Value

Type: [Boolean](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_boolean.htm#apex_methods_system_boolean "HTML (New Window)")

### keepApptScheduled (Beta)

The API name of a Boolean field on the ServiceAppointment object. Only service appointments on which the Boolean field is set to true are never dropped from the schedule after global or in-day optimization. keepApptScheduledis only available for Enhanced Scheduling and Optimization.

#### Signature

public String keepApptScheduled {get; set;}

#### Property Value

Type: [String](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_string.htm#apex_methods_system_string "HTML (New Window)")

#### Usage

Use this property to ensure that appointments are optimized but not removed from the schedule. They can be moved to another resource or time slot.

There are four possible property value options:

-   Valid field name: the field name is a valid Boolean field on the ServiceAppointment object Service appointments that are marked as "Keep Scheduled" won't be dropped from the schedule after global or in-day optimization.
-   Invalid field name: the field doesn't exist on the Service Appointment object or isn't a Boolean type. An error message appears.
-   Null: Service appointments are marked "Keep Scheduled" based on the org-level defaults defined in the global or in-day optimization settings.+
-   NO\_KEEP\_APPT\_SCHEDULED: Service appointments aren't marked as "Keep Scheduled".

### locations

A list of IDs of service territories for which optimization will run.

#### Signature

public List<Id> locations {get; set;}

#### Property Value

Type: [List](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_list.htm#apex_methods_system_list "HTML (New Window)")<Id>

### numberOfServicesToSchedule

Not currently in use. Leave as null.

#### Signature

public Integer numberOfServicesToSchedule {get; set;}

#### Property Value

Type: [Integer](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_integer.htm#apex_methods_system_integer "HTML (New Window)")

### schedulingPolicyId

The record ID of the scheduling policy that is used to schedule the service appointment.

#### Signature

public Id schedulingPolicyId {get; set;}

#### Property Value

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

## Related Topics

- FSL (atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm)
- OAASRequest Properties (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAASRequest.htm)
- allTasksMode (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAASRequest.htm)
- filterFieldAPIName (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAASRequest.htm)
- start (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAASRequest.htm)
- finish (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAASRequest.htm)
- includeServicesWithEmptyLocation (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAASRequest.htm)
- keepApptScheduled (Beta) (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAASRequest.htm)
- locations (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAASRequest.htm)
- numberOfServicesToSchedule (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAASRequest.htm)
