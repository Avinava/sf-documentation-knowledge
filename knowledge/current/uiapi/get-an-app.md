---
title: "Get an App"
domain: uiapi
topic: get-an-app
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.303Z
estimatedTokens: 247
keywords: [App, metadata]
---

# Get an App

> Get the metadata for an app.

# Get an App

Get the metadata for an app.

Resource

```

```

Available Version

43.0

HTTP Method

GET

Example

As an example, let’s say that the user has an app with an ID of 06mRM000000AFIrYAO. To get metadata for this app, make this request:

```

```

The request returns metadata for the app and its associated navigation tabs.

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| formFactor | String | The form factor for each app that the user has access to.Large—App supports the desktop display size.Medium—App supports the tablet display size.Small—App supports the phone display size. | Required | 43.0 |
| userCustomizations | Boolean | If true, gets custom and standard navigation tabs. If false, gets only standard navigation tabs. | Optional | 43.0 |

Response Body

[App](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_app.htm#ui_api_responses_app "The metadata for a single app.")

## Code Examples

```
/ui-api/apps/${appId}
```

```
GET /services/data/v66.0/ui-api/apps/06mRM000000AFIrYAO?formFactor=Large
```

## Related Topics

- App (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_app.htm)
