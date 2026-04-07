---
title: "Configure the Login Endpoint"
domain: mobile-sdk
topic: configure-the-login-endpoint
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:25.298Z
estimatedTokens: 509
keywords: [Android, Configure, Login, Endpoint, Finally, app, Experience, Cloud, site, app’s, mobile, platform, determines, how, setting, iOS]
---

> Finally, configure the app to use your Experience Cloud site login endpoint. The app’s
   mobile platform determines how you configure this setting.

# Configure the Login Endpoint

Finally, configure the app to use your Experience Cloud site login endpoint. The app’s mobile platform determines how you configure this setting.

## Android

In Android, login hosts are known as server connections. You can see the standard list of server connections in the res/xml/servers.xml file of the SalesforceSDK project. Mobile SDK uses this file to define production and sandbox servers. You can add your custom servers to the runtime list by creating your own res/xml/servers.xml file in your native Android project. The first server listed in your servers.xml file is used as the default login server at app startup. The root XML element for servers.xml is <servers>. This root can contain any number of <server> entries. Each <server> entry requires two attributes: name (an arbitrary human-friendly label) and url (the web address of the login server, including the “https://” prefix).

For example:

```

```

## iOS

Before version 4.1, Mobile SDK apps for iOS defined their custom login URIs in the app’s Settings bundle. In Mobile SDK 4.1 and later, iOS apps lose the Settings bundle. Instead, you can use the SFDCOAuthLoginHost property in the app’s info.plist file to build in a custom login URI.

Customers can also set their own custom login hosts at runtime in your app. Here’s how:

1.  Start the app without logging in.
2.  In the login screen, tap the Settings, or ”gear,” icon ![Settings icon](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2Fgear-icon.png&folder=mobile_sdk) in the top navigation bar.
3.  In the Choose Connection screen, tap the Plus icon ![Plus icon](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2Fplus-icon.png&folder=mobile_sdk).
4.  (Optional but recommended) To help identify this configuration in future visits, enter a label.
5.  Enter your custom login host’s URI. Be sure to omit the https:// prefix. For example, here’s how you enter a typical Experience Cloud site URI:

    ```

    ```

## Code Examples

```
<?xml version="1.0" encoding="utf-8"?>
<servers>
  <server name="XYZ.com Login" url="https://myloginserver.cloudforce.com"/>
</servers>
```

```
MyDomainName.my.site.com/fineapps
```
