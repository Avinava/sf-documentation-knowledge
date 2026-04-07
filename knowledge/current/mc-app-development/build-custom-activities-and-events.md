---
title: "Build Custom Activities and Events"
domain: mc-app-development
topic: build-custom-activities-and-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:25.971Z
estimatedTokens: 638
keywords: [Build, Custom, Activities, Events, Prerequisites, Steps, Items]
---

# Build Custom Activities and Events

# Build Custom Activities and Events

For simplicity, the documentation mostly refers to custom activities. In Journey Builder, custom events and custom activities use the same framework, so building either object follows the same structure. For event-specific instructions, see Considerations for Building Custom Activities.

Salesforce Customer Support doesn't provide support for your custom Journey Builder events and activities.

## Prerequisites

-   A working knowledge of RequireJS for dependency management
-   A working knowledge of jQuery
-   An understanding of the Postmonger event framework
-   Access to a Marketing Cloud account with a fully provisioned and operational Journey Builder instance
-   An understanding of how journeys function in Journey Builder

## Steps

1.  Create the custom activity. Custom activities contain three fundamental components.
    -   [Custom activity UI](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/custom-activity-ui.htm) - Contains the activity's code and assets and is hosted on a public web server.
    -   [config.json](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/custom-activity-config.htm) - Application extension that defines your custom activity.
    -   customActivity.js - Contains Postmonger events and sits in between your configuration app in the iframe and Journey Builder. See the [Example Custom Activity](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/example-rest-activity.htm) and [Postmonger Events Reference](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/using-postmonger.htm) for details.
2.  Host the custom activity. Use a web server that communicates via SSL (port 443). Salesforce recommends using Heroku as a hosting provider.
3.  [Register the custom component endpoint](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/define-jb-extension-app-center.htm). Register the hosting endpoint for your custom activity in a Marketing Cloud installed package.

## Related Items

-   [Journey Spec](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/getting-started-spec.htm)
-   [Data Binding](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/how-data-binding-works.htm)
-   [Troubleshoot Custom Activities](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/troubleshoot-custom-activities.htm)
-   [Considerations for Building Custom Events](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/creating-events.htm)

## Related Topics

- Custom activity UI (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/custom-activity-ui.htm)
- config.json (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/custom-activity-config.htm)
- Example Custom Activity (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/example-rest-activity.htm)
- Postmonger Events Reference (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/using-postmonger.htm)
- Register the custom component endpoint (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/define-jb-extension-app-center.htm)
- Troubleshoot Custom Activities (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/troubleshoot-custom-activities.htm)
- Considerations for Building Custom Events (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/creating-events.htm)
