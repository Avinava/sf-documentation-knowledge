---
title: "Quick Start—Advanced"
domain: platform-connect
topic: quick-startadvanced
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.570Z
estimatedTokens: 1173
keywords: [Quick, Start—Advanced, advanced, start, how, started, Canvas, features, step-by-step, process, creating, packaging, uploading, installing, running]
---

# Quick Start—Advanced

> This advanced quick start shows you how to get started with more of the Canvas features.
  It takes you step-by-step through the process of creating, packaging, uploading, installing, and
  running a canvas app.

# Quick Start—Advanced

This advanced quick start shows you how to get started with more of the Canvas features. It takes you step-by-step through the process of creating, packaging, uploading, installing, and running a canvas app.

The sample canvas app is a “hello world” Web page that calls the Canvas SDK to display the current user’s name.

In this example, you:

-   Clone the “hello world” app from GitHub.
-   Run the app on a local Web server.
-   Expose the Web app as a canvas app in your Salesforce development org. You can either:
    -   Use an external client app for your canvas app (recommended).
    -   Use a connected app for your canvas app.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_connect)

        #### Note

        In Spring ’26, the ability to create new connected apps is disabled by default. We recommend using [external client apps](https://help.salesforce.com/s/articleView?id=xcloud.external_client_apps.htm&language=en_US) for all new Canvas integrations. To enable creation of new connected apps, contact Salesforce Customer Support.

-   Test the app in the Canvas App Previewer.
-   Deploy the Web app to Heroku.
-   Package and upload the canvas app.
-   Install the canvas app in another Salesforce org and run it as a user would.

The steps in this quick start assume you’re using Windows. You can use another OS, but there might be some minor differences in the steps.

-   **[Prerequisites](atlas.en-us.platform_connect.meta/platform_connect/quick_start_prereqs.htm)**
    Get the appropriate access and tools to complete the quick start.
-   **[Clone the Project from GitHub](atlas.en-us.platform_connect.meta/platform_connect/quick_start_clone_the_project.htm)**
    The “hello world” sample project is part of the Canvas SDK, which is located on GitHub. From GitHub, clone the project to make a copy of it on your local machine.
-   **[Run the Web App Locally](atlas.en-us.platform_connect.meta/platform_connect/quick_start_run_the_app_locally.htm)**

-   **[Create the Canvas App](atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro_create.htm)**
    To create a canvas app, you need the Customize Application and Modify All Data user permissions.
-   **[Configure Who Can Access the Canvas App](atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro_config_access.htm)**
    To configure access for specific users, update the policies and profiles for the corresponding external client app or connected app.
-   **[Deploy the Web App to Heroku](atlas.en-us.platform_connect.meta/platform_connect/quick_start_upload_app_to_heroku.htm)**
    After you run the web app locally and test it as a canvas app, deploy the web app to Heroku and run it from there.
-   **[Deploy the Canvas External Client App to an Org](atlas.en-us.platform_connect.meta/platform_connect/quick_start_deploy_canvas_app.htm)**
    Deploy and retrieve your Canvas integration for the external client app with Metadata API. The Canvas plugin has its own settings files and policies file.
-   **[Update the Canvas App](atlas.en-us.platform_connect.meta/platform_connect/quick_start_update_canvas_app_heroku.htm)**
    In this step, you update the canvas app to run the “hello world” app that’s now running on Heroku.
-   **[Package the Canvas App](atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro_package.htm)**
    Packaging is the first step in making your canvas app available for installation in another org.
-   **[Configure Who Can Access the Installed Canvas App](atlas.en-us.platform_connect.meta/platform_connect/quick_start_config_who_can_access_installed_canvas_app.htm)**


#### See Also

-   [Introducing Canvas](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_intro.htm "Canvas enables you to easily integrate a third-party application in Salesforce. Canvas is a set of tools and JavaScript APIs that you can use to expose an application as a Canvas app. Then take your new or existing applications and make them available to your users as part of their Salesforce experience.")

-   [Quick Start](atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_intro.htm "This simple quick start shows you how to get started with Canvas by using the Heroku Quick Start. The Heroku Quick Start creates a “hello world” app on Heroku in either Java or Ruby, depending on the template you select. At the same time, it creates a corresponding canvas app in Salesforce.")


-   [Prerequisites](atlas.en-us.platform_connect.meta/platform_connect/quick_start_prereqs.htm "Get the appropriate access and tools to complete the quick start.")

## Related Topics

- Prerequisites (atlas.en-us.platform_connect.meta/platform_connect/quick_start_prereqs.htm)
- Clone the Project from GitHub (atlas.en-us.platform_connect.meta/platform_connect/quick_start_clone_the_project.htm)
- Run the Web App Locally (atlas.en-us.platform_connect.meta/platform_connect/quick_start_run_the_app_locally.htm)
- Create the Canvas App (atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro_create.htm)
- Configure Who Can Access the Canvas App (atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro_config_access.htm)
- Deploy the Web App to Heroku (atlas.en-us.platform_connect.meta/platform_connect/quick_start_upload_app_to_heroku.htm)
- Deploy the Canvas External Client App to an Org (atlas.en-us.platform_connect.meta/platform_connect/quick_start_deploy_canvas_app.htm)
- Update the Canvas App (atlas.en-us.platform_connect.meta/platform_connect/quick_start_update_canvas_app_heroku.htm)
- Package the Canvas App (atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro_package.htm)
- Configure Who Can Access the Installed Canvas App (atlas.en-us.platform_connect.meta/platform_connect/quick_start_config_who_can_access_installed_canvas_app.htm)
