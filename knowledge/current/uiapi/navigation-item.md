---
title: "Navigation Item"
domain: uiapi
topic: navigation-item
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:20.974Z
estimatedTokens: 1012
keywords: [Navigation, Item, metadata, tab]
---

# Navigation Item

> The metadata for a single navigation item (tab).

# Navigation Item

The metadata for a single navigation item (tab).

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| availableInClassic | Boolean | If true, the tab is available for Salesforce Classic. | Medium, 43.0 | 43.0 |
| availableInLightning | Boolean | If true, the tab is available for Lightning Experience. | Medium, 43.0 | 43.0 |
| color | String | Color of the navigation tab. | Small, 43.0 | 43.0 |
| content | String | Launch URL of the navigation tab. | Small, 43.0 | 43.0 |
| custom | Boolean | If true, this navigation tab is a custom tab. | Small, 43.0 | 43.0 |
| developerName | String | API name of the navigation tab. | Small, 43.0 | 43.0 |
| iconUrl | String | URL of the icon of the navigation tab. | Medium, 43.0 | 43.0 |
| id | String | ID of the navigation tab. | Small, 43.0 | 43.0 |
| itemType | String | The navigation tab menu type. One of these values:CanvasConnectedApp: The Canvas Collected App menu type. This value matches Describe App Menu value CanvasConnectedApp.ConnectedApp: The Connected App menu type. This value matches Describe App Menu value ConnectedApp.Entity: The Entity menu type as found from search-driven sections. This value is not sourced from the Describe App Menu.FullSite: The Full Site tab menu type. This value is not sourced from the Describe App Menu.Help: The Help menu type. This value is not sourced from the Describe App Menu.ListView: The ListView menu type. This value is not sourced from the Describe App Menu.Logout: The Logout menu type. This value is not sourced from the Describe App Menu.NotificationSettings: The Notification Settings menu type. This value is not sourced from the Describe App Menu.Record: The Record menu type. This value is not sourced from the Describe App Menu.Standard: The Standard special case menu type as found from search-driven sections. This value matches Describe App Menu values Standard.*. The rest of the type information is in standarddType.TabApexPage: The Visualforce tab menu type. This value matches Describe App Menu value Tab.apexPage.TabAura: The Aura tab menu type. This value matches Describe App Menu value Tab.aura.TabFlexiPage: The Flexipage tab menu item. This value matches Describe App Menu value Tab.flexiPage.TabSObject: The SObject tab menu type. This value matches Describe App Menu value Tab.sObject.TabWeb: The web tab menu type. This type is only available in Lightning Experience. This value is not sourced from the Describe App Menu.UserProfile: The User Profile menu type. This value is not sourced from the Describe App Menu. | Small, 43.0 | 43.0 |
| label | String | Localized label name of the navigation tab. | Small, 43.0 | 43.0 |
| objectApiName | String | Corresponding object API name of the navigation tab. | Small, 43.0 | 43.0 |
| objectLabel | String | The label of the corresponding object. | Small, 44.0 | 44.0 |
| objectLabelPlural | String | The plural label of the corresponding object. | Small, 44.0 | 44.0 |
| pageReference | Page Reference | Corresponding page reference for the navigation tab. | Small, 43.0 | 43.0 |
| standardType | String | The subtype of a Standard menu type for the app. One of these values:DashboardsEventsFeedsGroupsHomeMyDayPendingInterviewsPeopleProcessInstanceWorkitemReportsTasksTopicsNewsDistributedMarketingForecasting3ForecastingLightningDevelopment: Lightning Development ExperienceAppLauncher: Lightning Experience App LauncherDataAssessmentLightningDiscoveryForAccountsWaveHomeWaveHomeLightningWaveHomeLightningEacFreeB2bHomeB2bPardotCampaignsB2bEmailB2bMarketablePeopleB2bAutomationB2bSocialSearchB2bContentB2bPardotSettingsOmniSupervisorLightningReactNativeLightningBoltHomeLightningInstrumentation | Small, 43.0 | 43.0 |

#### See Also

-   [Navigation Items](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_nav_items.htm "An ordered list of navigation items (tabs) for the current user.")

-   [App](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_app.htm "The metadata for a single app.")

## Related Topics

- Page Reference (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_page_reference.htm)
- Navigation Items (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_nav_items.htm)
- App (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_app.htm)
