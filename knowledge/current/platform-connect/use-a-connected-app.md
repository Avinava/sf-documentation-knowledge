---
title: "Use a Connected App"
domain: platform-connect
topic: use-a-connected-app
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.551Z
estimatedTokens: 1148
keywords: [Connected, App, Creating, canvas, longer, recommended, external, client, apps, new, integrations]
---

# Use a Connected App

> Creating the canvas app as a connected app is no longer recommended. Use external
        client apps for all new Canvas integrations.

# Use a Connected App

Creating the canvas app as a connected app is no longer recommended. Use external client apps for all new Canvas integrations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_connect)

#### Note

In Spring ’26, the ability to create new connected apps is disabled by default. To enable creation of new connected apps, contact Salesforce Customer Support. We recommend using an [external client app](atlas.en-us.platform_connect.meta/platform_connect/quick_start_create_canvas_app_eca.htm "To create the canvas app in your org, configure the Canvas plugin for an external client app.") instead for all new Canvas integrations.

1.  In Salesforce, from Setup, enter Apps in the Quick Find box, then select **App Manager**.
2.  Click **New Connected App**.
3.  In the Connected App Name field, enter Hello World.
4.  Accept the default API Name of Hello\_World. This is the internal name of the canvas app and can’t be changed after you save it.
5.  In the Contact Email field, enter your email address.
6.  In the Logo Image URL field, enter https://localhost:8443/images/salesforce.png. This is the default Salesforce “No Software” image. This image appears on the installation screen and on the detail screen for the app.
7.  In the Icon URL field, enter https://localhost:8443/examples/hello-world/logo.png. This is the default Salesforce “No Software” image.

    This is the image that appears next to the app name in the user interface. If you leave this field blank, a default cloud image appears next to the app name.

8.  In the API (Enable OAuth Settings) section, select the Enable OAuth Settings field.
9.  In the Callback URL field, enter https://localhost:8443/sdk/callback.html.
10.  In the Selected OAuth Scopes field, select **Access the identity URL service (id, profile, email, address, phone)**.
11.  In the Canvas App Settings section, select Canvas.
12.  In the Canvas App URL field, enter https://localhost:8443/examples/hello-world/index.jsp.
13.  In the Access Method field, select Signed Request (Post).
14.  In the Locations field, select Chatter Tab.
15.  Save the app, then click **Continue.**

     After the canvas app is saved, the detail page appears.

16.  On the detail page for the canvas app, click **Manage Consumer Details**, and then verify your identity.
17.  Select the consumer secret value and press Ctrl+c (Windows) to copy it. The consumer secret is used in the app to authenticate.
18.  Go to the command window and stop the Jetty Web server by pressing Ctrl+c (Windows). At the prompt, enter Y.
19.  Create an environment variable named CANVAS\_CONSUMER\_SECRET and set that value to the consumer secret you just copied. To do this in Windows, in the command window, enter set CANVAS\_CONSUMER\_SECRET=value\_you\_just\_copied.

     If you’re using Unix/OS X, set the environment variable with the command export CANVAS\_CONSUMER\_SECRET=value\_you\_just\_copied.

     The “hello world” page (c:\\SalesforceCanvasFrameworkSDK\\src\\main\\webapp\\examples\\hello-world\\index.jsp) uses the consumer secret, as shown in the following code:

     ```

     ```

20.  Restart the Web server by entering this command: target\\bin\\webapp.bat (Windows) or sh target/bin/webapp (Unix/OS X).

#### See Also

-   [Quick Start—Advanced](atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro.htm "This advanced quick start shows you how to get started with more of the Canvas features. It takes you step-by-step through the process of creating, packaging, uploading, installing, and running a canvas app.")

-   [Run the Web App Locally](atlas.en-us.platform_connect.meta/platform_connect/quick_start_run_the_app_locally.htm)

-   [Where Canvas Apps Appear](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_where_they_appear.htm "Canvas apps can appear in various places, depending on your Canvas app settings.")

-   [User Permissions Required](atlas.en-us.platform_connect.meta/platform_connect/canvas_user_perms_required.htm "You need certain user permissions to interact with canvas apps.")

-   [Canvas Limits](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_limits.htm "Because Canvas runs in a multitenant environment, limits are enforced to ensure protection of shared resources.")

-   [Configure Connected App Access](atlas.en-us.platform_connect.meta/platform_connect/quick_start_config_who_can_access_canvas_app.htm "To configure access to your canvas app, configure the policies and profiles for the corresponding connected app.")

## Code Examples

```apex
<%@ page import="canvas.SignedRequest" %>
<%@ page import="java.util.Map" %>
<%
    // Pull the signed request out of the request body and verify and decode it.
    Map<String, String[]> parameters = request.getParameterMap();
    String[] signedRequest = parameters.get("signed_request");
    if (signedRequest == null) {%>
        This app must be invoked via a signed request!<%
        return;
    }
    String yourConsumerSecret=System.getenv("CANVAS_CONSUMER_SECRET");
    String signedRequestJson = SignedRequest.verifyAndDecodeAsJson(signedRequest[0], yourConsumerSecret);
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>

    <title>Hello World Canvas Example</title>

    <link rel="stylesheet" type="text/css" href="/sdk/css/connect.css" />

    <script type="text/javascript" src="/sdk/js/canvas-all.js"></script>

    <!-- Third part libraries, substitute with your own -->
    <script type="text/javascript" src="/scripts/json2.js"></script>

    <script>
        if (self === top) {
            // Not in an iFrame.
            alert("This canvas app must be included within an iFrame");
        }

        Sfdc.canvas(function() {
            var sr = JSON.parse('<%=signedRequestJson%>');
            Sfdc.canvas.byId('username').innerHTML = sr.context.user.fullName;
        });

    </script>
</head>
<body>
    <br/>
    <h1>Hello <span id='username'></span></h1>
</body>
</html>
```

## Related Topics

- external
                    client app (atlas.en-us.platform_connect.meta/platform_connect/quick_start_create_canvas_app_eca.htm)
- Quick Start—Advanced (atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro.htm)
- Run the Web App Locally (atlas.en-us.platform_connect.meta/platform_connect/quick_start_run_the_app_locally.htm)
- Where Canvas Apps Appear (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_where_they_appear.htm)
- User Permissions Required (atlas.en-us.platform_connect.meta/platform_connect/canvas_user_perms_required.htm)
- Canvas Limits (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_limits.htm)
- Configure Connected App Access (atlas.en-us.platform_connect.meta/platform_connect/quick_start_config_who_can_access_canvas_app.htm)
