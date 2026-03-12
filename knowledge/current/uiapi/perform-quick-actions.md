---
title: "Perform Quick Actions"
domain: uiapi
topic: perform-quick-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.511Z
estimatedTokens: 175
keywords: [Perform, Quick, Actions, action, creates, updates, record]
---

# Perform Quick Actions

> Perform a quick action that creates or updates a record.

# Perform Quick Actions

Perform a quick action that creates or updates a record.

Resource

```

```

actionApiName—The API name of a quick action.

Available Version

57.0

HTTP Method

POST

Example

This example uses a request body to create a Contact for an Account.

```

```

```

```

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| performQuickActionInput | Perform Action Input | The data for the quick action. | Required | 57.0 |

Response Body

[Quick Action Execution](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_perform_action.htm "The results that are returned when a quick action executes.")

## Code Examples

```
/ui-api/actions/perform-quick-action/${actionApiName}
```

```
POST /services/data/v66.0/ui-api/actions/perform-quick-action/Account.CreateContact
```

```
{
  "apiName": "Contact",
  "contextId": "001RO000003zKtEYAU",  
  "fields": {
    "LastName": "Rogers"
    "Title": "VP, Facilities"
  }
}
```

## Related Topics

- Perform Action Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_perform_action_input.htm)
- Quick Action Execution (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_perform_action.htm)
