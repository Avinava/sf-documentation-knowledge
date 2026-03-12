---
title: "Get Last Selected App"
domain: uiapi
topic: get-last-selected-app
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.314Z
estimatedTokens: 241
keywords: [Selected, App, Retrieves, current, user, sees]
---

# Get Last Selected App

> Retrieves the app the current user last selected or the app the user
      sees by default.

# Get Last Selected App

Retrieves the app the current user last selected or the app the user sees by default.

Resource

```

```

Available Version

43.0

HTTP Method

GET

Example

To get metadata for the last selected app, make this request:

```

```

The request returns metadata for the app and its associated navigation items.

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| formFactor | String | The form factor for each app that the user has access to.Large—App supports the desktop display size.Medium—App supports the tablet display size.Small—App supports the phone display size. | Required | 43.0 |
| userCustomizations | Boolean | If true, gets custom and standard navigation tabs. If false, gets only standard navigation tabs. | Optional | 43.0 |

Response Body

[App](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_app.htm "The metadata for a single app.")

## Code Examples

```
/ui-api/apps/selected
```

```
GET /services/data/v66.0/ui-api/apps/selected?formFactor=Large
```

## Related Topics

- App (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_app.htm)
