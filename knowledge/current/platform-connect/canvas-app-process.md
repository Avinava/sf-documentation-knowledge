---
title: "Canvas App Process"
domain: platform-connect
topic: canvas-app-process
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.268Z
estimatedTokens: 854
keywords: [Canvas, App, Process, creating, publishing, installing, running, there, actions, developer, administrator, user, shown, diagram]
---

# Canvas App Process

> In the process of creating, publishing, installing, and running a canvas app, there are
      actions required by the developer, the administrator, and the user, as shown in the following
      diagram.

# Canvas App Process

In the process of creating, publishing, installing, and running a canvas app, there are actions required by the developer, the administrator, and the user, as shown in the following diagram.

![Canvas App Process Overview](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_connect%2Fimages%2Fcanvas_app_process.png&folder=platform_connect)

Once the user is authenticated inside the Canvas app, the browser may restrict the app from receiving third-party cookies or using local storage. See [Alternatives to Cookies for User Tracking](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_iframe_considerations.htm "When creating websites and applications, the HTML <iframe> element lets you display third-party content within the current page window. As modern browsers have increased privacy for end users, the iframe structure is becoming more scrutinized and restricted. Third-party applications exposed as Canvas apps are surfaced in the Salesforce user interface via an iframe. To avoid problems loading your Canvas apps in Salesforce, design applications that don’t rely on cookies, session storage, or local storage to track users.").

#### See Also

-   [Introducing Canvas](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_intro.htm "Canvas enables you to easily integrate a third-party application in Salesforce. Canvas is a set of tools and JavaScript APIs that you can use to expose an application as a Canvas app. Then take your new or existing applications and make them available to your users as part of their Salesforce experience.")

-   [Quick Start](atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_intro.htm "This simple quick start shows you how to get started with Canvas by using the Heroku Quick Start. The Heroku Quick Start creates a “hello world” app on Heroku in either Java or Ruby, depending on the template you select. At the same time, it creates a corresponding canvas app in Salesforce.")

-   [Quick Start—Advanced](atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro.htm "This advanced quick start shows you how to get started with more of the Canvas features. It takes you step-by-step through the process of creating, packaging, uploading, installing, and running a canvas app.")

-   [Canvas Personal App Process](atlas.en-us.platform_connect.meta/platform_connect/canvas_personal_app_process.htm "Creating a canvas personal app is similar to creating any canvas app. However, you distribute a canvas personal app directly to end users, who install it via a link that you provide, integrating the app with their Salesforce data. After the app is installed, end users run it right from the Chatter tab.")

-   [Enabling Canvas Personal Apps within an Organization](atlas.en-us.platform_connect.meta/platform_connect/canvas_personal_app_enable_org.htm "The administrator of an organization controls whether users can install canvas personal apps within that organization. Before attempting to create a canvas personal app, verify that the organization administrator has enabled canvas personal apps.")

-   [Package the Connected App for Canvas](atlas.en-us.platform_connect.meta/platform_connect/quick_start_package_canvas_app.htm "After you created the canvas app, tested it in the Canvas App Previewer, and deployed it to Heroku, you’re ready to package and distribute it.")

## Related Topics

- Alternatives to Cookies for User Tracking (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_iframe_considerations.htm)
- Introducing Canvas (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_intro.htm)
- Quick Start (atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_intro.htm)
- Quick Start—Advanced (atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro.htm)
- Canvas Personal App Process (atlas.en-us.platform_connect.meta/platform_connect/canvas_personal_app_process.htm)
- Enabling Canvas Personal Apps within an Organization (atlas.en-us.platform_connect.meta/platform_connect/canvas_personal_app_enable_org.htm)
- Package the Connected App for Canvas (atlas.en-us.platform_connect.meta/platform_connect/quick_start_package_canvas_app.htm)
