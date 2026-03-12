---
title: "Get a Quick Action Layout"
domain: uiapi
topic: get-a-quick-action-layout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.534Z
estimatedTokens: 202
keywords: [Quick, Action, Layout, record]
---

# Get a Quick Action Layout

> Get information about the record layout used by a Create a Record or Update a Record
  quick action.

# Get a Quick Action Layout

Get information about the record layout used by a Create a Record or Update a Record quick action.

Resource

```

```

actionApiName—The API name of a quick action.

Available Version

58.0

HTTP Method

GET

Example

This example returns information about the record layout used by the Create Case quick action on the Account object.

```

```

Request parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| objectApiName | String | API name of the object. | Optional | 60.0 |
| recordTypeId | String | ID of the record type. | Optional | 60.0 |

Response Body

[Quick Action Layout](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_quick_action_layout.htm "The record layout used by the quick action.")

## Code Examples

```
/ui-api/actions/layout/${actionApiName}
```

```
GET /services/data/v66.0/ui-api/actions/layout/Account.CreateCase
```

## Related Topics

- Quick Action Layout (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_quick_action_layout.htm)
