---
title: "ScheduleService Class"
domain: field-service
topic: scheduleservice-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.089Z
keywords: [ScheduleService, Class, Returns, AppointmentInsightsResult, class, details, why, service, appointment, can’t, scheduled, Gantt, including, blocking, rules, blocked, slots, resource, availability., getAppointmentInsights]
---

# ScheduleService Class

> Returns an
        AppointmentInsightsResult class with details about why a service
      appointment can’t be scheduled on the Gantt, including blocking rules, blocked slots, and
      resource availability.

### getAppointmentInsights

Returns an [AppointmentInsightsResult](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentInsightsResult.htm "Represents the response returned by the getAppointmentInsights method. AppointmentInsightsResult includes details about why a service appointment can’t be added to the Gantt, including resource availability, blocked slots, and applicable blocking rules.") class with details about why a service appointment can’t be scheduled on the Gantt, including blocking rules, blocked slots, and resource availability.

#### Signature

public static FSL.AppointmentInsightsResult<FSL.AppointmentInsightsResult> getAppointmentInsights(Id policyId, Id serviceAppointmentId))

#### Parameters

serviceAppointmentId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_id.htm)

The ID of the appointment for which insights are being requested.

policyId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_id.htm)

The ID of the policy under which the appointment is evaluated.

#### Return Value

Type: [FSL.AppointmentInsightsResult](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentInsightsResult.htm "Represents the response returned by the getAppointmentInsights method. AppointmentInsightsResult includes details about why a service appointment can’t be added to the Gantt, including resource availability, blocked slots, and applicable blocking rules.")

#### Example

The following code sample uses the getAppointmentInsights method to return an AppointmentInsightsResult class that provides details about a specific service appointment that can’t be scheduled on the Gantt.

// FSL.ScheduleService class // The getAppointmentInsights method returns a AppointmentInsightsResult result FSL.AppointmentInsightsResult myresult = new FSL.AppointmentInsightsResult(); // static FSL.AppointmentInsightsResult myresult = FSL.ScheduleService.getAppointmentInsights(Service Appointment ID,Scheduling Policy ID); System.debug(myresult);