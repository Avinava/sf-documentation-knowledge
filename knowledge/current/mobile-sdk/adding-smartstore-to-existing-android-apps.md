---
title: "Adding SmartStore to Existing
  Android Apps"
domain: mobile-sdk
topic: adding-smartstore-to-existing-android-apps
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:31.569Z
estimatedTokens: 396
keywords: [Adding, SmartStore, Android, Apps, Hybrid, projects, created, Mobile, SDK, 4.0, later, automatically, include, 4.0+, native]
---

# Adding SmartStore to Existing
  Android Apps

> Hybrid projects created with Mobile SDK 4.0 or later
    automatically include SmartStore. If
    you used Mobile SDK 4.0+ to create
    an Android native project without SmartStore, you can easily add it
    later.

# Adding SmartStore to Existing Android Apps

Hybrid projects created with Mobile SDK 4.0 or later automatically include SmartStore. If you used Mobile SDK 4.0+ to create an Android native project without SmartStore, you can easily add it later.

To add SmartStore to an existing native Android project (Mobile SDK 4.0 or later):

1.  Add the SmartStore library project to your project. In Android Studio, open your project’s build.gradle file and add a compile directive for :libs:SmartStore in the dependencies section. If the dependencies section doesn’t exist, create it.

    ```

    ```

2.  In your <*projectname*\>App.java file, import the SmartStoreSDKManager class instead of SalesforceSDKManager. Replace this statement:

    ```

    ```

    with this one:

    ```

    ```

3.  In your <*projectname*\>App.java file, change your App class to extend the SmartStoreSDKManager class rather than SalesforceSDKManager.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

1.  To add SmartStore to apps created with Mobile SDK 3.x or earlier, begin by upgrading to the latest version of Mobile SDK.
2.  The SmartStore plugin, com.salesforce.plugin.smartstore.client, uses promises internally.

    Mobile SDK promised-based APIs include:

    -   force+promise.js
    -   The smartstoreclient Cordova plugin (com.salesforce.plugin.smartstore.client)
    -   mobilesync.js


#### See Also

-   [Migrating from the Previous Release](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/migration_migrating_from_previous.htm)

## Code Examples

```
dependencies {
...
  compile project(':libs:SmartStore')
}
```

```
import com.salesforce.androidsdk.
    app.SalesforceSDKManager
```

```
import com.salesforce.androidsdk.smartstore.app.SmartStoreSDKManager
```

## Related Topics

- Migrating from the Previous Release (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/migration_migrating_from_previous.htm)
