---
title: "Authenticate to Your Trailhead Playground Org"
domain: bi-dev-guide-rest
topic: authenticate-to-your-trailhead-playground-org
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:02.487Z
estimatedTokens: 182
keywords: [Authenticate, Trailhead, Playground, Org, configuring, connected, app, authorize, user]
---

# Authenticate to Your Trailhead Playground Org

> After configuring the connected app, you must authorize your user with the connected
  app.

# Authenticate to Your Trailhead Playground Org

After configuring the connected app, you must authorize your user with the connected app.

## Authorize the app

Construct a URL by using this format.

```

```

-   YOUR\_ORG\_URL is the fully qualified instance URL.
-   YOUR\_CONSUMER\_KEY is the consumer key noted when you set up the connected app.

Next, paste the URL into a browser and execute it, and then select **Allow** for each of the scopes requested in the modal that appears. If you receive an alert from the callback, select **Open Postman.**. To verify that everything is authorized, from Setup, in the box, enter Connected Apps OAuth Usage, and confirm that you see your connected app with a user count of 1.

## Code Examples

```
YOUR_ORG_URL/services/oauth2/authorize?response_type=code&client_id=YOUR_CONSUMER_KEY&scope=api refresh_token offline_access &redirect_uri=https://oauth.pstmn.io/v1/callback
```
