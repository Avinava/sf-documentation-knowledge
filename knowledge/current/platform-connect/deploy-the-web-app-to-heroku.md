---
title: "Deploy the Web App to Heroku"
domain: platform-connect
topic: deploy-the-web-app-to-heroku
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.623Z
estimatedTokens: 1134
keywords: [Deploy, Web, App, Heroku, run, locally, test, canvas, there]
---

# Deploy the Web App to Heroku

> After you run the web app locally and test it as a canvas app, deploy the web app to
    Heroku and run it from there.

# Deploy the Web App to Heroku

After you run the web app locally and test it as a canvas app, deploy the web app to Heroku and run it from there.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=platform_connect)

#### Warning

Using dynos to complete this tutorial counts toward your [usage](https://devcenter.heroku.com/articles/usage-and-billing "HTML (New Window)"). [Scale your dynos to 0](https://devcenter.heroku.com/articles/scaling#scaling-from-the-dashboard "HTML (New Window)") as soon as you’re done to minimize costs.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=platform_connect)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

1.  If you haven’t already, log into Heroku and install Heroku Toolbelt following the links in the [Prerequisites](atlas.en-us.platform_connect.meta/platform_connect/quick_start_prereqs.htm "Get the appropriate access and tools to complete the quick start.").
2.  Open a command window, navigate to c:\\SalesforceCanvasFrameworkSDK, and enter this command: git init. This re-initializes the directory as a Git repository.
3.  In the command window, enter this command: heroku create. This creates a new “shell” app on Heroku.

    Confirmation that the app was created looks like this:

    ```

    ```

4.  To rename this Heroku app, enter this command in the command window: heroku rename newAppName -—app oldAppName.

    In this example, oldAppName is deep-samurai-7923. The newAppName you create must begin with a letter and can only contain lowercase letters, numbers, and dashes. You’ll see a confirmation of the renaming that looks similar to this:

    ```

    ```

    The newappName must be unique across all Heroku apps. This name becomes part of the URL for your app, for example, newappName.herokuapp.com.

5.  Run this command in the command window: git add -A. This adds the entire SalesforceCanvasFrameworkSDK project to the Git repository. If you’re working in the Windows environment, you might see some messages about LF (line feeds) being replaced by CRLF (carriage return line feeds).
6.  Enter this command in the command window to commit the changes along with a comment: git commit —m “MyChangeComments”.
7.  Enter this command in the command window to deploy the changes to Heroku: git push heroku master.

    If the process completes successfully, you’ll see something like this:

    ```

    ```

    If you receive a “permission denied” error message, you may need to set up your SSH key and add it to Heroku. See [https://devcenter.heroku.com/articles/keys](https://devcenter.heroku.com/articles/keys "HTML (New Window)").

8.  Open a command window, and set the Heroku environment variable that contains the consumer secret by entering this command and replacing consumer\_secret\_value with the value you just copied: heroku config:add CANVAS\_CONSUMER\_SECRET=consumer\_secret\_value.

    To get the consumer secret for the canvas app, from Setup, enter Apps in the Quick Find box, then select **Apps** and click the Hello World app. You’ll see the Consumer Secret field in the OAuth Settings section.

9.  Verify that the app is running in Heroku by opening a browser and navigating to this URL: https://newappName.herokuapp.com/examples/hello-world/index.jsp.

    You should see a message that says, “This App must be invoked via a signed request!” This is an indication that the app is running in Heroku. This message appears because the app is designed to receive a signed request from Salesforce canvas environment.


#### See Also

-   [Quick Start—Advanced](atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro.htm "This advanced quick start shows you how to get started with more of the Canvas features. It takes you step-by-step through the process of creating, packaging, uploading, installing, and running a canvas app.")

-   [Configure Connected App Access](atlas.en-us.platform_connect.meta/platform_connect/quick_start_config_who_can_access_canvas_app.htm "To configure access to your canvas app, configure the policies and profiles for the corresponding connected app.")

-   [Update the Canvas App](atlas.en-us.platform_connect.meta/platform_connect/quick_start_update_canvas_app_heroku.htm "In this step, you update the canvas app to run the “hello world” app that’s now running on Heroku.")

## Code Examples

```
Creating deep-samurai-7923... done, stack is cedar
http://deep-samurai-7923.herokuapp.com/ | git@heroku.com:deep-samurai-7923.git
Git remote heroku added
```

```
http://newappName.herokuapp.com/ | git@heroku.com:newappName.git
```

```
[INFO] -------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] -------------------------------------------------
[INFO] Total time: 13.188s
[INFO] Finished at: Sat Feb 09 21:14:23 UTC 2013
[INFO] Final Memory: 11M/490M
[INFO] -------------------------------------------------
```

## Related Topics

- Prerequisites (atlas.en-us.platform_connect.meta/platform_connect/quick_start_prereqs.htm)
- Quick Start—Advanced (atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro.htm)
- Configure Connected App Access (atlas.en-us.platform_connect.meta/platform_connect/quick_start_config_who_can_access_canvas_app.htm)
- Update the Canvas App (atlas.en-us.platform_connect.meta/platform_connect/quick_start_update_canvas_app_heroku.htm)
