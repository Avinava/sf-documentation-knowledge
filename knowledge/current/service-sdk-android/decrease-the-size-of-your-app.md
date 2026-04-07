---
title: "Decrease the Size of Your App"
domain: service-sdk-android
topic: decrease-the-size-of-your-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:32.448Z
estimatedTokens: 373
keywords: [Decrease, Size, App, Although, SDK, doesn't, large, footprint, splitting, APK, ProGuard]
---

# Decrease the Size of Your App

> Although the SDK doesn't have a large footprint, you can decrease the size of your app by
        splitting your APK or by using ProGuard.

# Decrease the Size of Your App

Although the SDK doesn't have a large footprint, you can decrease the size of your app by splitting your APK or by using ProGuard.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

The SOS SDK contains native libraries for a variety of architectures, so it can benefit from APK splitting. See the [Android documentation on splitting your APK](https://developer.android.com/studio/build/configure-apk-splits.html).

You can also use [ProGuard](https://sourceforge.net/projects/proguard/) to shrink and optimize your app. Use the following ProGuard rules as a starting point.

```

```

## Code Examples

```apex
################# ALL #################

# ------------------ OkHttp --------------------------
-dontwarn okio.**
-dontwarn okhttp3.**
-dontwarn javax.annotation.**
-dontwarn org.conscrypt.**
-keepnames class okhttp3.internal.publicsuffix.PublicSuffixDatabase

# ------------------ SQLCipher ------------------------
# If you're only using Chat, you can remove the sqlcipher rules
-keep class net.sqlcipher.** { *; }
-dontwarn net.sqlcipher.**

# ------------------ Gson ----------------------------
-keepclassmembers,allowobfuscation class * { 
    @com.google.gson.annotations.SerializedName <fields>;
}
```
