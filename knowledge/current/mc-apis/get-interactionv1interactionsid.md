---
title: "GET /interaction/v1/interactions/{id}"
domain: mc-apis
topic: get-interactionv1interactionsid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.188Z
estimatedTokens: 872
keywords: [interaction, interactions, Retrieves, journey, key, call, resource, assign, API, Integration, Automation, scope, **Overview**]
---

> Retrieves a single journey by ID or key. To call this resource, assign your API Integration the Automation | Interactions | Read scope.

# GET /interaction/v1/interactions/{id}

## **Overview**

Retrieves a single journey by ID or key. To call this resource, assign your API Integration the Automation | Interactions | Read scope.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| id | string | Required | ID of version 1 of the journey in the form of a GUID (UUID). Required if not using a key. |
| key | string | Required | The key of the journey. Required if not using ID. Prefix the parameter with key:. For example, /interactions/key:{key}. |
| versionNumber | number |  | Version number of the journey to retrieve. If not provided, version 1 is returned. |
| extras | string |  | A list of additional data to fetch. Available values are: all, activities, outcomes and stats. Default is ''. |

### Usage

**Example Request**

This request retrieves a single journey object for version 2 of the journey specified by the ID.

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /interaction/v1/interactions/{id}?versionNumber=2
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```
HTTP/1.1 200
{
    "id": "00a0a000-9988-e111-9ef0-88aaa9dddaa0",
    "key": "journey_key",
    "name": "Welcome email series",
    "description": "This welcome email journey contains an entry event, goal, activities, and tags",
    "version": 2,
    "workflowApiVersion": 1,
    "createdDate": "2014-06-17T10:29:43.673",
    "modifiedDate": "2014-06-17T11:53:22.477",
    "triggers": [
        {
            "key": "first-activity",
            "name": "First activity. The starting point.",
            "type": "ContactDecision",
            "eventDefinitionKey": "my-entry-event-key",
            "arguments": {
                "criteria": "<filterXML"
            }
        }
    ],
    "goals": [
        {
            "name": "My Goal",
            "key": "goal-1",
            "type": "ContactDecision",
            "description": "This is my goal description.",
            "arguments": {
                "criteria": "<filterXML>"
            }
        }
    ],
    "activities": [
        {
            "id": "11b1b111-9988-e111-9ef0-88aaa9dddbb1",
            "key": "send-welcome-email",
            "name": "Welcome email",
            "type": "Email",
            "outcomes": [
                {
                    "key": "sent-welcome-email-then-random-split",
                    "next": "random-split"
                }
            ],
            "arguments": {
                "emailToSend": "394911",
                "emailAddress": ""
            }
        },
        {
            "id": "22c2c222-9988-e111-9ef0-88aaa9dddcc2",
            "key": "random-split",
            "name": "Random split",
            "type": "RandomSplit",
            "outcomes": [
                {
                    "key": "random-split-then-send-sms",
                    "next": "send-sms",
                    "arguments": {
                        "percentage": 90
                    }
                },
                {
                    "key": "random-split-then-10-percent-end",
                    "next": "send-sms2",
                    "arguments": {
                        "percentage": 10
                    }
                }
            ]
        }
    ],
    "tags": [
        {"name": "Fun Run"},
        {"name": "5K"}
    ],
    "status": "Draft",
    "definitionId": "33d3d333-9988-e111-9ef0-88aaa9eeedd3"
}
```

Last Updated: Jun 8, 2021
