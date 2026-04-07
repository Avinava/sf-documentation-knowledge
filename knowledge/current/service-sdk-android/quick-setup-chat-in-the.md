---
title: "Quick Setup: Chat in the"
domain: service-sdk-android
topic: quick-setup-chat-in-the
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.485Z
estimatedTokens: 2353
keywords: [Quick, Setup, Chat, add, Android, app, configuration, points, org, client]
---

# Quick Setup: Chat in the

> To add Chat to your Android app, create a configuration object that points to your org
    and then create a Chat UI client.

# Quick Setup: Chat in the

To add Chat to your Android app, create a configuration object that points to your org and then create a Chat UI client.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Before starting, make sure that you’ve already:

-   Set up your console to work with Chat. See [Org Setup for Chat in Lightning Experience with a Guided Flow](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/live_agent_cloud_setup.htm "Use the guided setup flow in Lightning Experience to add chat to your org.").
-   Installed the SDK. See [Install the Service SDK for Android](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_install_sdk.htm#ess_sdk_setup_android "Install the Service SDK for Android using Gradle.").

To set up Chat with the default UI, create a configuration object that points to your org and then start a chat session. If you prefer to build your own user interface, see [Build Your Own UI with the Chat Core API](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_core_api.htm "With the Chat Core API, you can access the functionality of Chat without a UI. This API is useful if you want to build your own UI and not use the default.").

1.  Specify your Chat org settings.

    In Java:

    ```

    ```

    In Kotlin:

    ```

    ```

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_android)

    #### Note

    You can get the required parameters from your Salesforce org. If your Salesforce admin hasn’t set up Chat in Service Cloud or you need more guidance, see [Org Setup for Chat in Lightning Experience with a Guided Flow](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/live_agent_cloud_setup.htm "Use the guided setup flow in Lightning Experience to add chat to your org.").

2.  Create a [ChatConfiguration](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/ChatConfiguration.html) object using your org settings.

    In Java:

    ```

    ```

    In Kotlin:

    ```

    ```

    ![Tip](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_tip.png&folder=service_sdk_android)

    #### Tip

    You can use the [ChatConfiguration.Builder](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/ChatConfiguration.Builder.html) class to configure other behaviors, such as how to handle the pre-chat view (see [Show Pre-Chat Fields to User](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_prechat_fields.htm#android_chat_prechat_fields "Before a chat session begins, you can request that the user enter pre-chat fields that are sent to the agent at the start of the session.")) and how to specify the name of the visitor speaking with the agent (use the visitorName method).

3.  Configure and launch a chat session using [ChatUI](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/ui/ChatUI.html), [ChatUIConfiguration](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/ui/ChatUIConfiguration.html), and [ChatUIClient](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/ui/ChatUIClient.html).

    In Java:

    ```

    ```

    In Kotlin:

    ```

    ```

    ![Warning](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_warning.png&folder=service_sdk_android)

    #### Warning

    Don't create more than 1 instance of ChatUIClient. The system returns an Async error if there is already an active instance. The SDK only supports 1 session at a time per device. Wait until the chat session ends before attempting to start a new session.

    When calling startChatSession, pass the context for the Activity that you want to show the chat UI on top of. The chat session starts minimized and the user can tap the thumbnail to go full screen. If you want the session to start in full-screen mode, call defaultToMinimized(false) on the builder.

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_android)

    #### Note

    When the minimized view is visible, it displays the number of unread messages. This value represents the total number of bot, agent, and system messages that are unread.

    By default, the user's queue position is shown while the user waits for an agent. You can change this information from a position number to an estimated wait time using the [queueStyle](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/ui/ChatUIConfiguration.Builder.html#queueStyle\(com.salesforce.android.chat.ui.model.QueueStyle\)) build method and specifying QueueStyle.EstimatedWaitTime. When using the estimated wait time, you can set the minimum ([minimumWaitTime](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/ui/ChatUIConfiguration.Builder.html#minimumWaitTime\(int\))) and maximum ([maximumWaitTime](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/ui/ChatUIConfiguration.Builder.html#maximumWaitTime\(int\))) wait time values. If the wait time exceeds the maximum value, a generic message appears, which [you can customize](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_strings.htm "You can change the text throughout the user interface. To customize text, create string resource XML files (named strings.xml) in your project's values-[locale] resource folder for the language(s) you want to update.") (using the customizable chat strings). To understand the algorithm used for the estimated wait time, see the estimated wait time documentation in the [Chat REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.live_agent_rest.meta/live_agent_rest/live_agent_rest_estimated_wait_time.htm). To hide queue information entirely, use a queue style of None.

    Sample alternate configuration in Java:

    ```

    ```

    Sample alternate configuration in Kotlin:

    ```

    ```

4.  (Optional) Customize the interface.

    You can customize the colors, strings, and other aspects of the interface. You can also localize the strings into other languages.

5.  (Optional) Add listeners for state changes or events.

    You can add listeners for state changes and events during a chat session and respond accordingly. For instance, when the client ends a session, you can display a dialog to the user. See [Listen for State Changes and Events](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_state_changes.htm "You can add listeners for state changes and events during a chat session and respond accordingly. For instance, when the client ends a session, you can display a dialog to the user.").

    ![Warning](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_warning.png&folder=service_sdk_android)

    #### Warning

    If you use an incorrect button ID in your [ChatConfiguration](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/ChatConfiguration.html), the chat fails and your [SessionStateListener](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/SessionStateListener.html) reports a [ChatEndReason](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatEndReason.html) of NetworkError.


When a session launches, it appears minimized.

![Chat session minimzed](/docs/resources/img/en-us/noversion?doc_id=images%2Fandroid_lac_chat_minimized.png&folder=service_sdk_android)

The user can tap the session to make it full screen and begin a conversation with an agent.

![Chat session full screen](/docs/resources/img/en-us/noversion?doc_id=images%2Fandroid_lac_chat_normal.png&folder=service_sdk_android)

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_android)

