---
title: "Use an External Client App"
domain: platform-connect
topic: use-an-external-client-app
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.558Z
estimatedTokens: 907
keywords: [External, Client, App, canvas, org, configure, plugin]
---

# Use an External Client App

> To create the canvas app in your org, configure the Canvas plugin for an external
        client app.

# Use an External Client App

To create the canvas app in your org, configure the Canvas plugin for an external client app.

1.  In Salesforce, from Setup, enter Apps in the Quick Find box, then select **App Manager**.
2.  Click **New External Client App**.
3.  In the External Client App Name field, enter Hello World.
4.  Accept the default API Name of Hello\_World. This is the internal name of the canvas app and can’t be changed after you save it.
5.  In the Contact Email field, enter your email address.
6.  Select one of these options in the Distribution State field.

    -   **Local**: Develop an external client app for your local org
    -   **Packaged**: Develop an external client app for packaging and distribution

7.  In the Logo Image URL field, enter https://localhost:8443/images/salesforce.png. This is the default Salesforce “No Software” image. This image appears on the installation screen and on the detail screen for the app.
8.  In the Icon URL field, enter https://localhost:8443/examples/hello-world/logo.png. This is the default Salesforce “No Software” image.

    This is the image that appears next to the app name in the user interface. If you leave this field blank, a default cloud image appears next to the app name.

9.  In the API (Enable OAuth Settings) section, select Enable OAuth.
10.  In the Callback URL field, enter https://localhost:8443/sdk/callback.html.
11.  In the OAuth Scopes field, select **Access the identity URL service (id, profile, email, address, phone)** from the Available OAuth Scopes list and move it to the Selected OAuth Scopes list.
12.  In the Canvas App Settings section, select Enable Canvas.
13.  In the Canvas App URL field, enter https://localhost:8443/examples/hello-world/index.jsp.
14.  In the Access Method field, select Signed Request (POST).
15.  In the Locations field, select **Lightning Component** from the Available list and move it to the Selected list.
16.  Click **Create**

     After the canvas app is saved, the detail page appears.

17.  In the **Settings** tab, expand the **OAuth Settings** section, and click **Consumer Key and Secret**. Then, verify your identity.
18.  Select the consumer secret value and press Ctrl+c (Windows) to copy it. The consumer secret is used in the app to authenticate.
19.  Go to the command window and stop the Jetty Web server by pressing Ctrl+c (Windows). At the prompt, enter Y.
20.  Create an environment variable named CANVAS\_CONSUMER\_SECRET and set that value to the consumer secret you just copied. To do this in Windows, in the command window, enter set CANVAS\_CONSUMER\_SECRET=value\_you\_just\_copied.

     If you’re using Unix/OS X, set the environment variable with the command export CANVAS\_CONSUMER\_SECRET=value\_you\_just\_copied.

     The “hello world” page (c:\\SalesforceCanvasFrameworkSDK\\src\\main\\webapp\\examples\\hello-world\\index.jsp) uses the consumer secret, as shown in the following code:

     ```

     ```

21.  Restart the Web server by entering this command: target\\bin\\webapp.bat (Windows) or sh target/bin/webapp (Unix/OS X).

#### See Also

-   [Lightning Component Code Examples](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm "The following examples show how to reference a <force:canvasApp> component using applicationName, developerName, and namespacePrefix.")

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

- Lightning Component Code Examples (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm)
- Configure Connected App Access (atlas.en-us.platform_connect.meta/platform_connect/quick_start_config_who_can_access_canvas_app.htm)
