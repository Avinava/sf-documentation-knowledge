---
title: "Canvas Personal Apps"
domain: platform-connect
topic: canvas-personal-apps
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.467Z
estimatedTokens: 916
keywords: [Canvas, Personal, Apps, let, connected, designed, specifically, end, users, across, orgs, app, own, installation, relying]
---

# Canvas Personal Apps

> Canvas personal apps let you create connected apps that are designed specifically for
        end users across orgs. With a canvas personal app, you make your own app available for
        installation without relying on org admins for distribution.

# Canvas Personal Apps

Canvas personal apps let you create connected apps that are designed specifically for end users across orgs. With a canvas personal app, you make your own app available for installation without relying on org admins for distribution.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_connect)

#### Note

In Spring ’26, the ability to create new connected apps is disabled by default. We recommend using [external client apps](https://help.salesforce.com/s/articleView?id=xcloud.external_client_apps.htm&language=en_US) for all new Canvas integrations. To enable creation of new connected apps, contact Salesforce Customer Support.

Admins can install canvas apps, and developers can create canvas personal apps that end users can install themselves.

End users install and use canvas personal apps right from the Chatter tab (provided that they have appropriate permissions in Salesforce). When end users install the app, they’re prompted to allow the app to use their Salesforce data.

Creating a canvas personal app is similar to creating any canvas app, except that:

-   Users are prompted to approve or deny a canvas personal app the first time they access the app, regardless of whether you used OAuth or signed request as the access method. This is because initial access triggers the OAuth approval flow. After initial access, users are identified transparently and aren’t prompted for approval or credentials (as long as they are logged in to Salesforce).
-   With a canvas personal app, only the app’s metadata is installed, without the other package components (such as Apex classes and Visualforce components). This facilitates widespread installation of the app, and lets you limit the app’s functionality to only what the end user needs.

For information about managed packages, see [Use Managed Packages to Develop Your AppExchange Solution](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/managed_packaging_intro.htm "PDF (New Window)").

-   **[Canvas Personal App Process](atlas.en-us.platform_connect.meta/platform_connect/canvas_personal_app_process.htm)**
    Creating a canvas personal app is similar to creating any canvas app. However, you distribute a canvas personal app directly to end users, who install it via a link that you provide, integrating the app with their Salesforce data. After the app is installed, end users run it right from the Chatter tab.
-   **[Enabling Canvas Personal Apps within an Organization](atlas.en-us.platform_connect.meta/platform_connect/canvas_personal_app_enable_org.htm)**
    The administrator of an organization controls whether users can install canvas personal apps within that organization. Before attempting to create a canvas personal app, verify that the organization administrator has enabled canvas personal apps.
-   **[Making an App a Canvas Personal App](atlas.en-us.platform_connect.meta/platform_connect/canvas_personal_app_create.htm)**
    You can enable an app as a canvas personal app when you first create it, or make your existing canvas app a canvas personal app. This process involves ensuring that an org preference is active, and activating a setting on the app's Detail page.
-   **[Uninstalling a Canvas Personal App](atlas.en-us.platform_connect.meta/platform_connect/canvas_personal_app_uninstall.htm)**
    When a user installs and allows a canvas personal app, a refresh token is created, which in turn generates an OAuth token. To stop end users from accessing the app, this refresh token must be revoked. This action effectively uninstalls the canvas personal app.

## Related Topics

- Canvas Personal App Process (atlas.en-us.platform_connect.meta/platform_connect/canvas_personal_app_process.htm)
- Enabling Canvas Personal Apps within an Organization (atlas.en-us.platform_connect.meta/platform_connect/canvas_personal_app_enable_org.htm)
- Making an App a Canvas Personal App (atlas.en-us.platform_connect.meta/platform_connect/canvas_personal_app_create.htm)
- Uninstalling a Canvas Personal App (atlas.en-us.platform_connect.meta/platform_connect/canvas_personal_app_uninstall.htm)
