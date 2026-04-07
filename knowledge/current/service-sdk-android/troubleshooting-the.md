---
title: "Troubleshooting the"
domain: service-sdk-android
topic: troubleshooting-the
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:27.893Z
estimatedTokens: 457
keywords: [Troubleshooting, guidance, run, issues]
---

> Get some guidance when you run into issues.

# Troubleshooting the

Get some guidance when you run into issues.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

-   **[Enable Debug Logging for the Android SDK](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_logging.htm)**
    SDK logs are disabled by default. To enable logging, you add a sink and then specify a log level.
-   **[Can't Connect to Chat](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/live_agent_connnection_issues.htm)**
    If you can't make a successful connection from your app, even when an agent is standing by, review how you've set up your chat implementation.
-   **[Error Using the Salesforce Mobile SDK with the](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_exclude_sfsdk.htm)**
    If you're trying to build a Service Chat SDK project that explicitly embeds the Salesforce Mobile SDK, exclude these two maven dependencies to prevent conflicts.

## Related Topics

- Enable Debug Logging for the Android SDK (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_logging.htm)
- Can't Connect to Chat (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/live_agent_connnection_issues.htm)
- Error Using the Salesforce Mobile SDK with the (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_exclude_sfsdk.htm)
