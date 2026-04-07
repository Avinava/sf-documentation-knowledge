---
title: "Configuring an Android App as an Identity Provider Client"
domain: mobile-sdk
topic: configuring-an-android-app-as-an-identity-provider-client
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.783Z
estimatedTokens: 256
keywords: [Configuring, Android, App, Identity, Provider, Client, configure, any, built, Mobile, SDK, 11.0, later, long, it’s]
---

# Configuring an Android App as an Identity Provider Client

> You can configure any app built on Mobile SDK 11.0 or later as
    an identity provider client, as long as it’s not the same app being used as an identity
    provider. You configure it to identify itself as an identity provider client, call a method to
    identify the IDP app, and Mobile SDK does the
    rest.

# Configuring an Android App as an Identity Provider Client

You can configure any app built on Mobile SDK 11.0 or later as an identity provider client, as long as it’s not the same app being used as an identity provider. You configure it to identify itself as an identity provider client, call a method to identify the IDP app, and Mobile SDK does the rest.

To let the client app know about the IDP app, define the IDP app package name in the onCreate method of its application subclass.

```

```

That’s all you need to do on the client app side. To enable logins across both the IDP and IDP client apps, make sure you’ve also configured the IDP app to know about the client app. Upon configuration of both apps:

-   A **Login with IDP app** button appears on the login screen. When selected, this kicks off a client app-initiated login flow. The label for this button is managed by the resource string sf\_\_launch\_idp, which you can override within the app.
-   The app now responds to IDP-initiated login requests.

## Code Examples

```
class MyApplication : Application() {

 override fun onCreate() {
   super.onCreate()
   SalesforceSDKManager.initNative(applicationContext, MainActivity::class.java)
   SalesforceSDKManager.getInstance()
     .setIDPAppPackageName(
       "com.salesforce.samples.salesforceandroididptemplateapp" /* Package name of the IDP app */
     )
 }  
  /* Code here not shown */
}
```
