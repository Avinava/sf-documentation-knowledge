---
title: "Analytics with the  for Android for
      Android"
domain: service-sdk-android
topic: analytics-with-the-for-android-for-android
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:27.608Z
estimatedTokens: 621
keywords: [Analytics, Android, listen, user-driven, events, Service, Chat, SDK, ServiceAnalytics, system]
---

> You can listen to user-driven events from the Service Chat SDK using the ServiceAnalytics system.

# Analytics with the for Android for Android

You can listen to user-driven events from the Service Chat SDK using the ServiceAnalytics system.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Implement [ServiceAnalyticsListener](https://forcedotcom.github.io/ServiceSDK-Android/releases/common/8.0.5/api/reference/com/salesforce/android/service/common/analytics/ServiceAnalyticsListener.html) and add your listener to [ServiceAnalytics](https://forcedotcom.github.io/ServiceSDK-Android/releases/common/8.0.5/api/reference/com/salesforce/android/service/common/analytics/ServiceAnalytics.html) to start receiving events.

In Java:

```

```

In Kotlin:

```

```

When you receive an event, inspect the behaviorId to see the behavior that caused the event (for example, KNOWLEDGE\_UI\_USER\_LAUNCH). Inspect the eventData map for contextual data related to the event (for example, KnowledgeUIAnalytics.DATA\_CATEGORY\_GROUP\_NAME).

For a list of behaviors and the key constants for parsing the eventData map, see the analytics class for the desired feature.

Knowledge Analytics

[KnowledgeUIAnalytics](https://forcedotcom.github.io/ServiceSDK-Android/releases/knowledge/4.3.6/api/reference/com/salesforce/android/knowledge/ui/KnowledgeUIAnalytics.html)

Case Management Analytics

[CasesUIAnalytics](https://forcedotcom.github.io/ServiceSDK-Android/releases/case/4.2.7/api/reference/com/salesforce/android/cases/ui/CasesUIAnalytics.html)

Chat Analytics

[ChatAnalytics](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/ChatAnalytics.html)

## Code Examples

```apex
ServiceAnalytics.addListener(new ServiceAnalyticsListener() {
  @Override public void onServiceAnalyticsEvent(String behaviorId,
                                                Map<String, Object> eventData) {
    // TO DO: Do something with analytics data
  } 
});
```

```
ServiceAnalytics.addListener { behaviorId, eventData ->
  // TO DO: Do something with analytics data
}
```
