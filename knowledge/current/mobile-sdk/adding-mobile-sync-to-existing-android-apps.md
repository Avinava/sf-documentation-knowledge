---
title: "Adding Mobile Sync to Existing Android
        Apps"
domain: mobile-sdk
topic: adding-mobile-sync-to-existing-android-apps
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:30.162Z
estimatedTokens: 271
keywords: [Adding, Mobile, Sync, Android, Apps, steps, show, how, add, project, hybrid, native, created, SDK, 4.0]
---

# Adding Mobile Sync to Existing Android
        Apps

> The following steps show you how to add Mobile Sync to an existing
                Android project (hybrid or native) created with Mobile SDK 4.0 or
                later.

# Adding Mobile Sync to Existing Android Apps

The following steps show you how to add Mobile Sync to an existing Android project (hybrid or native) created with Mobile SDK 4.0 or later.

1.  If your app is currently built on Mobile SDK 3.3 or earlier, upgrade your project to the latest SDK version as described in [Migrating from the Previous Release](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/migration_migrating_from_previous.htm).
2.  Add the Mobile Sync library project to your project. Mobile Sync uses SmartStore, so you also need to add that library if your project wasn’t originally built with SmartStore.
    1.  In Android Studio, add the libs/MobileSync project to your module dependencies.
3.  Throughout your project, change all code that uses the SalesforceSDKManager object to use MobileSyncSDKManager instead.

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

    #### Note

    If you do a project-wide search and replace, be sure *not* to change the KeyInterface import, which should remain

    ```

    ```

## Code Examples

```
import com.salesforce.androidsdk.app.SalesforceSDKManager.KeyInterface;
```

## Related Topics

- Migrating from the Previous Release (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/migration_migrating_from_previous.htm)
