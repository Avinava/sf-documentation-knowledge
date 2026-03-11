---
title: "ServiceAppointmentRequestInfo(startDate, endDate, ServiceResources, SchedulingPolicyId, workTypeGroupId, accountId, primaryResourceId, workTypeId, correlationId)"
domain: apex-reference
topic: serviceappointmentrequestinfostartdate-enddate-serviceresources-schedulingpolicy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.574Z
keywords: [ServiceAppointmentRequestInfo, startDate, endDate, ServiceResources, SchedulingPolicyId, workTypeGroupId, accountId, primaryResourceId, workTypeId, correlationId, Creates, new, instance, lxscheduler.ServiceAppointmentRequestInfo, class, specified, start, date, end, service]
---

# ServiceAppointmentRequestInfo(startDate, endDate, ServiceResources, SchedulingPolicyId, workTypeGroupId, accountId, primaryResourceId, workTypeId, correlationId)

> Creates a new instance of the lxscheduler.ServiceAppointmentRequestInfo class using the specified start date,
      end date, service resources, scheduling policy, work type group, accound ID, primary resource,
      work type, and correlation.

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