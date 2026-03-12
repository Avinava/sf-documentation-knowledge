---
title: "Create a Single-Resource Appointment"
domain: salesforce-scheduler-developer-guide
topic: create-a-single-resource-appointment
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.223Z
estimatedTokens: 832
keywords: [Single-Resource, Appointment, case, explains, how, build, scheduling, website, allow, users, book, service, appointments, resource, Salesforce]
---

# Create a Single-Resource Appointment

> This use case explains how you can build a scheduling website to allow users to book
   service appointments with a single resource using Salesforce Scheduler APIs.

# Create a Single-Resource Appointment

This use case explains how you can build a scheduling website to allow users to book service appointments with a single resource using Salesforce Scheduler APIs.

Before you can use the scheduler developer resources to build the app, set up Salesforce Scheduler for your organization. For more information, see [Set Up Salesforce Scheduler](https://help.salesforce.com/articleView?id=platform.ls_set_up.htm&type=5&language=en_US).

Here are the high level steps building an external web site by using the Salesforce Scheduler APIs, which are outlined in detail later.![A representation of the create service appointment flow.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fflow_create_service_appointment.png&folder=salesforce_scheduler_developer_guide)

1.  [Authenticate with a Connected App](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc1_scheduler_api_auth.htm)
    The OAuth access token authentication is the most secure way to authenticate SOAP and REST API calls. Before you use Salesforce Scheduler for API-based integration, authenticate the API calls using OAuth.
2.  [Get Work Type Groups](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc1_get_work_type_group.htm)
    A work type group represents a general appointment category or topic, such as a home loan or investment. Show your users your work type groups on the landing page by retrieving the list of work type groups from your Salesforce instance. Your users can select a work type group from the list while booking appointments.
3.  [Get Engagement Channels](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc1_get_channel_types.htm)
    An engagement channel is a medium, such as Phone, Video, and In Person that service resources use to meet customers.
4.  [Get Service Territories](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc1_get_service_territory.htm)
    A service territory represents a branch or office location where your service resources (appointment attendees) operate from or meet customers. Show your users your available service territories on the next page on your website by retrieving a list of active service territories from your Salesforce instance. Your users can search for service territories based on user-entered name, city, postal code, or state. Users can also view the distance between two locations, such as between a service territory and the user's current location.
5.  [Get Service Resources](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc1_get_appointment_candidates.htm)
    A service resource represents an employee from your organization, such as a loan officer, investment advisor, doctor, nurse practitioner, or retail store specialist, who attends appointments with clients.
6.  [Create Service Appointments](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc1_create_single_resource_appointment.htm)
    Show your users the details of a service appointment—an appointment booked through Salesforce Scheduler—so that users can review and create the appointment.

## Related Topics

- Authenticate with a Connected App (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc1_scheduler_api_auth.htm)
- Get Work Type Groups (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc1_get_work_type_group.htm)
- Get Engagement Channels (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc1_get_channel_types.htm)
- Get Service Territories (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc1_get_service_territory.htm)
- Get Service Resources (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc1_get_appointment_candidates.htm)
- Create Service Appointments (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc1_create_single_resource_appointment.htm)
