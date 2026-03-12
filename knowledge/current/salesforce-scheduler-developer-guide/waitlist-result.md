---
title: "Waitlist Result"
domain: salesforce-scheduler-developer-guide
topic: waitlist-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.460Z
estimatedTokens: 87
keywords: [Waitlist, Result, Output, representation]
---

# Waitlist Result

> Output representation of the waitlist result.

# Waitlist Result

Output representation of the waitlist result.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| result | Waitlist List Result | Details of the waitlist, including the list of participants and work type groups. | Small, 59.0 | 59.0 |

## Code Examples

```
{
    "result":{
        "waitlists":[
            {
                "description":"None",
                "isActive":true,
                "name":"Queue_1",
                "serviceResources":[
                    {
                        "id": "0Hnxx0000004C92CAE",
                        "name":"Admin"
                    },
                    {
                        "id": "0Hnxx0000004CFVCA2",
                        "name":"Standard User 2 Technician"
                    }
                ],
                "waitlistAnalytics":{
                    "currentParticipant":1,
                    "totalWaitingTime":40,
                    "avgWaitingTime":20,
                    "avgParticipants":24
                },
                "waitlistId":"11wxx0000005GTHAA2",
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
                ],
                "workTypeGroups":[
                    {
                        "id":"0VSxx0000004CoyGAE",
                        "name":"General Banking WTG"
                    }
                ]
            }
        ]
    }
}
```

## Related Topics

- Waitlist List
                  Result (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_responses_waitlist_list_result.htm)
