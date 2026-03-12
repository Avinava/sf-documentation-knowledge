---
title: "Schedule an Anonymous Appointment"
domain: salesforce-scheduler-developer-guide
topic: schedule-an-anonymous-appointment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.226Z
estimatedTokens: 831
keywords: [Schedule, Anonymous, Appointment, Build, scheduling, application, Salesforce, Scheduler, APIs, book, assigning, service, resources, automatically, Account]
---

# Schedule an Anonymous Appointment

> Build a scheduling application using Salesforce Scheduler APIs to book an anonymous
   appointment by assigning service resources automatically. Account users and guest users don’t
   always know the name of the service resource, and sometimes they don’t care which resource
   they’re assigned to. You can automatically assign a service resource based on the time slot that
   a user selects. To protect users’ privacy, you can also hide their names on the review
   appointment page.

# Schedule an Anonymous Appointment

Build a scheduling application using Salesforce Scheduler APIs to book an anonymous appointment by assigning service resources automatically. Account users and guest users don’t always know the name of the service resource, and sometimes they don’t care which resource they’re assigned to. You can automatically assign a service resource based on the time slot that a user selects. To protect users’ privacy, you can also hide their names on the review appointment page.

Before you can use the scheduler developer resources to build the app, set up Salesforce Scheduler for your organization. For more information, see [Set Up Salesforce Scheduler](https://help.salesforce.com/articleView?id=platform.ls_set_up.htm&type=5&language=en_US).

These steps provide a high-level overview of how you can create an app to let users schedule appointments without selecting service resources.

![A representation of the automatic resource assignment and anonymous appointment flow.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fflow_create_anonymous_appointment.png&folder=salesforce_scheduler_developer_guide)

1.  [Authenticate with a Connected App](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_scheduler_api_auth.htm)
    The first step in an API-based integration is to connect to Salesforce and get an access token using OAuth. OAuth access token authentication is the most secure way to authenticate SOAP and REST API calls.
2.  [Get Work Type Groups](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_get_work_type_group.htm)
    A work type group represents a general appointment category or topic, such as a home loan or investment. Use the Query() method on the WorkTypeGroup object to retrieve a list of work type groups.
3.  [Get Engagement Channels](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_get_engagement_channel_types.htm)
    An engagement channel is a medium, such as Phone, Video, and In Person that service resources use to meet customers.
4.  [Get Service Territories](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_get_service_territory.htm)
    A service territory represents a branch or office location where your service resources (appointment attendees) operate from or meet customers. Use the service-territories Connect API to fetch a list of service territories based on a work type group or work type.
5.  [Get Available Territory Slots](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_get_available_territory_slot.htm)
    A time slot represents a period in a day when an appointment can be scheduled. Use the available-territory-slots Connect API to fetch the consolidated availability of each service resource within the selected territory.
6.  [Create Service Appointments](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_create_anonymous_appointment.htm)
    A service appointment represents an appointment booked through Salesforce Scheduler. Make a POST request on the service-appointments Connect API to create the appointment.

## Related Topics

- Authenticate with a Connected App (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_scheduler_api_auth.htm)
- Get Work Type Groups (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_get_work_type_group.htm)
- Get Engagement Channels (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_get_engagement_channel_types.htm)
- Get Service Territories (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_get_service_territory.htm)
- Get Available Territory Slots (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_get_available_territory_slot.htm)
- Create Service Appointments (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_create_anonymous_appointment.htm)
