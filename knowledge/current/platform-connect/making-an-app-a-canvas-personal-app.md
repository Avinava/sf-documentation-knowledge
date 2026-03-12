---
title: "Making an App a Canvas Personal App"
domain: platform-connect
topic: making-an-app-a-canvas-personal-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.456Z
estimatedTokens: 559
keywords: [Making, App, Canvas, Personal, enable, process, involves, ensuring, org, preference, active, activating, setting, app's, Detail]
---

# Making an App a Canvas Personal App

> You can enable an app as a canvas personal app when you first create it, or make your
    existing canvas app a canvas personal app. This process involves ensuring that an org preference
    is active, and activating a setting on the app's Detail page.

# Making an App a Canvas Personal App

You can enable an app as a canvas personal app when you first create it, or make your existing canvas app a canvas personal app. This process involves ensuring that an org preference is active, and activating a setting on the app's Detail page.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_connect)

#### Note

In Spring '26, the ability to create new connected apps is disabled by default. We recommend using [external client apps](https://help.salesforce.com/s/articleView?id=xcloud.external_client_apps.htm&language=en_US) for all new Canvas integrations. To enable creation of new connected apps, contact Salesforce Customer Support.

You can enable an existing connected app as a Canvas Personal app.

Before you begin, the admin for the app's destination org must enable canvas personal apps in that org. From Setup, enter Connected Apps in the Quick Find box, then select the option for managing connected apps.

1.  Open the connected app's Detail page in Setup.

    Enter Connected Apps in the Quick Find box and select the app you want to make a canvas personal app.

2.  In the **Locations** field, select **Chatter Tab**.

    Chatter Tab is the only location where a canvas personal app can appear.

3.  Under Canvas App Settings, select the **Enable as a Canvas Personal App** checkbox.

    This setting is available only when **Chatter Tab** is selected as the app's location.

    ![Enable as Canvas Personal App Setting](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_connect%2Fimages%2Fdev_setting_canvas_personal_apps_192.png&folder=platform_connect)


After you've created the canvas personal app and provided a link to it, end users can access the app and install it themselves.

#### See Also

-   [Canvas Personal App Process](atlas.en-us.platform_connect.meta/platform_connect/canvas_personal_app_process.htm "Creating a canvas personal app is similar to creating any canvas app. However, you distribute a canvas personal app directly to end users, who install it via a link that you provide, integrating the app with their Salesforce data. After the app is installed, end users run it right from the Chatter tab.")

## Related Topics

- Canvas Personal App Process (atlas.en-us.platform_connect.meta/platform_connect/canvas_personal_app_process.htm)
