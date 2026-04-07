---
title: "Configure a Connected App for APNS (iOS)"
domain: mobile-sdk
topic: configure-a-connected-app-for-apns-ios
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:31.921Z
estimatedTokens: 199
keywords: [Configure, Connected, App, APNS, iOS, versions, mobile, tokens, push, certificates, token, provided, Salesforce, always, uses]
---

# Configure a Connected App for APNS (iOS)

> For iOS versions of your mobile app, you can use tokens, push certificates, or both.
        If a token is provided, Salesforce always uses the token.

# Configure a Connected App for APNS (iOS)

For iOS versions of your mobile app, you can use tokens, push certificates, or both. If a token is provided, Salesforce always uses the token.

1.  Create your [mobile connected app](https://help.salesforce.com/apex/HTViewHelpDoc?id=connected_app_create_mobile.htm&language=en_US).
2.  For App Platform, select **iOS**.
3.  Select **Push Messaging Enabled**.
4.  For Platform, select **Apple**.
5.  Optionally provide an Application Bundle ID to avoid problems with your push notification settings.
6.  Select the environment to enable push notifications for.
7.  Upload the Signing Key from your Apple developer account.
8.  Enter the Key Identifier from your Apple developer account.
9.  Enter the Team Identifier from your Apple developer account.
