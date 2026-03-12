---
title: "ServiceAppointmentRequestInfo Class"
domain: apex-reference
topic: serviceappointmentrequestinfo-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.674Z
estimatedTokens: 2330
namespace: LxScheduler
keywords: [ServiceAppointmentRequestInfo, Represents, list, passed, ServiceResourceScheduleHandler, interface., implemented, internally, Apex., startDate, endDate, ServiceResources, SchedulingPolicyId, workTypeGroupId, accountId, primaryResourceId, workTypeId, correlationId, getAccountId, getCorrelationId]
---

# ServiceAppointmentRequestInfo Class

> Represents the list of parameters that are passed to the
      ServiceResourceScheduleHandler interface. This class is implemented internally by
    Apex.

**Namespace:** `LxScheduler`

# ServiceAppointmentRequestInfo Class

Represents the list of parameters that are passed to the ServiceResourceScheduleHandler interface. This class is implemented internally by Apex.

## Namespace

[LxScheduler](atlas.en-us.apexref.meta/apexref/apex_namespace_lxscheduler.htm "The LxScheduler namespace provides an interface and classes for integrating Salesforce Scheduler with external calendars.")

-   **[ServiceAppointmentRequestInfo Constructors](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceAppointmentRequestInfo.htm#apex_lxscheduler_ServiceAppointmentRequestInfo_constructors)**

-   **[ServiceAppointmentRequestInfo Methods](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceAppointmentRequestInfo.htm#apex_lxscheduler_ServiceAppointmentRequestInfo_methods)**


## ServiceAppointmentRequestInfo Constructors

The following are constructors for ServiceAppointmentRequestInfo.

-   **[ServiceAppointmentRequestInfo(startDate, endDate, ServiceResources, SchedulingPolicyId, workTypeGroupId, accountId, primaryResourceId, workTypeId, correlationId)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceAppointmentRequestInfo.htm#apex_lxscheduler_ServiceAppointmentRequestInfo_ctor)**
    Creates a new instance of the lxscheduler.ServiceAppointmentRequestInfo class using the specified start date, end date, service resources, scheduling policy, work type group, accound ID, primary resource, work type, and correlation.

### ServiceAppointmentRequestInfo(startDate, endDate, ServiceResources, SchedulingPolicyId, workTypeGroupId, accountId, primaryResourceId, workTypeId, correlationId)

Creates a new instance of the lxscheduler.ServiceAppointmentRequestInfo class using the specified start date, end date, service resources, scheduling policy, work type group, accound ID, primary resource, work type, and correlation.

#### Signature

public ServiceAppointmentRequestInfo(Datetime startDate, Datetime endDate, List<lxscheduler.ServiceResourceInfo> ServiceResources, String SchedulingPolicyId, String workTypeGroupId, String accountId, String primaryResourceId, String workTypeId, String correlationId)

#### Parameters

startDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The start date and time for which unavailable time slots are requested.

endDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The end date and time for which unavailable time slots are requested.

ServiceResources

Type: List<lxscheduler.ServiceResourceInfo>

The list of requested service resources for the unavailable time slots.

SchedulingPolicyId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the scheduling policy .

workTypeGroupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The work type group ID.

accountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The account ID of an existing user.

primaryResourceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the primary service resource.

workTypeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The work type ID.

correlationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A unique identifier for a service appointment request.

## ServiceAppointmentRequestInfo Methods

The following are methods for ServiceAppointmentRequestInfo.

-   **[getAccountId()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceAppointmentRequestInfo.htm#apex_lxscheduler_ServiceAppointmentRequestInfo_getAccountId)**
    Returns the account ID of the customer if the API request contains one.
-   **[getCorrelationId()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceAppointmentRequestInfo.htm#apex_lxscheduler_ServiceAppointmentRequestInfo_getCorrelationId)**
    Returns a unique identifier for a request.
-   **[getEndDate()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceAppointmentRequestInfo.htm#apex_lxscheduler_ServiceAppointmentRequestInfo_getEndDate)**
    Returns the end date and time for which unavailable time slots are requested.
-   **[getPrimaryResourceId()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceAppointmentRequestInfo.htm#apex_lxscheduler_ServiceAppointmentRequestInfo_getPrimaryResourceId)**
    Returns the ID of the primary service resource.
-   **[getSchedulingPolicyId()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceAppointmentRequestInfo.htm#apex_lxscheduler_ServiceAppointmentRequestInfo_getSchedulingPolicyId)**
    Returns the ID of the scheduling policy that the API request contains.
-   **[getServiceResources()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceAppointmentRequestInfo.htm#apex_lxscheduler_ServiceAppointmentRequestInfo_getServiceResources)**
    Returns the list of requested service resources for the unavailable time slots.
-   **[getStartDate()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceAppointmentRequestInfo.htm#apex_lxscheduler_ServiceAppointmentRequestInfo_getStartDate)**
    Returns the start date and time for which unavailable time slots are requested.
-   **[getWorkTypeGroupId()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceAppointmentRequestInfo.htm#apex_lxscheduler_ServiceAppointmentRequestInfo_getWorkTypeGroupId)**
    Returns the work type group ID if the API request contains one.
-   **[getWorkTypeId()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceAppointmentRequestInfo.htm#apex_lxscheduler_ServiceAppointmentRequestInfo_getWorkTypeId)**
    Returns the work type ID if the API request contains one.

### getAccountId()

Returns the account ID of the customer if the API request contains one.

#### Signature

public String getAccountId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getCorrelationId()

Returns a unique identifier for a request.

#### Signature

public String getCorrelationId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getEndDate()

Returns the end date and time for which unavailable time slots are requested.

#### Signature

public Datetime getEndDate()

#### Return Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### getPrimaryResourceId()

Returns the ID of the primary service resource.

#### Signature

public String getPrimaryResourceId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSchedulingPolicyId()

Returns the ID of the scheduling policy that the API request contains.

#### Signature

public String getSchedulingPolicyId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getServiceResources()

Returns the list of requested service resources for the unavailable time slots.

#### Signature

public List<lxscheduler.ServiceResourceInfo> getServiceResources()

#### Return Value

Type: List<lxscheduler.ServiceResourceInfo>

### getStartDate()

Returns the start date and time for which unavailable time slots are requested.

#### Signature

public Datetime getStartDate()

#### Return Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### getWorkTypeGroupId()

Returns the work type group ID if the API request contains one.

#### Signature

public String getWorkTypeGroupId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getWorkTypeId()

Returns the work type ID if the API request contains one.

#### Signature

public String getWorkTypeId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- LxScheduler (atlas.en-us.apexref.meta/apexref/apex_namespace_lxscheduler.htm)
- ServiceAppointmentRequestInfo Constructors (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceAppointmentRequestInfo.htm)
- ServiceAppointmentRequestInfo Methods (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceAppointmentRequestInfo.htm)
- ServiceAppointmentRequestInfo(startDate, endDate, ServiceResources, SchedulingPolicyId, workTypeGroupId, accountId, primaryResourceId, workTypeId, correlationId) (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceAppointmentRequestInfo.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- getAccountId() (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceAppointmentRequestInfo.htm)
- getCorrelationId() (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceAppointmentRequestInfo.htm)
- getEndDate() (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceAppointmentRequestInfo.htm)
- getPrimaryResourceId() (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceAppointmentRequestInfo.htm)
