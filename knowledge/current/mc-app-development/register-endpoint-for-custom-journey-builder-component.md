---
title: "Register Endpoint for Custom Journey Builder Component"
domain: mc-app-development
topic: register-endpoint-for-custom-journey-builder-component
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:26.009Z
estimatedTokens: 385
keywords: [Register, Endpoint, Custom, Journey, Builder, Component, Once, know, hosted, activity, event, Marketing, Cloud, installed, package]
---

# Register Endpoint for Custom Journey Builder Component

> Once you know the hosted endpoint for your custom activity or event UI, you must register that endpoint in a Marketing Cloud installed package. To add events or activities to an existing Marketing Cloud app, add them as components in the same package.

# Register Endpoint for Custom Journey Builder Component

Once you know the hosted endpoint for your custom activity or event UI, you must register that endpoint in a Marketing Cloud installed package. To add events or activities to an existing Marketing Cloud app, add them as components in the same package.

1.  [Create an installed package](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/install-packages.htm) or navigate to an existing package.
2.  Under Components, click **Add Component**.
3.  Select **Journey Builder Activity** or **Journey Builder Entry Source**.
4.  Type a **Name** and **Description** for the activity or entry source. This name is stored doesn't display on the Journey Builder canvas. For simplicity, give the activity or entry source the same name as it is called in the config.json file.
5.  For activities only, select a **Category** to determine which section the activity appears under on the Journey Builder Canvas. If a category is specified in the activity's config.json, that category overrides the value selected here.
6.  Enter the **Endpoint URL**, which is the baseUrl for your application. Journey Builder loads all assets relative to this endpoint.
7.  To complete registration, save the component.

## Related Items

-   [Build Custom Activities and Events](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/creating-activities.htm)
-   [List Your App in AppExchange](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/list-app-appexchange.htm)

## Related Topics

- Create an installed package (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/install-packages.htm)
- Build Custom Activities and Events (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/creating-activities.htm)
- List Your App in AppExchange (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/list-app-appexchange.htm)
