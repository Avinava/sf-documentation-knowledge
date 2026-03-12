---
title: "Perform Action Input"
domain: uiapi
topic: perform-action-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.246Z
estimatedTokens: 307
keywords: [Perform, Action, Input, quick, creates, updates, record]
---

# Perform Action Input

> Perform a quick action that creates or updates a record.

# Perform Action Input

Perform a quick action that creates or updates a record.

JSON example

This example uses a request body to create a Contact for an Account.

```

```

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| allowSaveOnDuplicate | Boolean | Specifies whether to save a duplicate record (true), or not (false). The default value is false. | Optional | 57.0 |
| apiName | String | To API name of the object to create or update. | Required | 57.0 |
| contextId | String | The ID of the related record for the quick action. | Required for performing object-specific quick actionsOptional for performing global quick actions | 57.0 |
| fields | Map<String, Object> | Map of field names to field values. | Required | 57.0 |

#### See Also

-   [Perform Quick Actions](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_perform_action.htm "Perform a quick action that creates or updates a record.")

-   [Update a Record with a Quick Action](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_update_action.htm "Perform an Update a Record quick action. To perform a quick action that creates or updates a record, you can also use the POST method.")

## Code Examples

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

- Perform Quick Actions (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_perform_action.htm)
- Update a Record with a Quick Action (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_update_action.htm)
