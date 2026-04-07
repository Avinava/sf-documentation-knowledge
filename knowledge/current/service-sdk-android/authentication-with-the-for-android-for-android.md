---
title: "Authentication with the  for Android for
      Android"
domain: service-sdk-android
topic: authentication-with-the-for-android-for-android
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:27.618Z
estimatedTokens: 737
keywords: [Authentication, Android, Service, Chat, SDK, mechanism, users, user-specific, Cloud, authenticate, implement, two, interfaces, provide, token]
---

> The Service Chat SDK provides an authentication mechanism that allows your users
    to access user-specific information in Service Cloud.  To authenticate, implement two interfaces
    and provide an access token to the SDK.

# Authentication with the for Android for Android

The Service Chat SDK provides an authentication mechanism that allows your users to access user-specific information in Service Cloud. To authenticate, implement two interfaces and provide an access token to the SDK.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

AuthenticatedUser

[AuthenticatedUser](https://forcedotcom.github.io/ServiceSDK-Android/releases/common/8.0.5/api/reference/com/salesforce/android/service/common/http/AuthenticatedUser.html) contains information about the user who wants to be authenticated.

```

```

AuthTokenProvider

[AuthTokenProvider](https://forcedotcom.github.io/ServiceSDK-Android/releases/common/8.0.5/api/reference/com/salesforce/android/service/common/http/AuthTokenProvider.html) is an interface to the system that obtains the access token. If the access token expires, the Service Chat SDK asks your implementation to refresh the token.

```

```

The following sequence diagram describes the basic authentication flow.

![OAuth diagram](/docs/resources/img/en-us/noversion?doc_id=images%2Fandroid-oauth-diagram.png&folder=service_sdk_android)

If you're using the Salesforce Mobile SDK, you can implement these classes as wrappers to existing authentication features. See [Authenticating Using the Salesforce Mobile SDK](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_authentication_mobilesdk.htm "These instructions describe how to authenticate the Service Chat SDK using the provided authentication mechanism within the Salesforce Mobile SDK.") for more information.

If you're not using the Salesforce Mobile SDK, make sure that your implementation can access whatever authorization server you're using to obtain the access token.

-   **[Authenticating Using the Salesforce Mobile SDK](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_authentication_mobilesdk.htm)**
    These instructions describe how to authenticate the Service Chat SDK using the provided authentication mechanism within the Salesforce Mobile SDK.

## Code Examples

```apex
public interface AuthenticatedUser {
  @NonNull String getUserId ();
}
```

```apex
public interface AuthTokenProvider {
  @Nullable String getToken ();
  @Nullable String getTokenType ();
  boolean canRefresh ();
  void refreshToken (@NonNull ResponseSummary responseSummary);
}
```

## Related Topics

- Authenticating Using the Salesforce Mobile SDK (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_authentication_mobilesdk.htm)
