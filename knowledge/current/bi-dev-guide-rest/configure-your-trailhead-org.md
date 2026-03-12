---
title: "Configure Your Trailhead Org"
domain: bi-dev-guide-rest
topic: configure-your-trailhead-org
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:02.497Z
estimatedTokens: 460
keywords: [Configure, Trailhead, Org, Cross-Origin, Resource, Sharing, CORS, connected, app]
---

# Configure Your Trailhead Org

> To configure your Trailhead org, set up Cross-Origin Resource Sharing (CORS) and a
  connected app.

# Configure Your Trailhead Org

To configure your Trailhead org, set up Cross-Origin Resource Sharing (CORS) and a connected app.

Set up CORS and your connected app.

## Set Up CORS

CORS allows code running in a web browser to communicate with Salesforce from a specific origin. To add the URL patterns for Postman:

1.  In your Trailhead Playground, from Setup, in the Quick Find box, enter cors, and then select **CORS**.
2.  In the Allowed Origins List, click **New**.
3.  Enter https://\*.postman.com as the Origin URL Pattern.
4.  Save your work.
5.  Click **New**, and enter https://\*.postman.com as the Origin URL Pattern.
6.  Save your work again.

## Set Up a Connected App

To set up your connected app:

1.  From Setup, in the Quick Find box, enter App Manager, and then select **New Connected App**.
2.  Enter the app name in the Connected App Name field, and enter your email address in the Contact Email field.
3.  Under API Heading, select **Enable OAuth Settings**.
4.  Enter the callback URL: https://oauth.pstmn.io/v1/callback.
5.  Select **Use digital signatures**.
6.  Select **Choose File**, and then select the host.crt file from your private public keypair.
7.  Under Selected OAuth Scopes, select the **Manage user data via APIs (api)** and the **Perform requests at any time (refresh\_token, offline\_access)** scopes.
8.  Deselect **Require Proof Key for Code Exchange (PKCE) Extension for Supported Authorization Flow**.
9.  Save your work.
10.  On the connected app details page, click the **Manage Consumer Details** button. This action triggers a verification code sent to your email. Then you can see the Key and Secret values.
11.  At the top of the new connected app, click **Manage**, and then select **Edit Policies**.
12.  Under IP Relaxation, select **Relax IP restrictions**, and save your changes.
