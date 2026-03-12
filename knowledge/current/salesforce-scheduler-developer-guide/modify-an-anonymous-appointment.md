---
title: "Modify an Anonymous Appointment"
domain: salesforce-scheduler-developer-guide
topic: modify-an-anonymous-appointment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.235Z
estimatedTokens: 803
keywords: [Modify, Anonymous, Appointment, case, explains, how, change, service, resource, Salesforce, Scheduler, APIs]
---

# Modify an Anonymous Appointment

> This use case explains how to change the service resource of an existing anonymous
      service appointment by using Salesforce Scheduler APIs.

# Modify an Anonymous Appointment

This use case explains how to change the service resource of an existing anonymous service appointment by using Salesforce Scheduler APIs.

Typically, anonymous appointments are scheduled when users who don't belong to your organization request for appointments. For example, a subscriber of your app requests for an appliance maintenance appointment from your service app. After a service appointment is scheduled by using the anonymous mechanism, the service resource for the appointment can mark themselves unavailable. In that scenario, as an administrator or an appointment orchestrator for your organization, ensure that you modify the anonymous service appointment and assign a different resource to the appointment.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

For the procedure to be successful, ensure that each unavailable resource marks themselves as absent in Salesforce Scheduler. Otherwise, the API request to retrieve the list of service resources continues to include the resources that are currently unavailable or absent.

This flowchart provides an overview of the procedure:![A representation of the flow to modify an anonymous service appointment when the associated resource is unavailable.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fflow_modify_anonymous_booking.png&folder=salesforce_scheduler_developer_guide)

1.  [Authenticate with a Connected App](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc5_scheduler_api_auth.htm)
    The first step in an API-based integration is to connect to Salesforce and get an access token by using OAuth. OAuth access token authentication is the most secure way to authenticate SOAP and REST API calls.
2.  [Get Service Appointments](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc5_get_service_appointments.htm)
    The AssignedResource object represents a service resource who is assigned to a service appointment in Salesforce Scheduler. Retrieve service appointment IDs of all scheduled appointments associated with specific resources by using the query request on the AssignedResource object.
3.  [Get Service Appointment Details](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc5_get_service_appointment_details.htm)
    A service appointment represents an appointment that’s booked via Salesforce Scheduler. Use a GET method to fetch the details of a service appointment record.
4.  [Get Available Resources](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc5_get_available_resources.htm)
    Retrieve the resources that are available for an anonymous appointment.
5.  [Update Service Appointments](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc5_update_anonymous_appoint.htm)
    A service appointment represents an appointment that is booked via Salesforce Scheduler. To update the appointment, run a PATCH request on the service-appointments Connect API.

## Related Topics

- Authenticate with a Connected App (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc5_scheduler_api_auth.htm)
- Get Service Appointments (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc5_get_service_appointments.htm)
- Get Service Appointment Details (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc5_get_service_appointment_details.htm)
- Get Available Resources (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc5_get_available_resources.htm)
- Update Service Appointments (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc5_update_anonymous_appoint.htm)
