---
title: "Create a Multi-Resource Appointment"
domain: salesforce-scheduler-developer-guide
topic: create-a-multi-resource-appointment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.230Z
estimatedTokens: 1261
keywords: [Multi-Resource, Appointment, Build, scheduling, application, Salesforce, Scheduler, APIs, book, service, lets, users, appointments, include, resource]
---

# Create a Multi-Resource Appointment

> Build a scheduling application using Salesforce Scheduler APIs to book a
   multi-resource service appointment. Multi-resource scheduling lets users create appointments that
   include more than one required service resource.

# Create a Multi-Resource Appointment

Build a scheduling application using Salesforce Scheduler APIs to book a multi-resource service appointment. Multi-resource scheduling lets users create appointments that include more than one required service resource.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

A multi-resource appointment can have a maximum of five required service resources: one primary required service resource plus four required service resources, including asset resources.

Before you can use the scheduler developer resources to build the app, set up Salesforce Scheduler for your organization. For more information, see [Set Up Salesforce Scheduler](https://help.salesforce.com/articleView?id=platform.ls_set_up.htm&type=5&language=en_US).

These steps provide a high-level overview of how you can build a multi-resource scheduling app, which is explained in detail in the following sections.![A representation of the create multi-resource appointment flow.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fflow_create_multi_resource_appointment.png&folder=salesforce_scheduler_developer_guide)

1.  [Considerations for Multi-Resource Scheduling](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_considerations_for_multi_resource_appointment.htm)
    In multi-resource scheduling, a primary service resource anchors the appointment and must be marked required. Primary service resources are the only required resources whose skills are matched to the skill requirements for an appointment. Other required service resources are matched to appointments based on their availability and the primary resource’s service territory.
2.  [Enable Multi-Resource Scheduling](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_enable_multi_resource.htm)
    Enable the Multi-Resource Scheduling setting to let users schedule groups of resources for customer appointments.
3.  [Update Field Level Security for Multi-Resource Scheduling](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_update_field_level_security.htm)
    Update the field-level security settings for the Primary Resource field on the Assigned Resource object for user profiles that need to access multi-resource scheduling.
4.  [Authenticate with a Connected App](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_scheduler_api_auth.htm)
    The first step in an API-based integration is to connect to Salesforce and get an access token using OAuth. OAuth access token authentication is the most secure way to authenticate SOAP and REST API calls.
5.  [Get Work Type Groups](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_get_work_type_groups.htm)
    A work type group represents a general appointment category or topic, such as a home loan or investment. Use the Query() method on the WorkTypeGroup object to retrieve a list of work type groups.
6.  [Get Engagement Channels](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_get_engagement_channel_types.htm)
    An engagement channel is a medium, such as Phone, Video, and In Person that service resources use to meet customers.
7.  [Get Service Territories](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_get_service_territories.htm)
    A service territory represents a branch or office location where your service resources (appointment attendees) operate from or meet customers. Use the service-territories Connect API to fetch a list of service territories based on a work type group or work type.
8.  [Get Appointment Candidates](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_get_appointment_candidates.htm)
    A service resource represents an employee from your organization, such as a loan officer, investment advisor, doctor, nurse practitioner, or retail store specialist, who attends appointments with clients. Use the getAppointmentCandidates REST API to fetch the available service resources based on work type group and service territory.
9.  [Get Appointment Time Slots](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_get_appointment_slots.htm)
    A time slot represents a period in a day when an appointment can be scheduled. Use the getAppointmentSlots REST API to fetch the available time slots for a resource.
10.  [Create Service Appointments](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_create_multi_resource_appointment.htm)
     A service appointment represents an appointment booked through Salesforce Scheduler. Make a POST request on the service-appointments Connect API to create the appointment.

## Related Topics

- Considerations for Multi-Resource Scheduling (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_considerations_for_multi_resource_appointment.htm)
- Enable Multi-Resource Scheduling (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_enable_multi_resource.htm)
- Update Field Level Security for Multi-Resource Scheduling (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_update_field_level_security.htm)
- Authenticate with a Connected App (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_scheduler_api_auth.htm)
- Get Work Type Groups (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_get_work_type_groups.htm)
- Get Engagement Channels (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_get_engagement_channel_types.htm)
- Get Service Territories (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_get_service_territories.htm)
- Get Appointment Candidates (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_get_appointment_candidates.htm)
- Get Appointment Time Slots (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_get_appointment_slots.htm)
- Create Service Appointments (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_create_multi_resource_appointment.htm)
