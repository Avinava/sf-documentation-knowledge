---
title: "ServiceAppointmentRequestInfo Methods"
domain: apex-reference
topic: serviceappointmentrequestinfo-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.574Z
keywords: [ServiceAppointmentRequestInfo, Methods, Returns, account, customer, API, request, contains, one., getAccountId, Signature, Return, Value, getCorrelationId, getEndDate, getPrimaryResourceId, getSchedulingPolicyId, getServiceResources, getStartDate, getWorkTypeGroupId]
---

# ServiceAppointmentRequestInfo Methods

> Returns the account ID of the customer if the API request contains
      one.

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