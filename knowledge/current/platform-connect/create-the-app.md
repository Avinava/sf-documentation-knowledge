---
title: "Create the App"
domain: platform-connect
topic: create-the-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.598Z
estimatedTokens: 1039
keywords: [App, Heroku, “hello, world”, associated, canvas, Salesforce]
---

# Create the App

> Create the Heroku “hello world” app and the
    associated canvas app in Salesforce.

# Create the App

Create the Heroku “hello world” app and the associated canvas app in Salesforce.

1.  In Salesforce, from Setup, enter Canvas App Previewer in the Quick Find box, then select **Canvas App Previewer**.
2.  Click **Heroku Quick Start**.
3.  The Framework field is **External Client App**. You can’t change the framework selection. Your canvas app is created using the [external client app framework](https://help.salesforce.com/s/articleView?id=xcloud.external_client_apps.htm&language=en_US).

    Creation of a canvas app using the connected app framework is disabled by default and is no longer recommended. To enable creation of new connected apps, contact Salesforce Customer Support.

4.  In the Template field, select **Java – Quick Start Template**.
5.  In the Canvas App Name field, enter a unique name of up to 30 characters.
6.  In the Heroku App Name field, enter a unique name of up to 30 characters that begins with a letter and contains only lowercase letters, numbers, and dashes. The newappName must be unique across all Heroku apps. This name becomes part of the URL for your app, for example, newappName.herokuapp.com.
7.  In the Auth Type field, select **API Key**. Find the API key associated with your account on the Heroku My Account page.
8.  Click **Create**. The app displays in the left navigation pane.

    If you see the error “Error \[Read timed out\] executing POST to Heroku clone REST service,” then the operation timed out when it tried to contact Heroku. You can check the status of Heroku at [http://status.heroku.com](http://status.heroku.com "HTML (New Window)").

9.  Click the link to your new app.

    The app appears, and you see the message Hello User.FullName, as well as other information about the current user.


You just created a canvas app—congratulations! You can see your canvas app only in the Canvas App Previewer until you set the locations where it can appear by following the steps in:

-   [Set the Canvas App Location for External Client Apps](atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_set_app_location_eca.htm "Specify where your canvas app can display to a user in Salesforce via an external client app.")—Use an external client app for all new Canvas integrations after Spring ’26.
-   [Set the Canvas App Location for Connected Apps](atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_set_app_location.htm "Specify where your canvas app can display to a user in Salesforce via a connected app.")—Older Canvas integrations can use connected apps, but new connected app creation is disabled after Spring ’26.

The location setting defines where a user sees your app after it’s installed in their org.

Behind the scenes, Heroku Quick Start sets the canvas app’s Permitted Users, which includes admin-approved users and your profile. For example, if your user profile is System Administrator, that profile is added to the canvas app you created, and any users with that profile can access the canvas app.

We recommend that you inspect the code to see how the canvas app works. The source code for the app is available in the [canvas-quickstart-java](https://github.com/forcedotcom/canvas-quickstart-java) public GitHub repository. Use the example code to learn how to decode and validate the canvas signed request in your app.

#### See Also

-   [Quick Start](atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_intro.htm "This simple quick start shows you how to get started with Canvas by using the Heroku Quick Start. The Heroku Quick Start creates a “hello world” app on Heroku in either Java or Ruby, depending on the template you select. At the same time, it creates a corresponding canvas app in Salesforce.")

-   [Prerequisites](atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_prereqs.htm "Get the appropriate access and tools to complete the quick start steps.")

-   [Canvas Limits](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_limits.htm "Because Canvas runs in a multitenant environment, limits are enforced to ensure protection of shared resources.")

## Related Topics

- Set the Canvas App Location for External Client Apps (atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_set_app_location_eca.htm)
- Set the Canvas App Location for Connected Apps (atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_set_app_location.htm)
- Quick Start (atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_intro.htm)
- Prerequisites (atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_prereqs.htm)
- Canvas Limits (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_limits.htm)
