---
title: "SalesforceSDKManager Class"
domain: mobile-sdk
topic: salesforcesdkmanager-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.546Z
estimatedTokens: 772
keywords: [SalesforceSDKManager, startup, initialize, MobileSyncSDKManager, calling, initNative, arguments, logout, getLoginActivityClass, getUserAgent, isHybrid]
---

# SalesforceSDKManager Class

> During startup, you initialize the MobileSyncSDKManager
                class object by calling its static initNative()
                method. This method takes the following arguments:

# SalesforceSDKManager Class

The SalesforceSDKManager class is the entry point for all native Android applications that use Salesforce Mobile SDK . It provides mechanisms for:

-   Login and logout
-   Passcodes
-   Encryption and decryption of user data
-   String conversions
-   User agent access
-   Application termination
-   Application cleanup

Instead of calling SalesforceSDKManager directly, the forcedroid native template uses a subclass, MobileSyncSDKManager, to initialize apps.

## initNative() Method

During startup, you initialize the MobileSyncSDKManager class object by calling its static initNative() method. This method takes the following arguments:

| Parameter Name | Description |
| --- | --- |
| applicationContext | An instance of Context that describes your application’s context. In an Application extension class, you can satisfy this parameter by passing a call to getApplicationContext(). |
| mainActivity | The descriptor of the class that displays your main activity. The main activity is the first activity that displays after login. |

Here’s an example from the MainApplication class of the forcedroid Java template app:

```

```

In this example, NativeKeyImpl is the app’s implementation of KeyInterface. MainActivity subclasses SalesforceActivity and is designated here as the first activity to be called after login.

The Kotlin template app additionally defines a Kotlin-related constant and registers Kotlin as a used feature.

```

```

## logout() Method

The SalesforceSDKManager.logout() method clears user data. For example, if you’ve introduced your own resources that are user-specific, you can override logout() to keep those resources from being carried into the next user session. SmartStore, the Mobile SDK offline database, destroys user data and account information automatically at logout.

Always call the superclass logout method somewhere in your method override, preferably after doing your own cleanup. Here’s an example of how to override logout().

Kotlin

```

```

Java

```

```

## getLoginActivityClass() Method

This method returns the descriptor for the login activity. The login activity defines the WebView through which the Salesforce server delivers the login dialog.

## getUserAgent() Methods

Mobile SDK builds a user agent string to publish the app’s versioning information at runtime. For example, the user agent in Mobile SDK 7.1 takes the following form.

```

```

The list of features consists of one or more two-letter descriptors of Mobile SDK features. Here’s a typical example.

```

```

To retrieve the user agent at runtime, call the SalesforceSDKManager.getUserAgent() method.

## isHybrid() Method

Imagine that your Mobile SDK app creates libraries that are designed to serve both native and hybrid clients. Internally, the library code switches on the type of app that calls it, but you need some way to determine the app type at runtime. To determine the type of the calling app in code, call the boolean SalesforceSDKManager.isHybrid() method. True means hybrid, and false means native.

## Code Examples

```apex
import com.salesforce.androidsdk.mobilesync.app.MobileSyncSDKManager;
...

public class MainApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        MobileSyncSDKManager.initNative(getApplicationContext(), 
            MainActivity.class);
        ...
    }
}
```

```apex
class MainApplication : Application() {
    companion object {
        private const val FEATURE_APP_USES_KOTLIN = "KT"
    }

    override fun onCreate() {
        super.onCreate()
        MobileSyncSDKManager.initNative(applicationContext, MainActivity::class.java)
        MobileSyncSDKManager.getInstance().registerUsedAppFeature(FEATURE_APP_USES_KOTLIN)
        ...
    }
}
```

```
override fun logout(frontActivity: Activity) {
    // Clean up all persistent and non-persistent app artifacts
    // ...
    // Call superclass after doing your own cleanup
    super.logout(frontActivity)
}
```

```apex
@Override
public void logout(Activity frontActivity) {
   // Clean up all persistent and non-persistent app artifacts
   // ...
   // Call superclass after doing your own cleanup
   super.logout(frontActivity);
}
```

```
SalesforceMobileSDK/<salesforceSDK version> android mobile/<android OS version> 
(<device model>) <appName>/<appVersion> <appType with qualifier> 
<device ID> <list of features>
```
