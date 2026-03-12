---
title: "Configure Who Can Access the Installed
Canvas App"
domain: platform-connect
topic: configure-who-can-access-the-installed-canvas-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.545Z
estimatedTokens: 395
keywords: [Configure, Access, Installed, Canvas, App, appears, you’ll, message, Hello, User.FullName]
---

# Configure Who Can Access the Installed
Canvas App

> The
app appears and you’ll see the message Hello User.FullName.

# Configure Who Can Access the Installed Canvas App

You’ve installed the canvas app in your Salesforce organization, but no one can see it until you configure user access.

1.  In Salesforce, from Setup, enter Connected Apps in the Quick Find box, then select the option for managing connected apps.
2.  Click the Hello World app, and then click **Edit**.
3.  In the Permitted Users field, select Admin approved users are pre-authorized. Click **OK** on the pop-up message that appears.
4.  Click **Save**.

    Now you’ll define who can see your canvas app. This can be done using profiles and permission sets. In this example, we’ll allow anyone with the System Administrator to access the app.

5.  On the Connected App Detail page, in the Profiles related list, click **Manage Profiles**.
6.  Select the System Administrator profile and click **Save**.
7.  Click the Chatter tab.
8.  Click the Hello World link on the left.

    The app appears and you’ll see the message Hello User.FullName.


#### See Also

-   [Quick Start—Advanced](atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro.htm "This advanced quick start shows you how to get started with more of the Canvas features. It takes you step-by-step through the process of creating, packaging, uploading, installing, and running a canvas app.")

-   [Install the Canvas App](atlas.en-us.platform_connect.meta/platform_connect/quick_start_install_canvas_app.htm "Uploading the packaged canvas app creates the installation link. You can then use this link to install the canvas app in another org.")

## Related Topics

- Quick Start—Advanced (atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro.htm)
- Install the Canvas App (atlas.en-us.platform_connect.meta/platform_connect/quick_start_install_canvas_app.htm)
