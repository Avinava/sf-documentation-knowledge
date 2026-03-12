---
title: "Salesforce Scheduler Standard Objects"
domain: salesforce-scheduler-developer-guide
topic: salesforce-scheduler-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:43.570Z
estimatedTokens: 2461
keywords: [Salesforce, Scheduler, Standard, Objects, gives, access, suite, Setup, tabs, shares, Service, core, features, including, appointments]
---

# Salesforce Scheduler Standard Objects

> Salesforce Scheduler gives you access to a suite of standard objects that you can
      find in Setup and as tabs in Salesforce. Salesforce Scheduler shares these objects with Field
      Service. These objects make up the core Salesforce Scheduler features, including
      appointments.

# Salesforce Scheduler Standard Objects

Salesforce Scheduler gives you access to a suite of standard objects that you can find in Setup and as tabs in Salesforce. Salesforce Scheduler shares these objects with Field Service. These objects make up the core Salesforce Scheduler features, including appointments.

Salesforce Scheduler is available for an extra cost in Lightning Experience.

Available in: Enterprise, Unlimited, Performance, and Developer editions.

The following is a list of standard objects currently available within the Salesforce Scheduler platform.

-   **[AppointmentAssignmentPolicy](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_appointmentassignmentpolicy.htm)**
    Stores information about resource assignment rules. This object is available in API version 52.0 and later.
-   **[AppointmentCategory](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_appointmentcategory.htm)**
    Represents the category of work types and shifts. This object is available in API version 58.0 and later.
-   **[AppointmentInvitation](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_appointmentinvitation.htm)**
    Represents information about an appointment invitation that’s created for customers who can use it for booking appointments. This object is available in API version 55.0 and later.
-   **[AppointmentInvitee](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_appointmentinvitee.htm)**
    Represents information about the participant and resources required for creating an appointment invitation URL. This object is available in API version 55.0 and later.
-   **[AppointmentScheduleAggr](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_appointmentscheduleaggr.htm)**
    Records the utilization of a service resource, by date, for the Load Balancing appointment assignment policy. This object is available in API version 52.0 and later.
-   **[AppointmentScheduleLog](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_appointmentschedulelog.htm)**
    Stores service appointments of each service Resource. This object is used to calculate the utilization of a service resource for the AppointmentScheduleAggr object. This object is available in API version 52.0 and later.
-   **[AppointmentSchedulingPolicy](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_appointmentschedulingpolicy.htm)**
    Represents a set of rules for scheduling appointments using Salesforce Scheduler. This object is available in API version 45.0 and later.
-   **[AssignedResource](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_assignedresource.htm)**
    Represents a service resource who is assigned to a service appointment in Salesforce Scheduler. Assigned resources appear in the Assigned Resources related list on service appointments. This object is available in API version 38.0 and later.
-   **[Holiday](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_holiday.htm)**
    Represents the fields in the Holiday object that are used by Salesforce Scheduler. A holiday is a period during which your service resource is unavailable for appointment scheduling.
-   **[OperatingHours](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_operatinghours.htm)**
    Represents the hours in which a service territory, service resource, or account is available for work in Salesforce Scheduler. This object is available in API version 38.0 and later.
-   **[OperatingHoursHoliday](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_operatinghoursholiday.htm)**
    Represents the day or hours for which a service territory and service resources exclusive to the service territory are unavailable in Salesforce Scheduler. This object is available in API version 54.0 and later.
-   **[ResourcePreference](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_resourcepreference.htm)**
    Represents an account’s preference for a specified service resource.
-   **[ResourceAbsence](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_resourceabsence.htm)**
    Represents a time period in which a service resource is unavailable to work in Salesforce Scheduler. This object is available in API version 38.0 and later.
-   **[ServiceAppointment](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_serviceappointment.htm)**
    Represents an appointment booked through Salesforce Scheduler. This object is available in API version 38.0 and later.
-   **[ServiceAppointmentAttendee](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_serviceappointmentattendee.htm)**
    Represents a Lead, Contact, or Person Account who is associated with the Service Appointment of type Group. This object is available in API version 60.0 and later.
-   **[ServiceResource](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_serviceresource.htm)**
    Represents a technician or an asset. This object is available in API version 38.0 and later.
-   **[ServiceResourceSkill](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_serviceresourceskill.htm)**
    Represents a skill that a service resource possesses in Salesforce Scheduler. This object is available in API version 38.0 and later.
-   **[ServiceTerritory](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_serviceterritory.htm)**
    Represents a geographic or functional region in which work can be performed in Salesforce Scheduler. This object is available in API version 38.0 and later.
-   **[ServiceTerritoryMember](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_serviceterritorymember.htm)**
    Represents a service resource who can be assigned to service appointments in a service territory in Salesforce Scheduler. This object is available in API version 38.0 and later.
-   **[Shift](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_shift.htm)**
    Represents a shift for service resource scheduling. This object is available in API version 46.0 and later.
-   **[Skill](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_skill.htm)**
    Represents a skill that service resources have. This object is available in API version 24.0 and later.
-   **[SkillRequirement](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_skillrequirement.htm)**
    Represents a skill that is required to complete a particular task in Salesforce Scheduler. Skill requirements can be added to work types Salesforce Scheduler. This object is available in API version 38.0 and later.
-   **[TimeSlot](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_timeslot.htm)**
    Represents a period of time on a specified day of the week during which work can be performed in Salesforce Scheduler. Operating hours consist of one or more time slots. This object is available in API version 38.0 and later.
-   **[Waitlist](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_waitlist.htm)**
    Represents a queue to which drop in customers who visit the branch without an already scheduled appointment are added. This object is available in API version 58.0 and later.
-   **[WaitlistParticipant](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_waitlistparticipant.htm)**
    Represents a customer who is added to a waitlist. This object is available in API version 58.0 and later.
-   **[WorkType](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_worktype.htm)**
    Represents a type of work to be performed in Salesforce Scheduler. This object is available in API version 38.0 and later.
-   **[WorkTypeGroup](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_worktypegroup.htm)**
    Represents a grouping of work types used to categorize types of appointments available in Salesforce Scheduler. This object is available in API version 45.0 and later.
-   **[WorkTypeGroupDataTranslation](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_worktypegroupdatatranslation.htm)**
    Represents the translated values of the data stored within a [WorkTypeGroup](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_worktypegroup.htm "Represents a grouping of work types used to categorize types of appointments available in Salesforce Scheduler. This object is available in API version 45.0 and later.") record’s fields. This object is available in API version 54.0 and later.

## Related Topics

- AppointmentAssignmentPolicy (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_appointmentassignmentpolicy.htm)
- AppointmentCategory (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_appointmentcategory.htm)
- AppointmentInvitation (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_appointmentinvitation.htm)
- AppointmentInvitee (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_appointmentinvitee.htm)
- AppointmentScheduleAggr (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_appointmentscheduleaggr.htm)
- AppointmentScheduleLog (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_appointmentschedulelog.htm)
- AppointmentSchedulingPolicy (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_appointmentschedulingpolicy.htm)
- AssignedResource (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_assignedresource.htm)
- Holiday (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_holiday.htm)
- OperatingHours (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_operatinghours.htm)
