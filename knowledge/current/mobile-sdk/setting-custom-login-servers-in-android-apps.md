---
title: "Setting Custom Login Servers in Android Apps"
domain: mobile-sdk
topic: setting-custom-login-servers-in-android-apps
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:26.702Z
estimatedTokens: 684
keywords: [Setting, Login, Servers, Android, Apps, cases—for, you’re, Salesforce, partner, Trialforce—you, redirect, user’s, requests, URI]
---

> For special cases—for example, if you’re a Salesforce partner using
    Trialforce—you can redirect your user’s login requests to a custom login URI.

# Setting Custom Login Servers in Android Apps

For special cases—for example, if you’re a Salesforce partner using Trialforce—you can redirect your user’s login requests to a custom login URI.

In Android, login hosts are known as server connections. You can see the standard list of server connections in the res/xml/servers.xml file of the SalesforceSDK project. Mobile SDK uses this file to define production and sandbox servers.

For Android, the default login host can potentially be set through any of the following means.

1.  MDM enforced
    -   At startup, your app’s MDM provider configures the login URI.
    -   The MDM policy can also hide the navigation bar and Settings icon to prevent users from changing the login host.
2.  App configuration through the servers.xml file

    You can add your custom servers to the runtime list by creating your own res/xml/servers.xml file in your native Android project. The first server listed in your servers.xml file is used as the default login server at app startup. The root XML element for servers.xml is <servers>. This root can contain any number of <server> entries. Each <server> entry requires two attributes: name (an arbitrary human-friendly label) and url (the web address of the login server, including the “https://” prefix).

    Here’s an example of a servers.xml file.

    ```

    ```

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

    #### Note

    To test XML changes in an Android emulator, we’ve found that it’s best to:

    1.  Force stop the app if it’s already running in the emulator.
    2.  Uninstall the app in the emulator.
    3.  Do a full clean and rebuild.
    4.  Run the app.

3.  User configuration through the Add Connection button

    Here’s how a user can configure a custom login server.

    1.  Start the app without logging in.
    2.  In the login screen, tap the Settings icon in the upper left corner.
    3.  Tap **Change Server**.
    4.  Tap **Add Connection**.
    5.  To help identify this configuration in future visits, enter a name.
    6.  Enter your custom login host’s URL. Be sure to include the https:// prefix. For example, here’s how you enter a typical Experience Cloud site URL:

        ```

        ```


    Mobile SDK enables this functionality by default. You can’t disable the **Change Server** or **Add Connection** option programmatically in Mobile SDK for Android.


![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

-   In Android, always include the “https://” prefix when specifying the login URL.
-   At startup, MDM runtime configuration overrides compile-time settings.

## Code Examples

```
<?xml version="1.0" encoding="utf-8"?>
<servers>
  <server name="XYZ.com Login" url="https://myloginserver.cloudforce.com"/>
</servers>
```

```
https://MyDomainName.my.site.com/fineapps
```
