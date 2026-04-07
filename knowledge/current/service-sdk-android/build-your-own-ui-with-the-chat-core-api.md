---
title: "Build Your Own UI with the Chat Core API"
domain: service-sdk-android
topic: build-your-own-ui-with-the-chat-core-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.661Z
estimatedTokens: 1920
keywords: [Build, Own, Chat, Core, API, functionality, useful, want]
---

> With the Chat Core API, you can access the functionality of Chat without a UI. This API
    is useful if you want to build your own UI and not use the default.

# Build Your Own UI with the Chat Core API

With the Chat Core API, you can access the functionality of Chat without a UI. This API is useful if you want to build your own UI and not use the default.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Before starting, make sure that you’ve already:

-   Set up Service Cloud to work with Chat. See [Org Setup for Chat in Lightning Experience with a Guided Flow](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/live_agent_cloud_setup.htm "Use the guided setup flow in Lightning Experience to add chat to your org.").
-   Installed the SDK. See [Install the Service SDK for Android](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_install_sdk.htm "Install the Service SDK for Android using Gradle.").

These steps describe how to use the Chat Core API. To use the default UI, see [Quick Setup: Chat in the](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_basic_setup.htm "To add Chat to your Android app, create a configuration object that points to your org and then create a Chat UI client.").

1.  To listen for agent activity, create an [AgentListener](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/AgentListener.html) implementation.

    From the agent listener, you can:

    -   Detect when an agent has joined using onAgentJoined(AgentInformation agentInformation).
    -   Detect when an agent is typing a message using onAgentIsTyping(boolean isAgentTyping).
    -   Receive an incoming message from an agent using onChatMessageReceived(ChatMessage chatMessage).

2.  To listen for session state changes, create a [SessionStateListener](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/SessionStateListener.html).

    From a session state listener, you can:

    -   Detect when the session state changes using onSessionStateChange(ChatSessionState state). For example, this method is useful for when the session disconnects (ChatSessionState.Disconnected).
    -   Detect when the session ends using onSessionEnded(ChatEndReason endReason). This method is useful to know why a session ends and report the information to the user. For example, ChatEndReason.EndedByAgent is passed when the agent ends the session.

    To learn more about using this listener, see [Listen for State Changes and Events](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_state_changes.htm "You can add listeners for state changes and events during a chat session and respond accordingly. For instance, when the client ends a session, you can display a dialog to the user.").

3.  To listen for changes related to a user's position or estimated wait time in the agent queue, create a [QueueListener](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/QueueListener.html).

    When a user is trying to connect to an agent, you can monitor where the user is in the queue. The estimated wait time is returned in minutes and the queue position is an integer value related to the overall agent capacity.

    When using the queue position number, the queue position is 0 if the agent capacity is greater than or equal to the number of customer requests. Otherwise, the position value represents how far the customer is from getting served by an agent.

    ```

    ```

    Where:

    -   q is the queue position
    -   n is the position of the customer compared to all waiting customers
    -   c is the total capacity of all agents

    For example, if the total capacity is 10, the first 10 waiting visitors have a position of 0, the 11th has a position of 1, the 12th has a position of 2, and so on.

4.  To listen for Einstein bot activity, create a ChatBotListener.

    From a bot listener, you can:

    -   Detect when you receive a persistent footer menu from the Einstein bot with onChatFooterMenuReceived. A footer menu is always accessible to the user and typically handles options that are not context-specific, such as "Transfer to agent."
    -   Detect when you receive menu options from the Einstein bot with onChatMenuReceived.
    -   Detect when you receive choice button options from the Einstein bot with onChatButtonMenuReceived.

5.  Build a [ChatConfiguration](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/ChatConfiguration.html) object as described in [Quick Setup: Chat in the](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_basic_setup.htm "To add Chat to your Android app, create a configuration object that points to your org and then create a Chat UI client.").

    In Java:

    ```

    ```

    In Kotlin:

    ```

    ```

6.  Create a [ChatCore](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/ChatCore.html) object with your chat configuration object.

    In Java:

    ```

    ```

    In Kotlin:

    ```

    ```

7.  Create a [ChatClient](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/ChatClient.html), adding your listener objects.

    Define [ChatClient](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/ChatClient.html) at the Application scope to ensure that the session is trackable throughout the application's lifetime rather than just within an Activity, for example.

    In Java:

    ```

    ```

    In Kotlin:

    ```

    ```

    When you receive a chat client instance, a session has successfully started.

8.  Perform session actions with the [ChatClient](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/ChatClient.html) object.

    From the chat client object, you can perform the following functions:

    -   Tell the agent when the user is typing a message using setIsUserTyping(boolean isUserTyping).
    -   Send a message to the agent using sendChatMessage(String message).
    -   Handle file transfer activity using addFileTransferRequestListener(FileTransferRequestListener fileTransferRequestListener). See [Transfer File to Agent](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_file_transfer.htm "Give users the ability to transfer files during a chat so they can share information about their issues.").
    -   Handle Einstein bot responses with sendFooterMenuSelection, sendMenuSelection, and sendButtonSelection.
    -   End the chat session using endChatSession().

## Code Examples

```
q = max(n - c, 0)
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

```
ChatCore core = ChatCore.configure(chatConfiguration);
```

```
val core = ChatCore.configure(chatConfiguration)
```

## Related Topics

- Org Setup for Chat in Lightning Experience with a Guided Flow (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/live_agent_cloud_setup.htm)
- Install the Service SDK for Android (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_install_sdk.htm)
- Quick Setup: Chat in the (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_basic_setup.htm)
- Listen for State Changes and Events (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_state_changes.htm)
- Transfer File to Agent (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_file_transfer.htm)
