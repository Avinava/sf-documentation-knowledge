---
title: "Get Apps"
domain: uiapi
topic: get-apps
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.299Z
estimatedTokens: 464
keywords: [Apps, metadata, user, access]
---

# Get Apps

> Get metadata for all the apps a user has access to.

# Get Apps

Get metadata for all the apps a user has access to. Metadata for the selected app includes tabs on the app’s navigation bar. Metadata for other apps doesn’t include tabs on the navigation bar.

Resource

```

```

Available Version

43.0

HTTP Method

GET

Example

As an example, let’s say that the user has access to three apps: Service, Marketing, and Bolt Solutions. To get metadata for all the apps, make this request:

```

```

The request returns metadata for the apps and their associated navigation tabs.

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| formFactor | String | The form factor for each app that the user has access to.Large—App supports the desktop display size.Medium—App supports the tablet display size.Small—App supports the phone display size. | Required | 43.0 |
| userCustomizations | Boolean | If true, gets custom and standard navigation tabs. If false, gets only standard navigation tabs. | Optional | 43.0 |

Response Body

[Apps](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_apps.htm#ui_api_responses_apps "A list of apps that the current user has access to.")

#### See Also

-   [App](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_app.htm "The metadata for a single app.")

-   [Apps](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_apps.htm "A list of apps that the current user has access to.")

-   [Manage Apps](atlas.en-us.uiapi.meta/uiapi/ui_api_features_apps.htm "An app is a collection of items that work together to serve a particular function. Salesforce apps come in two flavors: Classic apps and Lightning apps. Classic apps are created and managed in Salesforce Classic. Lightning apps are created and managed in Lightning Experience. Admins customize both types of apps to match the way users work.")

## Code Examples

```
/ui-api/apps
```

```
GET /services/data/v66.0/ui-api/apps?formFactor=Large
```

## Related Topics

- Apps (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_apps.htm)
- App (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_app.htm)
- Manage Apps (atlas.en-us.uiapi.meta/uiapi/ui_api_features_apps.htm)
