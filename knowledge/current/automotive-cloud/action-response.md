---
title: "Action Response"
domain: automotive-cloud
topic: action-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.841Z
estimatedTokens: 103
keywords: [Action, Output, representation, inbound, event]
---

# Action Response

> Output representation of the action response of an inbound
    event.

# Action Response

Output representation of the action response of an inbound event.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| action​Name | String | Action name of the inbound event. | Small, 60.0 | 60.0 |
| action​Output | Map<String, Object> | Action output of the inbound event. | Small, 60.0 | 60.0 |

## Code Examples

```
{
  "actionResponse": [
    {
      "actionName": "CreateUpdateAction",
      "actionOutput": {
        "objectName": "Account",
        "operationType": "Create",
        "recordId": "001xx000003gb9Naac"
      }
    },
    {
      "actionName": "CreateUpdateAction",
      "actionOutput": {
        "objectName": "Account",
        "operationType": "Update",
        "recordId": "001xx000003gb9Naac"
      }
    }
  ]
}
```