#### Note

When the app is in the background, the SDK ensures that the session remains open. A timeout should only occur when there is a connection issue, the agent closes the session, or the app is removed from memory.

## Code Examples

```apex
public static final String ORG_ID = "YOUR_ORG_ID";
public static final String DEPLOYMENT_ID = "YOUR_DEPLOYMENT_ID";
public static final String BUTTON_ID = "YOUR_BUTTON_ID";
public static final String LIVE_AGENT_POD = "YOUR_LAC_ORG_URL"; 
                                    // e.g. "d.la.salesforce.com"
```

```
val ORG_ID = "YOUR_ORG_ID"
val DEPLOYMENT_ID = "YOUR_DEPLOYMENT_ID"
val BUTTON_ID = "YOUR_BUTTON_ID"
val LIVE_AGENT_POD = "YOUR_LAC_ORG_URL"
             // e.g. "d.la.salesforce.com"
```

```
// Create a core configuration instance
ChatConfiguration chatConfiguration = 
  new ChatConfiguration.Builder(ORG_ID, BUTTON_ID, 
                                DEPLOYMENT_ID, LIVE_AGENT_POD)
                                .build();
```

```
// Create a core configuration instance
val chatConfiguration = 
  ChatConfiguration.Builder(ORG_ID, BUTTON_ID,
                            DEPLOYMENT_ID, LIVE_AGENT_POD)
                            .build()
```

```apex
// Create a UI configuration instance from a core config object
// and start session!
ChatUI.configure(ChatUIConfiguration.create(chatConfiguration))
  .createClient(getApplicationContext())
  .onResult(new Async.ResultHandler<ChatUIClient>() {
      @Override public void handleResult (Async<?> operation, 
        ChatUIClient chatUIClient) {
            chatUIClient.startChatSession(MainActivity.this);
      }
});
```

## Related Topics

- Org Setup for Chat in Lightning Experience with a Guided Flow (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/live_agent_cloud_setup.htm)
- Install the Service SDK for Android (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_install_sdk.htm)
- Build Your Own UI with the Chat Core API (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_core_api.htm)
- Show Pre-Chat Fields to User (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_prechat_fields.htm)
- you can customize (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_strings.htm)
- Listen for State Changes and Events (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_state_changes.htm)
