---
title: "Uninstalling a Canvas Personal App"
domain: platform-connect
topic: uninstalling-a-canvas-personal-app
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.464Z
estimatedTokens: 427
keywords: [Uninstalling, Canvas, Personal, App, user, installs, refresh, token, created, turn, generates, OAuth, stop, end, users]
---

# Uninstalling a Canvas Personal App

> When a user installs and allows a canvas personal app, a refresh token is created,
    which in turn generates an OAuth token. To stop end users from accessing the app, this refresh
    token must be revoked. This action effectively uninstalls the canvas personal app.

# Uninstalling a Canvas Personal App

When a user installs and allows a canvas personal app, a refresh token is created, which in turn generates an OAuth token. To stop end users from accessing the app, this refresh token must be revoked. This action effectively uninstalls the canvas personal app.

Here’s how a canvas personal app can be uninstalled.

-   The organization administrator removes the refresh token for one or all users in the organization via the Connected Apps OAuth Usage page in Setup.
-   End users revoke the canvas personal app from their Connected Apps list.
-   The administrator explicitly uninstalls the canvas personal app from the organization via the Manage Apps page in Setup. This action removes the app from the organization.

If an organization administrator disables canvas personal apps within the organization after a canvas personal app is installed, the canvas personal app continues to work. This is because the app’s version number and URL persist, regardless of how the organization preference for canvas personal apps is set.

However, the administrator can explicitly uninstall the app, completely removing it from use within the organization.

#### See Also

-   [Signed Request Authentication](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_signed_req_authentication.htm "Signed request is the default authorization method for Canvas apps. The signed request authorization flow varies depending on whether the administrator gives users access to the Canvas app or if users can self-authorize. You can verify signed request information with a client secret, then use signed requests to customize the app and make subsequent calls to Salesforce.")

## Related Topics

- Signed Request Authentication (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_signed_req_authentication.htm)
