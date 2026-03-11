---
title: "GetAppointmentCandidatesInput Class"
domain: apex-reference
topic: getappointmentcandidatesinput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.518Z
keywords: [GetAppointmentCandidatesInput, Class, Note, Namespace, Usage, Important]
---

# GetAppointmentCandidatesInput Class

# GetAppointmentCandidatesInput Class

Contains information about the available service resources (appointment candidates) based on work type group and service territories.

Set up Salesforce Scheduler before making requests. This setup includes creating or configuring Service Resources, Service Territory Members, Work Type Groups, Work Types, Work Type Group Members, and Service Territory Work Types. See [Set Up Salesforce Scheduler](https://help.salesforce.com/s/articleView?id=platform.ls_set_up.htm&type=5&language=en_US "HTML (New Window)") for more information.

The appointment time slots are determined based on multiple factors, such as field values, scheduled appointments, absences, Scheduler Settings, and Scheduling Policies to determine available time slots. See [How Salesforce Scheduler Determines Available Time Slots](https://help.salesforce.com/s/articleView?id=platform.ls_how_are_time_slots_determined.htm&type=5&language=en_US "HTML (New Window)") for more information.

The following factors are considered for returning start time and end time of resources.

Resource Availability

Determined using service territory member, service territory, work type, and account operating hours fields.

Resource Unavailability

Determined by resource absences, existing appointments that the resource is assigned to. The resource must be marked as a required resource for the appointment with a status that isn’t in closed, canceled, or completed.

Appointment Start Time Interval in the Scheduling Policy

Appointment start time interval field in the Scheduling Policy is used to determine when the appointment can start. This interval can be 5, 10, 15, 20, 30, or 60. By default, it’s set to 15.

Work Type Duration

The end time is calculated as start time + duration of the work type.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If asset scheduling is enabled, the response also includes asset-based candidates.

## Namespace

[LxScheduler](atlas.en-us.apexref.meta/apexref/apex_namespace_lxscheduler.htm "The LxScheduler namespace provides an interface and classes for integrating Salesforce Scheduler with external calendars.")

## Usage

The constructor for this class can’t be called directly. Create an instance of this class using the [GetAppointmentCandidatesInputBuilder.build()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentCandidatesInputBuilder.htm#apex_lxscheduler_GetAppointmentCandidatesInputBuilder_build "Returns an instance of the lxscheduler.GetAppointmentCandidatesInput object.") method.

This example shows how to get a list of available appointment candidates based on workTypeGroupId:

```

```

This example shows how to get a list of available appointment candidates based on workType:

```

```

This example shows how to get a list of available candidate appointments based on durationInMinutes and without the workTypeGroupId or workType fields:

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

If you're using shifts, you must specify the workTypeGroupId or workType field.

```

```

This example shows a sample response of a list of available candidates:

```

```