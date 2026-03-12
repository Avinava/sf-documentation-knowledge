---
title: "Schedule Appointments by Using Sharing Availability"
domain: salesforce-scheduler-developer-guide
topic: schedule-appointments-by-using-sharing-availability
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.221Z
estimatedTokens: 1251
keywords: [Schedule, Appointments, Sharing, Availability, case, how, external, website, Salesforce, Scheduler, APIs, users, book, invitation, URL]
---

# Schedule Appointments by Using Sharing Availability

> This use case describes how to create an external website by using the
      Salesforce Scheduler APIs that your users can use to book appointments using the invitation
      URL.

# Schedule Appointments by Using Sharing Availability

This use case describes how to create an external website by using the Salesforce Scheduler APIs that your users can use to book appointments using the invitation URL.

Service resources or their assistants can share the period during which they’re available for appointment booking. They can define and share the appointment criteria with the users by creating an invitation URL. Users can book an appointment by going to the invitation URL. The URL takes users to the first week that the service resource is available.

-   A wealth manager (contractor) can generate an appointment invitation URL and add the URL to their signature. Prospective clients can use this URL to book appointments.
-   An equity portfolio manager (contractor) wants to share their availability three months in the future with an existing client (authenticated consumer) for portfolio review. The equity portfolio manager can generate a URL with a start date that's three months from the current date, and then share the URL with the client.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

To book appointments using an invitation URL, users need access to the invitation record, service territory, work type or work type group, and service resources that are associated with the invitation URL. Admins can provide the required read-only access to the records by using the sharing settings or Apex sharing.

Here are the high-level steps for building an external website by using the Salesforce Scheduler APIs, which are outlined in detail later.![A representation of the create service appointment using sharing availability flow.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fflow_using_sharing_availability.png&folder=salesforce_scheduler_developer_guide)

1.  [Configure Invitation URLs to Open on External Websites](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_configure_URL_prefix.htm)
    Admins can add a URL prefix to an invitation URL to directly open the invitation on an external website.
2.  [Generate an Appointment Invitation URL](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_generate_invitation_URL.htm)
    Only admins can generate invitation URLs. Share the invitation URLs with your users so that the users can use the URLs to quickly book appointments.
3.  [Retrieve the Invitation Key](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_get_invitation_key.htm)
    Retrieve the unique invitation key from the invitation URL that the user clicks. The invitation URL has two components: the invitation URL prefix and the invitation key. The invitation key is an auto-generated unique identifier.
4.  [Get the Appointment Invitation Details](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_get_appointment_invitation_details.htm)
    An appointment invitation has information that users can use for booking appointments. Use the Query() request to run Salesforce Query Language (SOQL) on the AppointmentInvitation object to retrieve the appointment invitation details, such as the appointment invitation ID, appointment topic ID (work type group ID), appointment topic type, service territory ID, availability start date, and availability end date.
5.  [Get the Appointment Invitee Details](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_get_appointment_invitee_details.htm)
    An appointment invitee has information about the participant and the resources required for creating an appointment invitation URL. Use the Query() request to run Salesforce Query Language (SOQL) on the AppointmentInvitee object to retrieve the appointment invitee details, such as the service territory ID, appointment topic ID, service resource ID, and available booking start and end dates, which you need for retrieving the calendar availability for the invitation URL. You can also retrieve additional details that you need when creating an appointment, such as whether the resources are primary or required.
6.  [Show Calendar Availability](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_show_invitation_calendar_availability.htm)
    A time slot is a period in a day when an appointment can be scheduled. Use the getAppointmentSlots API to retrieve the calendar availability of the service resources associated with the appointment invitation.
7.  [Book Service Appointments](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_review_and_book_invitation_appointment.htm)
    A service appointment is an appointment booked through Salesforce Scheduler. Use the service-appointments API to create an appointment.

## Related Topics

- Configure Invitation URLs to Open on External Websites (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_configure_URL_prefix.htm)
- Generate an Appointment Invitation URL (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_generate_invitation_URL.htm)
- Retrieve the Invitation Key (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_get_invitation_key.htm)
- Get the Appointment Invitation Details (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_get_appointment_invitation_details.htm)
- Get the Appointment Invitee Details (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_get_appointment_invitee_details.htm)
- Show Calendar Availability (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_show_invitation_calendar_availability.htm)
- Book Service Appointments (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_review_and_book_invitation_appointment.htm)
