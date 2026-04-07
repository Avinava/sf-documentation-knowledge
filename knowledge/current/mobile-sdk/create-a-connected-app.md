---
title: "Create a Connected App"
domain: mobile-sdk
topic: create-a-connected-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:29.998Z
estimatedTokens: 1037
keywords: [Connected, App, Salesforce, administrator, creates, apps, server, include, settings, mobile, offerings, steps, cover, apply, SDK]
---

# Create a Connected App

> A Salesforce
    administrator creates connected apps on the Salesforce server. Salesforce connected apps include
    many settings that are used only by other mobile offerings such as the Salesforce app. The following
    steps cover the settings that apply to  Mobile SDK apps.

# Create a Connected App

A Salesforce administrator creates connected apps on the Salesforce server. Salesforce connected apps include many settings that are used only by other mobile offerings such as the Salesforce app. The following steps cover the settings that apply to Mobile SDK apps.

To create a connected app:

1.  Log into your Salesforce instance.
2.  In Setup, enter Apps in the Quick Find box, then select **Apps**.
3.  Under Connected Apps, click **New**.
4.  Perform steps for [Basic Information](#basic).
5.  Perform steps for [API (Enable OAuth Settings)](#oauth).
6.  If applicable, perform the optional steps for [Mobile App Settings](#mobileapp).
7.  Click **Save**.

If you plan to support push notifications, see [Push Notifications and](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/push_intro.htm) for additional connected app settings. You can add these settings later if you don’t currently have the necessary information.

After you create your connected app, be sure to copy the consumer key and callback URL for safekeeping. You use these values in Mobile SDK apps for OAuth configuration. To look them up later in Lightning Experience:

1.  In Lightning Experience, go to Setup.
2.  Navigate to **Apps** | **App Manager**.
3.  Select an unmanaged connected app (where App Type equals **Connected**).
4.  Click the dropdown button at the right end of the row and select **View**.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

-   For basic Mobile SDK apps, the callback URL doesn’t have to be a valid URL; it only has to match what the app expects in this field. You can use any custom prefix, such as sfdc://.
-   To support advanced authentication, the callback URL must be a valid endpoint using your custom URI scheme.
-   For IdP use cases, the callback URL must be a valid endpoint using the HTTPS protocol.
-   The detail page for your connected app displays a consumer key. It’s a good idea to copy this key, as you’ll need it later.
-   After you create a new connected app, wait a few minutes for the token to propagate before running your app.

## Basic Information

Specify basic information about your Mobile SDK app in this section.

1.  Enter a connected app name and press Return. The name you enter must be unique among connected apps in your org and may contain spaces.

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

    #### Note

    Salesforce automatically fills in the API Name field with a version of the name without spaces.

2.  Enter a contact email.

Other basic information fields are optional and are not used by Mobile SDK.

## API (Enable OAuth Settings)

1.  Select **Enable OAuth Settings**.
2.  Enter the callback URL (endpoint). Mobile SDK uses this URL to call back to your application during authentication. This value must match the OAuth redirect URI specified in your app’s project configuration.
3.  For Selected OAuth Scopes, select **Access and manage your data (api)**, **Perform requests on your behalf at any time (refresh\_token, offline\_access)**, and **Provide access to your data via the Web (web)**.
4.  To support Mobile SDK apps that perform authentication through the device’s native browser, deselect **Require Secret for Web Server Flow**.

## Mobile App Settings

Most settings in this section are not used by Mobile SDK. Here are the exceptions.

1.  To support PIN protection, select **PIN Protect**.
2.  To support push notifications, select **Push Messaging Enabled**. You can find instructions for this section at [Step 2: Creating a Connected App](https://developer.salesforce.com/docs/atlas.en-us.260.0.pushImplGuide.meta/pushImplGuide/pns_create_connected_app_overview.htm "HTML (New Window)") in the *Salesforce Mobile Push Notifications Implementation Guide*.

## See Also

[Create a Connected App](https://help.salesforce.com/articleView?id=connected_app_create.htm&language=en_US) in *Salesforce Help*.

#### See Also

-   [Scope Parameter Values](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/oauth_scope_parameter_values.htm)

## Related Topics

- Push Notifications and (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/push_intro.htm)
- Scope Parameter Values (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/oauth_scope_parameter_values.htm)
