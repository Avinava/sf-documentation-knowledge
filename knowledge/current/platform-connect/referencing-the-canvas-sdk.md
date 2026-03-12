---
title: "Referencing the Canvas SDK"
domain: platform-connect
topic: referencing-the-canvas-sdk
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.435Z
estimatedTokens: 307
keywords: [Referencing, Canvas, SDK, ability, Salesforce, server, useful, want, include, files, Web, app, Visualforce]
---

# Referencing the Canvas SDK

> The ability to reference the SDK on the Salesforce server is useful when you want to
         include one of the SDK files in a Web app or from a Visualforce page.

# Referencing the Canvas SDK

The Canvas SDK is available on [GitHub](https://github.com/forcedotcom/salesforcecanvasframeworksdk "HTML (New Window)"), and you have two options for referencing it from your canvas app.

-   Host the SDK on your own Web server and access it there
-   Access the SDK hosted on the Salesforce server

For example, here’s what the include statement looks like if you host the SDK on your own Web server:

```

```

Here’s what the include statement looks like if you reference the hosted SDK:

```

```

The ability to reference the SDK on the Salesforce server is useful when you want to include one of the SDK files in a Web app or from a Visualforce page.

#### See Also

-   [Canvas SDK](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm "Canvas is a set of tools that enable you to integrate your apps within Salesforce. This framework includes an SDK that you can use to authenticate your app and retrieve data from Salesforce.")

-   [Authentication](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_authentication.htm "When you create a Canvas app, you can use the signed request authentication method or the OAuth 2.0 authentication method.")

## Code Examples

```
<script type="text/javascript" src="/sdk/js/canvas-all.js"></script>
```

```
<script type="text/javascript" src="https://<instance>.salesforce.com/canvas/sdk/js/66.0/canvas-all.js"></script>
```

## Related Topics

- Canvas SDK (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm)
- Authentication (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_authentication.htm)
