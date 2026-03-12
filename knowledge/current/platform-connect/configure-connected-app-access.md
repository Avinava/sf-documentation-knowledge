---
title: "Configure Connected App Access"
domain: platform-connect
topic: configure-connected-app-access
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.535Z
estimatedTokens: 782
keywords: [Configure, Connected, App, Access, canvas, policies, profiles, corresponding]
---

# Configure Connected App Access

> To configure access to your canvas app, configure the policies and profiles for the
        corresponding connected app.

# Configure Connected App Access

To configure access to your canvas app, configure the policies and profiles for the corresponding connected app.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_connect)

#### Note

This task assumes that you completed the steps at [Use a Connected App](atlas.en-us.platform_connect.meta/platform_connect/quick_start_create_canvas_app.htm "Creating the canvas app as a connected app is no longer recommended. Use external client apps for all new Canvas integrations.").

1.  In Salesforce, from Setup, enter Connected Apps in the Quick Find box, then select **Manage Connected Apps**.
2.  In the Connected Apps list, click **Edit** next to the Hello World app.
3.  In the OAuth Policies section, click the **Permitted Users** dropdown menu and select **Admin approved users are pre-authorized**. Click **OK** on the pop-up message that appears.

    We select **Admin approved users are pre-authorized** so users don’t see the canvas app until we give them permission. If we select **All users may self-authorize**, all users in the org can authorize the app after they sign in.

4.  Save your settings and return to the Manage Connected Apps page.
5.  To view the Connected App Detail page for your Hello World app, click **Hello World** in the Connected Apps list.

    On the Connected App Detail page, you can define who can see your canvas app by managing profiles and permission sets.

6.  In the Profiles section, click **Manage Profiles**.

    In this example, we assume that your profile is System Administrator.

7.  Select the **System Administrator** profile and save your settings.
8.  From Setup, enter Canvas App Previewer in the Quick Find box, then select **Canvas App Previewer**. You can use the Canvas App Previewer to test your canvas app before you publish it.
9.  From the Canvas App Previewer list, click **Hello World**.

    The app launches, and the message Hello User.FullName appears. The canvas app works in this context because when you click the app name in the message previewer, the signed request is sent to the endpoint https://localhost:8443/examples/hello-world/index.jsp.


After you configure access, you can see the canvas app in the Canvas App Previewer and on the Chatter tab in your development org.

#### See Also

-   [Quick Start—Advanced](atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro.htm "This advanced quick start shows you how to get started with more of the Canvas features. It takes you step-by-step through the process of creating, packaging, uploading, installing, and running a canvas app.")

-   [Use a Connected App](atlas.en-us.platform_connect.meta/platform_connect/quick_start_create_canvas_app.htm "Creating the canvas app as a connected app is no longer recommended. Use external client apps for all new Canvas integrations.")

-   [Deploy the Web App to Heroku](atlas.en-us.platform_connect.meta/platform_connect/quick_start_upload_app_to_heroku.htm "After you run the web app locally and test it as a canvas app, deploy the web app to Heroku and run it from there.")

## Related Topics

- Use a Connected App (atlas.en-us.platform_connect.meta/platform_connect/quick_start_create_canvas_app.htm)
- Quick Start—Advanced (atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro.htm)
- Deploy the Web App to Heroku (atlas.en-us.platform_connect.meta/platform_connect/quick_start_upload_app_to_heroku.htm)
