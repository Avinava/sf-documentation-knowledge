---
title: "keepApptScheduled"
domain: field-service
topic: keepapptscheduled
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.042Z
keywords: [keepApptScheduled, API, name, Boolean, field, ServiceAppointment, object., Only, service, appointments, which, set, true, never, dropped, schedule, after, global, in-day, optimization.]
---

# keepApptScheduled

> The
   API name of a Boolean field on the ServiceAppointment object.
   Only
   service appointments on which the Boolean field is set to true are never dropped from the schedule after global or in-day optimization.
    keepApptScheduledis
   only available for Enhanced Scheduling and Optimization.

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