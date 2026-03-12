---
title: "Schedule Appointments by Selecting Location First"
domain: salesforce-scheduler-developer-guide
topic: schedule-appointments-by-selecting-location-first
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.247Z
estimatedTokens: 602
keywords: [Schedule, Appointments, Selecting, Location, case, explains, how, build, scheduling, app, service, selection, appointment, experience, Salesforce]
---

# Schedule Appointments by Selecting Location First

> This use case explains how you can build a scheduling app to have the
   service location selection first in your appointment scheduling experience using Salesforce
   Scheduler APIs.

# Schedule Appointments by Selecting Location First

This use case explains how you can build a scheduling app to have the service location selection first in your appointment scheduling experience using Salesforce Scheduler APIs.

If you prefer to have the service location selection first, unlike the regular appointment scheduling experience that comes with out-of-the-box scheduler templates, this approach is for you.

These steps provide a high-level overview of how you can build a scheduling app to have the service location selection first, which is explained in detail in the following sections.![A representation of the create service appointment scheduling flow.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fflow_see_nearest_available_service_territories.png&folder=salesforce_scheduler_developer_guide)

1.  [Enable Maps and Location Services](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_enable_location_services.htm)
    Salesforce Scheduler uses maps and location services to search for appointment locations (service territories)..
2.  [Get Service Territories](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_get_service_territories.htm)
    Display the available service territories on the first screen of your appointment scheduling app.
3.  [Get Work Type Groups](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_get_work_type_groups.htm)
    Display the work type groups for the appointment.
4.  [Get Work Type](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_default_work_type.htm)
    Default to the work type that is associated with the service territory and work type group.
5.  [Get Service Resources](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_get_appointment_candidates.htm)
    Retrieve the available service resources based on the selected work type group or work type, and service territory.
6.  [Create Service Appointments](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_create_service_appointment.htm)
    The last step in the scheduling application is to show the service appointment details for the user to review and create the appointment.

## Related Topics

- Enable Maps and Location Services (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_enable_location_services.htm)
- Get Service Territories (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_get_service_territories.htm)
- Get Work Type Groups (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_get_work_type_groups.htm)
- Get Work Type (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_default_work_type.htm)
- Get Service Resources (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_get_appointment_candidates.htm)
- Create Service Appointments (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_create_service_appointment.htm)
