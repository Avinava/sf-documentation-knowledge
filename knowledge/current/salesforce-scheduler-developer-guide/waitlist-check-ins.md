---
title: "Waitlist Check Ins"
domain: salesforce-scheduler-developer-guide
topic: waitlist-check-ins
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:43.365Z
estimatedTokens: 406
keywords: [Waitlist, Check, Ins, register, participant, arrives, service, territory, drop-in, appointment]
---

# Waitlist Check Ins

> Check in or register a participant to a waitlist who arrives at the
      service territory for a drop-in appointment.

# Waitlist Check Ins

Check in or register a participant to a waitlist who arrives at the service territory for a drop-in appointment.

Resource

```

```

Resource example

```

```

Available version

59.0

HTTP methods

POST

Request body for POST

Root XML tag

<waitlistCheckIn>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description of the participant. | Optional | 59.0 |
| extended​Fields | Extended Field Input[] | Details of the extended custom fields. | Optional | 59.0 |
| lead | Lead Input | Details of the prospect or lead. | Required if the participantId parameter isn’t specified. | 59.0 |
| participant​Id | String | ID of the participant with an appointment. The participant can be an account, a contact, or a lead. | Required if the lead parameter isn’t specified. | 59.0 |
| service​ResourceId | String | ID of the service resource. | Optional | 59.0 |
| waitlist​Id | String | ID of the waitlist that the participant is checked in. | Required | 59.0 |
| workType​GroupId | String | ID of the work type group. | Required if the workTypeId parameter isn’t specified. | 59.0 |
| workType​Id | String | ID of the work type that represents the topic for the appointment. | Required if the workTypeGroupId parameter isn’t specified. | 59.0 |

Response body for POST

[Waitlist Check In](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_responses_waitlist_check_in_output.htm "Output representation of the waitlist check in request.")

## Code Examples

```
/connect/scheduling/waitlist-checkin
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/scheduling/waitlist-checkin
```

```
{
   "lead": {
        "firstName":"Tom",
        "lastName":"Scott", 
        "phone":"012-345-6789",
        "email":"tom.scott@phoenix.com",
        "company":"Phoenix",
        "extendedFields":[]
   },
   "participantId":"00Q5h00000JdQWzEAN",
   "waitlistId": "0D3B0000000S2SeNOP",
   "workTypeId":"08q5h000000UuEcAAK",
   "workTypeGroupId" : "0VSRM0000004MBk4AM",
   "serviceResourceId":"0Hn0000000S2SeNOP",
   "description": "Registration for a drop-in appointment.",
   "extendedFields":[
       {
           "name":"Source__c",
           "value":"Email"
       }
   ]
}
```

## Related Topics

- Extended Field
                        Input (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_extended_fields_input.htm)
- Lead Input (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_lead_input.htm)
- Waitlist Check
              In (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_responses_waitlist_check_in_output.htm)
