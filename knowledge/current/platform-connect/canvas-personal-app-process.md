---
title: "Canvas Personal App Process"
domain: platform-connect
topic: canvas-personal-app-process
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.462Z
estimatedTokens: 799
keywords: [Canvas, Personal, App, Process, Creating, similar, any, However, distribute, directly, end, users, install, via, link]
---

# Canvas Personal App Process

> Creating a canvas personal app is similar to creating any canvas app. However, you
    distribute a canvas personal app directly to end users, who install it via a link that you
    provide, integrating the app with their Salesforce data. After the app is installed, end users
    run it right from the Chatter tab.

# Canvas Personal App Process

Creating a canvas personal app is similar to creating any canvas app. However, you distribute a canvas personal app directly to end users, who install it via a link that you provide, integrating the app with their Salesforce data. After the app is installed, end users run it right from the Chatter tab.

Here’s how to make canvas personal apps available to end users.

1.  You verify that the organization administrator has enabled personal apps within the destination organization. For details, see [Enabling Canvas Personal Apps within an Organization](atlas.en-us.platform_connect.meta/platform_connect/canvas_personal_app_enable_org.htm "The administrator of an organization controls whether users can install canvas personal apps within that organization. Before attempting to create a canvas personal app, verify that the organization administrator has enabled canvas personal apps.").
2.  You create the app, and specify that it’s a canvas personal app. For details, see [Making an App a Canvas Personal App](atlas.en-us.platform_connect.meta/platform_connect/canvas_personal_app_create.htm "You can enable an app as a canvas personal app when you first create it, or make your existing canvas app a canvas personal app. This process involves ensuring that an org preference is active, and activating a setting on the app's Detail page.").
3.  The end user clicks the app link that you’ve provided. For example, the link could be a button on your website, or delivered in an email. Clicking the link invokes the OAuth approval process for the app. Here’s an example of what a link to the app looks like:

    ```

    ```

4.  When prompted, the end user approves the app and allows access to Salesforce data.
5.  The OAuth approval flow triggers the canvas installer in asynchronous mode. The canvas installer gets context information for the app from the API, and installs the app’s metadata. The app is installed in the background, and the end user receives an email when installation is complete.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_connect)

    #### Note

    Only the canvas personal app’s metadata is installed. Any additional components that are typically packaged with a canvas app are not installed with the app. This means that users get only the functionality they need, and installation is quick and lightweight. However, if the administrator chooses to install the canvas personal app for the entire organization, the additional package components are installed, as with any canvas app.

6.  The user starts using the canvas personal app by clicking the app’s icon from the Chatter tab.

#### See Also

-   [Canvas App Process](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_process_overview.htm)

-   [Making an App a Canvas Personal App](atlas.en-us.platform_connect.meta/platform_connect/canvas_personal_app_create.htm "You can enable an app as a canvas personal app when you first create it, or make your existing canvas app a canvas personal app. This process involves ensuring that an org preference is active, and activating a setting on the app's Detail page.")

## Code Examples

```
https://MyDomainName.my.salesforce.com/services/oauth2/authorize?response_type=code&client_id=<your_client_id>&redirect_uri=<your_redirect_uri>
```

## Related Topics

- Enabling Canvas Personal Apps within an Organization (atlas.en-us.platform_connect.meta/platform_connect/canvas_personal_app_enable_org.htm)
- Making an App a Canvas Personal App (atlas.en-us.platform_connect.meta/platform_connect/canvas_personal_app_create.htm)
- Canvas App Process (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_process_overview.htm)
