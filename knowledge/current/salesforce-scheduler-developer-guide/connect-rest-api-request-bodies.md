---
title: "Connect REST API Request Bodies"
domain: salesforce-scheduler-developer-guide
topic: connect-rest-api-request-bodies
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:43.274Z
estimatedTokens: 828
keywords: [Connect, REST, API, Bodies, perform, POST, PATCH, PUT, pass, query, formatted, either, XML, JSON, chapter]
---

# Connect REST API Request Bodies

> To perform a POST, PATCH, or PUT request, pass query parameters
or create a request body formatted in either XML or JSON. This chapter
lists the request bodies. The query parameters are listed with each
resource.

# Connect REST API Request Bodies

To perform a POST, PATCH, or PUT request, pass query parameters or create a request body formatted in either XML or JSON. This chapter lists the request bodies. The query parameters are listed with each resource.

To create a JSON request body, specify the properties of the request body in JSON format.

This is an example of a Comment request body.

```

```

If a request body is top-level, it has a root XML tag listed. To create an XML request body, nest the properties as XML tags inside the root XML tag.

This is the same Connect request body in XML format:

```

```

-   **[Available Territory Slots Input](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_available_territory_slots_input.htm)**
    Input representation of the available territory slots request.
-   **[Assigned Resource Input](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_assigned_resource_input.htm)**
    Input representation of the assigned resource details.
-   **[Extended Fields Input](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_extended_fields_input.htm)**
    Input representation for extended fields.
-   **[Group Appointments Input](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_get_group_appointments_input.htm)**
    Input representation of the criteria to filter and retrieve group appointments.
-   **[Lead Input](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_lead_input.htm)**
    Lead input.
-   **[Service Appointments Create Input](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_service_appointments_input.htm)**
    Input representation for creating a service appointment. You can create service appointments, assign resources, and generate leads with either parentRecordId or lead but not both.
-   **[Service Appointment Update Input](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_update_service_appointment_input.htm)**
    Input representation for updating a service appointment. Use to update the scheduled times, assigned resource(s), service territory or even work type for existing appointments.
-   **[Service Appointment Input](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_service_appointment_input.htm)**
    Input representation of the service appointment details.
-   **[Skill Requirement Input](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_skill_requirement_input.htm)**
    Skill requirement.
-   **[Waitlist Check In Input](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_waitlist_check_in_input.htm)**
    Input representation of the participant’s waitlist check in request.
-   **[Work Type Input](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_work_type_input.htm)**
    Work type.

## Code Examples

```
{
	"body" : "Let's look for a new solution."
}
```

```
<comment>
	<body>Let's look for a new solution.</body>
</comment>
```

## Related Topics

- Available Territory Slots Input (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_available_territory_slots_input.htm)
- Assigned Resource Input (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_assigned_resource_input.htm)
- Extended Fields Input (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_extended_fields_input.htm)
- Group Appointments Input (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_get_group_appointments_input.htm)
- Lead Input (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_lead_input.htm)
- Service Appointments Create Input (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_service_appointments_input.htm)
- Service Appointment Update Input (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_update_service_appointment_input.htm)
- Service Appointment Input (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_service_appointment_input.htm)
- Skill Requirement Input (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_skill_requirement_input.htm)
- Waitlist Check In Input (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_waitlist_check_in_input.htm)
