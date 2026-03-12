---
title: "Update the Canvas App"
domain: platform-connect
topic: update-the-canvas-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.618Z
estimatedTokens: 918
keywords: [Canvas, App, step, run, “hello, world”, that’s, now, running, Heroku]
---

# Update the Canvas App

> In this step, you update the canvas app to run the “hello world” app
    that’s now running on Heroku.

# Update the Canvas App

In this step, you update the canvas app to run the “hello world” app that’s now running on Heroku.

1.  In Salesforce, from Setup, enter External Client Apps in the Quick Find box, then select **External Client App Manager**. Then, click **Edit Settings** on the dropdown menu next to the Hello World app.

    If you created a connected app instead, find your app on the **App Manager** setup page. Click **Edit** on the dropdown menu next to the Hello World app.

2.  In the Logo Image URL field, enter https://appName.herokuapp.com/images/salesforce.png. This is the default Salesforce “No Software” image. This image appears on the installation screen and on the detail screen for the app. The appName is the name of Heroku app that you just created.
3.  In the Icon URL field, enter https://appName.herokuapp.com/examples/hello-world/logo.png. This is the default Salesforce “No Software” image.

    This is the image that appears next to the app name on the Chatter tab or in the Canvas App Previewer. If you leave this field blank, a default cloud image appears next to the app name. The appName is the name of Heroku app that you just created.

4.  In the **OAuth Settings** section, update Callback URL to https://appName.herokuapp.com/sdk/callback.html. The appName is the name of Heroku app that you just created.
5.  In the **Canvas App Settings** section, update Canvas App URL to https://appName.herokuapp.com/examples/hello-world/index.jsp. The appName is the name of Heroku app that you just created.
6.  Click Save. After the canvas app is saved, the detail page appears.
7.  In Salesforce, from Setup, enter Canvas App Previewer in the Quick Find box, then select **Canvas App Previewer**. You can use the Canvas App Previewer to test out your canvas app before repackaging it.
8.  Click the Hello World link on the left.

    The app should appear and you’ll see the message Hello User.FullName. The canvas app works in this context because when you click the app name in the previewer, the signed request is sent to the endpoint https://appName.herokuapp.com/examples/hello-world/index.jsp.


In this example, we’re using the same canvas app that we just created, but updating it to point to the “hello world” Web app running on Heroku. Therefore, the consumer secret that we previously added to our “hello world” app doesn’t need to be updated.

If you want to create a new canvas app in Salesforce that displays the “hello world” app running on Heroku, then go to [Use an External Client App](atlas.en-us.platform_connect.meta/platform_connect/quick_start_create_canvas_app_eca.htm "To create the canvas app in your org, configure the Canvas plugin for an external client app.") to create the new app, update the consumer secret in the app, and then deploy the changes to Heroku.

#### See Also

-   [Quick Start—Advanced](atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro.htm "This advanced quick start shows you how to get started with more of the Canvas features. It takes you step-by-step through the process of creating, packaging, uploading, installing, and running a canvas app.")

-   [Deploy the Web App to Heroku](atlas.en-us.platform_connect.meta/platform_connect/quick_start_upload_app_to_heroku.htm "After you run the web app locally and test it as a canvas app, deploy the web app to Heroku and run it from there.")

-   [Package the Connected App for Canvas](atlas.en-us.platform_connect.meta/platform_connect/quick_start_package_canvas_app.htm "After you created the canvas app, tested it in the Canvas App Previewer, and deployed it to Heroku, you’re ready to package and distribute it.")

## Related Topics

- Use an External Client App (atlas.en-us.platform_connect.meta/platform_connect/quick_start_create_canvas_app_eca.htm)
- Quick Start—Advanced (atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro.htm)
- Deploy the Web App to Heroku (atlas.en-us.platform_connect.meta/platform_connect/quick_start_upload_app_to_heroku.htm)
- Package the Connected App for Canvas (atlas.en-us.platform_connect.meta/platform_connect/quick_start_package_canvas_app.htm)
