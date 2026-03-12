---
title: "Update a Record with a Quick Action"
domain: uiapi
topic: update-a-record-with-a-quick-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.727Z
estimatedTokens: 234
keywords: [Record, Quick, Action, Perform, creates, updates, POST]
---

# Update a Record with a Quick Action

> Perform an Update a Record quick action. To perform a quick action that creates or
  updates a record, you can also use the POST method.

# Update a Record with a Quick Action

Perform an Update a Record quick action. To perform a quick action that creates or updates a record, you can also use the POST method.

Resource

```

```

actionApiName—The API name of a quick action.

Available Version

58.0

HTTP Method

PATCH

Example

This example updates fields on an Account.

```

```

```

```

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| performQuickActionInput | Perform Action Input | The data for the quick action. | Required | 58.0 |

Response Body

[Quick Action Execution](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_perform_action.htm "The results that are returned when a quick action executes.")

#### See Also

-   [Perform Quick Actions](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_perform_action.htm "Perform a quick action that creates or updates a record.")

## Code Examples

```
/ui-api/actions/perform-quick-action/${actionApiName}
```

```
PATCH /services/data/v66.0/ui-api/actions/perform-quick-action/Account.UpdateAccount
```

```
{
 "apiName": "Account",
 "contextId": "001RO000003zKsYYAU",  
 "fields": {
   "Type": "Prospect",
   "Phone": "(785) 241-6200"
 }
}
```

## Related Topics

- Perform Action Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_perform_action_input.htm)
- Quick Action Execution (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_perform_action.htm)
- Perform Quick Actions (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_perform_action.htm)
