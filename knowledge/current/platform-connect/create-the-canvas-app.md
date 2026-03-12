---
title: "Create the Canvas App"
domain: platform-connect
topic: create-the-canvas-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.575Z
estimatedTokens: 356
keywords: [Canvas, App, Customize, Application, Modify, Data, user, permissions]
---

# Create the Canvas App

> To create a canvas app, you need the Customize Application and Modify All Data user
  permissions.

# Create the Canvas App

To create a canvas app, you need the Customize Application and Modify All Data user permissions.

Previously, you created the canvas app as a connected app to use it in your org. Starting in Spring ’26, we recommend that you use external client apps for your canvas integrations.

External client apps can’t be used until they’re installed in an org, unlike connected apps that can be used by any org without installation once it’s created in an org locally. External client apps support the same OAuth flows with additional built-in security features while allowing you to package developer settings, keeping subscriber policies separate. External client apps also provide full metadata compliance, which makes packaging and deployment easier.

-   **[Use an External Client App](atlas.en-us.platform_connect.meta/platform_connect/quick_start_create_canvas_app_eca.htm)**
    To create the canvas app in your org, configure the Canvas plugin for an external client app.
-   **[Use a Connected App](atlas.en-us.platform_connect.meta/platform_connect/quick_start_create_canvas_app.htm)**
    Creating the canvas app as a connected app is no longer recommended. Use external client apps for all new Canvas integrations.

#### See Also

-   [External Client Apps](https://help.salesforce.com/s/articleView?id=xcloud.external_client_apps.htm&language=en_US "External Client Apps - HTML (New Window)")

## Related Topics

- Use an External Client App (atlas.en-us.platform_connect.meta/platform_connect/quick_start_create_canvas_app_eca.htm)
- Use a Connected App (atlas.en-us.platform_connect.meta/platform_connect/quick_start_create_canvas_app.htm)
