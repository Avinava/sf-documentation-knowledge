---
title: "Waitlist Participant Result"
domain: salesforce-scheduler-developer-guide
topic: waitlist-participant-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.467Z
estimatedTokens: 345
keywords: [Waitlist, Participant, Result, Output, representation, customer, added]
---

# Waitlist Participant Result

> Output representation of a waitlist participant result. A waitlist
      participant is a customer who is added to a waitlist.

# Waitlist Participant Result

Output representation of a waitlist participant result. A waitlist participant is a customer who is added to a waitlist.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| created​Date | String | Date when the waitlist participant record was created. | Small, 59.0 | 59.0 |
| extended​Fields | Extended Fields[] | List of extended fields associated with the waitlist participant record. | Big, 59.0 | 59.0 |
| participant | Waitlist Participant Details | Details of the participant from the waitlist participant record. | Small, 59.0 | 58.0 |
| participant​Identifier | String | Alphanumeric unique identifier of the participant in a waitlist. For example, D101, E63, or A5015. | Small, 59.0 | 59.0 |
| service​AppointmentId | String | ID of the service appointment that’s related to the waitlist participant. | Small, 59.0 | 59.0 |
| service​Resource | Waitlist Service Resource | Details of the service resource that’s related to the service appointment for the waitlist participant. | Small, 59.0 | 59.0 |
| waitlist​ParticipantId | String | ID of the waitlist participant record. | Small, 59.0 | 59.0 |
| workType​Group | Waitlist Work Type Group | Details of the work type group that's associated with the service appointment. | Small, 59.0 | 59.0 |

## Code Examples

```
"waitlistParticipants":[
      {
        "participant":{
         "id":"001xx000003GZUZAA4",
         "name":"Global Media"
       },
        "participantIdentifier":"WP-0020",
        "serviceAppointmentId":"08pxx0000004CYqAAM",
            "serviceResource":{
               "id":"0Hnxx0000004C92CAE",
               "name":"Admin"
             },
        "waitlistParticipantId":"12oxx0000004FGiAAM",
        "workTypeGroup":{
             "id":"0VSxx0000004CoyGAE",
             "name":"General Banking WTG"
         },
        "createdDate" :"2023-05-02T12:23:34",
        "extendedFields":[
             {
               "name":"Source__c",
               "value":"Email"
              }
      ]
   }
]
```

## Related Topics

- Extended Fields (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_responses_scheduler_extended_fields_output.htm)
- Waitlist Participant
                Details (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_responses_waitlist_participant_participant.htm)
- Waitlist Service Resource (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_responses_waitlist_service_resource.htm)
- Waitlist Work Type Group (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_responses_waitlist_work_type_group.htm)
