---
title: "Update Last Selected App"
domain: uiapi
topic: update-last-selected-app
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.306Z
estimatedTokens: 251
keywords: [Selected, App, metadata, saves, user]
---

# Update Last Selected App

> Returns metadata for an app, and saves an app as the last selected
      for a user.

# Update Last Selected App

Returns metadata for an app, and saves an app as the last selected for a user.

Resource

```

```

Available Version

43.0

HTTP Method

PATCH

Example

As an example, let’s say that the user has an app with an ID of 06mRM000000AFIrYAO. To get metadata for this app, make this request:

```

```

The PATCH request doesn’t require a request body. The request returns metadata for the app and its associated navigation tabs. It also updates the last selected app to be this app.

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| formFactor | String | The form factor for each app that the user has access to.Large—App supports the desktop display size.Medium—App supports the tablet display size.Small—App supports the phone display size. | Required | 43.0 |

Response body for PATCH

[App](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_app.htm "The metadata for a single app.")

## Code Examples

```
/ui-api/apps/${appId}
```

```
PATCH /services/data/v66.0/ui-api/apps/06mRM000000AFIrYAO?formFactor=Large
```

## Related Topics

- App (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_app.htm)
