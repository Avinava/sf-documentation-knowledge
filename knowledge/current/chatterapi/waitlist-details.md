---
title: "Waitlist Details"
domain: chatterapi
topic: waitlist-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.557Z
estimatedTokens: 271
keywords: [Waitlist, Output, representation]
---

# Waitlist Details

> Output representation of the waitlist details.

# Waitlist Details

Output representation of the waitlist details.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description of the waitlist. | Small, 59.0 | 59.0 |
| isActive | Boolean | Indicates whether the waitlist is available to add drop-in customers (true) or not (false). | Small, 59.0 | 59.0 |
| name | String | Name of the waitlist. | Small, 59.0 | 59.0 |
| service​Resources | Waitlist Service Resource[] | Details of the service resources that are related to the service appointment. | Small, 59.0 | 59.0 |
| waitlist​Analytics | Waitlist Analytics | Details of the waitlist analytics. | Small, 59.0 | 59.0 |
| waitlist​Id | String | ID of the waitlist. | Small, 59.0 | 59.0 |
| waitlist​Participants | Waitlist Participant Result[] | Participants who are added to the waitlist. | Small, 59.0 | 59.0 |
| workType​Groups | Waitlist Work Type Group[] | Details of the work type groups that are related to the service appointment. | Small, 59.0 | 59.0 |

## Code Examples

```
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
```

## Related Topics

- Waitlist Service Resource (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_waitlist_service_resource.htm)
- Waitlist Analytics (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_waitlist_analytics.htm)
- Waitlist Participant Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_waitlist_participant_result.htm)
- Waitlist Work Type Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_waitlist_work_type_group.htm)
