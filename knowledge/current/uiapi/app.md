---
title: "App"
domain: uiapi
topic: app
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.739Z
estimatedTokens: 839
keywords: [App, metadata]
---

# App

> The metadata for a single app.

# App

The metadata for a single app.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| appId | String | The unique ID of the app. | Small, 43.0 | 43.0 |
| description | String | A description of the app. | Small, 43.0 | 43.0 |
| developerName | String | The API name of the app. | Small, 43.0 | 43.0 |
| formFactors | String[] | The form factor of the app. One or more of these values:Large—App supports the desktop display size.Medium—App supports the tablet display size.Small—App supports the phone display size. | Medium, 43.0 | 43.0 |
| headerColor | String | The primary color for the app as selected by an admin. For example, #0070D2. | Small, 43.0 | 43.0 |
| iconUrl | String | The URL for the app’s icon. | Small, 43.0 | 43.0 |
| isNavAutoTempTabsDisabled | Boolean | If true, the navigation automatically creates temporary tabs settings. | Small, 43.0 | 43.0 |
| isNavPersonalizationDisabled | Boolean | If true, navigation personalization is disabled. | Small, 43.0 | 43.0 |
| isNavTabPersistenceDisabled | Boolean | If true, workspace tabs are cleared for each new console session. | Small, 54.0 | 54.0 |
| isOmniPinnedViewEnabled | Boolean | If true, the Omni-Channel sidebar is enabled. | Small, 60.0 | 60.0 |
| label | String | The label of the app. | Small, 43.0 | 43.0 |
| logoUrl | String | The logo URL of the app as selected by the admin. | Medium, 43.0 | 43.0 |
| mobileStartUrl | String | The mobile launch URL for the app. This field is used with client apps and Experience Builder sites. For sites only, this location is a fully qualified domain name. For other apps, it’s a relative URL. | Medium, 43.0 | 43.0 |
| navItems | Navigation Item[] | The metadata for the navigation tabs of the app.NoteOnly navItems with supported formFactors values are returned. | Big, 43.0 | 43.0 |
| selected | Boolean | If true, this app is the default app for the user. | Big, 43.0 | 43.0 |
| startUrl | String | The launch URL of the app. | Medium, 43.0 | 43.0 |
| type | String | The type of the app. One of these values:ClassicCommunityConnectedExternalClientLightning | Small, 47.0 | 47.0 |
| uiType | String | The UI type for the app. One of these values:Salesforce ClassicLightning ExperienceThis property was deprecated in API version 47.0. In API version 47.0 and later, use type instead. | Small, 43.0–46.0 | 43.0–46.0 |
| userNavItems | Navigation Item[] | The user's navigation tabs for the app. | Big, 43.0 | 43.0 |

#### See Also

-   [Apps](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_apps.htm "A list of apps that the current user has access to.")

-   [Get an App](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_apps_id.htm "Get the metadata for an app.")

-   [Get Last Selected App](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_apps_selected.htm "Retrieves the app the current user last selected or the app the user sees by default.")

-   [Manage Apps](atlas.en-us.uiapi.meta/uiapi/ui_api_features_apps.htm "An app is a collection of items that work together to serve a particular function. Salesforce apps come in two flavors: Classic apps and Lightning apps. Classic apps are created and managed in Salesforce Classic. Lightning apps are created and managed in Lightning Experience. Admins customize both types of apps to match the way users work.")

## Related Topics

- Navigation Item (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_nav_item.htm)
- Apps (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_apps.htm)
- Get an App (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_apps_id.htm)
- Get Last Selected App (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_apps_selected.htm)
- Manage Apps (atlas.en-us.uiapi.meta/uiapi/ui_api_features_apps.htm)
